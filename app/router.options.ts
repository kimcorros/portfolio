import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // When navigating from another route (e.g. /projects/intokia -> /#contact),
      // the target section isn't in the DOM yet when scrollBehavior runs. Poll for
      // it, then resolve the smooth-scroll target.
      return new Promise((resolve) => {
        const target = { el: to.hash, top: 80, behavior: 'smooth' as ScrollBehavior }
        let tries = 0
        const attempt = () => {
          if (document.querySelector(to.hash) || tries >= 60) {
            resolve(target)
          }
          else {
            tries += 1
            setTimeout(attempt, 50)
          }
        }
        // Same-page: scroll immediately. Cross-page: give the new page a moment to mount.
        setTimeout(attempt, from.path === to.path ? 0 : 150)
      })
    }

    if (savedPosition) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(savedPosition), 300)
      })
    }

    return { left: 0, top: 0, behavior: 'smooth' }
  },
}
