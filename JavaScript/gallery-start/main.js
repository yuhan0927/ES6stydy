const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* 遍历图片并添加至缩略图区 */

for( let i=0; i<5; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/pic${i+1}.jpg`);
    thumbBar.appendChild(newImage);
}

var imgs = document.querySelectorAll('img');

for (let i = 0; i < imgs.length; i++) {
  imgs[i].onclick = function () {
    
    displayedImage.setAttribute('src',`images/pic${i}.jpg`)
  }
}

/* 编写 变亮/变暗 按钮 */

