function FileUpload (action, file, loadCb, progressCb) {
  let formData = new FormData()
  formData.append('file', file)
  let xhr = new XMLHttpRequest()
  xhr.upload.addEventListener('load', loadCb, false)
  xhr.upload.addEventListener('progress', progressCb, false)
  xhr.open('POST', action)
  xhr.overrideMimeType('text/plain; charset=x-user-defined-binary')
  xhr.send(formData)
}

export default FileUpload
