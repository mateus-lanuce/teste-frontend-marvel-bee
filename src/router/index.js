import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharactersView from '../views/CharactersView.vue'
import CharacterView from '../views/CharacterView.vue'
import ComicsView from '../views/ComicsView.vue'
import EventsView from '../views/EventsView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/characters:page?',
      name: 'characters',
      component: CharactersView
    },
    {
      path: '/character/:id',
      name: 'character',
      component: CharacterView
    },
    {
      path: '/comics',
      name: 'comics',
      component: ComicsView
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home' }
    }
  ]
})

export default router
