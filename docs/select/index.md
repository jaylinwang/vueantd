# Select选择器

## 何时使用

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。

## 代码示例

<basic-demo></basic-demo>

<size-demo></size-demo>

<multiple-demo></multiple-demo>

<option-group-demo></option-group-demo>

<search-demo></search-demo>

<script>
  import basicDemo from 'components/select/demo/basic.md'
  import sizeDemo from 'components/select/demo/size.md'
  import multipleDemo from 'components/select/demo/multiple.md'
  import optionGroupDemo from 'components/select/demo/option-group.md'
  import searchDemo from 'components/select/demo/search.md'

  export default {
    components: {
      basicDemo,
      sizeDemo,
      multipleDemo,
      optionGroupDemo,
      searchDemo
    }
  }
</script>
