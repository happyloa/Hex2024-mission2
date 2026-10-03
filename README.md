![](https://i.imgur.com/2T7dOi7.png)

# 六角學院 2024 體驗營 | 切版任務作業二 - 個人品牌網站

此專案為六角學院 2024 軟體工程師體驗營的切版任務作業二之成品

網站以課程展示為主，部分社群連結與作品分頁刻意保留為 `#`；聯絡表單展示介面，未串接寄信功能。

- [線上部署連結](https://hex2024.worksbyaaron.com/)
- [設計稿](https://www.figma.com/file/rX9YdVutqj9jF0kw72SAKi/2024ver.-%E9%AB%94%E9%A9%97%E7%87%9F%E8%A8%AD%E8%A8%88%E7%A8%BF?type=design&node-id=2221-22843&mode=design&t=eHIm1tvOJekYWyMt-0)

## 使用技術

- [Next.js 16](https://nextjs.org/)（App Router、Server Components 與 Metadata API）
- [React 19](https://react.dev/)（互動元件與狀態管理）
- [Embla Carousel 8.6](https://www.embla-carousel.com/)（精選文章輪播與自動播放）
- HTML5 原生 `<dialog>` 元素（替代第三方套件，用於作品彈窗與手機版選單）

### 主要套件版本

| 套件 | 版本 |
| --- | --- |
| next | 16.3.8 |
| react / react-dom | 19.3.0 |
| embla-carousel-react / embla-carousel-autoplay | 8.6.0 |

PostCSS 透過 `overrides` 更新至 `^8.5.28`，修復 Next.js 間接依賴的漏洞。之後升級 Next.js 時，可重新檢查是否仍需保留這個設定。

全站使用思源黑體（Noto Sans TC），服務流程使用 Tourney，皆由 `next/font` 在建置時下載並由網站自行提供，不需要額外的字型切割腳本。

favicon 使用 Noel 標誌中的 N，採黑底白字，檔案位於 `app/favicon.ico`。

## 開發環境設置

需要 Node.js 20.9 以上與 npm。

建議使用 [VSCode](https://code.visualstudio.com/) 搭配 [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

## 快速開始

**專案設置（Project setup）**

將專案複製到本地端

```sh
$ git clone https://github.com/happyloa/Hex2024-mission2.git
```

套件安裝

```sh
$ cd Hex2024-mission2
$ npm ci
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

**正式建置與本機預覽**

```sh
$ npm run build
$ npm start
```

## 頁面路徑（Router Link）

位於 `app`

結構說明

```
app
├── blog                       部落格頁面（/blog），以 category 查詢參數篩選文章
│   └── [singlePost]           單篇文章頁面（/blog/vision-pro 等），依 posts.json 預先產生
├── contact                    聯絡我頁面（/contact）
├── portfolio                  作品集頁面（/portfolio）
├── services                   服務項目頁面（/services）
├── favicon.ico                Noel N 字母網站圖示
├── globals.css                全域樣式
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
├── blog                       部落格元件庫
│   └── Posts                  部落格頁面文章列表與文章單頁元件
├── contact                    聯絡我元件庫
├── home                       首頁元件庫
│   ├── posts                  精選文章區塊元件庫
│   │   └── CarouselSetting    Embla Carousel 相關設定
│   └── works                  作品區塊元件庫
├── layout                     導覽列與頁尾元件
│   └── Nav                    導覽列選單項目、電腦版與手機版選單
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
    │   └── article-image      文章內穿插的圖片
    ├── deco                   裝飾用圖片
    ├── footer                 頁尾用圖片
    ├── home                   首頁用到的圖片
    ├── icon                   在網站上使用的各式 icon
    ├── services               服務項目圖片
    ├── work                   與作品有關的圖片。
    │   └── modal              點擊作品後彈出的 Modal 內的圖片
    └── logo.svg               網站 Logo
```

```
lib
├── posts.json                 所有文章資料
├── blogCategories.js          文章分類與分類連結
├── works.js                   作品資料
├── serviceTypes.js            服務項目資料
└── useDialog.js               原生 dialog 的開關與關閉事件處理
```

## 使用的套件 & 工具

- [Embla Carousel](https://www.embla-carousel.com/)
- [TinyPNG](https://tinypng.com/)
- [ChatGPT 4](https://openai.com/)

## SEO 設定

- 採用 Next.js Metadata API，站點預設以「2024 體驗營切版任務二 by Aaron」為標題模板並套用至各頁面。
- 全站加入 description、Open Graph、Twitter Card 等基本欄位，並為部落格列表與單篇文章設定對應標題與敘述。

## 2024/05/16 助教修改建議

![](https://i.imgur.com/WBpnu7g.png)
