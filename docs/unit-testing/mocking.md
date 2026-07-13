# Mocking og interfaces

Interfaces er det, der gør unit tests mulige. Uden dem er du tvunget til at bruge rigtige afhængigheder — og det ødelægger isolation.

Eksempler fra [h4-mags](https://github.com/Mercantech/h4-mags).

## Uden interface (konkret klasse)

Hvis `AuthService` tog en **konkret** `MailService` i konstruktoren:

```csharp
public AuthService(ApplicationDbContext context, ILogger<AuthService> logger, MailService mailService)
```

så ville hver unit test være tvunget til at bruge den **rigtige** `MailService`. Den sender rigtige mails (eller fejler pga. SMTP/credentials). Testene bliver:

- **Langsomme** (netværk, timeout)
- **Ustabile** (afhænger af miljø, credentials, firewall)
- **Ikke isolerede** (side effects ud i verden)

Det strider mod formålet med unit tests: at teste **én ting** hurtigt og forudsigeligt.

## Med interface (fx `IMailService`)

Når `AuthService` afhænger af **interfacet** `IMailService`:

```csharp
public AuthService(ApplicationDbContext context, ILogger<AuthService> logger, IMailService mailService)
```

kan vi i testene give den en **mock**:

```csharp
var mockMailService = new Mock<IMailService>();
mockMailService
    .Setup(m => m.SendWelcomeEmailAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<CancellationToken>()))
    .Returns(Task.CompletedTask);

_authService = new AuthService(_context, _mockLogger.Object, mockMailService.Object);
```

Nu tester vi kun **AuthService' logik** (registrering, hash, login). Mail bliver aldrig sendt.

## Interfaces i h4-mags

| Interface | Brug i produktion | Brug i unit test |
|-----------|-------------------|------------------|
| **IMailService** | `MailService` sender rigtige mails (SMTP) | Mock returnerer `Task.CompletedTask` |
| **ILogger&lt;T&gt;** | .NET logger skriver til konsol/log | Mock — ingen rigtig logging |
| **IConfiguration** | Læser `appsettings`, secrets | Mock med faste værdier (JWT secret, issuer) |
| **IAuthService** | Brugt af controllere | Kan mockes ved controller-tests |
| **IJwtService** | Genererer/validerer JWT | Rigtig `JwtService` med mocket `IConfiguration` |

I `JwtServiceTests.cs` mockes `IConfiguration` og `ILogger<JwtService>`. I `AuthServiceTests.cs` mockes `IMailService` og `ILogger<AuthService>`, og vi bruger en **InMemory-database** i stedet for en rigtig DB.

## Dependency Injection

Vi injicerer afhængigheder i konstruktoren:

- **Produktion:** konkrete implementeringer registreres (fx `MailService`)
- **Test:** mocks bygges manuelt eller via DI-container

Interfaces er den fælles "kontrakt" — både for runtime og for test.

::: info Hvornår mocke du *ikke*?
Når du vil teste at lagene **virker sammen** (fx API + database), dropper du mocks og skriver en [integration test](/integration-testing/) i stedet.
:::
