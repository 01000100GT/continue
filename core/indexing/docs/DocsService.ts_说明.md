# DocsService.ts 类说明文档

## DocsService 类

`DocsService` 是文档索引和检索的核心服务类，负责管理文档的爬取、索引、存储和检索。

### 静态属性

- `lance`: LanceDB 类型，用于向量数据库操作
- `lanceTableName`: Lance 数据库表名，默认为 "docs"
- `sqlitebTableName`: SQLite 数据库表名，默认为 "docs"
- `preIndexedDocsEmbeddingsProvider`: 预索引文档的嵌入提供程序，使用 TransformersJs

### 实例属性

- `isInitialized`: Promise，表示服务是否已初始化
- `isSyncing`: 布尔值，表示是否正在同步文档
- `docsIndexingQueue`: Set 集合，存储正在索引的文档 URL
- `lanceTableNamesSet`: Set 集合，存储 Lance 表名
- `config`: ContinueConfig 类型，配置对象
- `sqliteDb`: SQLite 数据库连接
- `ideInfoPromise`: Promise，IDE 信息
- `githubToken`: 可选字符串，GitHub 令牌
- `statuses`: Map 集合，存储文档索引状态信息

### 构造函数

```typescript
constructor(configHandler: ConfigHandler, private readonly ide: IDE, private readonly messenger?: IMessenger<ToCoreProtocol, FromCoreProtocol>)
```

创建 DocsService 实例，初始化服务

### 主要方法

#### 初始化和配置

- `setGithubToken(token: string)`: 设置 GitHub 令牌
- `initLanceDb()`: 初始化 LanceDB 数据库
- `createSingleton(configHandler: ConfigHandler, ide: IDE, messenger?)`: 创建单例模式的 DocsService 实例
- `getSingleton()`: 获取单例实例
- `init(configHandler: ConfigHandler)`: 初始化服务，加载配置
- `handleConfigUpdate({config: newConfig})`: 处理配置更新

#### 状态管理

- `handleStatusUpdate(update: IndexingStatus)`: 处理并广播索引状态更新
- `initStatuses()`: 初始化状态列表
- `abort(startUrl: string)`: 中止指定 URL 的索引过程
- `shouldCancel(startUrl: string, startedWithEmbedder: string)`: 检查是否应该取消索引操作

#### 文档索引和管理

- `canUsePreindexedDocs()`: 检查是否可以使用预索引文档
- `getEmbeddingsProvider(startUrl: string)`: 获取指定 URL 的嵌入提供程序
- `syncDocsWithPrompt(reIndex: boolean = false)`: 提示用户同步文档
- `hasMetadata(startUrl: string)`: 检查是否已索引指定 URL
- `listMetadata()`: 列出所有已索引文档的元数据
- `reindexDoc(startUrl: string)`: 重新索引指定 URL 的文档
- `indexAndAdd(siteIndexingConfig: SiteIndexingConfig, forceReindex: boolean = false)`: 索引并添加文档
- `syncDocs(oldConfig: ContinueConfig | undefined, newConfig: ContinueConfig, forceReindex: boolean)`: 同步文档索引

#### 检索和查询

- `retrieveChunksFromQuery(query: string, startUrl: string, nRetrieve: number)`: 从查询检索文档块
- `lanceDBRowToChunk(row: LanceDbDocsRow)`: 将 LanceDB 行转换为块
- `getDetails(startUrl: string)`: 获取文档的详细信息
- `retrieveChunks(startUrl: string, vector: number[], nRetrieve: number, isPreindexed: boolean, isRetry: boolean = false)`: 检索文档块
- `getFavicon(startUrl: string)`: 获取文档的 favicon

#### 数据库操作

- `getOrCreateSqliteDb()`: 获取或创建 SQLite 数据库连接
- `createLanceDocsTable(connection: LanceType.Connection, initializationVector: number[], tableName: string)`: 创建 Lance 文档表
- `sanitizeLanceTableName(name: string)`: 清理 Lance 表名
- `getLanceTableName(embeddingsProvider: ILLM)`: 获取 Lance 表名
- `getOrCreateLanceTable({initializationVector, startUrl})`: 获取或创建 Lance 表

#### 文档添加和删除

- `addToLance({chunks, siteIndexingConfig, embeddings})`: 添加数据到 Lance 数据库
- `addMetadataToSqlite({siteIndexingConfig: {title, startUrl}, favicon})`: 添加元数据到 SQLite
- `siteIndexingConfigsAreEqual(config1: SiteIndexingConfig, config2: SiteIndexingConfig)`: 比较两个站点配置是否相等
- `addToConfig(siteIndexingConfig: SiteIndexingConfig)`: 添加配置到 config.json
- `add(params: AddParams)`: 添加文档
- `deleteEmbeddingsFromLance(startUrl: string)`: 从 Lance 删除嵌入
- `deleteMetadataFromSqlite(startUrl: string)`: 从 SQLite 删除元数据
- `deleteFromConfig(startUrl: string)`: 从配置删除
- `deleteIndexes(startUrl: string)`: 删除索引
- `delete(startUrl: string)`: 删除文档

#### 预索引文档处理

- `fetchAndAddPreIndexedDocEmbeddings(title: string)`: 获取并添加预索引文档嵌入

### 接口

#### LanceDbDocsRow

```typescript
interface LanceDbDocsRow {
  title: string;
  starturl: string;
  content: string;
  path: string;
  startline: number;
  endline: number;
  vector: number[];
  [key: string]: any;
}
```

#### SqliteDocsRow

```typescript
interface SqliteDocsRow {
  title: string;
  startUrl: string;
  favicon: string;
}
```

#### AddParams

```typescript
type AddParams = {
  siteIndexingConfig: SiteIndexingConfig;
  chunks: Chunk[];
  embeddings: number[][];
  favicon?: string;
};
```

## 分析列表

已分析完的依赖库：
- DocsService 类及其所有方法和属性 ✅

未分析的依赖库：
- 无 ✅ 