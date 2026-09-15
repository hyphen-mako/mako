import fs from 'node:fs/promises';
import path from 'node:path';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
const exec=promisify(execFile);
const manifest=JSON.parse(await fs.readFile('docs/research/assets.json','utf8'));
const failures=[];
for(let i=0;i<manifest.length;i+=4)await Promise.all(manifest.slice(i,i+4).map(async asset=>{
 await fs.mkdir(path.dirname(asset.path),{recursive:true});
 try{await exec('curl',['-fsSL','--globoff','--retry','1','--max-time','25','https://pickcare.co.kr'+asset.url,'-o',asset.path]);}
 catch(error){failures.push(asset.url);}
}));
console.log(JSON.stringify({downloaded:manifest.length-failures.length,failures},null,2));
if(failures.length)process.exitCode=1;
