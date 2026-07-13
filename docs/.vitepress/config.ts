import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  title: 'Software Test',
  description: 'Unit, Integration og E2E testing — Mercantec',
  lang: 'da-DK',
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
  themeConfig: {
    logo: '/favicon.svg',
    nav: [
      { text: 'Kom i gang', link: '/introduktion/kom-i-gang' },
      { text: 'Introduktion', link: '/introduktion/' },
      { text: 'Unit', link: '/unit-testing/' },
      { text: 'Integration', link: '/integration-testing/' },
      { text: 'E2E', link: '/e2e-testing/' },
      { text: 'CI/CD', link: '/ci-cd/' },
    ],
    sidebar: [
      {
        text: 'Introduktion',
        collapsed: false,
        items: [
          { text: 'Kom i gang', link: '/introduktion/kom-i-gang' },
          { text: 'Overblik', link: '/introduktion/' },
          { text: 'Test-pyramiden', link: '/introduktion/test-pyramiden' },
          { text: 'Hvorfor teste?', link: '/introduktion/hvorfor-teste' },
        ],
      },
      {
        text: 'Unit testing',
        collapsed: false,
        items: [
          { text: 'Overblik', link: '/unit-testing/' },
          { text: 'Strategi og isolation', link: '/unit-testing/strategi-og-isolation' },
          { text: 'AAA og asserts', link: '/unit-testing/aaa-og-asserts' },
          { text: 'Mocking og interfaces', link: '/unit-testing/mocking' },
          { text: 'TDD', link: '/unit-testing/tdd' },
          { text: 'Opgave', link: '/unit-testing/opgave' },
        ],
      },
      {
        text: 'Integration testing',
        collapsed: false,
        items: [
          { text: 'Overblik', link: '/integration-testing/' },
          { text: 'Hvad er det?', link: '/integration-testing/hvad-er-det' },
          { text: 'WebApplicationFactory', link: '/integration-testing/web-application-factory' },
          { text: 'Test-database', link: '/integration-testing/test-database' },
          { text: 'Opgave', link: '/integration-testing/opgave' },
        ],
      },
      {
        text: 'E2E testing',
        collapsed: false,
        items: [
          { text: 'Overblik', link: '/e2e-testing/' },
          { text: 'Bruno og API-tests', link: '/e2e-testing/bruno' },
          { text: 'Flows og variabler', link: '/e2e-testing/flows-og-variabler' },
          { text: 'Docker og CI', link: '/e2e-testing/docker-og-ci' },
        ],
      },
      {
        text: 'CI og CD',
        collapsed: false,
        items: [
          { text: 'Overblik', link: '/ci-cd/' },
          { text: 'GitHub Actions', link: '/ci-cd/github-actions' },
          { text: 'CI vs CD', link: '/ci-cd/ci-vs-cd' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Mercantech/Test' },
    ],
    footer: {
      message: 'Mercantec — Software Test',
      copyright: 'Copyright © Mercantec',
    },
    docFooter: {
      prev: 'Forrige',
      next: 'Næste',
    },
    outline: { level: [2, 3] },
  },
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
}))
