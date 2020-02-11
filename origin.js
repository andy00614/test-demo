function expect(ret) {
  return {
    expectValue:ret,
    toBe(result) {
      if(result !== this.expectValue) {
        throw new Error(`结果错误,预期值为${this.expectValue},结果为${result}`)
      }
    }
  }
}
function test(des,fn) {
  try {
    fn()
    console.log('成功')
  } catch(e) {
    throw new Error(des + e)
  }
}

function add(a,b) {
  return a + b
}

test('3+5',() => {
  expect(add(3,5)).toBe(7)
})

expect(add(3,5)).toBe(7)

