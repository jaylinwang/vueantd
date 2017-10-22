# Pagination分页

采用分页的形式分隔长列表，每次只加载一个页面。

## 何时使用

- 当加载/渲染所有数据将花费很多时间时；
- 可切换页码浏览数据。

## 代码演示

<basic></basic>

<many></many>

<script>
import basic from 'components/pagination/demo/basic.md'
import many from 'components/pagination/demo/many.md'

export default {
  components: {
    basic,
    many
  }
}
</script>
