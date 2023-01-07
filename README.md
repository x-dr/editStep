# zeep life (小米运动) 刷步数，支持邮箱/手机账号
ip容易被限制，建议自建

### api

#### POST

```shell
curl --location --request POST 'https://step.451024.xyz/step' \
--header 'Content-Type: application/json' \
-d '{"u":"账号","p":"密码","s":"步数"}'
```
#### GET
```shell
curl  'https://step.451024.xyz/step?u=账号&p=密码&s=步数'
```
### 部署到Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/x-dr/editStep)

### Docker 部署

```shell
docker run -dit \
  -p 3051:8080 \
  --name editstep \
  --restart unless-stopped \
  gindex/editstep:latest

```
### 部署到heroku

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
