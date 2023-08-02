import { createApp } from "vue"

// @ts-ignore
import * as Component from "~options"

import "@plasmo-static-common/vue"

document.addEventListener("DOMContentLoaded", () => {
  const app = createApp(Component.default)
  Component.default.prepare?.(app)
  app.mount("#__plasmo")
})
