---
layout: home
title: Test Pensum
titleTemplate: false
hero:
  name: Test Pensum
  text: Unit, Integration og E2E
  tagline: Lær at teste software professionelt — fra isolerede unit tests til Bruno E2E og CI/CD pipelines.
  image:
    src: /images/test-pyramid.png
    alt: Test-pyramiden
  actions:
    - theme: brand
      text: Start med introduktion
      link: /introduktion/
    - theme: alt
      text: Gå til Unit testing
      link: /unit-testing/
features:
  - icon: 🧪
    title: Unit testing
    details: Test én metode ad gangen med AAA, NUnit og mocking. Hurtigt, isoleret og forudsigeligt.
    link: /unit-testing/
  - icon: 🔗
    title: Integration testing
    details: Test at API, services og database virker sammen med WebApplicationFactory.
    link: /integration-testing/
  - icon: 🌐
    title: E2E testing
    details: Test hele brugerrejser som HTTP-requests med Bruno — fra registrering til quiz-session.
    link: /e2e-testing/
  - icon: ⚙️
    title: CI og CD
    details: Automatisér tests i GitHub Actions og forstå forskellen på CI og deployment.
    link: /ci-cd/
---

## Pensum-overblik

Følg den logiske læringssti fra grundlæggende forståelse til automatisering i pipelinen.

<div class="pensum-grid">
  <div class="pensum-card">
    <h3>1. Introduktion</h3>
    <p>Test-pyramiden, de tre niveauer og hvorfor tests betaler sig over tid.</p>
    <a href="/introduktion/">Læs mere →</a>
  </div>
  <div class="pensum-card">
    <h3>2. Unit testing</h3>
    <p>AAA, asserts, mocking, interfaces og TDD med eksempler fra h4-mags.</p>
    <a href="/unit-testing/">Læs mere →</a>
  </div>
  <div class="pensum-card">
    <h3>3. Integration testing</h3>
    <p>WebApplicationFactory, test-database og API-tests uden mocks af DB.</p>
    <a href="/integration-testing/">Læs mere →</a>
  </div>
  <div class="pensum-card">
    <h3>4. E2E testing</h3>
    <p>Bruno collections, flows, miljøvariabler og smoke tests mod API.</p>
    <a href="/e2e-testing/">Læs mere →</a>
  </div>
  <div class="pensum-card">
    <h3>5. CI og CD</h3>
    <p>GitHub Actions, DevOps-loopet og forskellen på CI og Dokploy-deployment.</p>
    <a href="/ci-cd/">Læs mere →</a>
  </div>
</div>

<TestQuiz />
