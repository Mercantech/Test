# Opgave — Integration tests

## Formål

Skriv integration tests der verificerer at dit API og din database virker sammen — uden at mocke de interne lag.

## Opgavebeskrivelse

1. Opret et nyt testprojekt `Backend/IntegrationTests/` (hvis det ikke findes)
2. Tilføj reference til API-projektet og `Microsoft.AspNetCore.Mvc.Testing`
3. Skriv **2–3 integration tests** der dækker:

| Test | Endpoint | Forventet |
|------|----------|-----------|
| Registrering | `POST /api/auth/register` | 201 + bruger i DB |
| Login | `POST /api/auth/login` | 200 + token |
| Uautoriseret | `GET /api/quizzes` uden token | 401 |

4. Brug `WebApplicationFactory<Program>` med test-database
5. Alle tests skal køre grønt med `dotnet test`

## Krav

- [ ] `WebApplicationFactory` opsat korrekt
- [ ] Test-database (InMemory eller container) — ikke produktions-DB
- [ ] Mindst én test verificerer database-tilstand (ikke kun HTTP-status)
- [ ] Eksterne services (mail) mocket eller deaktiveret
- [ ] Tests er uafhængige — ingen delt mutable state

## Tips

- Start med registrering — den kræver ingen forudgående auth
- Brug unikke emails/usernames pr. test (`Guid.NewGuid()`)
- Læs [WebApplicationFactory](/integration-testing/web-application-factory) og [Test-database](/integration-testing/test-database) før du starter

::: tip Næste skridt
Når integration tests virker, kan du bygge **E2E flows** i Bruno der tester hele brugerrejsen — se [E2E testing](/e2e-testing/).
:::
