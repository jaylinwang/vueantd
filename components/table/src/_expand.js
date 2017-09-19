export default {
  name: 'TableExpand',
  functional: true,
  props: {
    rowData: Object,
    render: Function,
    column: {
      type: Object,
      default: null
    }
  },
  render: (h, ctx) => {
    return ctx.props.render(h, ctx.props.rowData)
  }
}
