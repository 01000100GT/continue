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
    "abort",                                // 中止当前正在处理的请求
    "history/list",                         // 获取历史会话列表
    "history/delete",                       // 删除指定的历史会话
    "history/load",                         // 加载特定的历史会话
    "history/save",                         // 保存当前会话到历史记录
    "devdata/log",                          // 记录开发数据日志
    "config/addModel",                      // 添加新的AI模型到配置
    "config/addContextProvider",            // 添加新的上下文提供者
    "config/newPromptFile",                 // 创建新的提示文件
    "config/ideSettingsUpdate",             // 更新IDE设置
    "config/getSerializedProfileInfo",      // 获取序列化的配置文件信息
    "config/deleteModel",                   // 从配置中删除模型
    "config/listProfiles",                  // 列出所有可用的配置文件
    "config/refreshProfiles",               // 刷新配置文件列表
    "config/openProfile",                   // 打开特定的配置文件
    "config/updateSharedConfig",            // 更新共享配置
    "config/updateSelectedModel",           // 更新选定的模型
    "context/getContextItems",              // 获取上下文项
    "context/getSymbolsForFiles",           // 获取文件中的符号信息
    "context/loadSubmenuItems",             // 加载子菜单项
    "context/addDocs",                      // 添加文档到索引
    "context/removeDocs",                   // 从索引中移除文档
    "context/indexDocs",                    // 索引文档
    "autocomplete/complete",                // 获取自动完成建议
    "autocomplete/cancel",                  // 取消当前的自动完成操作
    "autocomplete/accept",                  // 接受自动完成建议
    "command/run",                          // 运行命令
    "tts/kill",                             // 停止文本转语音服务
    "llm/complete",                         // 使用LLM完成文本
    "llm/streamComplete",                   // 流式获取LLM文本完成结果
    "llm/streamChat",                       // 流式获取LLM聊天回复
    "llm/listModels",                       // 列出可用的LLM模型
    "streamDiffLines",                      // 流式获取差异行
    "chatDescriber/describe",               // 描述聊天内容
    "stats/getTokensPerDay",                // 获取每日令牌使用统计
    "stats/getTokensPerModel",              // 获取每个模型的令牌使用统计
    // Codebase
    "index/setPaused",                      // 设置代码库索引是否暂停
    "index/forceReIndex",                   // 强制重新索引代码库
    "index/indexingProgressBarInitialized", // 索引进度条已初始化
    // Docs, etc.
    "indexing/reindex",                     // 重新索引特定内容
    "indexing/abort",                       // 中止索引过程
    "indexing/setPaused",                   // 设置索引是否暂停
    "docs/getSuggestedDocs",                // 获取建议的文档列表
    "docs/initStatuses",                    // 初始化文档状态
    "docs/getDetails",                      // 获取文档详情
    //
    "completeOnboarding",                   // 完成新用户引导流程
    "addAutocompleteModel",                 // 添加自动完成模型
    "didChangeSelectedProfile",             // 更改选定的配置文件
    "didChangeSelectedOrg",                 // 更改选定的组织
    "tools/call",                           // 调用工具函数
    "controlPlane/openUrl",                 // 打开URL
    "controlPlane/listOrganizations",       // 列出可用的组织
  ];

// Message types to pass through from core to webview
// Note: If updating these values, make a corresponding update in
// extensions/intellij/src/main/kotlin/com/github/continuedev/continueintellijextension/constants/MessageTypes.kt
export const CORE_TO_WEBVIEW_PASS_THROUGH: (keyof ToWebviewFromCoreProtocol)[] =
  [
    "configUpdate",                         // 配置更新通知
    "configError",                          // 配置错误通知
    "getDefaultModelTitle",                 // 获取默认模型标题
    "indexProgress",                        // 代码库索引进度更新
    "indexing/statusUpdate",                // 文档等索引状态更新
    "addContextItem",                       // 添加上下文项
    "refreshSubmenuItems",                  // 刷新子菜单项
    "isContinueInputFocused",               // 检查Continue输入框是否聚焦
    "didChangeAvailableProfiles",           // 可用配置文件列表变更通知
    "setTTSActive",                         // 设置文本转语音服务激活状态
    "getWebviewHistoryLength",              // 获取Webview历史长度
    "getCurrentSessionId",                  // 获取当前会话ID
    "docs/suggestions",                     // 文档建议通知
    "didCloseFiles",                        // 文件关闭通知
    "didSelectOrganization",                // 选择组织通知
  ];
