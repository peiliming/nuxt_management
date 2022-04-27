import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _99250cc2 = () => interopDefault(import('../pages/add-product.vue' /* webpackChunkName: "pages/add-product" */))
const _27c8de6e = () => interopDefault(import('../pages/contents.vue' /* webpackChunkName: "pages/contents" */))
const _32ad1fb8 = () => interopDefault(import('../pages/products.vue' /* webpackChunkName: "pages/products" */))
const _19a46e2e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/add-product",
    component: _99250cc2,
    name: "add-product"
  }, {
    path: "/contents",
    component: _27c8de6e,
    name: "contents"
  }, {
    path: "/products",
    component: _32ad1fb8,
    name: "products"
  }, {
    path: "/",
    component: _19a46e2e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
