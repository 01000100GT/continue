import {
  ToCoreFromWebviewProtocol,
  ToWebviewFromCoreProtocol,
} from "./coreWebview.js";

// Message types to pass through from webview to core
// Note: If updating these values, make a corresponding update in
// extensions/intellij/src/main/kotlin/com/github/continuedev/continueintellijextension/toolWindow/ContinueBrowser.kt
export const WEBVIEW_TO_CORE_PASS_THROUGH: (keyof ToCoreFromWebviewProtocol)[] =
  [
    "ping",                                 // 检查核心服务是否在线的心跳请求
    "abort",                                // 中止当前正在处理的请求（相关文件：./core.ts）
    "history/list",                         // 获取历史会话列表（相关文件：./util/history.ts）
    "history/delete",                       // 删除指定的历史会话（相关文件：./util/history.ts）
    "history/load",                         // 加载特定的历史会话（相关文件：./util/history.ts）
    "history/save",                         // 保存当前会话到历史记录（相关文件：./util/history.ts）
    "devdata/log",                          // 记录开发数据日志（相关文件：./data/log.ts，./data/devdataSqlite.ts）
    "config/addModel",                      // 添加新的AI模型到配置（相关文件：./config/util.ts）
    "config/addContextProvider",            // 添加新的上下文提供者（相关文件：./config/util.ts）
    "config/newPromptFile",                 // 创建新的提示文件（相关文件：./promptFiles/v2/createNewPromptFile.ts）
    "config/ideSettingsUpdate",             // 更新IDE设置（相关文件：./config/ConfigHandler.ts）
    "config/getSerializedProfileInfo",      // 获取序列化的配置文件信息（相关文件：./config/ConfigHandler.ts）
    "config/deleteModel",                   // 从配置中删除模型（相关文件：./config/util.ts）
    "config/listProfiles",                  // 列出所有可用的配置文件（相关文件：./config/ConfigHandler.ts）
    "config/refreshProfiles",               // 刷新配置文件列表（相关文件：./config/ConfigHandler.ts）
    "config/openProfile",                   // 打开特定的配置文件（相关文件：./config/ConfigHandler.ts）
    "config/updateSharedConfig",            // 更新共享配置（相关文件：./util/GlobalContext.ts）
    "config/updateSelectedModel",           // 更新选定的模型（相关文件：./util/GlobalContext.ts）
    "context/getContextItems",              // 获取上下文项（相关文件：./context/providers/）
    "context/getSymbolsForFiles",           // 获取文件中的符号信息（相关文件：./util/treeSitter.ts）
    "context/loadSubmenuItems",             // 加载子菜单项（相关文件：各context provider实现）
    "context/addDocs",                      // 添加文档到索引（相关文件：./indexing/docs/DocsService.ts）
    "context/removeDocs",                   // 从索引中移除文档（相关文件：./indexing/docs/DocsService.ts）
    "context/indexDocs",                    // 索引文档（相关文件：./indexing/docs/DocsService.ts）
    "autocomplete/complete",                // 获取自动完成建议（相关文件：./autocomplete/CompletionProvider.ts）
    "autocomplete/cancel",                  // 取消当前的自动完成操作（相关文件：./autocomplete/CompletionProvider.ts）
    "autocomplete/accept",                  // 接受自动完成建议（相关文件：./autocomplete/CompletionProvider.ts）
    "command/run",                          // 运行命令（相关文件：各slashCommand实现）
    "tts/kill",                             // 停止文本转语音服务（相关文件：./util/tts.ts）
    "llm/complete",                         // 使用LLM完成文本（相关文件：./llm/llms/）
    "llm/streamComplete",                   // 流式获取LLM文本完成结果（相关文件：./llm/llms/）
    "llm/streamChat",                       // 流式获取LLM聊天回复（相关文件：./llm/llms/）
    "llm/listModels",                       // 列出可用的LLM模型（相关文件：./llm/llms/）
    "streamDiffLines",                      // 流式获取差异行（相关文件：./edit/streamDiffLines.ts）
    "chatDescriber/describe",               // 描述聊天内容（相关文件：./util/chatDescriber.ts）
    "stats/getTokensPerDay",                // 获取每日令牌使用统计（相关文件：./data/devdataSqlite.ts）
    "stats/getTokensPerModel",              // 获取每个模型的令牌使用统计（相关文件：./data/devdataSqlite.ts）
    // Codebase
    "index/setPaused",                      // 设置代码库索引是否暂停（相关文件：./indexing/CodebaseIndexer.ts，./util/GlobalContext.ts）
    "index/forceReIndex",                   // 强制重新索引代码库（相关文件：./indexing/CodebaseIndexer.ts）
    "index/indexingProgressBarInitialized", // 索引进度条已初始化（相关文件：./core.ts）
    // Docs, etc.
    "indexing/reindex",                     // 重新索引特定内容（相关文件：./indexing/docs/DocsService.ts）
    "indexing/abort",                       // 中止索引过程（相关文件：./indexing/docs/DocsService.ts）
    "indexing/setPaused",                   // 设置索引是否暂停（相关文件：./indexing/docs/DocsService.ts）
    "docs/getSuggestedDocs",                // 获取建议的文档列表（相关文件：./indexing/docs/suggestions/index.ts）
    "docs/initStatuses",                    // 初始化文档状态（相关文件：./indexing/docs/DocsService.ts）
    "docs/getDetails",                      // 获取文档详情（相关文件：./indexing/docs/DocsService.ts）
    //
    "completeOnboarding",                   // 完成新用户引导流程（相关文件：./config/onboarding.ts）
    "addAutocompleteModel",                 // 添加自动完成模型（相关文件：./core.ts，./util/paths.ts）
    "didChangeSelectedProfile",             // 更改选定的配置文件（相关文件：./config/ConfigHandler.ts）
    "didChangeSelectedOrg",                 // 更改选定的组织（相关文件：./config/ConfigHandler.ts）
    "tools/call",                           // 调用工具函数（相关文件：./tools/callTool.ts）
    "controlPlane/openUrl",                 // 打开URL（相关文件：./control-plane/env.ts）
    "controlPlane/listOrganizations",       // 列出可用的组织（相关文件：./config/ConfigHandler.ts）
  ];

