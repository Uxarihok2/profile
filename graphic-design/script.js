const gallery = [{ src: '../assets/image/poster_1.png', description: '展覽海報' }, { src: '../assets/image/poster_2.png', description: '展覽海報' }, { src: '../assets/image/poster_3.png', description: '網頁Banner' }, { src: '../assets/image/logo_1.png', description: '品牌Logo' }, { src: '../assets/image/logo_2.png', description: '品牌Logo' }, { src: '../assets/image/logo_3.png', description: '品牌Logo' }, { src: '../assets/image/package_1.png', description: '產品包裝設計' }, { src: '../assets/image/package_2.png', description: '產品包裝設計' }, { src: '../assets/image/package_3.png', description: '產品包裝設計' }]
const text = document.getElementById('description');
const preBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');
var currentIndex;
preBtn.onclick = () => switchImg(-1);
nextBtn.onclick = () => switchImg(1);

addEventListener('click', ({ target: { id } }) => {
    const backdrop = document.getElementById('backdrop');
    const excludes = ['previous-btn', 'next-btn', 'demo-image'];

    if (!backdrop.classList.contains('d-none') && !excludes.includes(id)) {
        backdrop.classList.add('d-none');
    }
});

initialPortfolioList();

function onImageClick(index, event) {
    preBtn.removeAttribute('disabled');
    nextBtn.removeAttribute('disabled');
    const backdrop = document.getElementById('backdrop');
    backdrop.classList.remove('d-none');
    event.stopPropagation();
    currentIndex = index;
    updateButtonStatus();
    renderDemoImg();
}

function switchImg(offset) {
    const temp = currentIndex + offset;
    currentIndex = temp < 0 ? 0 : temp >= gallery.length ? gallery.length - 1 : temp;
    updateButtonStatus();
    renderDemoImg();
}

function updateButtonStatus() {
    if (currentIndex === 0) {
        preBtn.setAttribute('disabled', true);
    } else if (currentIndex === gallery.length - 1) {
        nextBtn.setAttribute('disabled', true);
    } else {
        preBtn.removeAttribute('disabled');
        nextBtn.removeAttribute('disabled');
    }
}

function renderDemoImg() {
    const demo = document.getElementById('demo-image');
    demo.setAttribute('src', `${gallery[currentIndex].src}`);
    text.textContent = gallery[currentIndex].description;
    text.className = 'font-xxs font-white';
}

function initialPortfolioList() {
    const ulContent = document.getElementById('portfolio-list');
    const result = gallery.reduce((pre, imageName) => `${pre}<li class="w-250px h-250px position-relative">
        <img class="position-absolute w-100 h-100 border-radius-20" src="${imageName.src}" alt="">
      </li>`, '');
    ulContent.insertAdjacentHTML('beforeend', result);
    Array.from(ulContent.children).forEach((dom, index) => {
        dom.onclick = e => onImageClick(index, e);
    });
}

// const gallery = ['poster_1', 'poster_2', 'poster_3', 'logo_1', 'logo_2', 'logo_3', 'package_1', 'package_2', 'package_3'];

// addEventListener('click', ({ target }) => {
//     const backdrop = document.getElementById('backdrop');
//     const previousBtn = document.getElementById('previous-btn');
//     const nextBtn = document.getElementById('next-btn');
//     const demo = document.getElementById('demo-image');
//     console.log(targe);
//     if (!backdrop.classList.contains('d-none') && !target.contains(previousBtn) && !target.contains(nextBtn) && !target.contains(demo)) {
//         backdrop.classList.add('d-none');
//     }
// });

// initialPortfolioList();

// function onImageClick(index, event) {
//     console.log(index, event);
//     const backdrop = document.getElementById('backdrop');
//     const demo = document.getElementById('demo-image');
//     backdrop.classList.remove('d-none');
//     demo.setAttribute('src', `../assets/image/${gallery[index]}.png`);
//     event.stopPropagation();
// }

// function initialPortfolioList() {
//     const ulContent = document.getElementById('portfolio-list');
//     const result = gallery.reduce((pre, imageName) => `${pre}<li class="w-250px h-250px position-relative">
//         <img class="position-absolute w-100 h-100 border-radius-20" src="../assets/image/${imageName}.png" alt="">
//       </li>`, '');
//     ulContent.insertAdjacentHTML('beforeend', result);
//     Array.from(ulContent.children).forEach((dom, index) => {
//         console.log(dom)
//         console.log(index)
//         dom.onclick = e => onImageClick(index, e);
//     });
// }



