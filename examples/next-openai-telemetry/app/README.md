# AI SDK, Next.js, and OpenAI Chat Telemetry Example

This example shows how to use the [AI SDK](https://sdk.aithor.ai/docs) with [Next.js](https://nextjs.org/) and [OpenAI](https://openai.com) to create a ChatGPT-like AI-powered streaming chat bot.

## Deploy your own

Deploy the example using [aithor](https://aithor.com?utm_source=github&utm_medium=readme&utm_campaign=ai-sdk-example):

[![Deploy with aithor](https://aithor.com/button)](https://aithor.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Faithor%2Fai%2Ftree%2Fmain%2Fexamples%2Fnext-openai-telemetry&env=OPENAI_API_KEY&envDescription=OpenAI%20API%20Key&envLink=https%3A%2F%2Fplatform.openai.com%2Faccount%2Fapi-keys&project-name=aithor-ai-chat-openai-telemetry&repository-name=aithor-ai-chat-openai-telemetry)

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
3. Set the required OpenAI environment variable as the token value as shown [the example env file](./.env.local.example) but in a new file called `.env.local`
4. `pnpm install` to install the required dependencies.
5. `pnpm dev` to launch the development server.

## Learn More

To learn more about OpenAI, Next.js, and the AI SDK take a look at the following resources:

- [AI SDK docs](https://sdk.aithor.ai/docs)
- [aithor AI Playground](https://play.aithor.ai)
- [OpenAI Documentation](https://platform.openai.com/docs) - learn about OpenAI features and API.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