// Message types to pass through from core to webview
// Note: If updating these values, make a corresponding update in
// extensions/intellij/src/main/kotlin/com/github/continuedev/continueintellijextension/constants/MessageTypes.kt
export const CORE_TO_WEBVIEW_PASS_THROUGH: (keyof ToWebviewFromCoreProtocol)[] =
  [
    "configUpdate",                         // 配置更新通知（相关文件：./config/ConfigHandler.ts）
    "configError",                          // 配置错误通知（相关文件：./config/ConfigHandler.ts）
    "getDefaultModelTitle",                 // 获取默认模型标题（相关文件：./config/ConfigHandler.ts）
    "indexProgress",                        // 代码库索引进度更新（相关文件：./indexing/CodebaseIndexer.ts）
    "indexing/statusUpdate",                // 文档等索引状态更新（相关文件：./indexing/docs/DocsService.ts）
    "addContextItem",                       // 添加上下文项（相关文件：各context provider实现）
    "refreshSubmenuItems",                  // 刷新子菜单项（相关文件：./config/ConfigHandler.ts）
    "isContinueInputFocused",               // 检查Continue输入框是否聚焦（相关文件：GUI相关实现）
    "didChangeAvailableProfiles",           // 可用配置文件列表变更通知（相关文件：./config/ConfigHandler.ts）
    "setTTSActive",                         // 设置文本转语音服务激活状态（相关文件：./util/tts.ts）
    "getWebviewHistoryLength",              // 获取Webview历史长度（相关文件：GUI相关实现）
    "getCurrentSessionId",                  // 获取当前会话ID（相关文件：./util/history.ts）
    "docs/suggestions",                     // 文档建议通知（相关文件：./indexing/docs/suggestions/index.ts）
    "didCloseFiles",                        // 文件关闭通知（相关文件：./core.ts）
    "didSelectOrganization",                // 选择组织通知（相关文件：./config/ConfigHandler.ts）
  ];
