# package.json 分析文档

## scripts 脚本命令

```json
{
  "scripts": {
    "tsc:watch": "npx concurrently -n gui,vscode,core,binary -c cyan,magenta,yellow,green \"npm run tsc:watch:gui\" \"npm run tsc:watch:vscode\" \"npm run tsc:watch:core\" \"npm run tsc:watch:binary\"", // 同时运行所有组件的TypeScript监视任务，使用不同颜色标识输出
    "tsc:watch:gui": "tsc --project gui/tsconfig.json --watch --noEmit --pretty", // 监视并检查GUI组件的TypeScript代码，不生成输出文件
    "tsc:watch:vscode": "tsc --project extensions/vscode/tsconfig.json --watch --noEmit --pretty", // 监视并检查VSCode扩展的TypeScript代码，不生成输出文件
    "tsc:watch:core": "tsc --project core/tsconfig.json --watch --noEmit --pretty", // 监视并检查核心组件的TypeScript代码，不生成输出文件
    "tsc:watch:binary": "tsc --project binary/tsconfig.json --watch --noEmit --pretty" // 监视并检查二进制组件的TypeScript代码，不生成输出文件
  }
}
```

## devDependencies 开发依赖

```json
{
  "devDependencies": {
    "@typescript-eslint/parser": "^7.8.0", // TypeScript的ESLint解析器，用于静态代码分析
    "eslint-plugin-import": "^2.29.1", // ESLint插件，用于检查和验证导入语句
    "prettier": "^3.3.3", // 代码格式化工具，保持代码风格一致性
    "prettier-plugin-tailwindcss": "^0.6.8" // Prettier插件，专门用于优化Tailwind CSS类的排序
  }
}
```

## 依赖库分析统计

- 总依赖库数量：4
- 已分析完的依赖库数量：4

## 依赖库列表

1. @typescript-eslint/parser ✅
2. eslint-plugin-import ✅
3. prettier ✅
4. prettier-plugin-tailwindcss ✅

所有依赖库分析完毕！ 