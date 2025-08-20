import { spawn } from "child_process";

// 启动服务子进程
const serverProcess = spawn('node', ['server.js'])

// 监听服务端响应
serverProcess.stdout.on('data', (data) => {
  console.log(data.toString())
})

// 发送几条测试消息
const message = [
  'hello',
  'world',
  'from',
  'client',
]

message.forEach((msg, index) => {
  setTimeout(() => {
    serverProcess.stdin.write(msg + '\n')
  }, index * 1000)
})