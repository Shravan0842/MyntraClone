let header_section = document.querySelector('#main_header');

let header_bar = '';
header_bar += `<div class="logo-container">
<a href="index.html"><img class="myntra-logo" src="images/myntra_logo.webp" alt="Myntra"></a>
</div>
<nav class="nav-bar">
<ul>
    <li><a href="men.html">MEN</a></li>
    <li><a href="#">WOMEN</a></li> 
    <li><a href="#">KIDS</a></li>  
    <li><a href="#">HOME & LIVING</a></li>  
    <li><a href="#">BEAUTY</a></li>  
    <li><a href="#">STUDIO <sup>NEW</sup></a></li>     
</ul>
</nav>
<div class="search-bar">
<span class="material-symbols-outlined search-icon">search</span>
<input class="search-input" type="search" placeholder="Search for products, brands and more">
</div>
<div class="action-bar">
<div class="action-container">
    <span class="material-symbols-outlined action-icons">account_circle</span>
    <span class="action-names">Profile</span>
</div>
<div class="action-container">
    <span class="material-symbols-outlined action-icons">favorite</span>
    <span class="action-names">Wishlist</span>
</div>
<a href="bag.html">
<div class="action-container">
    <span class="material-symbols-outlined action-icons">shopping_bag</span>
    <span class="action-names">Bag</span>
    <span class="bag-count">0</span>
</div>
</a>
</div>`;
header_section.innerHTML = header_bar;