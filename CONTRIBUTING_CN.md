# 为 Continue 做贡献

## 目录

- [为 Continue 做贡献](#为-continue-做贡献)
  - [目录](#目录)
- [❤️ 贡献方式](#️-贡献方式)
  - [👋 Continue 贡献想法](#-continue-贡献想法)
  - [🐛 报告 Bug](#-报告-bug)
  - [✨ 提出改进建议](#-提出改进建议)
  - [📖 更新/改进文档](#-更新改进文档)
    - [本地运行文档服务器](#本地运行文档服务器)
      - [方法 1: NPM 脚本](#方法-1-npm-脚本)
      - [方法 2: VS Code 任务](#方法-2-vs-code-任务)
  - [🧑‍💻 贡献代码](#-贡献代码)
    - [环境设置](#环境设置)
      - [前提条件](#前提条件)
      - [Fork Continue 仓库](#fork-continue-仓库)
      - [VS Code](#vs-code)
        - [调试](#调试)
      - [JetBrains](#jetbrains)
    - [我们的 Git 工作流](#我们的-git-工作流)
    - [测试](#测试)
    - [格式化](#格式化)
    - [编写斜杠命令](#编写斜杠命令)
    - [编写上下文提供者](#编写上下文提供者)
    - [添加 LLM 提供者](#添加-llm-提供者)
    - [添加模型](#添加模型)
    - [添加预索引文档](#添加预索引文档)
  - [📐 Continue 架构](#-continue-架构)
    - [Continue VS Code 扩展](#continue-vs-code-扩展)
    - [Continue JetBrains 扩展](#continue-jetbrains-扩展)

# ❤️ 贡献方式

## 👋 Continue 贡献想法

[这个 GitHub 项目看板](https://github.com/orgs/continuedev/projects/2) 列出了可以贡献 Continue 的想法。这些并不是唯一的方式，但如果你是项目新手，它们是很好的起点。

## 🐛 报告 Bug

如果你发现了 Bug，请[创建一个问题](https://github.com/continuedev/continue/issues)来报告！一个好的 Bug 报告包括：

- Bug 的描述
- 复现步骤
- 期望发生的情况
- 实际发生的情况
- 截图或视频

## ✨ 提出改进建议

Continue 正在快速添加功能，我们很想听听哪些对你最重要。提出改进建议的最佳方式是：

- 创建问题

  - 首先，检查是否已经有类似的提议
  - 如果没有，[创建一个问题](https://github.com/continuedev/continue/issues)
  - 请尽可能详细地描述改进建议，以及为什么它有用

- 加入 [Continue Discord](https://discord.gg/NWtdYexhMs) 并在 `#feedback` 频道告诉我们你的想法

## 📖 更新/改进文档

Continue 正在不断改进，但一个功能只有在文档中反映出来才算完成！如果你看到过时或缺失的内容，可以通过点击 [docs.continue.dev](https://docs.continue.dev) 任何页面底部的"编辑此页面"来帮助。

### 本地运行文档服务器

你可以使用以下任一方法在本地运行文档服务器：

#### 方法 1: NPM 脚本

1. 打开终端并导航到项目的 `docs` 子目录。你看到的 `docusaurus.config.js` 文件表明你在正确的位置。

2. 运行以下命令安装文档服务器所需的依赖项：

   ```bash
   npm install
   ```

3. 运行以下命令启动文档服务器：

   ```bash
   npm run start
   ```

#### 方法 2: VS Code 任务

1. 在项目的根目录中打开 VS Code。

2. 打开 VS Code 命令面板 (`cmd/ctrl+shift+p`) 并选择 `Tasks: Run Task`。

3. 查找 `docs:start` 任务并选择它。

这将启动本地服务器，你可以在默认浏览器中看到渲染的文档，通常可以通过 `http://localhost:3000` 访问。

## 🧑‍💻 贡献代码

### 环境设置

#### 前提条件

你应该安装 Node.js 版本 20.11.0 (LTS) 或更高版本。你可以在 [nodejs.org](https://nodejs.org/en/download) 获取，或者，如果你使用 NVM（Node 版本管理器），可以通过在项目根目录运行以下命令来为该项目设置正确的 Node.js 版本：

```bash
nvm use
```

#### Fork Continue 仓库

1. 前往 [Continue GitHub 仓库](https://github.com/continuedev/continue) 并将其 fork 到你的 GitHub 账户。

2. 将 fork 的仓库克隆到本地机器。使用：`git clone https://github.com/YOUR_USERNAME/continue.git`

3. 导航到克隆的目录并确保你在主分支上。从那里创建你的功能/修复分支，如：`git checkout -b 123-my-feature-branch`

4. 将你的拉取请求发送到主分支。

#### VS Code

1. 打开 VS Code 命令面板 (`cmd/ctrl+shift+p`) 并选择 `Tasks: Run Task`，然后选择 `install-all-dependencies`

2. 开始调试：

   1. 切换到运行和调试视图
   2. 从下拉菜单中选择 `Launch extension`
   3. 点击播放按钮
   4. 这将以调试模式启动扩展并打开一个安装了它的新 VS Code 窗口
      1. 带有扩展的新 VS Code 窗口被称为 _Host VS Code_
      2. 你开始调试的窗口被称为 _Main VS Code_

3. 要打包扩展，在 `extensions/vscode` 目录中运行 `npm run package`，选择 `Tasks: Run Task` 然后选择 `vscode-extension:package`。这将生成 `extensions/vscode/build/continue-{VERSION}.vsix`，你可以通过右键单击并选择"安装扩展 VSIX"来安装它。

##### 调试

**断点**可以在调试时在 `core` 和 `extensions/vscode` 文件夹中使用，但目前不支持在 `gui` 代码内部使用。

**热重载**通过 Vite 启用，所以如果你对 `gui` 进行任何更改，它们应该会自动反映，无需重新构建。在某些情况下，你可能需要刷新 _Host VS Code_ 窗口来查看更改。

同样，对 `core` 或 `extensions/vscode` 的任何更改都会通过使用 cmd/ctrl+shift+p "重新加载窗口"刷新 _Host VS Code_ 窗口自动包含。

#### JetBrains

请参见 JetBrains 扩展的 [`CONTRIBUTING.md`](./extensions/intellij/CONTRIBUTING.md)。

### 我们的 Git 工作流

我们保留一个永久分支：`main`。当我们准备创建"预发布"版本时，我们在 `main` 分支上创建一个标题为 `v0.9.x-vscode` 的标签，这会自动触发 [preview.yaml](./.github/workflows/preview.yaml) 中的工作流，该工作流会构建并发布 VS Code 扩展的版本。当一个版本经过充分测试后，我们将创建一个新的标题为 `v0.8.x-vscode` 的发布，触发 [main.yaml](./.github/workflows/main.yaml) 中的类似工作流，该工作流将构建并发布 VS Code 扩展的主要版本。任何热修复都可以通过从相关发布的标签创建功能分支来完成。这个工作流在 <http://releaseflow.org> 中有很好的解释。

### 测试

我们有单元测试、功能测试和端到端测试套件的混合，主要关注功能测试。这些测试在每个拉取请求上运行。如果你的 PR 导致这些测试中的一个失败，我们将要求你在合并前解决这个问题。

在贡献时，请更新或创建适当的测试，帮助验证你的实现的正确性。

### 格式化

Continue 使用 [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 格式化 JavaScript/TypeScript。请在 VS Code 中安装 Prettier 扩展并在你的设置中启用"保存时格式化"。

### 编写斜杠命令

斜杠命令接口，在 [core/index.d.ts](./core/index.d.ts) 中定义，要求你定义一个 `name`（用于调用命令的文本）、一个 `description`（在斜杠命令菜单中显示的文本）和一个在调用命令时会被调用的 `run` 函数。`run` 函数是一个异步生成器，它生成要在聊天中显示的内容。`run` 函数接收一个 `ContinueSDK` 对象，该对象可用于与 IDE 交互、调用 LLM 以及查看聊天历史记录等其他一些实用工具。

```ts
export interface SlashCommand {
  name: string;
  description: string;
  params?: { [key: string]: any };
  run: (sdk: ContinueSDK) => AsyncGenerator<string | undefined>;
}
```

在 [core/commands/slash](./core/commands/slash) 中有许多斜杠命令的例子，我们建议借鉴这些例子。一旦你在这个文件夹中创建了新的 `SlashCommand`，也请确保完成以下操作：

- 将你的命令添加到 [core/commands/slash/index.ts](./core/commands/slash/index.ts) 的数组中
- 将你的命令添加到 [`config_schema.json`](./extensions/vscode/config_schema.json) 的列表中。这确保了当用户编辑 `config.json` 时，Intellisense 会显示你的提供者可用的命令。如果你的命令接受任何参数，你还应该按照现有示例将其添加到 JSON Schema 中。

### 编写上下文提供者

`ContextProvider` 是一个 Continue 插件，让你可以输入 '@' 来快速选择文档作为语言模型的上下文。`IContextProvider` 接口在 [`core/index.d.ts`](./core/index.d.ts) 中定义，但所有内置上下文提供者都扩展了 [`BaseContextProvider`](./core/context/index.ts)。

在定义上下文提供者之前，确定你想创建的"类型"。`"query"` 类型在选择时会显示一个小的文本输入框，让用户有机会输入类似于 [`GoogleContextProvider`](./core/context/providers/GoogleContextProvider.ts) 的 Google 搜索查询。`"submenu"` 类型将打开一个可以搜索和选择的项目子菜单。例如 [`GitHubIssuesContextProvider`](./core/context/providers/GitHubIssuesContextProvider.ts) 和 [`DocsContextProvider`](./core/context/providers/DocsContextProvider.ts)。`"normal"` 类型将立即添加上下文项。例如包括 [`DiffContextProvider`](./core/context/providers/DiffContextProvider.ts) 和 [`OpenFilesContextProvider`](./core/context/providers/OpenFilesContextProvider.ts)。

编写完上下文提供者后，确保完成以下操作：

- 将其添加到 [core/context/providers/index.ts](./core/context/providers/index.ts) 的上下文提供者数组中
- 将其添加到 [core/index.d.ts](./core/index.d.ts) 中的 `ContextProviderName` 类型中
- 将其添加到 [`config_schema.json`](./extensions/vscode/config_schema.json) 的列表中。如果你的上下文提供者接受任何参数，你还应该按照现有示例将其添加到 JSON Schema 中。

### 添加 LLM 提供者

Continue 支持十多个不同的 LLM "提供者"，使其可以轻松使用运行在 OpenAI、Ollama、Together、LM Studio、Msty 等平台上的模型。你可以在[这里](https://github.com/continuedev/continue/tree/main/core/llm/llms)找到所有现有提供者，如果你发现缺少一个，可以通过以下步骤添加：

1. 在 `core/llm/llms` 目录中创建一个新文件。文件名应该是提供者的名称，它应该导出一个扩展 `BaseLLM` 的类。这个类应该包含以下最小实现。我们建议查看已有的提供者了解更多细节。[LlamaCpp Provider](./core/llm/llms/LlamaCpp.ts) 是一个很好的简单例子。

- `providerName` - 你的提供者的标识符。
- 至少实现 `_streamComplete` 或 `_streamChat` 中的一个 - 这是向 API 发出请求并返回流式响应的函数。你只需要实现一个，因为 Continue 可以自动在"聊天"和"原始完成"之间进行转换。

2. 将你的提供者添加到 [core/llm/llms/index.ts](./core/llm/llms/index.ts) 中的 `LLMs` 数组。
3. 如果你的提供者支持图像，将其添加到 [core/llm/autodetect.ts](./core/llm/autodetect.ts) 中的 `PROVIDER_SUPPORTS_IMAGES` 数组。
4. 在 [`config_schema.json`](./extensions/vscode/config_schema.json) 中添加必要的 JSON Schema 类型。这确保了当用户编辑 `config.json` 时，Intellisense 会显示你的提供者可用的选项。
5. 在 [`docs/docs/customize/model-providers`](./docs/docs/customize/model-providers) 中为你的提供者添加文档页面。这应该展示在 `config.json` 中配置你的提供者的示例，并解释有哪些可用选项。

### 添加模型

虽然任何与支持的提供者兼容的模型都可以与 Continue 一起使用，但我们保留了一个可以从 UI 或 `config.json` 自动配置的推荐模型列表。添加模型时应更新以下文件：

- [config_schema.json](./extensions/vscode/config_schema.json) - 这是用于验证 `config.json` 的 JSON Schema 定义。你会注意到在 "definitions.ModelDescription.allOf" 中定义了许多规则。在这里你可以编写规则，指定诸如"对于提供者 'anthropic'，只允许模型 'claude-2' 和 'claude-instant-1'"之类的内容。浏览所有这些规则，确保你的模型包含在支持它的提供者中。
- [AddNewModel 页面](./gui/src/pages/AddNewModel) - 这个目录定义了侧边栏模型选择 UI 中显示的模型选项。要添加新模型：
  1. 在 [configs/models.ts](./gui/src/pages/AddNewModel/configs/models.ts) 中为模型添加一个 `ModelPackage` 条目，参照文件顶部的众多示例
  2. 将模型添加到 [AddNewModel.tsx](./gui/src/pages/AddNewModel/AddNewModel.tsx) 中其提供者的数组中（如果需要，添加提供者）
- [index.d.ts](./core/index.d.ts) - 这个文件定义了 Continue 中使用的 TypeScript 类型。你会找到一个 `ModelName` 类型。确保将你的模型名称添加到这里。
- LLM 提供者：由于许多提供者使用自己的自定义字符串来标识模型，你必须添加从 Continue 的模型名称（你添加到 `index.d.ts` 的那个）到这些提供者的模型字符串的转换：[Ollama](./core/llm/llms/Ollama.ts)、[Together](./core/llm/llms/Together.ts) 和 [Replicate](./core/llm/llms/Replicate.ts)。你可以在这里找到它们的完整模型列表：[Ollama](https://ollama.ai/library)、[Together](https://docs.together.ai/docs/inference-models)、[Replicate](https://replicate.com/collections/streaming-language-models)。
- [提示模板](./core/llm/index.ts) - 在这个文件中你会找到 `autodetectTemplateType` 函数。确保对于你刚刚添加的模型名称，这个函数返回正确的模板类型。这假设该模型的聊天模板已经内置在 Continue 中。如果没有，你将需要添加模板类型和相应的编辑和聊天模板。

### 添加预索引文档

Continue 的 @docs 上下文提供者让你可以轻松引用整个文档站点，然后使用嵌入将最相关的页面添加到上下文中。为了使体验尽可能流畅，我们预先索引了许多最流行的文档站点。如果你想向这个列表添加新文档，只需在 [preIndexedDocs.ts](./core/indexing/docs/preIndexedDocs.ts) 中的列表中添加一个对象。`startUrl` 是爬虫开始的地方，`rootUrl` 将过滤掉不在该站点上且不在 `rootUrl` 路径下的任何页面。

## 📐 Continue 架构

Continue 由 2 个部分组成，它们被分开，以便可以尽可能容易地扩展到其他 IDE 中：

1. **Continue GUI** - Continue GUI 是一个 React 应用程序，它让用户控制 Continue。它显示当前聊天历史，允许用户提问、调用斜杠命令和使用上下文提供者。GUI 还处理大多数状态，并尽可能多地保存逻辑，以便在 IDE 之间重用。

2. **Continue 扩展** - Continue 扩展是 IDE 的插件，它实现了 [IDE 接口](./core/index.d.ts#L229)。这允许 GUI 请求信息或在 IDE 内执行操作。无论使用哪种 IDE，都使用相同的接口。我们构建的第一个 Continue 扩展是针对 VS Code 和 JetBrains 的，但我们计划在未来为其他 IDE 构建客户端。IDE 客户端必须 1. 实现 IDE 接口，如 VS Code 的[这里](./extensions/vscode/src/ideProtocol.ts)所做的那样，2. 在侧边栏中显示 Continue GUI，如[这里](./extensions/vscode/src/ContinueGUIWebviewViewProvider.ts)。

### Continue VS Code 扩展

VS Code 扩展的起点是 [activate.ts](./extensions/vscode/src/activation/activate.ts)。这里的 `activateExtension` 函数将注册所有命令并在 IDE 的侧边栏中加载 Continue GUI 作为 webview。

### Continue JetBrains 扩展

JetBrains 扩展目前正在进行 alpha 测试。如果你有兴趣为其开发做出贡献，请在 [Discord](https://discord.gg/vapESyrFmJ) 上联系我们。 