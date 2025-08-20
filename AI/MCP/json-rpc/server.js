import utils from './utils.js';

process.stdin.on('data', (data) => {
  const req = JSON.parse(data)
  const result = utils[req['method']](req['params'])
  process.stdout.write(JSON.stringify({
    jsonrpc: '2.0',
    id: req['id'],
    result
  }) + '\n')
});
