const createObj = () => {
  return {
    a: false
  }
}

const a = createObj()
const b = createObj()

console.log(a === b)
