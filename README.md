-   下記コマンドを実行する前に**frontend/app/**に**.env**ファイルを作成する。ファイルの内容は.env.sample を参考に Firebase からキーをそれぞれ記述する。

**起動時のコマンド**

```
docker-compose up -d --build && docker-compose exec api rails db:create && docker-compose exec front bash
```

```
npm install && npm start
```
