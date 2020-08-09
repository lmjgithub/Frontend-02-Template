学习笔记

# CSS
## at-rules
 - @charset
 - @import
 - @media
 - @psge
 - @counter-style
 - @keyframes
 - @supports
 - @namespace

## rule-sets
 - Selectors
   - Simple-selector
     - type
     - universal
     - attribute
     - class
     - id
     - pseudo-class
     - pseudo-element
   - Combinators
     - \<space\>
     - \>
     - \+
     - ~
 - Declaration
   - Property
   - Value

## 为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？
first-letter是在布局完成之后，确定了一段文字中的第一个文字，可以对其操作布局时性能开销小；
而first-line选中的是第一行文字，不同的宽度选中的文字内容不一样，要对其重新布局排版消耗性能大,所以first-letter 可以设置 float 之类的，而 first-line 不行。