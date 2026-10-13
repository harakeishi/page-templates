# profile.js の書き方

`profile.js` は全デザイン共通の形式です。`window.PROFILE` にオブジェクトを入れます。

```js
window.PROFILE = {
  domain: "yourname.dev",
  name: "Your Name",
  description: "Your Name の自己紹介ページ。",
  tagline: "Your Name です。**Web サービスのバックエンド**を作っているエンジニアです。",
  accent: { light: "#2d4bf0", dark: "#8fa3ff" },
  txt: ["Your Name / software engineer"],
  sections: [ /* 下記 */ ]
};
```

## 項目

| 項目 | 必須 | 内容 |
| --- | --- | --- |
| `domain` | はい | 公開するドメイン |
| `name` | はい | 名前 |
| `description` | | 検索結果などに出るページの説明 |
| `tagline` | | 見出しの下の一文 |
| `accent` | | アクセントカラー。`light` と `dark` を指定できます |
| `txt` | | 短い紹介文の配列（英語推奨）。デザインによって使われ方が違います |
| `sections` | | 本文のセクションの配列。上から順に表示されます |

## sections

各セクションは `kind` で形が決まります。

| kind | 使う項目 | 内容 |
| --- | --- | --- |
| `text` | `paragraphs`（文字列の配列） | 段落 |
| `tags` | `items`（文字列の配列） | 技術や得意分野などの短い言葉 |
| `links` | `items`（`name` / `url` / `description` の配列） | つくったものやリンク |

すべてのセクションに `title`（見出し）を付けます。`type` はデザインが自由に使える短いラベルです（dig デザインでは大きな見出しとして表示されます）。

```js
{ type: "TXT", title: "わたしについて", kind: "text", paragraphs: ["…"] },
{ type: "HINFO", title: "使っている技術", kind: "tags", items: ["Go", "TypeScript"] },
{ type: "CNAME", title: "つくったもの", kind: "links", items: [
  { name: "awesome-cli", url: "https://github.com/yourname/awesome-cli", description: "便利な CLI。" }
] }
```

## 文章の書き方

`tagline`、`paragraphs`、`links` の `description` では次の書き方が使えます。

- `**強調**` → 強調表示
- `[リンク文字](https://example.com)` → リンク
