const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    if (file === 'node_modules' || file === '.next' || file === '.git' || file.startsWith('batch') || file === 'push-to-github.js') return;
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

const allFiles = getAllFiles(rootDir);
const payload = [];

allFiles.forEach(absPath => {
  const relPath = path.relative(rootDir, absPath).replace(/\\/g, '/');
  if (relPath.endsWith('.png') || relPath.endsWith('.jpg') || relPath.endsWith('.webp')) {
    // skip binary for text batch, or handle separately
    return;
  }
  const content = fs.readFileSync(absPath, 'utf8');
  payload.push({ path: relPath, content });
});

fs.writeFileSync(path.join(rootDir, 'all_text_files.json'), JSON.stringify(payload, null, 2));
console.log(`Exported ${payload.length} text files to all_text_files.json`);
