export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/timeline.html", { loader: () => import(/* webpackChunkName: "timeline.html" */"D:/blog/UF-OuO/.temp/pages/timeline.html.js"), meta: {"title":""} }],
  ["/posts.html", { loader: () => import(/* webpackChunkName: "posts.html" */"D:/blog/UF-OuO/.temp/pages/posts.html.js"), meta: {"title":""} }],
  ["/friendship-link.html", { loader: () => import(/* webpackChunkName: "friendship-link.html" */"D:/blog/UF-OuO/.temp/pages/friendship-link.html.js"), meta: {"title":""} }],
  ["/categories/category1/1.html", { loader: () => import(/* webpackChunkName: "categories_category1_1.html" */"D:/blog/UF-OuO/.temp/pages/categories/category1/1.html.js"), meta: {"title":""} }],
  ["/categories/category2/1.html", { loader: () => import(/* webpackChunkName: "categories_category2_1.html" */"D:/blog/UF-OuO/.temp/pages/categories/category2/1.html.js"), meta: {"title":""} }],
  ["/tags/tag2/1.html", { loader: () => import(/* webpackChunkName: "tags_tag2_1.html" */"D:/blog/UF-OuO/.temp/pages/tags/tag2/1.html.js"), meta: {"title":""} }],
  ["/tags/tag1/1.html", { loader: () => import(/* webpackChunkName: "tags_tag1_1.html" */"D:/blog/UF-OuO/.temp/pages/tags/tag1/1.html.js"), meta: {"title":""} }],
  ["/tags/tag4/1.html", { loader: () => import(/* webpackChunkName: "tags_tag4_1.html" */"D:/blog/UF-OuO/.temp/pages/tags/tag4/1.html.js"), meta: {"title":""} }],
  ["/tags/tag3/1.html", { loader: () => import(/* webpackChunkName: "tags_tag3_1.html" */"D:/blog/UF-OuO/.temp/pages/tags/tag3/1.html.js"), meta: {"title":""} }],
  ["/posts/1.html", { loader: () => import(/* webpackChunkName: "posts_1.html" */"D:/blog/UF-OuO/.temp/pages/posts/1.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/blog/UF-OuO/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/blogs/category1/2018/121501.html", { loader: () => import(/* webpackChunkName: "blogs_category1_2018_121501.html" */"D:/blog/UF-OuO/.temp/pages/blogs/category1/2018/121501.html.js"), meta: {"title":"first page in category1"} }],
  ["/blogs/category1/2019/092101.html", { loader: () => import(/* webpackChunkName: "blogs_category1_2019_092101.html" */"D:/blog/UF-OuO/.temp/pages/blogs/category1/2019/092101.html.js"), meta: {"title":"second page in category1"} }],
  ["/blogs/category2/2016/121501.html", { loader: () => import(/* webpackChunkName: "blogs_category2_2016_121501.html" */"D:/blog/UF-OuO/.temp/pages/blogs/category2/2016/121501.html.js"), meta: {"title":"first page in category2"} }],
  ["/blogs/category2/2017/092101.html", { loader: () => import(/* webpackChunkName: "blogs_category2_2017_092101.html" */"D:/blog/UF-OuO/.temp/pages/blogs/category2/2017/092101.html.js"), meta: {"title":"second page in category2"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/blog/UF-OuO/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
