import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cdn from "vite-plugin-cdn-import";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    cdn({
     
      modules: [
        {
          name: "vue",
          var: "Vue",
          path: `dist/vue.global.prod.js`,
        },
        {
          name: "element-plus",
          var: "ElementPlus",
          path: `dist/index.full.min.js`, 
          css:'dist/index.css'
        },
      ],
    }),
  ],
});
