# Opgave — Skriv tests på andres kode

## Formål

Træn **rigtig test-tænkning**: skriv tests ud fra *forventet adfærd* — ikke ud fra hvordan koden er implementeret.

## Opgavebeskrivelse

1. I grupperne **bytter I kode** internt:
   - Person A skriver tests til Person B's kode
   - Person B skriver tests til Person C's kode (osv.)
2. Skriv **unit-tests** for:
   - Mindst én service-klasse
   - Mindst 3–5 metoder med forskellig logik (happy path + edge cases)
3. Tests skal følge **Arrange–Act–Assert** og køre grønt lokalt.
4. Hvis en test afslører en bug eller uklar adfærd:
   - Notér det
   - Tag dialogen med den der har skrevet koden

## Hvorfor tester vi *ikke* vores egen kode?

Når du tester din **egen kode**, sker der typisk (ubevidst):

- Du tester det, du *ved* koden gør — ikke det den *burde* gøre
- Du genskaber din egen logik i testen
- Du undgår edge cases, fordi "det ved jeg jo godt ikke sker"

Når du tester **andres kode**:

- Du læser koden som en *bruger* eller *API-forbruger*
- Du opdager uklarheder i metodenavne, input/output og fejlhåndtering
- Du tester adfærd — ikke implementation

::: info Tættere på virkeligheden
Tests skrives ofte af andre end dem der skrev koden. QA, kollegaer og fremtidige udviklere skal kunne forstå systemet via tests.
:::

## Tjekliste

- [ ] Mindst én service-klasse testet
- [ ] 3–5 metoder med happy path og edge cases
- [ ] AAA-pattern fulgt konsekvent
- [ ] Mocks brugt til eksterne afhængigheder
- [ ] Alle tests kører grønt med `dotnet test`
