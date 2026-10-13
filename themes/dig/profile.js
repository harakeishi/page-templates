/*
 * dig-profile — 自分の内容に書き換えるファイルはこれだけです。
 *
 * 文章中では次の2つの書き方が使えます。
 *   **強調**            → 太字（濃い色）になります
 *   [リンク文字](URL)   → リンクになります
 */
window.PROFILE = {
  // サイトのドメイン。見出しの大きな文字と、ターミナルの dig コマンドに使われます。
  domain: "yourname.dev",

  // あなたの名前（タイトルやフッターに使われます）
  name: "Your Name",

  // ページの説明（検索結果などに出る文）
  description: "Your Name の自己紹介ページ。",

  // 見出しの下に出る一文
  tagline: "Your Name です。**Web サービスのバックエンド**を作っているエンジニアです。",

  // アクセントカラー（light: 明るい背景用 / dark: ダークモード用）
  accent: { light: "#2d4bf0", dark: "#8fa3ff" },

  // ターミナルの TXT レコードに出す短い文（英語推奨・1行ずつ）
  txt: [
    "Your Name / software engineer",
    "builds web services with Go and TypeScript",
    "loves readable code"
  ],

  // 各セクション。type は表示用のラベルで、DNS のレコードタイプ風に付けるのがおすすめです。
  //   kind: "text"     → 段落（paragraphs）
  //   kind: "tags"     → タグ一覧（items）。ターミナルの HINFO レコードにも出ます
  //   kind: "links"    → リポジトリなどのリンク一覧（items）。ターミナルの CNAME レコードにも出ます
  sections: [
    {
      type: "TXT",
      title: "わたしについて",
      kind: "text",
      paragraphs: [
        "ここに自己紹介を書きます。どんな仕事をしていて、何に関心があるのかを2〜3文で。",
        "段落はいくつでも増やせます。[リンク](https://example.com) も書けます。"
      ]
    },
    {
      type: "HINFO",
      title: "使っている技術",
      kind: "tags",
      items: ["Go", "TypeScript", "PostgreSQL", "Kubernetes", "API 設計"]
    },
    {
      type: "CNAME",
      title: "つくったもの",
      kind: "links",
      items: [
        { name: "awesome-cli", url: "https://github.com/yourname/awesome-cli", description: "ちょっと便利なコマンドラインツール。" },
        { name: "tiny-lib",    url: "https://github.com/yourname/tiny-lib",    description: "小さくて速いライブラリ。" }
      ]
    },
    {
      type: "TXT",
      title: "仕事のほかに",
      kind: "text",
      paragraphs: [
        "趣味や好きなことを書きます。",
        "コードは [GitHub](https://github.com/yourname) にあります。"
      ]
    }
  ]
};
