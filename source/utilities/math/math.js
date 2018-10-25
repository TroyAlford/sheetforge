import core from 'mathjs/core'

const math = core.create()
math.import(require('mathjs/lib/expression/function/eval'))
math.import(require('mathjs/lib/expression/function/parse'))
math.import(require('mathjs/lib/function/arithmetic/add'))
math.import(require('mathjs/lib/function/arithmetic/ceil'))
math.import(require('mathjs/lib/function/arithmetic/divide'))
math.import(require('mathjs/lib/function/arithmetic/floor'))
math.import(require('mathjs/lib/function/arithmetic/mod'))
math.import(require('mathjs/lib/function/arithmetic/multiply'))
math.import(require('mathjs/lib/function/arithmetic/pow'))
math.import(require('mathjs/lib/function/arithmetic/round'))
math.import(require('mathjs/lib/function/arithmetic/subtract'))
math.import(require('mathjs/lib/function/logical'))
math.import(require('mathjs/lib/function/statistics/max'))
math.import(require('mathjs/lib/function/statistics/mean'))
math.import(require('mathjs/lib/function/statistics/min'))
math.import(require('mathjs/lib/function/statistics/sum'))
math.import(require('mathjs/lib/type/matrix/function/matrix'))
math.import(require('mathjs/lib/type/matrix/Matrix'))
math.import(require('mathjs/lib/type/matrix/DenseMatrix'))

export default math
