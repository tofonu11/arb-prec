const { curry } = require('ramda')

const swap = (i, j, a) => {
  const s = a[i]
  a[i] = a[j]
  a[j] = s
}

// immutable
const incrementBinaryFromExponent = curry((xp, input) => {

  const rp = input.length - xp
  const a = [...input]

  if (a[rp] === 0) {
    a[rp] = 1
    return a
  }
  for(i = rp; i >= 0; i--) {
    if (i > 0 && a[i] != a[i-1]) {
      swap(i, i-1, a)
      break
    } else if (i < rp + 1){
      a[i] = 0
    }
  }

  if (i === -1) {
    a.unshift(1)
  }

  return a  
})

module.exports = incrementBinaryFromExponent


