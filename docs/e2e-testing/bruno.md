# Bruno og API-tests

Vi bruger **Bruno** til E2E API-testing: en collection af requests med scripts og assertions. Bruno kan køres i GUI eller fra kommandolinjen (`bru run`) — perfekt til både manuel test og CI.

## Hvorfor Bruno?

![Bruno vs Postman](/images/bruno-vs-postman.png)

| | Postman | Bruno |
|---|---------|-------|
| Vægt | Tung | **Letvægt** |
| Hastighed | Langsom | **Hurtig** |
| Offline | Cloud-afhængig | **Offline-first** |
| Open source | Nej | **Ja** |

Bruno gemmer collections som **filer i Git** (`.bru`) — ikke i en cloud. Det passer perfekt til versionsstyring og CI.

## Installation

```bash
# GUI: download fra https://www.usebruno.com/
# CLI til CI:
npm install -g @usebruno/cli
```

## Kør collection

```bash
cd Bruno
bru run E2E-UserFlows -r --env Kahoot --env-var "baseUrl=http://localhost:9080"
```

| Flag | Betydning |
|------|-----------|
| `-r` | Recursive — kør alle undermapper |
| `--env Kahoot` | Brug miljøfilen `environments/Kahoot.bru` |
| `--env-var` | Override variabler (fx baseUrl) |

## Hvad er en .bru-fil?

En typisk request (`01-Auth-Lifecycle/1-Register.bru`):

| Del | Formål |
|-----|--------|
| **URL** | `{{baseUrl}}/api/auth/register` |
| **Body** | JSON med `username`, `email`, `password` |
| **script:pre-request** | Kører før request — fx genererer unikt `e2eUsername` |
| **script:post-response** | Læser `user.id` og `token`, sætter `createdUserId`, `authToken` |
| **tests** | Assertions — fx status 200/201, body har `token` |

## Smoke tests

I h4-mags bruger vi E2E som **smoke tests** — få, langsomme tests der verificerer at de vigtigste brugerrejser stadig virker efter deploy.

::: info Bruno i Git
Fordi `.bru`-filer er plain text i repoet, kan hele teamet se, reviewe og versionere E2E-tests — præcis som kode.
:::
