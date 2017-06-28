export default {
  name: 'TableExpand',
  functional: true,
  props: {
    rowData: Object,
    render: Function,
    index: Number,
    column: {
      type: Object,
      default: null
    }
  },
  render: (h, ctx) => {
    const params = {
      rowData: ctx.props.rowData,
      index: ctx.props.index
    }
    if (ctx.props.column) params.column = ctx.props.column
    return ctx.props.render(h, params)
  }
}
