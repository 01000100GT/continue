import {
  ToCoreFromWebviewProtocol,
  ToWebviewFromCoreProtocol,
} from "./coreWebview.js";

// Message types to pass through from webview to core
// Note: If updating these values, make a corresponding update in
// extensions/intellij/src/main/kotlin/com/github/continuedev/continueintellijextension/toolWindow/ContinueBrowser.kt
export const WEBVIEW_TO_CORE_PASS_THROUGH: (keyof ToCoreFromWebviewProtocol)[] =
  [
    "ping", // 检查连接状态（相关文件：./protocol/messenger）
    "abort", // 中止操作（相关文件：./core.ts）
    "history/list", // 获取历史记录列表（相关文件：./util/history）
    "history/delete", // 删除历史记录（相关文件：./util/history）
    "history/load", // 加载历史记录（相关文件：./util/history）
    "history/save", // 保存历史记录（相关文件：./util/history）
    "devdata/log", // 记录开发数据（相关文件：./data/log.ts）
    "config/addModel", // 添加模型（相关文件：./config/util.ts）
    "config/newPromptFile", // 创建新提示文件（相关文件：./promptFiles/v2/createNewPromptFile.ts）
    "config/ideSettingsUpdate", // 更新IDE设置（相关文件：./config/ConfigHandler.ts）
    "config/addLocalWorkspaceBlock", // 添加本地工作区块（相关文件：./config/workspace/workspaceBlocks.ts）
    "config/getSerializedProfileInfo", // 获取序列化的配置文件信息（相关文件：./config/ConfigHandler.ts）
    "config/deleteModel", // 删除模型（相关文件：./config/util.ts）
    "config/refreshProfiles", // 刷新配置文件（相关文件：./config/ConfigHandler.ts）
    "config/openProfile", // 打开配置文件（相关文件：./config/ConfigHandler.ts）
    "config/updateSharedConfig", // 更新共享配置（相关文件：./config/ConfigHandler.ts）
    "config/updateSelectedModel", // 更新所选模型（相关文件：./config/ConfigHandler.ts）
    "mcp/reloadServer", // 重新加载MCP服务器（相关文件：./context/mcp/index.ts）
    "context/getContextItems", // 获取上下文项（相关文件：./core.ts, ./context/providers）
    "context/getSymbolsForFiles", // 获取文件的符号（相关文件：./util/treeSitter.ts）
    "context/loadSubmenuItems", // 加载子菜单项（相关文件：./context/providers）
    "context/addDocs", // 添加文档（相关文件：./indexing/docs/DocsService.ts）
    "context/removeDocs", // 删除文档（相关文件：./indexing/docs/DocsService.ts）
    "context/indexDocs", // 索引文档（相关文件：./indexing/docs/DocsService.ts）
    "autocomplete/complete", // 自动完成（相关文件：./autocomplete/CompletionProvider.ts）
    "autocomplete/cancel", // 取消自动完成（相关文件：./autocomplete/CompletionProvider.ts）
    "autocomplete/accept", // 接受自动完成（相关文件：./autocomplete/CompletionProvider.ts）
    "tts/kill", // 终止文本到语音（相关文件：./util/tts.ts）
    "llm/complete", // 完成LLM（相关文件：./llm/llms）
    "llm/streamChat", // 流式聊天（相关文件：./llm/streamChat.ts）
    "llm/listModels", // 列出模型（相关文件：./core.ts）
    "streamDiffLines", // 流式输出差异行（相关文件：./edit/streamDiffLines.ts）
    "chatDescriber/describe", // 聊天描述（相关文件：./util/chatDescriber.ts）
    "stats/getTokensPerDay", // 获取每日令牌数（相关文件：./data/devdataSqlite.ts）
    "stats/getTokensPerModel", // 获取每个模型的令牌数（相关文件：./data/devdataSqlite.ts）
    // Codebase
    "index/setPaused", // 设置索引暂停（相关文件：./indexing/CodebaseIndexer.ts）
    "index/forceReIndex", // 强制重新索引（相关文件：./indexing/CodebaseIndexer.ts）
    "index/indexingProgressBarInitialized", // 索引进度条初始化（相关文件：./indexing/CodebaseIndexer.ts）
    // Docs, etc.
    "indexing/reindex", // 重新索引（相关文件：./indexing/docs/DocsService.ts）
    "indexing/abort", // 中止索引（相关文件：./indexing/docs/DocsService.ts）
    "indexing/setPaused", // 设置索引暂停（相关文件：./indexing/docs/DocsService.ts）
    "docs/initStatuses", // 初始化文档状态（相关文件：./indexing/docs/DocsService.ts）
    "docs/getDetails", // 获取文档详情（相关文件：./indexing/docs/DocsService.ts）
    //
    "completeOnboarding", // 完成新手引导（相关文件：./config/onboarding.ts）
    "addAutocompleteModel", // 添加自动完成模型（相关文件：./core.ts）
    "didChangeSelectedProfile", // 更改所选配置（相关文件：./config/ConfigHandler.ts）
    "didChangeSelectedOrg", // 更改所选组织（相关文件：./config/ConfigHandler.ts）
    "tools/call", // 调用工具（相关文件：./tools/callTool.ts）
    "controlPlane/openUrl", // 控制面板打开URL（相关文件：./control-plane/auth/index.ts）
    "isItemTooBig", // 判断项目是否过大（相关文件：./core.ts）
  ];

// Message types to pass through from core to webview
// Note: If updating these values, make a corresponding update in
// extensions/intellij/src/main/kotlin/com/github/continuedev/continueintellijextension/constants/MessageTypes.kt
export const CORE_TO_WEBVIEW_PASS_THROUGH: (keyof ToWebviewFromCoreProtocol)[] =
  [
    "configUpdate", // 配置更新（相关文件：./config/ConfigHandler.ts）
    "indexProgress", // 索引进度（相关文件：./indexing/CodebaseIndexer.ts）
    "indexing/statusUpdate", // 索引状态更新（相关文件：./indexing/docs/DocsService.ts）
    "addContextItem", // 添加上下文项（相关文件：./context/providers）
    "refreshSubmenuItems", // 刷新子菜单项（相关文件：./context/providers）
    "isContinueInputFocused", // 继续输入焦点（相关文件：./core.ts）
    "setTTSActive", // 设置TTS活动状态（相关文件：./util/tts.ts）
    "getWebviewHistoryLength", // 获取Webview历史长度（相关文件：./util/history.ts）
    "getCurrentSessionId", // 获取当前会话ID（相关文件：./core.ts）
    "didCloseFiles", // 关闭文件（相关文件：./core.ts）
  ];
