![](https://i.imgur.com/2T7dOi7.png)

# 六角學院 2024 體驗營 | 切版任務作業二 - 個人品牌網站

此專案為六角學院 2024 軟體工程師體驗營的切版任務作業二之成品

- [線上部署連結](https://hex2024.worksbyaaron.com/)
- [設計稿](https://www.figma.com/file/rX9YdVutqj9jF0kw72SAKi/2024ver.-%E9%AB%94%E9%A9%97%E7%87%9F%E8%A8%AD%E8%A8%88%E7%A8%BF?type=design&node-id=2221-22843&mode=design&t=eHIm1tvOJekYWyMt-0)

## 使用技術

[Next.js 14](https://nextjs.org/)（React 加強版）

## 開發環境設置

建議使用 [VSCode](https://code.visualstudio.com/) 搭配 [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

## 快速開始

**專案設置（Project setup）**

將專案複製到本地端

```sh
$ git clone https://github.com/happyloa/Hex2024-mission2.git
```

套件安裝

```sh
$ cd 2024-mission2
$ npm install
```

**執行專案（Start the server）**

```sh
$ npm run dev
```

在瀏覽器上輸入

```
http://localhost:3000/
```

即可在本地端預覽專案

## 頁面路徑（Router Link）

位於 `app`

結構說明

```
app
└── blog                       部落格頁面（/blog）
    └── [singlePost]           單篇文章動態頁面（/blog/post）
├── contact                    聯絡我頁面（/contact）
├── portfolio                  作品集頁面（/portfolio）
├── services                   服務項目頁面（/services）
├── favicon.ico                網站圖示
├── global.css                 全域樣式
├── scrollBar.css              頁面卷軸樣式
├── variables.css              樣式變數
├── layout.js                  網站整體架構，導覽列與頁尾也在這被引入並使用
└── page.js                    首頁（/）
```

## 元件檔案（Components）

位於 `components`

結構說明

```
components
└── blog                       部落格元件庫
    └── Posts                  部落格頁面文章列表與文章單頁元件
├── contact                    聯絡我元件庫
├── home                       首頁元件庫
    ├── posts                  精選文章區塊元件庫
        └── CarouselSetting    Embla Carousel 相關設定
    └── works                  作品區塊元件庫
├── layout                     導覽列與頁尾元件
    └── Nav                    導覽列選單項目、電腦版與手機版選單
├── portfolio                  作品集元件庫
├── services                   服務項目元件庫
└── ui                         頁面 ui 元件庫，例如有裝飾線的標題、作品卡片等
```

## 靜態檔案

位於 `public/image` 及 `lib`

結構說明

```
public
└── image                      存放圖片
    ├── blog                   部落格文章封面圖片
        └── article-image      文章內穿插的圖片
    ├── deco                   裝飾用圖片
    ├── footer                 頁尾用圖片
    ├── home                   首頁用到的圖片
    ├── icon                   在網站上使用的各式 icon
    ├── services               服務項目圖片
    ├── work                   與作品有關的圖片。
        └── modal              點擊作品後彈出的 Modal 內的圖片
    └── logo.svg               網站 Logo
```

```
lib
└── posts.json                 所有文章資料
```

## 使用的套件 & 工具

- [react-modal](https://www.npmjs.com/package/react-modal)
- [Embla Carousel](https://www.embla-carousel.com/)
- [TinyPNG](https://tinypng.com/)
- [ChatGPT 4](https://openai.com/)

## 2024/05/16 助教修改建議

![](https://i.imgur.com/WBpnu7g.png)
