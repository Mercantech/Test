# Hvorfor teste?

Tests føles langsomme i starten — men de sparer tid senere. Det er en investering, ikke en omkostning.

## Uden tests: hurtig start, dyr fremtid

Når man udvikler uden tests, kan man ofte bevæge sig hurtigt i starten. Man skriver kode, ser noget virke, og føler hurtigt fremgang.

Problemet opstår senere i projektet, hvor hver ny ændring bliver dyrere:

- Små rettelser skaber nye bugs
- Frygten for at ændre eksisterende kode vokser
- Fejl opdages sent og er svære at lokalisere

## Med tests: langsom start, stabil fremgang

![Arbejdstimer med og uden tests](/images/tests-roi.png)

Med tests investerer man mere tid tidligt i forløbet. Det kan føles langsommere i starten, men til gengæld:

- Fejl opdages med det samme
- Koden kan ændres med større sikkerhed
- Udviklingshastigheden forbliver stabil over tid

::: tip Husk
Tests handler ikke om at være hurtigst dag 1 — men om at undgå at blive langsom dag 30.
:::

## Hvad får du ud af det?

| Uden tests | Med tests |
|------------|-----------|
| Manuel test ved hver ændring | Automatisk feedback på sekunder |
| Bugs opdages i produktion | Bugs opdages ved commit/PR |
| Refactoring er risikabelt | Refactoring er trygt |
| Ny udvikler er bange for at røre kode | Tests dokumenterer forventet adfærd |

## Test-pyramiden som strategi

Fordelingen af testtyper er ikke tilfældig:

1. **Mange unit tests** — billige at skrive og køre, fanger de fleste bugs tidligt
2. **Nogle integration tests** — verificerer at lagene spiller sammen
3. **Få E2E tests** — sikrer at de vigtigste brugerrejser virker end-to-end

Se [Test-pyramiden](/introduktion/test-pyramiden) for den fulde gennemgang.

<TestQuiz />
