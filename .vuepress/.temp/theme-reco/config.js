
  import { defineAsyncComponent } from 'vue'
import { defineClientConfig } from 'vuepress/client'

import { applyClientSetup } from 'D:/blog/UF-OuO/node_modules/vuepress-theme-reco/lib/client/clientSetup.js'
import { applyClientEnhance } from 'D:/blog/UF-OuO/node_modules/vuepress-theme-reco/lib/client/clientEnhance.js'

import * as layouts from 'D:/blog/UF-OuO/node_modules/vuepress-theme-reco/lib/client/layouts/index.js'

  const layoutsFromDir = {}
export default defineClientConfig({
  enhance(...args) {
    applyClientEnhance(...args)
  },
  setup() {
    applyClientSetup()
  },
  // @ts-ignore
  layouts: { ...layouts, ...layoutsFromDir },
})
