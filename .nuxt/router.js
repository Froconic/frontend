import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _64e31eb4 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _5c497c29 = () => interopDefault(import('..\\pages\\about-us-01.vue' /* webpackChunkName: "pages/about-us-01" */))
const _5c5793aa = () => interopDefault(import('..\\pages\\about-us-02.vue' /* webpackChunkName: "pages/about-us-02" */))
const _5c65ab2b = () => interopDefault(import('..\\pages\\about-us-03.vue' /* webpackChunkName: "pages/about-us-03" */))
const _0bd2c235 = () => interopDefault(import('..\\pages\\career.vue' /* webpackChunkName: "pages/career" */))
const _b39c990e = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _86b69d4c = () => interopDefault(import('..\\pages\\contact-us-modern.vue' /* webpackChunkName: "pages/contact-us-modern" */))
const _1931b650 = () => interopDefault(import('..\\pages\\contact-us-with-map.vue' /* webpackChunkName: "pages/contact-us-with-map" */))
const _ec9325cc = () => interopDefault(import('..\\pages\\default.vue' /* webpackChunkName: "pages/default" */))
const _655b5360 = () => interopDefault(import('..\\pages\\events.vue' /* webpackChunkName: "pages/events" */))
const _f4ac0a22 = () => interopDefault(import('..\\pages\\events\\event-details.vue' /* webpackChunkName: "pages/events/event-details" */))
const _0e7aa2ea = () => interopDefault(import('..\\pages\\events\\_slug.vue' /* webpackChunkName: "pages/events/_slug" */))
const _8b821c66 = () => interopDefault(import('..\\pages\\home-authentic-studio.vue' /* webpackChunkName: "pages/home-authentic-studio" */))
const _425e505a = () => interopDefault(import('..\\pages\\home-blog-grid.vue' /* webpackChunkName: "pages/home-blog-grid" */))
const _5bcce5a3 = () => interopDefault(import('..\\pages\\home-corona.vue' /* webpackChunkName: "pages/home-corona" */))
const _5e67ffec = () => interopDefault(import('..\\pages\\home-creative-agency.vue' /* webpackChunkName: "pages/home-creative-agency" */))
const _104851b1 = () => interopDefault(import('..\\pages\\home-creative-portfolio.vue' /* webpackChunkName: "pages/home-creative-portfolio" */))
const _3cb937e4 = () => interopDefault(import('..\\pages\\home-design-studio.vue' /* webpackChunkName: "pages/home-design-studio" */))
const _a1cc643e = () => interopDefault(import('..\\pages\\home-digital-agency.vue' /* webpackChunkName: "pages/home-digital-agency" */))
const _9d77aad2 = () => interopDefault(import('..\\pages\\home-essential.vue' /* webpackChunkName: "pages/home-essential" */))
const _9a5d6cfe = () => interopDefault(import('..\\pages\\home-foodie.vue' /* webpackChunkName: "pages/home-foodie" */))
const _7e1bb50a = () => interopDefault(import('..\\pages\\home-freelancer.vue' /* webpackChunkName: "pages/home-freelancer" */))
const _5afc7c42 = () => interopDefault(import('..\\pages\\home-fullscreen-slider-left-vertical-header.vue' /* webpackChunkName: "pages/home-fullscreen-slider-left-vertical-header" */))
const _27635a6a = () => interopDefault(import('..\\pages\\home-indie-musician.vue' /* webpackChunkName: "pages/home-indie-musician" */))
const _46c99d20 = () => interopDefault(import('..\\pages\\home-landing.vue' /* webpackChunkName: "pages/home-landing" */))
const _7e6fd75a = () => interopDefault(import('..\\pages\\home-masonry-gallery.vue' /* webpackChunkName: "pages/home-masonry-gallery" */))
const _d3b16290 = () => interopDefault(import('..\\pages\\home-minimal-agency.vue' /* webpackChunkName: "pages/home-minimal-agency" */))
const _aef61ba6 = () => interopDefault(import('..\\pages\\home-minimal-metro-grid.vue' /* webpackChunkName: "pages/home-minimal-metro-grid" */))
const _6ffaff65 = () => interopDefault(import('..\\pages\\home-minimal-portfolio.vue' /* webpackChunkName: "pages/home-minimal-portfolio" */))
const _6218b1fe = () => interopDefault(import('..\\pages\\home-onepage.vue' /* webpackChunkName: "pages/home-onepage" */))
const _2cc8c5b0 = () => interopDefault(import('..\\pages\\home-photo-slider-gallery.vue' /* webpackChunkName: "pages/home-photo-slider-gallery" */))
const _0e2cb075 = () => interopDefault(import('..\\pages\\home-portfolio-slide.vue' /* webpackChunkName: "pages/home-portfolio-slide" */))
const _5776613e = () => interopDefault(import('..\\pages\\home-presentation.vue' /* webpackChunkName: "pages/home-presentation" */))
const _71bc0c42 = () => interopDefault(import('..\\pages\\home-product-landing.vue' /* webpackChunkName: "pages/home-product-landing" */))
const _785831c4 = () => interopDefault(import('..\\pages\\home-restaurant.vue' /* webpackChunkName: "pages/home-restaurant" */))
const _9394aa84 = () => interopDefault(import('..\\pages\\home-service.vue' /* webpackChunkName: "pages/home-service" */))
const _a6418ca6 = () => interopDefault(import('..\\pages\\home-start-up.vue' /* webpackChunkName: "pages/home-start-up" */))
const _11906d20 = () => interopDefault(import('..\\pages\\home-type-hover.vue' /* webpackChunkName: "pages/home-type-hover" */))
const _3e5387c2 = () => interopDefault(import('..\\pages\\home-vertical-menu.vue' /* webpackChunkName: "pages/home-vertical-menu" */))
const _ee4c3a88 = () => interopDefault(import('..\\pages\\pricing-plans.vue' /* webpackChunkName: "pages/pricing-plans" */))
const _5911013a = () => interopDefault(import('..\\pages\\pricing-plans-02.vue' /* webpackChunkName: "pages/pricing-plans-02" */))
const _292db39a = () => interopDefault(import('..\\pages\\services-classic.vue' /* webpackChunkName: "pages/services-classic" */))
const _222478c6 = () => interopDefault(import('..\\pages\\services-list.vue' /* webpackChunkName: "pages/services-list" */))
const _46d1b272 = () => interopDefault(import('..\\pages\\services-modern.vue' /* webpackChunkName: "pages/services-modern" */))
const _cc5f5bd6 = () => interopDefault(import('..\\pages\\team-carousel-01.vue' /* webpackChunkName: "pages/team-carousel-01" */))
const _cc432cd4 = () => interopDefault(import('..\\pages\\team-carousel-02.vue' /* webpackChunkName: "pages/team-carousel-02" */))
const _afcef662 = () => interopDefault(import('..\\pages\\team-grid.vue' /* webpackChunkName: "pages/team-grid" */))
const _ae0a201e = () => interopDefault(import('..\\pages\\blog\\blog-creative.vue' /* webpackChunkName: "pages/blog/blog-creative" */))
const _5f872970 = () => interopDefault(import('..\\pages\\blog\\blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _3f268c7b = () => interopDefault(import('..\\pages\\blog\\blog-details-modern-layout.vue' /* webpackChunkName: "pages/blog/blog-details-modern-layout" */))
const _7b64ce4d = () => interopDefault(import('..\\pages\\blog\\blog-grid-classic.vue' /* webpackChunkName: "pages/blog/blog-grid-classic" */))
const _c9d94f48 = () => interopDefault(import('..\\pages\\blog\\blog-grid-classic-sidebar.vue' /* webpackChunkName: "pages/blog/blog-grid-classic-sidebar" */))
const _73af46fc = () => interopDefault(import('..\\pages\\blog\\blog-grid-mesonry.vue' /* webpackChunkName: "pages/blog/blog-grid-mesonry" */))
const _c4cff848 = () => interopDefault(import('..\\pages\\blog\\blog-grid-minimal.vue' /* webpackChunkName: "pages/blog/blog-grid-minimal" */))
const _cae6ae5e = () => interopDefault(import('..\\pages\\blog\\blog-grid-minimal-outline.vue' /* webpackChunkName: "pages/blog/blog-grid-minimal-outline" */))
const _088869b4 = () => interopDefault(import('..\\pages\\blog\\blog-grid-modern.vue' /* webpackChunkName: "pages/blog/blog-grid-modern" */))
const _2ab9aec7 = () => interopDefault(import('..\\pages\\blog\\blog-grid-simple.vue' /* webpackChunkName: "pages/blog/blog-grid-simple" */))
const _e5a799dc = () => interopDefault(import('..\\pages\\blog\\blog-grid-standard.vue' /* webpackChunkName: "pages/blog/blog-grid-standard" */))
const _737c0b48 = () => interopDefault(import('..\\pages\\blog\\blog-standard-list.vue' /* webpackChunkName: "pages/blog/blog-standard-list" */))
const _4981fafa = () => interopDefault(import('..\\pages\\element\\accordion.vue' /* webpackChunkName: "pages/element/accordion" */))
const _875d5ff4 = () => interopDefault(import('..\\pages\\element\\brand-logo.vue' /* webpackChunkName: "pages/element/brand-logo" */))
const _3836171b = () => interopDefault(import('..\\pages\\element\\call-to-action-banner.vue' /* webpackChunkName: "pages/element/call-to-action-banner" */))
const _312ae9e9 = () => interopDefault(import('..\\pages\\element\\carousel-slider.vue' /* webpackChunkName: "pages/element/carousel-slider" */))
const _53ead398 = () => interopDefault(import('..\\pages\\element\\contact-subscribe.vue' /* webpackChunkName: "pages/element/contact-subscribe" */))
const _3440e70f = () => interopDefault(import('..\\pages\\element\\dividers.vue' /* webpackChunkName: "pages/element/dividers" */))
const _4a367290 = () => interopDefault(import('..\\pages\\element\\flexible-image-slider.vue' /* webpackChunkName: "pages/element/flexible-image-slider" */))
const _3b5ff1bc = () => interopDefault(import('..\\pages\\element\\gradation.vue' /* webpackChunkName: "pages/element/gradation" */))
const _bb4d198c = () => interopDefault(import('..\\pages\\element\\icon-boxes.vue' /* webpackChunkName: "pages/element/icon-boxes" */))
const _4a1c0026 = () => interopDefault(import('..\\pages\\element\\instagram.vue' /* webpackChunkName: "pages/element/instagram" */))
const _bbb70860 = () => interopDefault(import('..\\pages\\element\\lists.vue' /* webpackChunkName: "pages/element/lists" */))
const _45a4de00 = () => interopDefault(import('..\\pages\\element\\message-box.vue' /* webpackChunkName: "pages/element/message-box" */))
const _147b01bf = () => interopDefault(import('..\\pages\\element\\pricing-box.vue' /* webpackChunkName: "pages/element/pricing-box" */))
const _775a8490 = () => interopDefault(import('..\\pages\\element\\tab.vue' /* webpackChunkName: "pages/element/tab" */))
const _493135f2 = () => interopDefault(import('..\\pages\\element\\team.vue' /* webpackChunkName: "pages/element/team" */))
const _3f54c19a = () => interopDefault(import('..\\pages\\element\\testimonial.vue' /* webpackChunkName: "pages/element/testimonial" */))
const _f5b4a422 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-ajax-filter.vue' /* webpackChunkName: "pages/portfolio/portfolio-ajax-filter" */))
const _294412ec = () => interopDefault(import('..\\pages\\portfolio\\portfolio-details.vue' /* webpackChunkName: "pages/portfolio/portfolio-details" */))
const _432878c2 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-details-image-with-caption.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-image-with-caption" */))
const _102c3338 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-details-left-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-left-wide" */))
const _1881ba7b = () => interopDefault(import('..\\pages\\portfolio\\portfolio-details-right.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-right" */))
const _b7ac9dd6 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-details-right-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-right-wide" */))
const _5381e1ae = () => interopDefault(import('..\\pages\\portfolio\\portfolio-grid-boxed.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-boxed" */))
const _ed207dee = () => interopDefault(import('..\\pages\\portfolio\\portfolio-grid-filter.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-filter" */))
const _14ca3406 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-grid-metro-01.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-metro-01" */))
const _14d84b87 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-grid-metro-02.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-metro-02" */))
const _e0462db8 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-grid-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-wide" */))
const _750a21b6 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-with-caption.vue' /* webpackChunkName: "pages/portfolio/portfolio-with-caption" */))
const _2664d303 = () => interopDefault(import('..\\pages\\blog\\category\\_slug.vue' /* webpackChunkName: "pages/blog/category/_slug" */))
const _63d9956e = () => interopDefault(import('..\\pages\\blog\\tag\\_slug.vue' /* webpackChunkName: "pages/blog/tag/_slug" */))
const _7ebdbdfe = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _65f49fb9 = () => interopDefault(import('..\\pages\\portfolio\\_slug.vue' /* webpackChunkName: "pages/portfolio/_slug" */))
const _2573692a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active-link',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _64e31eb4,
    name: "about"
  }, {
    path: "/about-us-01",
    component: _5c497c29,
    name: "about-us-01"
  }, {
    path: "/about-us-02",
    component: _5c5793aa,
    name: "about-us-02"
  }, {
    path: "/about-us-03",
    component: _5c65ab2b,
    name: "about-us-03"
  }, {
    path: "/career",
    component: _0bd2c235,
    name: "career"
  }, {
    path: "/contact",
    component: _b39c990e,
    name: "contact"
  }, {
    path: "/contact-us-modern",
    component: _86b69d4c,
    name: "contact-us-modern"
  }, {
    path: "/contact-us-with-map",
    component: _1931b650,
    name: "contact-us-with-map"
  }, {
    path: "/default",
    component: _ec9325cc,
    name: "default"
  }, {
    path: "/events",
    component: _655b5360,
    name: "events",
    children: [{
      path: "event-details",
      component: _f4ac0a22,
      name: "events-event-details"
    }, {
      path: ":slug?",
      component: _0e7aa2ea,
      name: "events-slug"
    }]
  }, {
    path: "/home-authentic-studio",
    component: _8b821c66,
    name: "home-authentic-studio"
  }, {
    path: "/home-blog-grid",
    component: _425e505a,
    name: "home-blog-grid"
  }, {
    path: "/home-corona",
    component: _5bcce5a3,
    name: "home-corona"
  }, {
    path: "/home-creative-agency",
    component: _5e67ffec,
    name: "home-creative-agency"
  }, {
    path: "/home-creative-portfolio",
    component: _104851b1,
    name: "home-creative-portfolio"
  }, {
    path: "/home-design-studio",
    component: _3cb937e4,
    name: "home-design-studio"
  }, {
    path: "/home-digital-agency",
    component: _a1cc643e,
    name: "home-digital-agency"
  }, {
    path: "/home-essential",
    component: _9d77aad2,
    name: "home-essential"
  }, {
    path: "/home-foodie",
    component: _9a5d6cfe,
    name: "home-foodie"
  }, {
    path: "/home-freelancer",
    component: _7e1bb50a,
    name: "home-freelancer"
  }, {
    path: "/home-fullscreen-slider-left-vertical-header",
    component: _5afc7c42,
    name: "home-fullscreen-slider-left-vertical-header"
  }, {
    path: "/home-indie-musician",
    component: _27635a6a,
    name: "home-indie-musician"
  }, {
    path: "/home-landing",
    component: _46c99d20,
    name: "home-landing"
  }, {
    path: "/home-masonry-gallery",
    component: _7e6fd75a,
    name: "home-masonry-gallery"
  }, {
    path: "/home-minimal-agency",
    component: _d3b16290,
    name: "home-minimal-agency"
  }, {
    path: "/home-minimal-metro-grid",
    component: _aef61ba6,
    name: "home-minimal-metro-grid"
  }, {
    path: "/home-minimal-portfolio",
    component: _6ffaff65,
    name: "home-minimal-portfolio"
  }, {
    path: "/home-onepage",
    component: _6218b1fe,
    name: "home-onepage"
  }, {
    path: "/home-photo-slider-gallery",
    component: _2cc8c5b0,
    name: "home-photo-slider-gallery"
  }, {
    path: "/home-portfolio-slide",
    component: _0e2cb075,
    name: "home-portfolio-slide"
  }, {
    path: "/home-presentation",
    component: _5776613e,
    name: "home-presentation"
  }, {
    path: "/home-product-landing",
    component: _71bc0c42,
    name: "home-product-landing"
  }, {
    path: "/home-restaurant",
    component: _785831c4,
    name: "home-restaurant"
  }, {
    path: "/home-service",
    component: _9394aa84,
    name: "home-service"
  }, {
    path: "/home-start-up",
    component: _a6418ca6,
    name: "home-start-up"
  }, {
    path: "/home-type-hover",
    component: _11906d20,
    name: "home-type-hover"
  }, {
    path: "/home-vertical-menu",
    component: _3e5387c2,
    name: "home-vertical-menu"
  }, {
    path: "/pricing-plans",
    component: _ee4c3a88,
    name: "pricing-plans"
  }, {
    path: "/pricing-plans-02",
    component: _5911013a,
    name: "pricing-plans-02"
  }, {
    path: "/services-classic",
    component: _292db39a,
    name: "services-classic"
  }, {
    path: "/services-list",
    component: _222478c6,
    name: "services-list"
  }, {
    path: "/services-modern",
    component: _46d1b272,
    name: "services-modern"
  }, {
    path: "/team-carousel-01",
    component: _cc5f5bd6,
    name: "team-carousel-01"
  }, {
    path: "/team-carousel-02",
    component: _cc432cd4,
    name: "team-carousel-02"
  }, {
    path: "/team-grid",
    component: _afcef662,
    name: "team-grid"
  }, {
    path: "/blog/blog-creative",
    component: _ae0a201e,
    name: "blog-blog-creative"
  }, {
    path: "/blog/blog-details",
    component: _5f872970,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-details-modern-layout",
    component: _3f268c7b,
    name: "blog-blog-details-modern-layout"
  }, {
    path: "/blog/blog-grid-classic",
    component: _7b64ce4d,
    name: "blog-blog-grid-classic"
  }, {
    path: "/blog/blog-grid-classic-sidebar",
    component: _c9d94f48,
    name: "blog-blog-grid-classic-sidebar"
  }, {
    path: "/blog/blog-grid-mesonry",
    component: _73af46fc,
    name: "blog-blog-grid-mesonry"
  }, {
    path: "/blog/blog-grid-minimal",
    component: _c4cff848,
    name: "blog-blog-grid-minimal"
  }, {
    path: "/blog/blog-grid-minimal-outline",
    component: _cae6ae5e,
    name: "blog-blog-grid-minimal-outline"
  }, {
    path: "/blog/blog-grid-modern",
    component: _088869b4,
    name: "blog-blog-grid-modern"
  }, {
    path: "/blog/blog-grid-simple",
    component: _2ab9aec7,
    name: "blog-blog-grid-simple"
  }, {
    path: "/blog/blog-grid-standard",
    component: _e5a799dc,
    name: "blog-blog-grid-standard"
  }, {
    path: "/blog/blog-standard-list",
    component: _737c0b48,
    name: "blog-blog-standard-list"
  }, {
    path: "/element/accordion",
    component: _4981fafa,
    name: "element-accordion"
  }, {
    path: "/element/brand-logo",
    component: _875d5ff4,
    name: "element-brand-logo"
  }, {
    path: "/element/call-to-action-banner",
    component: _3836171b,
    name: "element-call-to-action-banner"
  }, {
    path: "/element/carousel-slider",
    component: _312ae9e9,
    name: "element-carousel-slider"
  }, {
    path: "/element/contact-subscribe",
    component: _53ead398,
    name: "element-contact-subscribe"
  }, {
    path: "/element/dividers",
    component: _3440e70f,
    name: "element-dividers"
  }, {
    path: "/element/flexible-image-slider",
    component: _4a367290,
    name: "element-flexible-image-slider"
  }, {
    path: "/element/gradation",
    component: _3b5ff1bc,
    name: "element-gradation"
  }, {
    path: "/element/icon-boxes",
    component: _bb4d198c,
    name: "element-icon-boxes"
  }, {
    path: "/element/instagram",
    component: _4a1c0026,
    name: "element-instagram"
  }, {
    path: "/element/lists",
    component: _bbb70860,
    name: "element-lists"
  }, {
    path: "/element/message-box",
    component: _45a4de00,
    name: "element-message-box"
  }, {
    path: "/element/pricing-box",
    component: _147b01bf,
    name: "element-pricing-box"
  }, {
    path: "/element/tab",
    component: _775a8490,
    name: "element-tab"
  }, {
    path: "/element/team",
    component: _493135f2,
    name: "element-team"
  }, {
    path: "/element/testimonial",
    component: _3f54c19a,
    name: "element-testimonial"
  }, {
    path: "/portfolio/portfolio-ajax-filter",
    component: _f5b4a422,
    name: "portfolio-portfolio-ajax-filter"
  }, {
    path: "/portfolio/portfolio-details",
    component: _294412ec,
    name: "portfolio-portfolio-details"
  }, {
    path: "/portfolio/portfolio-details-image-with-caption",
    component: _432878c2,
    name: "portfolio-portfolio-details-image-with-caption"
  }, {
    path: "/portfolio/portfolio-details-left-wide",
    component: _102c3338,
    name: "portfolio-portfolio-details-left-wide"
  }, {
    path: "/portfolio/portfolio-details-right",
    component: _1881ba7b,
    name: "portfolio-portfolio-details-right"
  }, {
    path: "/portfolio/portfolio-details-right-wide",
    component: _b7ac9dd6,
    name: "portfolio-portfolio-details-right-wide"
  }, {
    path: "/portfolio/portfolio-grid-boxed",
    component: _5381e1ae,
    name: "portfolio-portfolio-grid-boxed"
  }, {
    path: "/portfolio/portfolio-grid-filter",
    component: _ed207dee,
    name: "portfolio-portfolio-grid-filter"
  }, {
    path: "/portfolio/portfolio-grid-metro-01",
    component: _14ca3406,
    name: "portfolio-portfolio-grid-metro-01"
  }, {
    path: "/portfolio/portfolio-grid-metro-02",
    component: _14d84b87,
    name: "portfolio-portfolio-grid-metro-02"
  }, {
    path: "/portfolio/portfolio-grid-wide",
    component: _e0462db8,
    name: "portfolio-portfolio-grid-wide"
  }, {
    path: "/portfolio/portfolio-with-caption",
    component: _750a21b6,
    name: "portfolio-portfolio-with-caption"
  }, {
    path: "/blog/category/:slug?",
    component: _2664d303,
    name: "blog-category-slug"
  }, {
    path: "/blog/tag/:slug?",
    component: _63d9956e,
    name: "blog-tag-slug"
  }, {
    path: "/blog/:slug?",
    component: _7ebdbdfe,
    name: "blog-slug"
  }, {
    path: "/portfolio/:slug?",
    component: _65f49fb9,
    name: "portfolio-slug"
  }, {
    path: "/",
    component: _2573692a,
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
