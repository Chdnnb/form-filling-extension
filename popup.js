const DEFAULT_PROMPT = `【表单高效填写专用 Prompt】

任务目标：在网页表单中准确填写多个字段，确保所有内容都被前端正确检测为"已编辑"。

核心原则：
1. 文本框编辑必须触发事件 - 不能用 form_input 直接赋值，必须用 triple_click + type()
2. 日期选择器用 UI 交互 - 点击日期选择器后选日期，不能直接输入
3. 每填一个字段就截图验证

执行流程（针对每个文本字段）：
- triple_click 或 left_click 定位文本框
- 如有内容，cmd+a 全选
- type() 输入新内容
- 截图验证

日期字段流程：
- left_click 打开日期选择器
- 点击左右箭头切换月份（如需要）
- 在日期网格中 left_click 目标日期
- 截图验证

其他字段：
- 优先级等单选：直接 left_click 选项
- 保存：点击保存按钮后观察结果

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
