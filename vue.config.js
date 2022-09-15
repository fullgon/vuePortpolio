const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:"/vuePortpolio",
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false
})
