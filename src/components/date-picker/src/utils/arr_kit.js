/**
 * 将 list 按数量分离成不同组
 * @param {Array} array 数组
 * @param {Number} limit 每一组数量限制
 */
const groupByLimit = function (array, limit) {
  let list = []
  if (!Array.isArray) {
    throw new Error('[ArrayKit] groupByLimit方法第一个参数必须为 Array 类型的值')
  }
  if ((typeof limit).toLowerCase() !== 'number') {
    throw new Error('[ArrayKit] groupByLimit方法第二个参数必须为 Number 类型的值')
  }
  for (let i = 0, len = array.length; i < len; i++) {
    let index = Math.floor(i / limit)
    if (!Array.isArray(list[index])) {
      list[index] = []
    }
    list[index].push(array[i])
  }
  return list
}

export {
  groupByLimit
}
