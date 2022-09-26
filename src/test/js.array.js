// Array.prototype.myReduce = function (fn, initValue) {
//   if (typeof fn !== 'function') {
//     throw new Error(fn + ' is not a function')
//   }
//   let acc = initValue ? initValue : this[0]
//   let startIndex = initValue ? 0 : 1
//   for (let i = startIndex; i < this.length; i++) {
//     acc = fn(acc, this[i], i, this)
//   }
//   return acc
// }

// const num = [1, 3, 5, 7, 9].myReduce((a, b) => {
//   return a * b
// }, 10)

// // console.log(num)

// const target = {
//   field1: 1,
//   field2: undefined,
//   field3: {
//     child: 'child'
//   },

//   field4: [2, 4, 8]
// }

// target.target = target

// // console.log(target.target.target)

// let obj = { name: 'ConardLi' }

// const target = {
//   obj: 'code秘密花园'
// }

// obj = null

// console.log(obj)

// console.log(Object.prototype.toString.call(window))

// console.log(window)
// const a = { a: 1 }.constructor
// console.dir(new a())

// const mapTag = '[object Map]'
// const setTag = '[object Set]'
// const arrayTag = '[object Array]'
// const objectTag = '[object Object]'
// const argsTag = '[object Arguments]'

// const boolTag = '[object Boolean]'
// const dateTag = '[object Date]'
// const numberTag = '[object Number]'
// const stringTag = '[object String]'
// const symbolTag = '[object Symbol]'
// const errorTag = '[object Error]'
// const regexpTag = '[object RegExp]'
// const funcTag = '[object Function]'

// const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag]

// function forEach(array, iteratee) {
//   let index = -1
//   const length = array.length
//   while (++index < length) {
//     iteratee(array[index], index)
//   }
//   return array
// }

// function isObject(target) {
//   const type = typeof target
//   return target !== null && (type === 'object' || type === 'function')
// }

// function getType(target) {
//   return Object.prototype.toString.call(target)
// }

// function getInit(target) {
//   const Ctor = target.constructor
//   return new Ctor()
// }

// function cloneSymbol(targe) {
//   return Object(Symbol.prototype.valueOf.call(targe))
// }

// function cloneReg(targe) {
//   const reFlags = /\w*$/
//   const result = new targe.constructor(targe.source, reFlags.exec(targe))
//   result.lastIndex = targe.lastIndex
//   return result
// }

// function cloneFunction(func) {
//   const bodyReg = /(?<={)(.|\n)+(?=})/m
//   const paramReg = /(?<=\().+(?=\)\s+{)/
//   const funcString = func.toString()
//   if (func.prototype) {
//     const param = paramReg.exec(funcString)
//     const body = bodyReg.exec(funcString)
//     if (body) {
//       if (param) {
//         const paramArr = param[0].split(',')
//         return new Function(...paramArr, body[0])
//       } else {
//         return new Function(body[0])
//       }
//     } else {
//       return null
//     }
//   } else {
//     return eval(funcString)
//   }
// }

// function cloneOtherType(targe, type) {
//   const Ctor = targe.constructor
//   switch (type) {
//     case boolTag:
//     case numberTag:
//     case stringTag:
//     case errorTag:
//     case dateTag:
//       return new Ctor(targe)
//     case regexpTag:
//       return cloneReg(targe)
//     case symbolTag:
//       return cloneSymbol(targe)
//     case funcTag:
//       return cloneFunction(targe)
//     default:
//       return null
//   }
// }

// function clone(target, map = new WeakMap()) {
//   // 克隆原始类型
//   if (!isObject(target)) {
//     return target
//   }

//   // 初始化
//   const type = getType(target)
//   let cloneTarget
//   if (deepTag.includes(type)) {
//     cloneTarget = getInit(target, type)
//   } else {
//     return cloneOtherType(target, type)
//   }

//   // 防止循环引用
//   if (map.get(target)) {
//     return map.get(target)
//   }
//   map.set(target, cloneTarget)

//   // 克隆set
//   if (type === setTag) {
//     target.forEach(value => {
//       cloneTarget.add(clone(value, map))
//     })
//     return cloneTarget
//   }

//   // 克隆map
//   if (type === mapTag) {
//     target.forEach((value, key) => {
//       cloneTarget.set(key, clone(value, map))
//     })
//     return cloneTarget
//   }

//   // 克隆对象和数组
//   const keys = type === arrayTag ? undefined : Object.keys(target)
//   forEach(keys || target, (value, key) => {
//     if (keys) {
//       key = value
//     }
//     cloneTarget[key] = clone(target[key], map)
//   })

//   return cloneTarget
// }

// module.exports = {
//   clone
// }

// function test(a, b) {
//   console.log(Object.prototype.toString.call(arguments))
// }
// test(1, 2)
// const num = new Number(0)
// console.log(Object.prototype.toString.call(num))

// const a = 4.constructor

// Function.prototype.myCall = function (context) {
//   if (typeof this !== 'function') {
//     throw new Error('type error')
//   }
//   const args = [...arguments].slice(1)
//   let result = null
//   context = context || window
//   context.fn = this
//   result = context.fn(...args)
//   delete context.fn
//   return result
// }
// const p1 = new Promise((resolve, reject) => {
//   reject('reject')
// })

// p1.then(
//   () => {
//     console.log(1)
//   },
//   err => {
//     console.log(err)
//   }
// )
//   .then(
//     () => {
//       console.log('2 sucee')
//     },
//     err => {
//       console.log(err + '2 error')
//     }
//   )
//   .then(
//     () => {
//       console.log('3 sucee')
//     },
//     err => {
//       console.log(err + '3 error')
//     }
//   )

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ a: 1 })
//   }, 1000)
// })

// const p2 = function () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ b: 1 })
//     }, 1000)
//   })
// }

// p1.then(() => {
//   p2()
// }).then(data => console.log(data))

function throttle(fn, delay = 1000) {
  // 记录第一次的调用时间
  var prev = null
  console.log(prev)
  // 返回闭包函数
  return function () {
    // 保存事件参数
    var args = arguments
    // 记录现在调用的时间
    var now = Date.now()
    console.log(now - prev)
    // console.log(now);
    // 如果间隔时间大于等于设置的节流时间
    if (now - prev >= delay) {
      // 执行函数
      fn.apply(this, args)
      // 将现在的时间设置为上一次执行时间
      prev = now
    }
  }
}

function con() {
  console.log('123')
}

const t = throttle(con, 3000)
t()
