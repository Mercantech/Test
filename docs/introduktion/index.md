# Introduktion

Velkommen til **Software Test** på Mercantec. Her lærer du at forstå og anvende de tre centrale testniveauer: **unit**, **integration** og **E2E** — og hvordan de hænger sammen i en professionel teststrategi.

<LearningGoals
  section="introduktion"
  :goals="[
    'Jeg kan forklare forskellen på unit-, integration- og E2E-tests',
    'Jeg kan beskrive test-pyramiden og hvorfor fordelingen ser ud som den gør',
    'Jeg kan argumentere for hvorfor automatiserede tests sparer tid på sigt'
  ]"
/>

## Læringssti

| Emne | Indhold |
|------|---------|
| [Kom i gang](/introduktion/kom-i-gang) | Testprojekter i .NET, opsætning og første `dotnet test` |
| [Test-pyramiden](/introduktion/test-pyramiden) | De tre niveauer, scopes og vores teststrategi |
| [Hvorfor teste?](/introduktion/hvorfor-teste) | ROI, teknisk gæld og investering i kvalitet |

## Reference

Store dele af unit testing-pensumet er inspireret af bogen [*Unit Testing: Principles, Practices, and Patterns*](https://learning.oreilly.com/library/view/unit-testing-principles/9781617296277/) af Vladimir Khorikov — tilgængelig på O'Reilly.

![Khorikov — Unit Testing](/images/khorikov-book.png)

## Praktiske eksempler

Vi bruger gennemgående eksempler fra [h4-mags](https://github.com/Mercantech/h4-mags) — et Kahoot-lignende projekt med C# backend, Flutter-app og Bruno E2E-tests.

::: tip Næste skridt
Har du ikke kørt tests endnu? Start med [Kom i gang](/introduktion/kom-i-gang). Derefter [Unit testing](/unit-testing/) — fundamentet i test-pyramiden.
:::
