// import createHeading from './heading.js';
// webpack支持使用commonjs规范的require导入esModule标准，对于默认导出需要在后面加.default
const createHeading = require('./heading.js').default;   
import './main.css'
import icon from './img.png'
import icon2 from './pic.jpg'
const heading = createHeading();
document.body.append(heading);
console.log('append success')

const img = new Image();
img.src = icon;
document.body.append(img);

const img2 = new Image();
img2.src = icon2;
document.body.append(img2);


import html from './footer.html'
document.write(html);

import about from './about.md'
console.log('about', about)
document.write(about);

