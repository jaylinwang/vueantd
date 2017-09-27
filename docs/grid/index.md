# Grid 栅格

24 栅格系统。

## 设计理念

<GridIntro></GridIntro>

在多数业务情况下，Ant Design需要在设计区域内解决大量信息收纳的问题，因此在 12 栅格系统的基础上，我们将整个设计建议区域按照 24 等分的原则进行划分。

划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。

## 概述

布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：
- 通过row在水平方向建立一组column（简写col）
- 你的内容应当放置于col内，并且，只有col可以作为row的直接元素
- 栅格系统中的列是指1到24的值来表示其跨越的范围。例如，三个等宽的列可以使用.col-8来创建
- 如果一个row中的col总和超过 24，那么多余的col会作为一个整体另起一行排列

## 代码演示

<basic></basic>

<gutter></gutter>

<offset></offset>

<order></order>


## API

### v-row

| 成员       | 说明             | 类型               | 默认值       |
|-----------|-----------------|--------------------|-------------|
| gutter    | 栅格间隔   | Number | 0        |

### v-col

| 成员      | 说明             | 类型               | 默认值       |
|----------|-----------------|--------------------|-------------|
| span     | 栅格占位格数，为 0 时相当于 `display: none`   | Number | - |
| offset   | 栅格左侧的间隔格数，间隔内不可以有栅格  | Number | 0 |
| push     | 栅格向右移动格数   | Number | 0        |
| pull     | 栅格向左移动格数   | Number | 0        |
| xs       | `<768px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | Number\|Object | - |
| sm       | `≥768px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | Number\|Object | - |
| md       | `≥992px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | Number\|Object | - |
| lg       | `≥1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | Number\|Object | - |
| xl       | `≥1600px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | Number\|Object | - |

响应式栅格的断点遵循了 [BootStrap 3 的规则](https://getbootstrap.com/docs/3.3/css/#responsive-utilities-classes)（不包含链接里 `occasionally` 的部分)。


<script>
  import GridIntro from 'site/widget/grid-intro.vue'
  import basic from 'components/grid/demo/basic.md'
  import gutter from 'components/grid/demo/gutter.md'
  import offset from 'components/grid/demo/offset.md'
  import order from 'components/grid/demo/order.md'

  export default {
    components: {
      GridIntro,
      basic,
      gutter,
      offset,
      order
    }
  }
</script>

