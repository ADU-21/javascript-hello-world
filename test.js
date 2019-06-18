'use strict'

process.nextTick(() => console.log('next'))

process.on('exit', () => console.log('exit'))

console.log('before');  