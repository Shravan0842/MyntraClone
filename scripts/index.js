let bagItems;
onLoad();

function onLoad(){
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsonMenspage();
    displayBagIcon();
}

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon(){
    let bagItemCount = document.querySelector('.bag-count');
    if (bagItems.length > 0){
        bagItemCount.style.visibility = 'visible';
        bagItemCount.innerText = bagItems.length
    } else{
        bagItemCount.style.visibility = 'hidden';
    }
}

function displayItemsonMenspage() {
    let itemsContainer = document.querySelector('.full-items-container');

    if (!itemsContainer){
        return;
    }
    let innerHtml = '';
    items.forEach(item => {
        innerHtml += `
    <div class="item-container">
        <img class="item-image" src="${item.image}" alt="item image">
        <span class="rating">${item.rating.stars} <span><img src="images/green-star.png"></span> | ${item.rating.count} Rating</span>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="pricing-container">
        <span class="current-price">Rs.${item.current_price}</span>
        <span class="original-price"> <s>Rs.${item.original_price}</s></span>
        <span class="discount">(Rs.${item.discount} OFF)</span>
        </div>
        <button class="bag-btn" onclick="addToBag(${item.id})"> <span class="material-symbols-outlined">
        local_mall
        </span> ADD TO BAG</button>
    </div>`
    });
    itemsContainer.innerHTML = innerHtml;
}


