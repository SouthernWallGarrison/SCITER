
import {fs} from "@sys";
import * as env from "@env";

export function drillDir(path) {
 return path.split("/").reduce((parentDir, childDir) => {
    let curDir = parentDir + childDir;
    if(childDir == "") return parentDir;
    if(!fs.sync.stat(curDir)?.isDirectory)
    {    
      if(!fs.sync.mkdir(curDir))
         throw new Error(`failed to create directory ${curDir}`);
    }
    return curDir + "/";
  }, env.PLATFORM == "Windows"? "":"/");
}

export async function copyDir(srcDir, dstDir) {
    const DIRECTORY = 2;

    drillDir(dstDir);

    let fileCount = 0;    

    let list = fs.sync.readdir(srcDir);

    for(let {name,type} of list) {
      const src = srcDir + '/' + name;
      const dst = dstDir + '/' + name;

      if (type == DIRECTORY) {
         try {
            //console.log('copying dir: ' + dst);
            fileCount += await copyDir(src,dst);
         } catch(e) {
         }
      } else {
         try {
            //console.log('copying file: ' + dst);
            await fs.copyfile(src,dst,0);

         } catch(e) {
            console.error('could\'t copy file: ' + dst);
         }
      }
   }
   return fileCount;
}