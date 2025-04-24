<p align="center">
    <br/>
    <picture> 
        <source media="(prefers-color-scheme: dark)" srcset="https://huggingface.co/datasets/Xenova/transformers.js-docs/raw/main/transformersjs-dark.svg" width="500" style="max-width: 100%;">
        <source media="(prefers-color-scheme: light)" srcset="https://huggingface.co/datasets/Xenova/transformers.js-docs/raw/main/transformersjs-light.svg" width="500" style="max-width: 100%;">
        <img alt="transformers.js javascript 库标志" src="https://huggingface.co/datasets/Xenova/transformers.js-docs/raw/main/transformersjs-light.svg" width="500" style="max-width: 100%;">
    </picture>
    <br/>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@xenova/transformers">
        <img alt="NPM" src="https://img.shields.io/npm/v/@xenova/transformers">
    </a>
    <a href="https://www.npmjs.com/package/@xenova/transformers">
        <img alt="NPM Downloads" src="https://img.shields.io/npm/dw/@xenova/transformers">
    </a>
    <a href="https://www.jsdelivr.com/package/npm/@xenova/transformers">
        <img alt="jsDelivr Hits" src="https://img.shields.io/jsdelivr/npm/hw/@xenova/transformers">
    </a>
    <a href="https://github.com/xenova/transformers.js/blob/main/LICENSE">
        <img alt="License" src="https://img.shields.io/github/license/xenova/transformers.js?color=blue">
    </a>
    <a href="https://huggingface.co/docs/transformers.js/index">
        <img alt="Documentation" src="https://img.shields.io/website/http/huggingface.co/docs/transformers.js/index.svg?down_color=red&down_message=offline&up_message=online">
    </a>
</p>


为网络提供最先进的机器学习。直接在浏览器中运行 🤗 Transformers，无需服务器！

