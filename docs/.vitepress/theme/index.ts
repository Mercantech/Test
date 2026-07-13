import DefaultTheme from 'vitepress/theme'
import './custom.css'
import TestQuiz from './components/TestQuiz.vue'
import LearningGoals from './components/LearningGoals.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('TestQuiz', TestQuiz)
    app.component('LearningGoals', LearningGoals)
  },
}
