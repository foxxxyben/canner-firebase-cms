# canner-firebase-cms + NextJS

[![](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/Canner/CannerCMS?utm_source=share-link&utm_medium=link&utm_campaign=share-link)

Canner CMS for Firebase with SSR supported ([NextJS](https://nextjs.org/docs/#setup)), for blog, ecommerce, mobile apps and even chatbot! This project is based on Canner, a open source CMS framework  https://www.canner.io/

## Deployment

### Now.sh

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/canner/canner-firebase-cms)

or

```
$ now
```

## Live demo

- Now: https://canner-firebase.now.sh/

## Tutorial

https://www.canner.io/docs/tutorial-community-firebase.html

## Preview

![preview](./preview/1.png)
![preview](./preview/2.png)
![preview](./preview/3.png)
![preview](./preview/4.png)

## How it works

It is based on Canner CMS framework (https://www.canner.io/), used `JSX` (canner-script) to declare how you Firebase data structure and UI in your CMS.

A simple blog post example:

![preview](./preview/syntax.png)


Learn how to write schema [canner-script](https://www.canner.io/docs/guides-writing-schema.html)

## Import default user

```
firebase auth:import firebase-default-user.json
```

### Default user

- **Username:** admin-test@canner.io
- **Password:** admin-test

## Development

```
npm run dev
```

## License

Apache license 2.0