# Continue Core 二进制文件

本文件夹的目的是将 TypeScript 代码打包，使其可以从任何 IDE 或平台运行。我们首先使用 `esbuild` 进行打包，然后使用 `pkg` 打包成二进制文件。

`pkgJson/package.json` 包含了使用 pkg 构建的指令，需要放在单独的文件夹中，因为 assets 选项没有 CLI 标志（它必须在 package.json 中），并且 pkg 不识别 package.json 以外的任何名称。但如果我们使用带有依赖项的相同 package.json，pkg 会自动包含这些依赖项，显著增加二进制文件大小。

构建过程完全在 `build.js` 中定义。

### 原生模块列表

- sqlite3/build/Release/node_sqlite3.node (*)
- @lancedb/**
- esbuild?
- @esbuild?
- onnxruntime-node?

### 动态导入模块列表

- posthog-node
- @octokit/rest
- esbuild

### .wasm 文件列表

- tree-sitter.wasm
- tree-sitter-wasms/

(*) = 需要为每个平台手动下载

## 调试

要使用 IntelliJ 调试二进制文件，请在 `CoreMessenger.kt` 中将 `useTcp` 设置为 `true`，然后在 VS Code 中运行 "Core Binary" 调试脚本。IntelliJ 扩展将通过 TCP 连接到从 VS Code 窗口启动的服务器，而不是启动二进制文件的子进程并通过 stdin/stdout 通信。您可以在 `core` 或 `binary` 文件夹中的任何位置放置断点。

## 构建

```bash
npm run build
```

## 测试

```bash
npm run test
``` 