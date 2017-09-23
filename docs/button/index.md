# Button按钮

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 代码演示

<basic></basic>

<disabled></disabled>

<size></size>

<shape></shape>

<loading></loading>

<group></group>

## API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `shape` -> `size` -> `loading` -> `disabled`

按钮的属性说明如下：

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
type | 设置按钮类型，可选值为 `primary` `dashed` `danger`或者不设 | String | `default`
nativeType | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | String | `button`
icon | 设置按钮的图标类型 | String | -
shape | 设置按钮形状，可选值为 `circle` 或者不设 | String | -
size | 设置按钮大小，可选值为 `small` `large` 或者不设 | String | `default`
loading | 设置按钮载入状态 | Boolean | `false`
@click | `click` 事件的 handler | Function | -

<script>
import basic from 'components/button/demo/basic.md'
import disabled from 'components/button/demo/disabled.md'
import size from 'components/button/demo/size.md'
import shape from 'components/button/demo/shape.md'
import loading from 'components/button/demo/loading.md'
import group from 'components/button/demo/group.md'

export default {
  components: {
    basic,
    disabled,
    size,
    shape,
    loading,
    group
  }
}
</script>
