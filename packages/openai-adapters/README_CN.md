# OpenAI 适配器

OpenAI 适配器将 OpenAI 兼容请求转换为其他 API 的请求并返回结果。

它们纯粹是一个转换层，不关注：

- 模板
- 模型是否支持工具、图像等
- 动态更改模型的 API 基础地址
- 跟踪系统消息（它始终将是带有 systemMessage 的第一条消息）
- 保持私有变量及已通过 OpenAI 请求体传递的任何内容
- 在 apiBase 后附加"/"（但这是待办事项）
- 批量嵌入（是的，它需要一些关于最大批量大小的知识，但更重要的是保持 1 个请求 = 1 个响应）
- 如果未定义其中一种，则使用 streamChat 代替 streamComplete，反之亦然

目标是尽可能减少更改。只有当实际 API 格式发生变化时才需要更新。

它们关注：

- 转换模型别名
- 缓存行为
- 最大停止词数量
- 使用传统的完成接口？
- 客户端无法猜测的其他任何内容，因为它不会知道代理后面的端点

## 支持的 API

- [x] Anthropic
- [ ] AskSage
- [x] Azure
- [ ] Bedrock
- [ ] Bedrock Import
- [x] Cerebras
- [ ] Cloudflare
- [x] Cohere
- [x] DeepInfra
- [x] Deepseek
- [ ] Flowise
- [x] Function Network
- [x] Gemini
- [x] Groq
- [ ] HuggingFace Inference API
- [ ] HuggingFace TGI
- [x] Kindo
- [x] LMStudio
- [x] LlamaCpp
- [x] Llamafile
- [x] Msty
- [x] Mistral
- [x] Nvidia
- [x] Nebius
- [x] OpenRouter
- [x] OpenAI
- [ ] !Ollama
- [ ] Replicate
- [ ] SageMaker
- [x] SambaNova
- [x] Scaleway
- [ ] Silicon Flow
- [x] TextGen Web UI
- [x] Together
- [x] Novita AI
- [x] Vllm
- [ ] Vertex AI
- [x] Voyage AI
- [ ] WatsonX
- [x] xAI
- [x] Fireworks
- [x] Moonshot 