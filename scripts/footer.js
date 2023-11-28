let footer_section = document.querySelector('#main_footer');

let footer_bar = '';
footer_bar += `<div class="footer-container">
<div class="footer-column">
    <h3>ONLINE SHOPPING</h3>
    <a href="#">Men</a>
    <a href="#">Women</a> 
    <a href="#">Kids</a>  
    <a href="#">Home & Living</a>  
    <a href="#">Beauty</a>  
    <a href="#">Gift Cards</a>
    <a href="#">Myntra Insider</a>
</div>
<div class="footer-column">
    <h3>CUSTOMER POLICIES</h3>
    <a href="#">Contact Us</a>
    <a href="#">FAQ</a> 
    <a href="#">T&C</a>  
    <a href="#">Terms Of Use</a>  
    <a href="#">Track Orders</a>  
    <a href="#">Shipping</a>
    <a href="#">Cancellation</a>
    <a href="#">Returns</a>
    <a href="#">Privacy Policy</a>
    <a href="#">Grievance Officer</a>
</div>
<div class="footer-column">
    <h3>EXPERIENCE MYNTRA APP ON MOBILE</h3>
    <a href="#"><img class="download-icons" src="images/google playstore.png" alt="Download from Playstore"></a>
    <a href="#"><img class="download-icons" src="images/apple store.png" alt="Download from AppStore"></a> 
</div>
</div>
<hr>
<div class="copyrights-container">
<span>In case of any concern, <a href="#" style="font-weight: 700;">Contact Us</a></span>
<p>© 2023 www.myntra.com. All rights reserved</p>
<span>A Flipkart Company</span>
</div>`;
footer_section.innerHTML = footer_bar;