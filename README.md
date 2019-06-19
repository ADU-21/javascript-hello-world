# Learning JavaScript

# Notes
* JavaScript 是由时间驱动执行的单线程模型。
* JavaScript 引擎自动提升了变量的声明，但不会提升变量的赋值。
* 闭包可以让 function 拥有私有变量，但要注意返回函数不要引用任何循环变量，或者后续会发生变化的变量。
* 箭头函数完全修复了this的指向，this总是指向词法作用域，也就是外层调用者obj。