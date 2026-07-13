# CI og CD

Automatiske tests er en del af en større DevOps-proces. Her lærer du forskellen på **CI** (test før merge) og **CD** (deploy efter merge).

<LearningGoals
  section="ci-cd"
  :goals="[
    'Jeg kan forklare formålet med CI/CD og hvordan automatiske tests indgår i en pipeline',
    'Jeg kan forklare forskellen mellem CI og CD',
    'Jeg kan opsætte en simpel GitHub Actions pipeline der bygger og kører tests',
    'Jeg kan konfigurere pipelines til at fejle korrekt ved testfejl'
  ]"
/>

![DevOps infinity loop](/images/devops-loop.png)

## Emner i dette afsnit

| Side | Indhold |
|------|---------|
| [GitHub Actions](/ci-cd/github-actions) | Pipeline-eksempel med .NET + Bruno |
| [CI vs CD](/ci-cd/ci-vs-cd) | GitHub Actions vs Dokploy |

## Tests som gates

En professionel pipeline bruger tests som "gates":

1. **CI (GitHub Actions)** — kør tests *før* merge
2. **CD (Dokploy)** — deploy *efter* merge, når CI er grønt

::: info CI først, deploy bagefter
Kun hvis CI er grønt → må koden merges til `main`. Kun efter merge → deployes til server.
:::
