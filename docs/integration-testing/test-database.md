# Test-database

Integration tests har brug for en database — men ikke din produktionsdatabase. Du har tre hovedstrategier.

## 1. InMemory database (hurtigst)

EF Core's `UseInMemoryDatabase` er god til hurtige tests:

```csharp
services.AddDbContext<ApplicationDbContext>(options =>
    options.UseInMemoryDatabase(Guid.NewGuid().ToString()));
```

| Fordele | Ulemper |
|---------|---------|
| Hurtig — ingen I/O | Opfører sig ikke 100% som PostgreSQL |
| Nem opsætning | Ingen constraints/transactions som i rigtig DB |
| God til CRUD-logik | Kan skjule SQL-specifikke bugs |

::: tip Brug unikt DB-navn
`Guid.NewGuid().ToString()` sikrer at hver test får en ren database — tests påvirker ikke hinanden.
:::

## 2. Testcontainers (realistisk)

Start en rigtig PostgreSQL i Docker under test:

```csharp
// Pseudo-eksempel med Testcontainers
await using var container = new PostgreSqlBuilder()
    .WithImage("postgres:16")
    .Build();
await container.StartAsync();

var connectionString = container.GetConnectionString();
// Brug connectionString i DbContext
```

| Fordele | Ulemper |
|---------|---------|
| Identisk med produktion | Langsommere end InMemory |
| Fanger SQL-bugs | Kræver Docker i CI |
| Realistiske constraints | Mere kompleks opsætning |

## 3. Delt test-database (undgå i unit-lignende tests)

En fast PostgreSQL-instans kun til test. Bruges sjældent i moderne .NET — Testcontainers er at foretrække.

## Hvad skal du verificere?

Ud over HTTP-response, tjek database-tilstanden:

```csharp
// Act
var response = await _client.PostAsJsonAsync("/api/auth/register", payload);
Assert.That(response.StatusCode, Is.EqualTo(HttpStatusCode.Created));

// Assert DB state
using var scope = _factory.Services.CreateScope();
var db = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
var user = await db.Users.FirstOrDefaultAsync(u => u.Email == "test@example.com");
Assert.That(user, Is.Not.Null);
Assert.That(user.Username, Is.EqualTo("testuser"));
```

## Anbefaling til h4-mags

| Fase | Strategi |
|------|----------|
| **Lokal udvikling** | InMemory — hurtig feedback |
| **CI pipeline** | Testcontainers eller `docker-compose.test.yml` med PostgreSQL |
| **E2E (Bruno)** | Rigtig API med test-DB i container — se [E2E testing](/e2e-testing/) |

## Ryd op efter test

```csharp
public async Task DisposeAsync()
{
    using var scope = _factory.Services.CreateScope();
    var db = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    await db.Database.EnsureDeletedAsync();
}
```

Eller brug `IClassFixture` med fælles factory og `EnsureDeleted` mellem tests.
