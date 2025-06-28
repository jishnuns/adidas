const adToggle = document.querySelector('.ad-toggle');
const adExitButton = document.querySelector('.ad-exit-button');
const adSlideMenu = document.querySelector('.ad-slide-menu');

adToggle.addEventListener('click', () => {
    adSlideMenu.style.display = "block"
});

adExitButton.addEventListener('click', () => {
    adSlideMenu.style.display = "none"
});


const adFilter = document.querySelector('.ad-filter');
const filterClose = document.querySelector('.filter-close');
const adFilterSlider = document.querySelector('.ad-filter-slider');

adFilter.addEventListener('click', () => {
    adFilterSlider.style.display = "block";
});

filterClose.addEventListener('click', () => {
    adFilterSlider.style.display = "none"
});


// fetch

let productData = [];

fetch('product.json')
    .then(res => res.json())
    .then(data => {
        productData = data;
        fetchRender(productData);
    });

function fetchRender(product) {

    const adFetch = document.querySelector('.ad-product');
    adFetch.innerHTML = ``;

    product.forEach(productInfo => {
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('adFetch');

        contentDiv.innerHTML = `
            <div class="ad-product-card">
                <div class="ad-all-content">
                    <header class="ad-product-pic">
                        <img class="product-img" src="${productInfo.image}">
                    </header>

                    <div class="ad-product-description">
                        <footer class="ad-product-details">
                            <div class="ad-price-component">
                                <div class="ad-main-price">
                                    <span class="price-add">${productInfo.rate}</span>
                                </div>

                                <div class="ad-price-history">
                                    <div class="orginal-price">
                                        <span class="og-price">${productInfo.orginalPrice}</span>
                                        <span class="ad-discount">${productInfo.discount}</span>
                                    </div>
                                </div>
                            </div>

                            <p class="product-name">${productInfo.productName}</p>
                            <p class="product-info">${productInfo.info}</p>
                            <p class="ad-product-color">${productInfo.color}</p>
                            <div class="free-space"></div>
                        </footer>
                    </div>
                </div>
            </div>
        `;

        adFetch.appendChild(contentDiv);
    });

};








const adFilterSortOne = document.querySelector('.ad-filter-sort-all');
const adSortItems = document.querySelector('.ad-sort-items');

adFilterSortOne.addEventListener('click', () => {
    adSortItems.classList.toggle('ad-sort-items-visible');
})


// material drop down 
const adMaterialOne = document.querySelector('.ad-material-one');
const filterOptions = document.querySelector('.filter-options-one');


adMaterialOne.addEventListener('click', () => {
    filterOptions.classList.toggle('filter-options-one-vis');
})


//product type

const adProductTypeOne = document.querySelector('.ad-Product-type-one');
const filterOptionsTwo = document.querySelector('.filter-options-two');

adProductTypeOne.addEventListener('click', () => {
    filterOptionsTwo.classList.toggle('filter-options-two-vis');
});

//size

const adSizeContent = document.querySelector('.ad-size-content');
const adFilterSize = document.querySelector('.ad-filter-size');

adSizeContent.addEventListener('click', () => {
    adFilterSize.classList.toggle('ad-filter-size-vis');
});

//colour

const adColourContent = document.querySelector('.ad-colour-content');
const mainColorOption = document.querySelector('.main-colour-options');

adColourContent.addEventListener('click', () =>{
    mainColorOption.classList.toggle('main-colour-options');
});

//discount

const adDiscountContent = document.querySelector('.ad-discount-content');
const filterOptionsThree = document.querySelector('.filter-options-three');

adDiscountContent.addEventListener('click', () => {
    filterOptionsThree.classList.toggle('filter-options-three-vis');
});

//gender 

const adGenderContent = document.querySelector('.ad-gender-content');
const filterOptionsFour = document.querySelector('.filter-options-four');

adGenderContent.addEventListener('click', () => {
    filterOptionsFour.classList.toggle('filter-options-four-vis')
})

//sport

const adSportsContent = document.querySelector('.ad-sprots-content');
const filterOptionsFive = document.querySelector('.filter-options-five');

adSportsContent.addEventListener('click', () => {
    filterOptionsFive.classList.toggle('filter-options-five-sport');
});

// brand

const adBrandContent = document.querySelector('.ad-brand-content');
const filterOptionBrand = document.querySelector('.filter-options-brand');

adBrandContent.addEventListener('click', () => {
    filterOptionBrand.classList.toggle('filter-options-brand-visi')
})

//collection;

const adCollectionContent = document.querySelector('.ad-collection-content');
const filterOptionsCollection = document.querySelector('.filter-options-collection');

adCollectionContent.addEventListener('click', () => {
    filterOptionsCollection.classList.toggle('filter-options-collection-visi')
});

//price

const adPriceContent = document.querySelector('.ad-price-content');
const priceDetails = document.querySelector('.price-details');

adPriceContent.addEventListener('click', () => {
    priceDetails.classList.toggle('price-details-visible')
})

