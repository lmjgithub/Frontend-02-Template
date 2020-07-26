# 学习笔记
## 浏览器工作原理总论
1. 浏览器通过 url 使用 http 请求 html文件；
2. 解析 html、构建 DOM 和 CSS，html 是以流的形式返回，浏览器解析是同步进行，不需要等待 html 文件全部返回后，在开始解析；
3. 计算 CSS，CSS 与 DOM 关联 生成带有 CSS 的 DOM tree；
4. 排版，计算盒模型位置
5. 渲染，输出Bitmap

## 状态机、有限状态机
- 每一个状态都是一个机器
  - 在每一个机器里，我们可以做计算、存储、输出……
  - 所有的这些机器接受的输入是一致的
  - 状态机的每一个机器本身没有状态，如果我们用函数来表示的话，它应该是纯函数（无副作用）
- 每一个机器知道下一个状态
  - 每一个机器都有确定的下一个状态（Moore）
  - 每一个机器根据输入决定下一个状态（Mealy）

## HTTP 协议
- IOS-OSI七层网络模型
  - 物理层、数据链路层（4G/5G/Wi-Fi）
  - 网络层（Internet）
  - 传输层（TCP）（对应 Node net 模块）
  - 会话层、表示层、应用层（HTTP）（对应 Node http 模块）

- TCP
  - 流 - 传输数据，没有明显的分割单位，只保证前后的顺序是正确的
  - 端口
  - require('net');

- IP
  - 包 - tcp传输是一个一个数据包的概念
  - IP地址：唯一的标示了连入Internet的每一个设备
  - libnet/libpcap：（C++的包）
    - libnet负责构造IP包并且发送
    - libpcap负责从网卡抓所有的流经你的网卡的IP包

## Request
 - request line
 - headers
   - Content-Type 属性是必须的
 - body

## Response
 - status line
 - headers
 - body

## 解析HTML
 - 标签
   - 开始标签
   - 结束标签
   - 自封闭标签
 - 属性
   - 单引号
   - 双引号
   - 无引号
   - 属性结束时，我们把属性加到标签Token上
 - 节点
   - 文本节点于自封闭标签处理类似
   - 多个文本节点需要合并
