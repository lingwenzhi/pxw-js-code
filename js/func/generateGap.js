// 依据最大最小值，生成对应区间，间隔为10的指数
function generateGap (min, max) {
  const gapArr = []
  const sub = max - min
  const gap = Math.pow(10, String(sub).length - 1)
  const gapMin = Math.floor(min / gap) * gap
  for(let i = 0, length = Math.ceil(sub/gap); i< length; i++) {
    gapArr.push([gapMin + gap * i, gapMin + gap * (i + 1)])
  }
  return gapArr
}
