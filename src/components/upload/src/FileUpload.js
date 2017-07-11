/**
 * 文件上传对象
 * @param {String} action 上传地址
 * @param {Object} file 要上传的文件
 * @param {Object} options 上传配置
 *        name: 文件参数名
 *        data: 扩展参数
 */
function FileUpload (action, file, options) {
  let formData = new FormData()
  let self = this
  formData.append(options.name, file)
  if (options.data) {
    let data = options.data
    for (let key in data) {
      formData.append(key, data[key])
    }
  }
  let xhr = new XMLHttpRequest()
  // xhr.upload.addEventListener('load', function (e) {
  //   console.log(xhr.readyState)
  //   if (parseInt(xhr.status) === 200) {
  //     self.onLoad && self.onLoad(e, file, xhr)
  //   } else {
  //     self.onError && self.onError(e, file, xhr)
  //   }
  // }, false)
  xhr.upload.addEventListener('error', function (e) {
    self.onError && self.onError(e, file, xhr)
  }, false)
  xhr.addEventListener('readystatechange', function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        self.onLoad && self.onLoad(e, file, xhr)
      } else {
        self.onError && self.onError(e, file, xhr)
      }
    }
  })
  xhr.upload.addEventListener('progress', function (e) {
    if (self.onProgress) {
      self.onProgress(e, file)
    }
  }, false)
  xhr.open('POST', action)
  xhr.send(formData)
}
export default FileUpload
