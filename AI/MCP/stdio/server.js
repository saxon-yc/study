process.stdin.setEncoding('utf-8')
process.stdin.on('data',  (resp)  => {
  process.stdout.write(`${process.pid}-回复${resp}\n`)
})