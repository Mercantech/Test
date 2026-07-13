# Software Test

Pensum om **Unit, Integration og E2E testing** til Mercantec — hostet på [test.mercantec.tech](https://test.mercantec.tech).

Bygget med [VitePress](https://vitepress.dev/) — markdown-baseret læringsplatform med interaktiv quiz, mermaid-diagrammer og eksempler fra [h4-mags](https://github.com/Mercantech/h4-mags).

## Pensum-struktur

| Emne | Indhold |
|------|---------|
| **Introduktion** | Test-pyramiden, hvorfor teste |
| **Unit testing** | AAA, mocking, TDD, interfaces |
| **Integration testing** | WebApplicationFactory, test-database |
| **E2E testing** | Bruno, flows, Docker og CI |
| **CI og CD** | GitHub Actions, DevOps-loopet |

## Lokal udvikling

```bash
npm install
npm run docs:dev
```

Åbn **http://localhost:5173**

## Build

```bash
npm run docs:build
npm run docs:preview
```

## Docker

**Lokal (med host-port):**

```bash
docker compose -f docker-compose.yml -f docker-compose.local.yml up -d --build
```

| Tjeneste | URL |
|----------|-----|
| **Web** | http://localhost:8080 |
| **Health** | http://localhost:8080/health |

**Produktion (Dokploy):** kun `docker-compose.yml` — ingen host-porte; Traefik router på `test.mercantec.tech`.

## Deploy på Dokploy

1. Push til GitHub (`Mercantech/Test`)
2. I Dokploy: **Create → Compose** og vælg repoet
3. Miljøvariabler (se `.env.example`):

   | Variabel | Værdi |
   |----------|-------|
   | `FRONTEND_DOMAIN` | `test.mercantec.tech` |

4. Deploy: `docker compose up -d --build`

Routing følger Mercantec-mønsteret:

1. **Cloudflare** — `*.mercantec.tech` (wildcard CNAME → tunnel)
2. **Tunnel ingress** — `*.mercantec.tech` → `http://localhost:80`
3. **Traefik (Dokploy)** — `Host(test.mercantec.tech)` → container port 80

`dokploy-network` skal findes på serveren (oprettes automatisk af Dokploy).

## Indhold redigere

Alt pensum ligger i `docs/` som markdown:

```
docs/
  introduktion/
  unit-testing/
  integration-testing/
  e2e-testing/
  ci-cd/
```

Diagrammer ligger i `docs/public/images/`.

## Stack

- **VitePress** — statisk site generator
- **Vue 3** — interaktive komponenter (quiz, læringsmål)
- **Mermaid** — diagrammer i markdown
- **nginx** — production server i Docker
