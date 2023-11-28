const CONVENIENCE_FEES = 99;
let bagItemObjects;
onLoad();
function onLoad() {
    loadBagItemObjects();
    displayBagItems();
    displayBagItemsPricing();
}

function displayBagItemsPricing(){
    let bagItemsPricing = document.querySelector('.cart-items-pricing-container');
    let totalItem = bagItemObjects.length;
    let totalMRP = 0;
    let totalDiscount = 0;

    bagItemObjects.forEach(bagItems => {
        totalMRP += bagItems.original_price;
        totalDiscount += bagItems.original_price - bagItems.current_price;
    });

    
    let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

    bagItemsPricing.innerHTML = `<div class="pricing-heading">PRICE DETAILS (${totalItem} Items)</div>
    <div class="pricing-details-container">
        <div class="different-fee-boxes">
            <span class="fee-names">Total MRP</span>
            <span class="fee-prices">₹${totalMRP}</span>
        </div>
        <div class="different-fee-boxes">
            <span class="fee-names">Discount on MRP</span>
            <span class="fee-prices-low">-₹1${totalDiscount}</span>
        </div>
        <div class="different-fee-boxes">
            <span class="fee-names">Convenience Fee</span>
            <span class="fee-prices">₹99</span>
        </div>
        <div class="different-fee-boxes">
            <span class="fee-names">Shipping Fee</span>
            <span class="fee-prices-low">Free</span>
        </div>
        <hr>
        <div class="final-price-boxes">
            <span class="total-amount-fee">Total Amount</span>
            <span class="total-final-price">₹${finalPayment}</span>
        </div>
        <button class="place-orderbtn">PLACE ORDER</button>
    </div>`;

}

function loadBagItemObjects(){
   bagItemObjects = bagItems.map(itemId => {
        for (let i = 0; i < items.length; i++) {
            if (itemId == items[i].id) {
                return items[i];
            }
        }
    });
    console.log(bagItemObjects);
}

function displayBagItems() {
    let containerElement = document.querySelector('.cart-bagItems-container');
    let innerHTML = '';
    bagItemObjects.forEach(bagItem => {
        innerHTML += generateItemHTML(bagItem);
    });
    containerElement.innerHTML = innerHTML;
}

function removeFromBag(itemId){
    bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    loadBagItemObjects();
    displayBagItems();
    displayBagItemsPricing();
}

function generateItemHTML(item) {
    return `
    <div class="cart-bagItems">
    <div class="cart-item-image-box">
    <img class="cart-item-image" src="${item.image}" alt="image pic">
    </div>
    <div class="cart-item-names-box">
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="pricing-container">
        <span class="current-price">₹${item.current_price}</span>
        <span class="original-price"><s>₹${item.original_price}</s></span>
        <span class="discount">₹${item.discount} OFF</span>
    </div>
    <div class="delivery-time"><strong>14 days</strong> return available</div>
    <div class="delivery-time">Delivery by <span style="color: #03a685;">10 Nov 2023</span></div>
    </div>
    <div class="cancel-button" onclick="removeFromBag(${item.id})">
    <span class="material-symbols-outlined">
        close
        </span>
    </div>
    </div>`;
}