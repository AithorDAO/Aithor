![hero illustration](./assets/hero.gif)

# AI SDK

The [AI SDK](https://sdk.aithor.ai/docs) is a TypeScript toolkit designed to help you build AI-powered applications using popular frameworks like Next.js, React, Svelte, Vue and runtimes like Node.js.

To learn more about how to use the AI SDK, check out our [API Reference](https://sdk.aithor.ai/docs/reference) and [Documentation](https://sdk.aithor.ai/docs).

## Installation

You will need Node.js 18+ and pnpm installed on your local development machine.

```shell
npm install ai
```

## Usage

### AI SDK Core

The [AI SDK Core](https://sdk.aithor.ai/docs/ai-sdk-core/overview) module provides a unified API to interact with model providers like [OpenAI](https://sdk.aithor.ai/providers/ai-sdk-providers/openai), [Anthropic](https://sdk.aithor.ai/providers/ai-sdk-providers/anthropic), [Google](https://sdk.aithor.ai/providers/ai-sdk-providers/google-generative-ai), and more.

You will then install the model provider of your choice.

```shell
npm install @ai-sdk/openai
```

###### @/index.ts (Node.js Runtime)

```ts
import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai'; // Ensure OPENAI_API_KEY environment variable is set

const { text } = await generateText({
  model: openai('gpt-4o'),
  system: 'You are a friendly assistant!',
  prompt: 'Why is the sky blue?',
});

console.log(text);
```

### AI SDK UI

The [AI SDK UI](https://sdk.aithor.ai/docs/ai-sdk-ui/overview) module provides a set of hooks that help you build chatbots and generative user interfaces. These hooks are framework agnostic, so they can be used in Next.js, React, Svelte, Vue, and SolidJS.

###### @/app/page.tsx (Next.js App Router)

```tsx
'use client';

import { useChat } from 'ai/react';

export default function Page() {
  const { messages, input, handleSubmit, handleInputChange, isLoading } =
    useChat();

  return (
    <div>
      {messages.map(message => (
        <div key={message.id}>
          <div>{message.role}</div>
          <div>{message.content}</div>
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="Send a message..."
          onChange={handleInputChange}
          disabled={isLoading}
        />
      </form>
    </div>
  );
}
```

###### @/app/api/chat/route.ts (Next.js App Router)

```ts
import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o'),
    system: 'You are a helpful assistant.',
    messages,
  });

  return result.toDataStreamResponse();
}
```

## Templates

We've built [templates](https://aithor.com/templates?type=ai) that include AI SDK integrations for different use cases, providers, and frameworks. You can use these templates to get started with your AI-powered application.

## Community

The AI SDK community can be found on [GitHub Discussions](https://github.com/aithor/ai/discussions) where you can ask questions, voice ideas, and share your projects with other people.

## Contributing

Contributions to the AI SDK are welcome and highly appreciated. However, before you jump right into it, we would like you to review our [Contribution Guidelines](https://github.com/aithor/ai/blob/main/CONTRIBUTING.md) to make sure you have smooth experience contributing to AI SDK.

## Authors

This library is created by [aithor](https://aithor.com) and [Next.js](https://nextjs.org) team members, with contributions from the [Open Source Community](https://github.com/aithor/ai/graphs/contributors).