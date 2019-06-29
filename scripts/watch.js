const fs = require('fs');
const Path = require('path');
const mkdirp = require('mkdirp');
const del = require('del');
const chokidar = require('chokidar');

watch('samoyed/packages/', 'node_modules/@samoyed');

function watch(srcPath, targetPath) {
  console.log('watch', srcPath);
  chokidar.watch(srcPath, {
    ignored: /node_modules|[\/\\]\./
  }).on('raw', (event, file, details) => {
    if (file.endsWith('.ts') && !file.endsWith('.d.ts')) return;
    if (file.endsWith('.tsx')) return;
    let path = file.split(srcPath)[1];
    let target = Path.join(targetPath, path);
    let dir = Path.dirname(target);
    switch (event) {
      case 'modified':
      case 'change':
        if (!fs.existsSync(dir)) {
          console.log('mkdir', dir);
          mkdirp.sync(dir);
        }
        if (fs.existsSync(target) && fs.readFileSync(file).compare(fs.readFileSync(target)) === 0) {
          return;
        }
        fs.copyFileSync(file, target);
        break;
      case 'moved':
        del.sync(target);
        break;
    }
    console.log(event, `${srcPath}${path}`);
  });
}

