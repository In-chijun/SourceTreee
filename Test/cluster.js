const cluser = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluser.isMaster) {
    console.log(`마스터 프로세스 아이디: ${process.pid}`);

    for (let i = 0; i < numCPUs; i += 1)
        cluser.fork(); // 새로운 프로세스를 만드는 함수
    
        cluser.on('exit', (Worker, code, signal) => { // 프로세스가 끝나면 이 이벤트를 호출하라는 뜻
            console.log(`${Worker.process.pid}번 워커가 종료되었습니다.`); // 종료 코드
            console.log('code', code, 'signal', signal);
            cluser.fork();
        });
} else {
    http.createServer((req, res) => {
        res.writeHead(200);
        res.write('<h1>Hellow Node!</h1>');
        res.end('<p>Hello Cluster!</p>');
        setTimeout(() => process.exit(1), 1000);
    }).listen(8086);

    console.log(`${process.pid}번 워커 실행`)
}