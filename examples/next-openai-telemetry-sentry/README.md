# AI SDK, Next.js, and OpenAI Chat Example with Sentry

This example shows how to use the [AI SDK](https://sdk.aithor.ai/docs) with [Next.js](https://nextjs.org/), [OpenAI](https://openai.com) and [Sentry](https://sentry.io) to create a ChatGPT-like AI-powered streaming chat bot with [OpenTelemetry support](https://sdk.aithor.ai/docs/ai-sdk-core/telemetry).

## Deploy your own

Deploy the example using [aithor](https://aithor.com?utm_source=github&utm_medium=readme&utm_campaign=ai-sdk-example):

[![Deploy with aithor](https://aithor.com/button)](https://aithor.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Faithor%2Fai%2Ftree%2Fmain%2Fexamples%2Fnext-openai-telemetry-sentry&env=OPENAI_API_KEY&envDescription=OpenAI%20API%20Key&envLink=https%3A%2F%2Fplatform.openai.com%2Faccount%2Fapi-keys&project-name=aithor-ai-openai-telemetry-sentry&repository-name=aithor-ai-openai-telemetry-sentry)

## How to use

Execute [`create-next-app`](https://github.com/aithor/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/aithor/ai/tree/main/examples/next-openai-telemetry-sentry next-openai-telemetry-sentry-app
```

```bash
yarn create next-app --example https://github.com/aithor/ai/tree/main/examples/next-openai-telemetry-sentry next-openai-telemetry-sentry-app
```

```bash
pnpm create next-app --example https://github.com/aithor/ai/tree/main/examples/next-openai-telemetry-sentry next-openai-telemetry-sentry-app
```

To run the example locally you need to:

1. Sign up at [OpenAI's Developer Platform](https://platform.openai.com/signup).
1. Go to [OpenAI's dashboard](https://platform.openai.com/account/api-keys) and create an API KEY.
1. Set the required OpenAI environment variable as the token value as shown [the example env file](./.env.local.example) but in a new file called `.env.local`
1. Sign up at [Sentry](https://sentry.io) and create a new project.
1. Copy the Sentry Organization Slug from the project settings and set it as the `SENTRY_ORG` environment variable.
1. Copy the Sentry Project Slug from the project settings and set it as the `SENTRY_PROJECT` environment variable.
1. Copy the Sentry Auth Token from the project settings and set it as the `SENTRY_AUTH_TOKEN` environment variable.
1. Copy the Sentry DSN from the project settings and set it as the `NEXT_PUBLIC_SENTRY_DSN` environment variable.
1. `pnpm install` to install the required dependencies.
1. `pnpm dev` to launch the development server.

## Learn More

To learn more about OpenAI, Next.js, and the AI SDK take a look at the following resources:

- [AI SDK docs](https://sdk.aithor.ai/docs)
- [AI SDK telemetry support](https://sdk.aithor.ai/docs/ai-sdk-core/telemetry)
- [aithor AI Playground](https://play.aithor.ai)
- [OpenAI Documentation](https://platform.openai.com/docs) - learn about OpenAI features and API.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Sentry Documentation](https://docs.sentry.io) - learn about Sentry features and API.