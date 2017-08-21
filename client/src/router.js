import Vue from 'vue'
import Router from 'vue-router'
import ExpertsEvaluations from '@/ExpertsEvaluations'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/experts-evaluations/:id',
      name: 'ExpertsEvaluations',
      component: ExpertsEvaluations,
      props: true,
      meta: { reuse: false }
    }
  ]
})
