function aLoader(content, map, meta) {
  console.log('开始执行aLoader Normal Loader')
  content += 'aLoader]'
  return `module.exports = '${content}'`
}

aLoader.pitch = function(remainingRequest, precedingRequest, data) {
  console.log('开始执行aLoader Pitching Loader')
  console.log('remainingRequest：', remainingRequest)
  console.log('precedingRequest：', precedingRequest)
  console.log('data：', data)
}

module.exports = aLoader
