var c2e = { 狗: 'dog', 貓: 'cat', 一隻: 'a', 這隻: 'the', 追: 'chase', 吃: 'eat' }

function a (e) {
  var c = []
  for (let i in e) {
    var eword = e[i]
    var cword = c2e[eword]
    c.push(cword)
  }
  return c
}

console.log('process.argv.slice(2)=', process.argv.slice(2))
var c = a(process.argv.slice(2))
console.log(c)

