# OpenAI 适配器

OpenAI 适配器将 OpenAI 兼容的请求转换为另一个 API 的请求，并进行回传。

它们纯粹是一个转换层，不关注：

- 模板
- 模型是否支持工具、图像等
- 动态更改模型的 API 基础地址
- 跟踪系统消息（它始终是具有 systemMessage 的第一条消息）
- 保留已通过 OpenAI 请求体传递的任何内容的私有变量
- 在 apiBase 上附加 "/"（但这是待办事项）
- 批处理嵌入（是的，它需要一些关于最大批处理大小的知识，但保持 1 个请求 = 1 个请求更重要）
- 如果未定义其中一个，则使用 streamChat 代替 streamComplete，反之亦然

目标是使这个尽可能少地变化。只有当实际 API 格式发生变化时才应该需要更新。

它们关注：

- 转换模型别名
- 缓存行为
- 最大停止词数
- 使用旧版完成端点？
- 任何其他客户端无法猜测的内容，因为它不会知道代理后面的端点

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