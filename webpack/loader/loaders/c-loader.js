function cLoader(content, map, meta) {
  console.log('开始执行cLoader Normal Loader')
  return content + '[cLoader->'
}

cLoader.pitch = function(remainingRequest, precedingRequest, data) {
  console.log('开始执行cLoader Pitching Loader')
  console.log('remainingRequest：', remainingRequest)
  console.log('precedingRequest：', precedingRequest)
  console.log('data：', data)
}

module.exports = cLoader
