# Remix Bach Stack 🎼

![back-stach-lg](https://github.com/ollieri3/bach-stack/assets/19469640/37cbc9c2-6b27-4477-be17-94eae955611d)

Learn more about [Remix Stacks](https://remix.run/docs/en/main/guides/templates#stacks).

```shell
npx create-remix@latest --template ollieri3/bach-stack
```

## What's in the Bach Stack?

- Database storage using [PostgreSQL](https://www.postgresql.org/)
- ORM & Migrations with [Drizzle & Drizzle Kit](https://orm.drizzle.team/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Schema Validation using [Zod](https://zod.dev/)
- Code formatting with [Prettier](https://prettier.io/)
- Pre-commit hooks with [Husky](https://typicode.github.io/husky/) & [lint-staged](https://github.com/lint-staged/lint-staged)

### Other goodies ✨

- Opinionated ESLint configuration.
- Type-safe environment variables for both client & server.

## Requirements

- Node
- Docker

## Documentation todo:

- Add info on using env variables on Client/Server.

## Getting Started

- Add notes on .env.example file (or do it automatically using remix start scripts).

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
