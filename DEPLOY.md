# デプロイ手順

このサイトは静的HTML/CSS/JSのみなので、無料サービスで誰でも数分で公開できます。

## 方法1: Netlify Drop（最速・登録不要も可）

1. ブラウザで https://app.netlify.com/drop を開く
2. このフォルダ（`セレクトショップ`）をそのままドラッグ&ドロップ
   - もしくは作成済みzip `/tmp/tokyo-select-shops.zip` をドロップ
3. 数秒で `https://◯◯◯.netlify.app` のURLが発行される
4. URLをチームに共有すれば全員が閲覧可能

## 方法2: GitHub Pages（独自URLで運用したい場合）

```bash
cd "/Users/tomoya/プロジェクト/セレクトショップ"
git init
git add index.html assets DEPLOY.md
git commit -m "init: Tokyo select shops map"
gh repo create tokyo-select-shops --public --source=. --push
gh api -X POST /repos/:owner/tokyo-select-shops/pages \
  -f "source[branch]=main" -f "source[path]=/"
```

数分後 `https://<ユーザー名>.github.io/tokyo-select-shops/` で公開されます。

## 方法3: Vercel CLI

```bash
cd "/Users/tomoya/プロジェクト/セレクトショップ"
npx vercel --prod
```

CLIの指示に従うだけでデプロイ完了。
