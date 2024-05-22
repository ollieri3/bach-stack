# Remix Bach Stack 🎼

![back-stach-lg](https://github.com/ollieri3/bach-stack/assets/19469640/37cbc9c2-6b27-4477-be17-94eae955611d)

Learn more about [Remix Stacks](https://remix.run/docs/en/main/guides/templates#stacks).

```shell
npx create-remix@latest --template ollieri3/bach-stack
```

## What's in the Bach Stack?

- Code formatting with [Prettier](https://prettier.io/)

## Development

Run the Vite dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
