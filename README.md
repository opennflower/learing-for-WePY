
## mini_program_template

	wepy小程序模板

### 安装（更新） wepy 命令行工具。
	npm install wepy-cli -g

### 安装依赖包
	npm install

### 开发实时编译。
	npm run dev

### 生产压缩
	npm run build //上传代码时，请先执行此命令，否则会提示包体积过大


### 开发使用说明(重要)

1、使用微信开发者工具-->添加项目，项目目录请选择dist目录。

2、微信开发者工具-->项目-->关闭ES6转ES5。 <font color=red>重要：漏掉此项会运行报错。</font>

3、微信开发者工具-->项目-->关闭上传代码时样式自动补全。  <font color=red>重要：某些情况下漏掉此项也会运行报错。</font>

4、微信开发者工具-->项目-->关闭代码压缩上传。  <font color=red>重要：开启后，会导致真机computed, props.sync 等等属性失效。</font>


### wepy开发文档地址
	https://tencent.github.io/wepy/

### 小程序开发文档
	http://mp.weixin.qq.com/debug/wxadoc/dev/


### 开发工具 VS Code

- 代码高亮

	1. 在 Code 里先安装 Vue 的语法高亮插件 Vetur。
	2. 打开任意 .wpy 文件。
	3. 点击右下角的选择语言模式，默认为纯文本。
	4. 在弹出的窗口中选择 .wpy 的配置文件关联...。
	5. 在选择要与 .wpy 关联的语言模式 中选择 Vue。

- vscode插件

	1. Vetur
	2. vscode weapp api
	3. vscode wxml
	4. vscode-wechat
	5. Easy WXLESS
	6. miniapp
	7. wepy snippets
	8. HTML CSS Support
	9. EditorConfig for VS Code

