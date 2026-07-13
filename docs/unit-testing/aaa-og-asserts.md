# AAA og asserts

Alle vores tests følger **Arrange-Act-Assert** patternet — også kaldet **3A** eller **AAA**.

## AAA-patternet

```csharp
[Test]
public void TestEksempel()
{
    // ARRANGE: Forbered test data og dependencies
    var password = "TestPassword123";
    var service = new AuthService(...);

    // ACT: Udfør den metode vi tester
    var result = service.HashPassword(password);

    // ASSERT: Verificer resultatet
    Assert.That(result, Is.Not.Null);
}
```

| Fase | Formål |
|------|--------|
| **ARRANGE** | Sæt test data, mocks og dependencies op |
| **ACT** | Kald den metode du tester |
| **ASSERT** | Verificer at resultatet er korrekt |

Mocks er en del af "arrange"-fasen.

## Assert.That (moderne, anbefalet)

```csharp
Assert.That(result, Is.Not.Null);
Assert.That(result, Is.EqualTo(expected));
Assert.That(result, Is.True);
Assert.That(result, Is.GreaterThan(0));
Assert.That(result, Does.Contain("tekst"));
```

## Klassiske asserts

```csharp
Assert.AreEqual(expected, actual);
Assert.IsNotNull(result);
Assert.IsTrue(condition);
```

::: tip Anbefaling
Brug `Assert.That` — det er mere læsbart og fleksibelt!
:::

## Eksempel: HashPassword

```csharp
[Test]
public void HashPassword_ReturnsNonEmptyString()
{
    // Arrange
    var password = "TestPassword123";
    var authService = CreateAuthService();

    // Act
    var hash = authService.HashPassword(password);

    // Assert
    Assert.That(hash, Is.Not.Null.And.Not.Empty);
    Assert.That(hash, Is.Not.EqualTo(password));
}
```

## Hvad gør en god assert?

- Tester **én ting** ad gangen (eller ét sammenhængende outcome)
- Beskriver **forventet adfærd**, ikke implementation
- Giver en **tydelig fejlbesked** når den fejler
