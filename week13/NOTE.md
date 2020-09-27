学习笔记
## 帧处理
- `setInterval(() => {}, 16);` 自重复执行不安全，可能会发生积压。
- `let tick = { setTimeout(tick, 16);}`
- `let tick = () => {requestAnimationFrame(tick);}`

## 动画
- 属性动画
- 帧动画
