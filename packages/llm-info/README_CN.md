# @continuedev/llm-info

一个轻量级软件包，提供关于各种大型语言模型（LLMs）的信息，包括嵌入、重排序和其他模型。

而 @continuedev/openai-adapters 负责 API 类型之间的转换，@continuedev/llm-info 则关注：

- 模板
- 能力（例如工具、图像、流式处理、预测输出等）
- 模型别名

openai-adapters 可能会依赖 llm-info 获取其中一些信息。

### 目标

当在 Continue 中添加对新模型支持的步骤仅为以下两步时，我们就完成了目标：

1. 编辑单个 LlmInfo 对象，以及
2. 将其添加到支持的 ModelProviders 中。

### 代码结构

两个主要类型是 LlmInfo 和 ModelProvider

模型在 `models` 目录中单独定义。它们可以按照任何有意义的方式分组。

提供者在 `providers` 目录中定义，其支持的所有模型都在其 `models` 属性中。将模型与提供者绑定很重要，因为模型在每个提供者中可能有略微不同的属性（例如上下文长度）。尽可能多地在基础对象中定义，然后通过展开运算符为特定提供者进行必要的更新。

### 在哪里使用 llm-info

- 替换 autodetect.ts
- 参见 `BaseLLM` 构造函数中的用法，并完成在所有相关地方使用 llm-info 的工作。
- 替换 `gui/pages/AddNewModel/configs/[providers/models].ts` 