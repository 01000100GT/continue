# 贡献到 Continue

## 目录

- [贡献到 Continue](#贡献到-continue)
  - [目录](#目录)
- [❤️ 贡献方式](#️-贡献方式)
  - [👋 Continue 贡献创意](#-continue-贡献创意)
  - [🐛 报告错误](#-报告错误)
  - [✨ 提出增强建议](#-提出增强建议)
  - [📖 更新/改进文档](#-更新改进文档)
    - [在本地运行文档服务器](#在本地运行文档服务器)
      - [方法一：NPM 脚本](#方法一npm-脚本)
      - [方法二：VS Code 任务](#方法二vs-code-任务)
  - [🧑‍💻 贡献代码](#-贡献代码)
    - [环境设置](#环境设置)
      - [前提条件](#前提条件)
      - [Fork Continue 仓库](#fork-continue-仓库)
      - [VS Code](#vs-code)
        - [调试](#调试)
      - [JetBrains](#jetbrains)
    - [我们的 Git 工作流程](#我们的-git-工作流程)
    - [测试](#测试)
    - [格式化](#格式化)
    - [编写斜杠命令](#编写斜杠命令)
    - [编写上下文提供者](#编写上下文提供者)
    - [添加 LLM 提供者](#添加-llm-提供者)
    - [添加模型](#添加模型)
  - [📐 Continue 架构](#-continue-架构)
    - [Continue VS Code 扩展](#continue-vs-code-扩展)
    - [Continue JetBrains 扩展](#continue-jetbrains-扩展)

# ❤️ 贡献方式

## 👋 Continue 贡献创意

[这个 GitHub 项目板](https://github.com/orgs/continuedev/projects/2)列出了您可以贡献给 Continue 的创意。这些并不是唯一的方式，但如果您是该项目的新手，这是一个很好的起点。

## 🐛 报告错误

如果您发现错误，请[创建一个 issue](https://github.com/continuedev/continue/issues) 来报告！一个好的错误报告包括：

- 错误的描述
- 重现步骤
- 您期望发生的事情
- 实际发生的事情
- 截图或视频

## ✨ 提出增强建议

Continue 正在快速添加功能，我们很想听取哪些对您最重要。提出增强建议的最佳方式是：

- 创建 issue

  - 首先，检查是否已经有类似的提案
  - 如果没有，[创建一个 issue](https://github.com/continuedev/continue/issues)
  - 请尽可能详细地描述增强建议，以及为什么它会有用

- 加入 [Continue Discord](https://discord.gg/NWtdYexhMs) 并在 `#feedback` 频道中告诉我们您的想法

## 📖 更新/改进文档

Continue 在不断改进，但一个功能只有在文档中反映出来后才算完成！如果您看到过时或缺失的内容，可以通过点击 [docs.continue.dev](https://docs.continue.dev) 上任何页面底部的"编辑此页面"来提供帮助。

### 在本地运行文档服务器

您可以使用以下任一方法在本地运行文档服务器：

#### 方法一：NPM 脚本

1. 打开终端并导航到项目的 `docs` 子目录。您看到的 `docusaurus.config.js` 文件表明您在正确的位置。

2. 运行以下命令安装文档服务器所需的依赖项：

   ```bash
   npm install
   ```

3. 运行以下命令启动文档服务器：

   ```bash
   npm run start
   ```

#### 方法二：VS Code 任务

1. 在项目的根目录中打开 VS Code。

2. 打开 VS Code 命令面板（`cmd/ctrl+shift+p`）并选择 `Tasks: Run Task`。

3. 查找 `docs:start` 任务并选择它。

这将启动本地服务器，您可以在默认浏览器中查看渲染的文档，通常可在 `http://localhost:3000` 访问。

## 🧑‍💻 贡献代码

### 环境设置

#### 前提条件

您应该安装 Node.js 版本 20.11.0 (LTS) 或更高版本。您可以在 [nodejs.org](https://nodejs.org/en/download) 获取，或者，如果您使用 NVM（Node 版本管理器），您可以通过在项目根目录中运行以下命令为该项目设置正确的 Node.js 版本：

```bash
nvm use
```

#### Fork Continue 仓库

1. 前往 [Continue GitHub 仓库](https://github.com/continuedev/continue) 并将其 fork 到您的 GitHub 账户。

2. 将您的 fork 仓库克隆到本地机器。使用：`git clone https://github.com/YOUR_USERNAME/continue.git`

3. 导航到克隆的目录并确保您在主分支上。从那里创建您的功能/修复分支，如下所示：`git checkout -b 123-my-feature-branch`

4. 将您的 pull request 发送到主分支。

#### VS Code

1. 打开 VS Code 命令面板（`cmd/ctrl+shift+p`）并选择 `Tasks: Run Task`，然后选择 `install-all-dependencies`

2. 开始调试：

   1. 切换到运行和调试视图
   2. 从下拉菜单中选择 `Launch extension`
   3. 点击播放按钮
   4. 这将以调试模式启动扩展并打开一个新的安装了扩展的 VS Code 窗口
      1. 安装了扩展的新 VS Code 窗口被称为 _Host VS Code_
      2. 您开始调试的窗口被称为 _Main VS Code_

3. 要打包扩展，在 `extensions/vscode` 目录中运行 `npm run package`，选择 `Tasks: Run Task`，然后选择 `vscode-extension:package`。这将生成 `extensions/vscode/build/continue-{VERSION}.vsix`，您可以通过右键单击并选择"安装扩展 VSIX"来安装它。

##### 调试

在调试时，可以在 `core` 和 `extensions/vscode` 文件夹中使用**断点**，但目前不支持在 `gui` 代码中使用断点。

通过 Vite 启用了**热重载**，所以如果您对 `gui` 进行任何更改，这些更改应该会自动反映，无需重新构建。在某些情况下，您可能需要刷新 _Host VS Code_ 窗口才能看到更改。

同样，对 `core` 或 `extensions/vscode` 的任何更改只需通过 cmd/ctrl+shift+p "Reload Window" 重新加载 _Host VS Code_ 窗口即可自动包含。

#### JetBrains

有关 JetBrains 扩展，请参阅 [`intellij/CONTRIBUTING.md`](./extensions/intellij/CONTRIBUTING.md)。

### 我们的 Git 工作流程

我们保持一个永久分支：`main`。当我们准备创建"预发布"版本时，我们在 `main` 分支上创建一个标题为 `v0.9.x-vscode` 的标签，这会自动触发 [preview.yaml](./.github/workflows/preview.yaml) 中的工作流，构建并发布 VS Code 扩展的版本。当一个版本经过充分测试后，我们将创建一个标题为 `v0.8.x-vscode` 的新版本，触发 [main.yaml](./.github/workflows/main.yaml) 中的类似工作流，这将构建并发布 VS Code 扩展的主要版本。任何热修复都可以通过从相关版本的标签创建功能分支来完成。这个工作流程在 <http://releaseflow.org> 中有很好的解释。

### 测试

我们有单元测试、功能测试和端到端测试套件的组合，主要关注功能测试。这些测试在每个 pull request 上运行。如果您的 PR 导致这些测试之一失败，我们将要求您在我们合并之前解决该问题。

在贡献时，请更新或创建适当的测试，以帮助验证您的实现的正确性。

### 格式化

Continue 使用 [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 来格式化 JavaScript/TypeScript。请在 VS Code 中安装 Prettier 扩展并在您的设置中启用"保存时格式化"。

### 编写斜杠命令

斜杠命令接口，定义在 [core/index.d.ts](./core/index.d.ts) 中，要求您定义一个 `name`（将键入以调用命令的文本）、一个 `description`（将在斜杠命令菜单中显示的文本）和一个在调用命令时将被调用的 `run` 函数。`run` 函数是一个异步生成器，它生成要在聊天中显示的内容。`run` 函数传递一个 `ContinueSDK` 对象，可用于与 IDE 交互、调用 LLM 和查看聊天历史，以及其他一些实用工具。

```ts
export interface SlashCommand {
  name: string;
  description: string;
  params?: { [key: string]: any };
  run: (sdk: ContinueSDK) => AsyncGenerator<string | undefined>;
}
```

在 [core/commands/slash](./core/commands/slash) 中有许多斜杠命令的示例，我们建议借鉴这些示例。一旦您在此文件夹中创建了新的 `SlashCommand`，还请确保完成以下操作：

- 将您的命令添加到 [core/commands/slash/index.ts](./core/commands/slash/index.ts) 中的数组中
- 将您的命令添加到 [`config_schema.json`](./extensions/vscode/config_schema.json) 中的列表中。这确保了当用户编辑 `config.json` 时，Intellisense 会向用户显示您的提供者可用的命令。如果您的命令接受任何参数，您还应该按照现有的示例将它们添加到 JSON Schema 中。

### 编写上下文提供者

`ContextProvider` a 是一个 Continue 插件，允许您输入 '@' 快速选择文档作为语言模型的上下文。`IContextProvider` 接口在 [`core/index.d.ts`](./core/index.d.ts) 中定义，但所有内置上下文提供者都扩展了 [`BaseContextProvider`](./core/context/index.ts)。

在定义上下文提供者之前，确定您要创建的"类型"。`"query"` 类型在选择时会显示一个小的文本输入框，让用户有机会输入类似于 [`GoogleContextProvider`](./core/context/providers/GoogleContextProvider.ts) 的 Google 搜索查询。`"submenu"` 类型将打开一个可以搜索和选择的项目子菜单。例如 [`GitHubIssuesContextProvider`](./core/context/providers/GitHubIssuesContextProvider.ts) 和 [`DocsContextProvider`](./core/context/providers/DocsContextProvider.ts)。`"normal"` 类型将立即添加上下文项。例如包括 [`DiffContextProvider`](./core/context/providers/DiffContextProvider.ts) 和 [`OpenFilesContextProvider`](./core/context/providers/OpenFilesContextProvider.ts)。

在编写上下文提供者后，请确保完成以下操作：

- 将其添加到 [core/context/providers/index.ts](./core/context/providers/index.ts) 中的上下文提供者数组中
- 将其添加到 [core/index.d.ts](./core/index.d.ts) 中的 `ContextProviderName` 类型中
- 将其添加到 [`config_schema.json`](./extensions/vscode/config_schema.json) 中的列表中。如果您的上下文提供者接受任何参数，您还应该按照现有的示例将它们添加到 JSON Schema 中。

### 添加 LLM 提供者

Continue 支持十多种不同的 LLM "提供者"，使其易于使用在 OpenAI、Ollama、Together、LM Studio、Msty 等上运行的模型。您可以在[这里](https://github.com/continuedev/continue/tree/main/core/llm/llms)找到所有现有的提供者，如果您发现缺少一个，可以通过以下步骤添加：

1. 在 `core/llm/llms` 目录中创建一个新文件。文件名应该是提供者的名称，它应该导出一个扩展 `BaseLLM` 的类。这个类应该包含以下最小实现。我们建议查看现有的提供者以获取更多详细信息。[LlamaCpp Provider](./core/llm/llms/LlamaCpp.ts) 是一个很好的简单示例。

- `providerName` - 您的提供者的标识符。
- 至少实现 `_streamComplete` 或 `_streamChat` 中的一个 - 这是向 API 发出请求并返回流式响应的函数。您只需要实现一个，因为 Continue 可以自动在"聊天"和"原始完成"之间转换。

2. 将您的提供者添加到 [core/llm/llms/index.ts](./core/llm/llms/index.ts) 中的 `LLMs` 数组中。
3. 如果您的提供者支持图像，将其添加到 [core/llm/autodetect.ts](./core/llm/autodetect.ts) 中的 `PROVIDER_SUPPORTS_IMAGES` 数组中。
4. 将必要的 JSON Schema 类型添加到 [`config_schema.json`](./extensions/vscode/config_schema.json) 中。这确保当用户编辑 `config.json` 时，Intellisense 会向用户显示您的提供者可用的选项。
5. 在 [`docs/docs/customize/model-providers`](./docs/docs/customize/model-providers) 中为您的提供者添加文档页面。这应该显示一个在 `config.json` 中配置您的提供者的示例，并解释可用的选项。

### 添加模型

虽然任何与支持的提供者一起工作的模型都可以与 Continue 一起使用，但我们保留了一个可以从 UI 或 `config.json` 自动配置的推荐模型列表。添加模型时应更新以下文件：

- [config_schema.json](./extensions/vscode/config_schema.json) - 这是用于验证 `config.json` 的 JSON Schema 定义。您会注意到 "definitions.ModelDescription.allOf" 中定义了许多规则。这里是您编写规则的地方，可以指定类似于"对于提供者 'anthropic'，只允许模型 'claude-2' 和 'claude-instant-1'"。查看所有这些规则，并确保您的模型包含在支持它的提供者中。
- [AddNewModel 页面](./gui/src/pages/AddNewModel) - 这个目录定义了侧边栏模型选择 UI 中显示的模型选项。要添加新模型：
  1. 在 [configs/models.ts](./gui/src/pages/AddNewModel/configs/models.ts) 中为模型添加一个 `ModelPackage` 条目，参照文件顶部的众多示例
  2. 将模型添加到 [AddNewModel.tsx](./gui/src/pages/AddNewModel/AddNewModel.tsx) 中的提供者数组中（如果需要，添加提供者）
- [index.d.ts](./core/index.d.ts) - 这个文件定义了整个 Continue 中使用的 TypeScript 类型。您会找到一个 `ModelName` 类型。确保将您的模型的名称添加到这里。
- LLM 提供者：由于许多提供者使用自己的自定义字符串来标识模型，您将必须添加从 Continue 的模型名称（您添加到 `index.d.ts` 的名称）到每个提供者的模型字符串的翻译：[Ollama](./core/llm/llms/Ollama.ts)、[Together](./core/llm/llms/Together.ts) 和 [Replicate](./core/llm/llms/Replicate.ts)。您可以在这里找到它们的完整模型列表：[Ollama](https://ollama.ai/library)、[Together](https://docs.together.ai/docs/inference-models)、[Replicate](https://replicate.com/collections/streaming-language-models)。
- [Prompt Templates](./core/llm/index.ts) - 在这个文件中，您会找到 `autodetectTemplateType` 函数。确保对于您刚刚添加的模型名称，此函数返回正确的模板类型。这假设该模型的聊天模板已经内置在 Continue 中。如果不是，您将必须添加模板类型和相应的编辑和聊天模板。

## 📐 Continue 架构

Continue 由 2 部分组成，这些部分被分开，以便它能够尽可能容易地扩展到其他 IDE 中工作：

1. **Continue GUI** - Continue GUI 是一个 React 应用程序，它让用户可以控制 Continue。它显示当前的聊天历史记录，允许用户提问、调用斜杠命令和使用上下文提供者。GUI 还处理大多数状态并尽可能多地保存逻辑，以便它可以在不同的 IDE 之间重用。

2. **Continue 扩展** - Continue 扩展是 IDE 的插件，它实现了 [IDE 接口](./core/index.d.ts#L229)。这允许 GUI 请求信息或在 IDE 内执行操作。无论 IDE 如何，都使用相同的接口。我们构建的第一个 Continue 扩展是用于 VS Code 和 JetBrains 的，但我们计划在未来为其他 IDE 构建客户端。IDE 客户端必须 1. 实现 IDE 接口，就像 VS Code 在[这里](./extensions/vscode/src/VsCodeIde.ts)所做的那样，以及 2. 在侧边栏中显示 Continue GUI，就像[这里](./extensions/vscode/src/ContinueGUIWebviewViewProvider.ts)。

### Continue VS Code 扩展

VS Code 扩展的起点是 [activate.ts](./extensions/vscode/src/activation/activate.ts)。这里的 `activateExtension` 函数将注册所有命令并将 Continue GUI 加载到 IDE 的侧边栏中作为 webview。

### Continue JetBrains 扩展

JetBrains 扩展目前处于 alpha 测试阶段。如果您有兴趣为其开发做出贡献，请在 [Discord](https://discord.gg/vapESyrFmJ) 上联系我们。 