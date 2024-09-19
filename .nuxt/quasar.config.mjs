import lang from "quasar/lang/en-US.js"
import iconSet from "quasar/icon-set/material-icons.js"
import { Notify } from "quasar"


export const componentsWithDefaults = {  }

export const appConfigKey = "nuxtQuasar"

export const quasarNuxtConfig = {
  lang,
  iconSet,
  components: {"defaults":{}},
  plugins: {Notify},
  
}