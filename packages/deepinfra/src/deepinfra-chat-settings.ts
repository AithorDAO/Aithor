import { OpenAICompatibleChatSettings } from '@ai-sdk/openai-compatible';

// https://deepinfra.com/models/text-generation
export type DeepInfraChatModelId =
  | 'meta-llama/Llama-3.3-70B-Instruct'
  | 'meta-llama/Llama-3.3-70B-Instruct-Turbo'
  | 'meta-llama/Meta-Llama-3.1-70B-Instruct'
  | 'meta-llama/Meta-Llama-3.1-8B-Instruct'
  | 'meta-llama/Meta-Llama-3.1-405B-Instruct'
  | 'Qwen/QwQ-32B-Preview'
  | 'meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo'
  | 'meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo'
  | 'Qwen/Qwen2.5-Coder-32B-Instruct'
  | 'nvidia/Llama-3.1-Nemotron-70B-Instruct'
  | 'Qwen/Qwen2.5-72B-Instruct'
  | 'meta-llama/Llama-3.2-90B-Vision-Instruct'
  | 'meta-llama/Llama-3.2-11B-Vision-Instruct'
  | 'microsoft/WizardLM-2-8x22B'
  | '01-ai/Yi-34B-Chat'
  | 'Austism/chronos-hermes-13b-v2'
  | 'Gryphe/MythoMax-L2-13b'
  | 'Gryphe/MythoMax-L2-13b-turbo'
  | 'HuggingFaceH4/zephyr-orpo-141b-A35b-v0.1'
  | 'KoboldAI/LLaMA2-13B-Tiefighter'
  | 'NousResearch/Hermes-3-Llama-3.1-405B'
  | 'Phind/Phind-CodeLlama-34B-v2'
  | 'Qwen/Qwen2-72B-Instruct'
  | 'Qwen/Qwen2-7B-Instruct'
  | 'Qwen/Qwen2.5-7B-Instruct'
  | 'Qwen/Qwen2.5-Coder-7B'
  | 'Sao10K/L3-70B-Euryale-v2.1'
  | 'Sao10K/L3-8B-Lunaris-v1'
  | 'Sao10K/L3.1-70B-Euryale-v2.2'
  | 'bigcode/starcoder2-15b'
  | 'bigcode/starcoder2-15b-instruct-v0.1'
  | 'codellama/CodeLlama-34b-Instruct-hf'
  | 'codellama/CodeLlama-70b-Instruct-hf'
  | 'cognitivecomputations/dolphin-2.6-mixtral-8x7b'
  | 'cognitivecomputations/dolphin-2.9.1-llama-3-70b'
  | 'databricks/dbrx-instruct'
  | 'deepinfra/airoboros-70b'
  | 'deepseek-ai/DeepSeek-V3'
  | 'google/codegemma-7b-it'
  | 'google/gemma-1.1-7b-it'
  | 'google/gemma-2-27b-it'
  | 'google/gemma-2-9b-it'
  | 'lizpreciatior/lzlv_70b_fp16_hf'
  | 'mattshumer/Reflection-Llama-3.1-70B'
  | 'meta-llama/Llama-2-13b-chat-hf'
  | 'meta-llama/Llama-2-70b-chat-hf'
  | 'meta-llama/Llama-2-7b-chat-hf'
  | 'meta-llama/Llama-3.2-1B-Instruct'
  | 'meta-llama/Llama-3.2-3B-Instruct'
  | 'meta-llama/Meta-Llama-3-70B-Instruct'
  | 'meta-llama/Meta-Llama-3-8B-Instruct'
  | 'microsoft/Phi-3-medium-4k-instruct'
  | 'microsoft/WizardLM-2-7B'
  | 'mistralai/Mistral-7B-Instruct-v0.1'
  | 'mistralai/Mistral-7B-Instruct-v0.2'
  | 'mistralai/Mistral-7B-Instruct-v0.3'
  | 'mistralai/Mistral-Nemo-Instruct-2407'
  | 'mistralai/Mixtral-8x22B-Instruct-v0.1'
  | 'mistralai/Mixtral-8x22B-v0.1'
  | 'mistralai/Mixtral-8x7B-Instruct-v0.1'
  | 'nvidia/Nemotron-4-340B-Instruct'
  | 'openbmb/MiniCPM-Llama3-V-2_5'
  | 'openchat/openchat-3.6-8b'
  | 'openchat/openchat_3.5'
  | (string & {});

export interface DeepInfraChatSettings extends OpenAICompatibleChatSettings {}