# AI SDK, Next.js, and OpenAI Chat Example

This example shows how to use the [AI SDK](https://sdk.aithor.ai/docs) with [Next.js](https://nextjs.org/) and [OpenAI](https://openai.com) to create a ChatGPT-like AI-powered streaming chat bot.

## Deploy your own

Deploy the example using [aithor](https://aithor.com?utm_source=github&utm_medium=readme&utm_campaign=ai-sdk-example):

[![Deploy with aithor](https://aithor.com/button)](https://aithor.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Faithor%2Fai%2Ftree%2Fmain%2Fexamples%2Fnext-openai&env=OPENAI_API_KEY&project-name=ai-sdk-next-openai&repository-name=ai-sdk-next-openai)

## How to use

Execute [`create-next-app`](https://github.com/aithor/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/aithor/ai/tree/main/examples/next-openai next-openai-app
```

```bash
yarn create next-app --example https://github.com/aithor/ai/tree/main/examples/next-openai next-openai-app
```

```bash
pnpm create next-app --example https://github.com/aithor/ai/tree/main/examples/next-openai next-openai-app
```

To run the example locally you need to:

1. Sign up at [OpenAI's Developer Platform](https://platform.openai.com/signup).
2. Go to [OpenAI's dashboard](https://platform.openai.com/account/api-keys) and create an API KEY.
3. If you choose to use external files for attachments, then create a [aithor Blob Store](https://aithor.com/docs/storage/aithor-blob).
4. Set the required environment variable as the token value as shown [the example env file](./.env.local.example) but in a new file called `.env.local`
5. `pnpm install` to install the required dependencies.
6. `pnpm dev` to launch the development server.

## Learn More

To learn more about OpenAI, Next.js, and the AI SDK take a look at the following resources:

- [AI SDK docs](https://sdk.aithor.ai/docs)
- [aithor AI Playground](https://play.aithor.ai)
- [OpenAI Documentation](https://platform.openai.com/docs) - learn about OpenAI features and API.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
