# 学习笔记

## HTML
- 了解到 HTML 与 XML、SGML的渊源。
- HTML 标签的语义，和如何语义话的使用 HTML标签

## API
### DOM API
 - 导航操作
   - Node
     - parentNode
     - childNodes
     - firstChild
     - lastChild
     - nextSibling
     - previousSibling
   - Element
     - parentElement
     - children
     - firstElementChild
     - lastElementChild
     - nextElementSibling
     - prevElementSibling
 - 修改操作
   - appendChild
   - insertBefore
   - removeChild
   - replaceChild
 - 高级操作
   - compareDocumentPosition
   - contains
   - isEuqualNode
   - isSameNode
   - cloneNode

### 事件API
    - 事件的触发顺序
    - 事件捕获
    - 事件冒泡

### Range API
    - 创建
      - new Range
      - document.getSelection().getRandeAt(0)
    - API
      - setStartBefore
      - setEndBefore
      - setStartAfter
      - setEndAfter
      - selectNode
      - selectNodeContents
      - extractContents
      - insertNode

### CSSOM API
    - document.stylesheets
      - cssRules
      - insertRule
      - removeRule
      - CSSStyleRule
        - selectorText string
        - style K-V 结构
    -  getComputedStyle

### CSSOM View API
    - window
      - innerHeight
      - innerWidth
      - devicePixelRatio
    - scroll
      - scrollTop
      - scrollLeft
      - scrollWidth
      - scrollHeight
      - scroll
      - scrollBy
      - scrollIntoView
      - window.scrollX
      - window.scrollY
      - window.scroll
      - window.scrollBy
    - layout
      - getClientRects
      - getBoundingClientRect

## API 规范来源组织
    - khronos
      - webGL
    - ECMA
      - ECMAScript
    - WHATWG
      - HTML
    - W3C
      - webaudio
      - ...

