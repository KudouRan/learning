import Data from './data.txt'

console.log(Data)
const p = document.createElement('p')
p.innerHTML = `<p>${Data}<p>`
document.body.appendChild(p)
