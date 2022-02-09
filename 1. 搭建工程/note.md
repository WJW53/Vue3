# 搭建工程

```shell
vue create vue3-app-vue-cli
npm run serve
npm run build
```

利用vite构建工具，它的速度要比webpack快很多，原理也完全不一样
```shell
#临时的下载vite搭建工程vue3-app-vite
npm init vite-app vue3-app-vite
npm i
npm run dev
#默认是3000端口
#打包
npm run build
```
vite3引入路径要加后缀名,它的最终的页面文件(.html)是放到根目录下而不再是public