Transformers.js 被设计为在功能上等同于 Hugging Face 的 [transformers](https://github.com/huggingface/transformers) Python 库，这意味着你可以使用非常相似的 API 运行相同的预训练模型。这些模型支持不同模态中的常见任务，例如：
  - 📝 **自然语言处理**：文本分类、命名实体识别、问答、语言建模、摘要、翻译、多项选择和文本生成。
  - 🖼️ **计算机视觉**：图像分类、对象检测和分割。
  - 🗣️ **音频**：自动语音识别和音频分类。
  - 🐙 **多模态**：零样本图像分类。

Transformers.js 使用 [ONNX Runtime](https://onnxruntime.ai/) 在浏览器中运行模型。最好的部分是，你可以使用 [🤗 Optimum](https://github.com/huggingface/optimum#onnx--onnx-runtime) 轻松[将](#convert-your-models-to-onnx)预训练的 PyTorch、TensorFlow 或 JAX 模型转换为 ONNX。

有关更多信息，请查看完整的[文档](https://huggingface.co/docs/transformers.js)。


## 快速入门


从现有代码转换非常简单！与 Python 库一样，我们支持 `pipeline` API。Pipeline 将预训练模型与输入预处理和输出后处理结合在一起，使其成为使用库运行模型的最简单方式。

<table>
<tr>
<th width="440px" align="center"><b>Python（原始）</b></th>
<th width="440px" align="center"><b>Javascript（我们的）</b></th>
</tr>
<tr>
<td>

```python
from transformers import pipeline

# 分配一个情感分析的 pipeline
pipe = pipeline('sentiment-analysis')

out = pipe('I love transformers!')
# [{'label': 'POSITIVE', 'score': 0.999806941}]
```

</td>
<td>

```javascript
import { pipeline } from '@xenova/transformers';

// 分配一个情感分析的 pipeline
let pipe = await pipeline('sentiment-analysis');

let out = await pipe('I love transformers!');
// [{'label': 'POSITIVE', 'score': 0.999817686}]
```

</td>
</tr>
</table>


你也可以通过在 `pipeline` 函数的第二个参数中指定模型 ID 或路径来使用不同的模型。例如：
```javascript
// 为情感分析使用不同的模型
let pipe = await pipeline('sentiment-analysis', 'Xenova/bert-base-multilingual-uncased-sentiment');
```


## 安装


要通过 [NPM](https://www.npmjs.com/package/@xenova/transformers) 安装，请运行：
```bash
npm i @xenova/transformers
```

或者，你可以在原生 JS 中使用它，无需任何打包器，只需使用 CDN 或静态托管即可。例如，使用 [ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)，你可以这样导入库：
```html
<script type="module">
    import { pipeline } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.14.0';
</script>
```


## 示例

想直接跳入吗？从我们的一个示例应用程序/模板开始：

| 名称              | 描述                      | 链接                   |
|-------------------|----------------------------------|-------------------------------|
| Whisper Web       | 使用 Whisper 的语音识别    | [代码](https://github.com/xenova/whisper-web), [演示](https://huggingface.co/spaces/Xenova/whisper-web) |
| Doodle Dash       | 实时草图识别游戏 | [博客](https://huggingface.co/blog/ml-web-games), [代码](https://github.com/xenova/doodle-dash), [演示](https://huggingface.co/spaces/Xenova/doodle-dash) |
| Code Playground   | 浏览器内代码补全网站 | [代码](./examples/code-completion/), [演示](https://huggingface.co/spaces/Xenova/ai-code-playground) |
| Semantic Image Search (client-side) | 用文本搜索图像 | [代码](./examples/semantic-image-search-client/), [演示](https://huggingface.co/spaces/Xenova/semantic-image-search-client) |
| Semantic Image Search (server-side) | 用文本搜索图像 (Supabase) | [代码](./examples/semantic-image-search/), [演示](https://huggingface.co/spaces/Xenova/semantic-image-search) |
| Vanilla JavaScript | 浏览器内对象检测     | [视频](https://scrimba.com/scrim/cKm9bDAg), [代码](./examples/vanilla-js/), [演示](https://huggingface.co/spaces/Scrimba/vanilla-js-object-detector) |
| React             | 多语言翻译网站 | [代码](./examples/react-translator/), [演示](https://huggingface.co/spaces/Xenova/react-translator) |
| Text to speech (client-side) | 浏览器内语音合成 | [代码](./examples/text-to-speech-client/), [演示](https://huggingface.co/spaces/Xenova/text-to-speech-client) |
| Browser extension | 文本分类扩展    | [代码](./examples/extension/) |
| Electron          | 文本分类应用  | [代码](./examples/electron/)  |
| Next.js (client-side) | 情感分析（浏览器内推理） | [代码](./examples/next-client/), [演示](https://huggingface.co/spaces/Xenova/next-example-app) |
| Next.js (server-side) | 情感分析（Node.js 推理） | [代码](./examples/next-server/), [演示](https://huggingface.co/spaces/Xenova/next-server-example-app) |
| Node.js           | 情感分析 API           | [代码](./examples/node/)      |
| Demo site         | 演示集合 | [代码](./examples/demo-site/), [演示](https://xenova.github.io/transformers.js/) |

查看 Hugging Face 上的 Transformers.js [模板](https://huggingface.co/new-space?template=static-templates%2Ftransformers.js)，一键开始！

## 自定义使用

默认情况下，Transformers.js 使用[托管的预训练模型](https://huggingface.co/models?library=transformers.js)和[预编译的 WASM 二进制文件](https://cdn.jsdelivr.net/npm/@xenova/transformers@2.14.0/dist/)，它们应该可以开箱即用。你可以按如下方式自定义：

### 设置

```javascript
import { env } from '@xenova/transformers';

// 为模型指定自定义位置（默认为 '/models/'）。
env.localModelPath = '/path/to/models/';

// 禁止从 Hugging Face Hub 加载远程模型：
env.allowRemoteModels = false;

// 设置 .wasm 文件的位置。默认使用 CDN。
env.backends.onnx.wasm.wasmPaths = '/path/to/files/';
```

有关可用设置的完整列表，请查看 [API 参考](https://huggingface.co/docs/transformers.js/api/env)。

### 将你的模型转换为 ONNX

我们建议使用我们的[转换脚本](https://github.com/xenova/transformers.js/blob/main/scripts/convert.py)，通过单个命令将 PyTorch、TensorFlow 或 JAX 模型转换为 ONNX。在后台，它使用 [🤗 Optimum](https://huggingface.co/docs/optimum) 执行模型的转换和量化。

```bash
python -m scripts.convert --quantize --model_id <model_name_or_path>
```

例如，使用以下命令转换和量化 [bert-base-uncased](https://huggingface.co/bert-base-uncased)：
```bash
python -m scripts.convert --quantize --model_id bert-base-uncased
```

这将把以下文件保存到 `./models/`：

```
bert-base-uncased/
├── config.json
├── tokenizer.json
├── tokenizer_config.json
└── onnx/
    ├── model.onnx
    └── model_quantized.onnx
```

有关支持的架构的完整列表，请参阅 [Optimum 文档](https://huggingface.co/docs/optimum/main/en/exporters/onnx/overview)。 