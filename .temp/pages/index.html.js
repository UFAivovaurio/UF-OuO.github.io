import comp from "D:/blog/UF-OuO/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"modules\":[\"BannerBrand\",\"Blog\",\"MdContent\",\"Footer\"],\"bannerBrand\":{\"bgImage\":\"/bg.svg\",\"title\":\"UF-OuO\",\"description\":\"浪花淘尽。\",\"tagline\":\"博客网站\",\"buttons\":[{\"text\":\"Guide\",\"link\":\"/docs/guide/introduce\"},{\"text\":\"Default Style\",\"link\":\"/docs/style-default-api/introduce\",\"type\":\"plain\"}],\"socialLinks\":[{\"icon\":\"LogoGithub\",\"link\":\"https://github.com/vuepress-reco/vuepress-theme-reco\"}]},\"blog\":{\"socialLinks\":[{\"icon\":\"LogoGithub\",\"link\":\"https://github.com/recoluan\"}]},\"isShowTitleInHome\":true,\"actionText\":\"About\",\"actionLink\":\"/views/other/about\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
