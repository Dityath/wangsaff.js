# whatsapp-automation

Mengcoba-coba bikin bot buat whatsapp. Kalo mau pake tinggal clone dari repo ini, terus jalanin `npm install`, kalo udah langsung aja cobain `npm run dev`, abis itu buka app.js untuk ngedevelop appnya. Proses development sama deployment lebih lengkapnya bisa cek [dibawah](##Development).

Kalau mau fetch api bisa pakai Axios(udah diinstall), atau bisa pakai pilihan lainnya(bebas kumaha sia weh).

Dokumentasi lebih lanjut:

- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js/)
- [axios](https://github.com/axios/axios)

## Development

NPM and node js required

### Run development server

Using nodemon as node runtime

```bash
npm run dev
```

### Run server

Without nodemon, highly recommended for deployment server since it way more stable

```bash
npm run start
```

### Reset login session

Reset the current login session in whatsapp client

```bash
npm run reset
```

## Deployment

### Docker

Installing a browser using browserless

```bash
docker run \
  --rm \
  -p 3000:3000 \
  -e "MAX_CONCURRENT_SESSIONS=1" \
  browserless/chrome:latest
```
