# Flows og variabler

Alle E2E-flows i h4-mags ligger under **`Bruno/E2E-UserFlows/`**. Flowene afhænger af hinanden og deler state via **miljøvariabler**.

## Overblik

```mermaid
flowchart LR
  subgraph Flow01["01-Auth-Lifecycle"]
    R1[Register]
    L1[Login]
    R1 --> L1
  end

  subgraph Flow02["02-Teacher-Quiz-Session"]
    L2[Login]
    CQ[CreateQuiz]
    CS[CreateSession]
    J[JoinSession]
    SS[StartSession]
    L2 --> CQ --> CS --> J --> SS
  end

  subgraph Flow03["03-Student-Play"]
    GQ[GetCurrentQuestion]
    SA[SubmitAnswer]
    GL[GetLeaderboard]
    GQ --> SA --> GL
  end

  Flow01 -->|"createdUserId, authToken"| Flow02
  Flow02 -->|"sessionId, sessionPin, participantId"| Flow03
```

## State mellem requests

| Flow | Sætter variabler | Bruger variabler |
|------|------------------|------------------|
| **01 Auth** | `createdUserId`, `authToken`, `refreshToken` | — |
| **02 Teacher** | `sessionId`, `sessionPin`, `createdQuizId` | `authToken`, `createdUserId` |
| **03 Student** | — | `sessionId`, `sessionPin`, `participantId` |

Variabler defineres i **`Bruno/environments/Kahoot.bru`** og sættes/læses i request-scripts.

## Én request i detaljer

```mermaid
sequenceDiagram
  participant Pre as pre-request script
  participant API as API backend
  participant Post as post-response script
  participant Tests as tests

  Pre->>Pre: Sæt e2eUsername, e2eEmail
  Pre->>API: POST /api/auth/register
  API->>Post: Response user, token
  Post->>Post: bru.setEnvVar createdUserId
  Post->>Post: bru.setEnvVar authToken
  Post->>Tests: res status, body
  Tests->>Tests: expect status 200 or 201
  Tests->>Tests: expect body has user
```

### pre-request script (eksempel)

```javascript
const id = Date.now();
bru.setEnvVar("e2eUsername", `e2e_user_${id}`);
bru.setEnvVar("e2eEmail", `e2e_${id}@test.com`);
```

### post-response script (eksempel)

```javascript
const body = res.getBody();
bru.setEnvVar("createdUserId", body.user.id);
bru.setEnvVar("authToken", body.token);
```

### tests (eksempel)

```javascript
test("status is 200 or 201", function() {
  expect(res.getStatus()).to.be.oneOf([200, 201]);
});
test("body has user and token", function() {
  const body = res.getBody();
  expect(body).to.have.property("user");
  expect(body).to.have.property("token");
});
```

## Det samme mønster overalt

I **CreateQuiz** bruger vi `createdUserId` fra Register/Login og sætter `createdQuizId` i post-response — så CreateSession kan bruge den. State deles via variabler mellem requests. Det er det, der gør det til **E2E**: én lang rejse gennem systemet.
