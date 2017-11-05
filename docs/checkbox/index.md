# Checkbox 多选框

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 代码示例

<basic-demo></basic-demo>
<disabled-demo></disabled-demo>
<checkbox-group-demo></checkbox-group-demo>
<toggle-demo></toggle-demo>
<value-demo></value-demo>

<script>
import basicDemo from 'components/checkbox/demo/basic.md'
import disabledDemo from 'components/checkbox/demo/disabled.md'
import checkboxGroupDemo from 'components/checkbox/demo/checkbox-group.md'
import toggleDemo from 'components/checkbox/demo/toggle.md'
import valueDemo from 'components/checkbox/demo/value.md'

export default {
  components: {
    basicDemo,
    disabledDemo,
    checkboxGroupDemo,
    toggleDemo,
    valueDemo
  }
}
</script>
