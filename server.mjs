import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const resources={'/':['index.html','text/html'],'/greeting.mjs':['greeting.mjs','text/javascript']};
http.createServer((req,res)=>{
 const resource=resources[new URL(req.url,'http://127.0.0.1').pathname];
 if(!resource){res.writeHead(404);res.end('Not found');return}
 res.setHeader('Content-Type',resource[1]);res.end(fs.readFileSync(path.join(root,resource[0])));
}).listen(3202,'127.0.0.1',()=>console.log('Disposable fixture: http://127.0.0.1:3202'));
