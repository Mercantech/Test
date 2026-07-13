<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  section: { type: String, required: true },
  goals: { type: Array, required: true },
})

const checked = ref([])

onMounted(() => {
  const saved = localStorage.getItem(`learning-goals-${props.section}`)
  if (saved) {
    try {
      checked.value = JSON.parse(saved)
    } catch {
      checked.value = []
    }
  }
})

watch(checked, (val) => {
  localStorage.setItem(`learning-goals-${props.section}`, JSON.stringify(val))
}, { deep: true })

function toggle(index) {
  const i = checked.value.indexOf(index)
  if (i === -1) checked.value.push(index)
  else checked.value.splice(i, 1)
}

function isChecked(index) {
  return checked.value.includes(index)
}
</script>

<template>
  <div class="learning-goals">
    <h3>Læringsmål</h3>
    <label v-for="(goal, i) in goals" :key="i">
      <input
        type="checkbox"
        :checked="isChecked(i)"
        @change="toggle(i)"
      />
      <span>{{ goal }}</span>
    </label>
    <p v-if="goals.length" style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--vp-c-text-2);">
      {{ checked.length }} / {{ goals.length }} gennemført (gemmes lokalt i din browser)
    </p>
  </div>
</template>
