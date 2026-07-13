# Unit testing

Unit tests er fundamentet i test-pyramiden. Du tester **én ting ad gangen** — typisk én metode i én klasse — med alle afhængigheder erstattet af mocks.

<LearningGoals
  section="unit-testing"
  :goals="[
    'Jeg kan forklare formålet med unit-tests og forskellen på unit-, integration- og E2E-tests',
    'Jeg kan skrive simple unit-tests i C# (NUnit) og forstå asserts, AAA og mocking',
    'Jeg forstår i hvilke situationer unit-tests er hensigtsmæssige'
  ]"
/>

## Emner i dette afsnit

| Side | Indhold |
|------|---------|
| [Strategi og isolation](/unit-testing/strategi-og-isolation) | Teststrategi, scopes og 1:1 mapping |
| [AAA og asserts](/unit-testing/aaa-og-asserts) | Arrange-Act-Assert og NUnit asserts |
| [Mocking og interfaces](/unit-testing/mocking) | Hvorfor interfaces gør test muligt |
| [TDD](/unit-testing/tdd) | Test Driven Development — Red, Green, Refactor |
| [Opgave](/unit-testing/opgave) | Skriv tests på andres kode |

## Reference

![Khorikov — Unit Testing](/images/khorikov-book.png)

Store dele af pensumet er inspireret af [*Unit Testing: Principles, Practices, and Patterns*](https://learning.oreilly.com/library/view/unit-testing-principles/9781617296277/) af Vladimir Khorikov.

## Kodeeksempler

Alle praktiske eksempler kommer fra [h4-mags](https://github.com/Mercantech/h4-mags):

- `Backend/Tests/AuthServiceTests.cs`
- `Backend/Tests/JwtServiceTests.cs`

Kør tests lokalt:

```bash
dotnet test Backend/Tests/
```

::: tip Næste emne
Når unit tests ikke er nok — fordi du skal verificere at API og database virker sammen — går du videre til [Integration testing](/integration-testing/).
:::
