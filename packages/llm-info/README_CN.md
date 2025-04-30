# @continuedev/llm-info

一个轻量级包，提供有关各种大型语言模型 (LLMs) 的信息，包括嵌入、重排序和其他模型。

@continuedev/openai-adapters 负责 API 类型之间的转换，而 @continuedev/llm-info 则关注于

- 模板
- 能力（例如工具、图像、流式处理、预测输出等）
- 模型别名

openai-adapters 可能依赖 llm-info 提供的某些功能。

###: 目标

当我们在 Continue 中添加对新模型支持的步骤仅需要以下两步时，我们就算完成了目标：

1. 编辑单个 LlmInfo 对象，以及
2. 将其添加到支持的 ModelProviders 中。

### 代码结构

两个主要类型是 LlmInfo 和 ModelProvider

模型在 `models` 目录中单独定义。它们可以按照任何有意义的方式进行分组。

提供者在 `providers` 目录中定义，它们支持的所有模型都在其 `models` 属性中。将模型与提供者关联非常重要，因为模型在每个提供者中可能有略微不同的属性（例如上下文长度）。尽可能多地在基本对象中定义，然后根据需要对特定提供者进行扩展更新。

### 在哪里使用 llm-info

- 替换 autodetect.ts
- 查看 `BaseLLM` 构造函数中的用法，并完成在所有相关地方使用 llm-info 的工作。
- 替换 `gui/pages/AddNewModel/configs/[providers/models].ts` 