<script setup>
import { ref, computed } from 'vue'

const scenarios = [
  {
    text: 'Test HashPassword() med en mock af IMailService — ingen netværk, ingen database.',
    answer: 'unit',
    explain: 'Én metode testes i isolation med mocks. Det er klassisk unit testing.',
  },
  {
    text: 'Kald POST /api/auth/register via WebApplicationFactory og tjek at brugeren gemmes i test-databasen.',
    answer: 'integration',
    explain: 'API og database testes sammen i én proces — uden at mocke DB.',
  },
  {
    text: 'Kør hele flowet registrer → login → opret quiz → join session med Bruno mod API\'et.',
    answer: 'e2e',
    explain: 'En hel brugerrejse som HTTP-requests mod den rigtige API — det er E2E.',
  },
  {
    text: 'Test at JwtService genererer et gyldigt token med mocket IConfiguration.',
    answer: 'unit',
    explain: 'Én klasse, afhængigheder mockes — unit test.',
  },
  {
    text: 'Verificer at GET /api/quizzes returnerer 401 uden Authorization-header.',
    answer: 'integration',
    explain: 'HTTP-kald mod rigtig API-pipeline (middleware, auth) — typisk integration test.',
  },
  {
    text: 'Smoke test: kan en lærer oprette en session og en elev deltage — via bru run i CI.',
    answer: 'e2e',
    explain: 'Få, langsomme tests af kritiske user flows — E2E i test-pyramiden.',
  },
  {
    text: 'Test MapToQuizDto() med forskellige input — pure function, ingen I/O.',
    answer: 'unit',
    explain: 'Ren transformationslogik uden side effects — perfekt til unit tests.',
  },
  {
    text: 'Start PostgreSQL i Docker, kør API, send requests og tjek data i databasen bagefter.',
    answer: 'integration',
    explain: 'Flere lag sammen med rigtig (test-)database — integration, ikke E2E-brugerrejse.',
  },
]

const labels = { unit: 'Unit', integration: 'Integration', e2e: 'E2E' }

const current = ref(0)
const selected = ref(null)
const correctCount = ref(0)
const finished = ref(false)

const scenario = computed(() => scenarios[current.value])

function choose(type) {
  if (selected.value !== null) return
  selected.value = type
  if (type === scenario.value.answer) correctCount.value++
}

function next() {
  if (current.value < scenarios.length - 1) {
    current.value++
    selected.value = null
  } else {
    finished.value = true
  }
}

function reset() {
  current.value = 0
  selected.value = null
  correctCount.value = 0
  finished.value = false
}

function buttonClass(type) {
  if (selected.value === null) return ''
  if (type === scenario.value.answer) return 'correct'
  if (type === selected.value) return 'wrong'
  return ''
}
</script>

<template>
  <div class="test-quiz">
    <h3>Quiz: Hvilken testtype?</h3>

    <template v-if="!finished">
      <p class="scenario">
        Scenarie {{ current + 1 }} / {{ scenarios.length }}:
        {{ scenario.text }}
      </p>
      <div class="options">
        <button
          v-for="(label, key) in labels"
          :key="key"
          :class="buttonClass(key)"
          :disabled="selected !== null"
          @click="choose(key)"
        >
          {{ label }}
        </button>
      </div>
      <div
        v-if="selected !== null"
        :class="['feedback', selected === scenario.answer ? 'correct' : 'wrong']"
      >
        {{ scenario.explain }}
      </div>
      <button
        v-if="selected !== null"
        style="margin-top: 1rem;"
        @click="next"
      >
        {{ current < scenarios.length - 1 ? 'Næste scenarie' : 'Se resultat' }}
      </button>
    </template>

    <template v-else>
      <p class="score">
        Du fik {{ correctCount }} / {{ scenarios.length }} rigtige!
      </p>
      <button @click="reset">Prøv igen</button>
    </template>
  </div>
</template>
