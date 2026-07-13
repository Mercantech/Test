# Hvad er integration testing?

Integration tests sidder **mellem** unit tests og E2E i pyramiden. Du tester at lagene i *dit eget system* virker sammen.

## Forskellen på de tre niveauer

| Type | Spørgsmål | Mocks? |
|------|-----------|--------|
| **Unit** | Virker denne metode? | Ja — alle dependencies |
| **Integration** | Virker API + DB sammen? | Kun eksterne (mail, Stripe) |
| **E2E** | Kan en bruger gennemføre hele flowet? | Ingen — rigtig API |

## Hvad tester vi?

Typisk en sti gennem flere lag:

```
HTTP Request → Controller → Service → Database → Response
```

Du sender et rigtigt HTTP-kald og verificerer:

- **Statuskode** (200, 201, 401, ...)
- **Response body** (JSON-struktur, felter)
- **Database-tilstand** (blev data gemt/opdateret/slettet?)

## Hvad mocker vi stadig?

Eksterne systemer du ikke kontrollerer:

- Mail (SMTP)
- Betalingsgateway (Stripe)
- Tredjeparts-API'er

Men **ikke** din egen database eller dine egne services.

## Hvornår giver det mening?

- Efter unit tests er på plads for forretningslogikken
- Når du vil verificere at DI, middleware og routing virker
- Når database-mapping (EF Core) skal testes med rigtige queries
- Før du stoler på E2E som eneste sikkerhedsnet

## Hvornår giver det *ikke* mening?

- At teste ren logik der allerede har unit tests (duplikering)
- At erstatte E2E for kritiske brugerrejser
- At mocke databasen i en "integration" test (så er det en unit test)

::: warning Pas på gråzonen
Hvis du bruger `WebApplicationFactory` men mocker *alt* — inkl. database — har du stadig en unit test i forklædning.
:::
