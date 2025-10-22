const fs = require('fs');
const path = require('path');

const scriptContent = fs.readFileSync(
  path.join(__dirname, '..', 'public', 'dashboard-console-capture.js'),
  'utf8'
);

const scriptTag = `<script>${scriptContent}</script>`;

function injectScript(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('dashboard-console-capture')) {
    return;
  }
  
  content = content.replace('</head>', `${scriptTag}</head>`);
  fs.writeFileSync(filePath, content);
  console.log(`Injected console capture into ${filePath}`);
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.html')) {
      injectScript(filePath);
    }
  });
}

const outDir = path.join(__dirname, '..', 'out');
if (fs.existsSync(outDir)) {
  processDirectory(outDir);
  console.log('Console capture script injection complete');
}