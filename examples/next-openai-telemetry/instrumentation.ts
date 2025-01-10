import { registerOTel } from '@aithor/otel';

export function register() {
  registerOTel({
    serviceName: 'next-app',
  });
}
