import Vue from 'vue'
import Router from 'vue-router'
import bookList from '@/components/book_list'
import bookMsg from '@/components/book_msg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bookList',
      name: 'bookList',
      component: bookList
    },
    {
      path: '/bookMsg/:index',
      name: 'bookMsg',
      component: bookMsg
    }
  ]
})
