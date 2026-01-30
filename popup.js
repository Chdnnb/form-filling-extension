const DEFAULT_PROMPT = `【表单高效填写专用 Prompt】

【表单高效填写专用 Prompt】

任务目标：10 秒内在网页表单中准确填写多个字段，确保所有内容都被前端正确检测为"已编辑"。

核心原则：

1. 文本框编辑必须触发事件 - 不能用 form_input 直接赋值，必须用 triple_click + type()

2. 日期选择器用 UI 交互 - 点击日期选择器后直接黏贴方式输入

3. 每填一个字段就截图验证

执行流程（针对每个文本字段）：

- triple_click 或 left_click 定位文本框

- 如有内容，在文本框内 cmd+a 全选，没有则不需要全选，直接输入新内容

- type() 输入新内容


日期字段流程：

- left_click 打开日期选择器

-直接黏贴对应文本，黏贴后点击网页空白处

其他字段：

- 优先级等单选：直接 left_click 选项

- 保存：点击保存按钮后观察结果

记住：绝对不要用 form_input 赋值！必须用点击和输入来模拟用户操作！


每一行内容按顺序填写到以下8 个字段中：

节点名称

节点上线开始时间

节点上线结束时间

节点详细介绍

节点推广开始时间

节点推广结束时间

节点优先级

数据预期目标



接下来我会每次都给你发8 行内容，依次填写到 8 个字段中

记住：绝对不要用 form_input 赋值！必须用点击和输入来模拟用户操作！`;

document.getElementById('promptText').textContent = DEFAULT_PROMPT;

document.getElementById('copyBtn').addEventListener('click', async () => {
  await navigator.clipboard.writeText(DEFAULT_PROMPT);
  const status = document.getElementById('status');
  status.textContent = '✅ 已复制到剪贴板';
  setTimeout(() => { status.textContent = ''; }, 3000);
});

document.getElementById('editBtn').addEventListener('click', () => {
  alert('编辑功能：请在 GitHub 编辑 popup.js 中的 DEFAULT_PROMPT');
});
