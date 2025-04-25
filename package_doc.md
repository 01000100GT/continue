{
  "scripts": {
    "tsc:watch": "npx concurrently -n gui,vscode,core,binary -c cyan,magenta,yellow,green \"npm run tsc:watch:gui\" \"npm run tsc:watch:vscode\" \"npm run tsc:watch:core\" \"npm run tsc:watch:binary\"", // 同时运行多个TypeScript编译器观察任务，使用不同颜色标识不同模块的输出
    "tsc:watch:gui": "tsc --project gui/tsconfig.json --watch --noEmit --pretty", // 以观察模式运行TypeScript编译器，监控gui目录的代码变化
    "tsc:watch:vscode": "tsc --project extensions/vscode/tsconfig.json --watch --noEmit --pretty", // 以观察模式运行TypeScript编译器，监控vscode扩展目录的代码变化
    "tsc:watch:core": "tsc --project core/tsconfig.json --watch --noEmit --pretty", // 以观察模式运行TypeScript编译器，监控core目录的代码变化
    "tsc:watch:binary": "tsc --project binary/tsconfig.json --watch --noEmit --pretty" // 以观察模式运行TypeScript编译器，监控binary目录的代码变化
  },
  "devDependencies": {
    "@typescript-eslint/parser": "^7.8.0", // TypeScript的ESLint解析器，用于静态代码分析
    "eslint-plugin-import": "^2.29.1", // ESLint插件，用于检查和验证import语句
    "prettier": "^3.3.3", // 代码格式化工具，确保代码风格一致
    "prettier-plugin-tailwindcss": "^0.6.8" // Prettier插件，用于格式化Tailwind CSS类名
  }
}

## 依赖分析结果

### Scripts分析：5/5 ✅
- tsc:watch ✅
- tsc:watch:gui ✅ 
- tsc:watch:vscode ✅
- tsc:watch:core ✅
- tsc:watch:binary ✅

### DevDependencies分析：4/4 ✅
- @typescript-eslint/parser ✅
- eslint-plugin-import ✅
- prettier ✅
- prettier-plugin-tailwindcss ✅

### Dependencies分析：0/0 ✅
- 未发现dependencies 