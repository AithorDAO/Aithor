import { azure } from '@ai-sdk/azure';
import { streamText } from 'ai';
import 'dotenv/config';
import { z } from 'zod';
import { weatherTool } from '../tools/weather-tool';

async function main() {
  const result = streamText({
    model: azure('v0-gpt-35-turbo'), // use your own deployment
    tools: {
      weather: weatherTool,
      cityAttractions: {
        parameters: z.object({ city: z.string() }),
      },
    },
    prompt: 'What is the weather in San Francisco?',
  });

  for await (const part of result.fullStream) {
    switch (part.type) {
      case 'text-delta': {
        console.log('Text delta:', part.textDelta);
        break;
      }

      case 'tool-call': {
        switch (part.toolName) {
          case 'cityAttractions': {
            console.log('TOOL CALL cityAttractions');
            console.log(`city: ${part.args.city}`); // string
            break;
          }

          case 'weather': {
            console.log('TOOL CALL weather');
            console.log(`location: ${part.args.location}`); // string
            break;
          }
        }

        break;
      }

      case 'tool-result': {
        switch (part.toolName) {
          // NOT AVAILABLE (NO EXECUTE METHOD)
          // case 'cityAttractions': {
          //   console.log('TOOL RESULT cityAttractions');
          //   console.log(`city: ${part.args.city}`); // string
          //   console.log(`result: ${part.result}`);
          //   break;
          // }

          case 'weather': {
            console.log('TOOL RESULT weather');
            console.log(`location: ${part.args.location}`); // string
            console.log(`temperature: ${part.result.temperature}`); // number
            break;
          }
        }

        break;
      }

      case 'error':
        console.error('Error:', part.error);
        break;
    }
  }
}

main().catch(console.error);