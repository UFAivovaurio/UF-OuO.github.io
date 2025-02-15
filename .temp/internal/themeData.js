export const themeData = JSON.parse("{\"style\":\"@vuepress-reco/style-default\",\"logo\":\"/logo.png\",\"author\":\"UF-OVO\",\"authorAvatar\":\"/head.png\",\"docsRepo\":\"https://github.com/UFAivovaurio\",\"docsBranch\":\"main\",\"docsDir\":\"example\",\"lastUpdatedText\":\"\",\"series\":{\"/docs/theme-reco/\":[{\"text\":\"module one\",\"children\":[\"home\",\"theme\"]},{\"text\":\"module two\",\"children\":[\"api\",\"plugin\"]}]},\"navbar\":[{\"text\":\"主页\",\"link\":\"/\"},{\"text\":\"目录\",\"link\":\"/categories/reco/1/\"},{\"text\":\"标签\",\"link\":\"/tags/tag1/1/\"}]}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
