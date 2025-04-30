# config.yaml 规范

此规范正在制定中，可能会发生变化。

## 加载 config.yaml 文件

config.yaml 通过以下步骤加载

## 展开

"源" config.yaml 被"展开"，使其所有包合并到单个 config.yaml 中。这是通过递归加载所有包并将它们合并到 config.yaml 中来完成的。

除非使用本地模式，否则这会在服务器上发生。

## 客户端渲染

展开的 config.yaml 然后在客户端上渲染。这是通过将所有用户密钥模板变量替换为它们的值，并将所有其他密钥替换为密钥位置来完成的。

## 发布

确保您已使用 `npm login` 登录到 npm 注册表。

然后，在 `package.json` 中增加版本号，然后运行：

```bash
npm run build
npm publish --access public
``` 