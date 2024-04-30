<footer class="bg-green-900 text-white p-8">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        <div>
            <h2 class="text-2xl font-bold mb-3">Aster Pharmacy</h2>
            <p class="text-sm mb-4">Aster Pharmacy is one of the largest retail pharmacy groups in the middle east and is now present in India. We opened India's 1st friendly neighbourhood pharmacy in February 2021 and are rapidly expanding.</p>
            <div class="text-sm">
                <h3 class="font-semibold mb-2">Office Address</h3>
                <p class="mb-1"><span class="font-bold">Aster Pharmacy, Awfis,</span> Renaissance Centra, 27/1, Kalinga Rao Road, Mission Road Sampangi Ramanagar, Bengaluru, Karnataka 560027.</p>
                <p class="mb-1">📞 1800-102-3186</p>
                <p>✉ customercare@asterpharmacy.in</p>
            </div>
        </div>
        
        <div>
            <h3 class="text-xl font-semibold mb-3">Links</h3>
            <ul class="space-y-1 text-sm">
                <li><a href="#" class="hover:text-zinc-300">Nearest Pharmacy</a></li>
                <li><a href="#" class="hover:text-zinc-300">About Us</a></li>
                <li><a href="#" class="hover:text-zinc-300">Products</a></li>
                <li><a href="#" class="hover:text-zinc-300">Why Aster Pharmacy</a></li>
                <li><a href="#" class="hover:text-zinc-300">Careers</a></li>
                <li><a href="#" class="hover:text-zinc-300">Partner with us</a></li>
            </ul>
        </div>
        
        <div>
            <h3 class="text-xl font-semibold mb-3">Stay Connected</h3>
            <p class="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed arcu vitae erat laoreet placerat eget sit amet purus. Nunc lacinia sit amet leo eget ultrices.</p>
            <form action="#" method="POST" class="flex items-center mb-4">
                <input type="email" placeholder="Enter your email address" class="p-2 bg-green-800 rounded-l-md focus:outline-none text-sm flex-1">
                <button type="submit" class="bg-blue-600 p-2 rounded-r-md text-sm">➡️</button>
            </form>
            <h3 class="text-xl font-semibold">Follow Us</h3>
            <div class="flex space-x-3 mt-2">
                <a href="#" class="hover:text-zinc-300">📘</a>
                <a href="#" class="hover:text-zinc-300">📸</a>
                <a href="#" class="hover:text-zinc-300">🔗</a>
                <a href="#" class="hover:text-zinc-300">▶️</a>
                <a href="#" class="hover:text-zinc-300">🐦</a>
            </div>
        </div>
    </div>
</footer>


/* footer.css */

/* Style for the footer section */
#footer {
    background-color: #f8f9fa; /* Set background color */
    padding: 50px 0; /* Add padding */
}

/* Style for the footer contents container */
.foot-contents {
    display: flex; /* Make the contents flex */
    justify-content: space-between; /* Space out the contents */
}

/* Style for the left section of the footer */
.foot-left {
    width: 30%; /* Set width */
}

/* Style for the top section of the left footer */
.foot-top {
    margin-bottom: 30px; /* Add margin */
}

/* Style for the bottom section of the left footer */
.foot-bottom h6 {
    margin-bottom: 10px; /* Add margin */
}

/* Style for the list items in the bottom section of the left footer */
.foot-bottom ul {
    padding: 0; /* Remove default padding */
    list-style: none; /* Remove default list style */
}

.foot-bottom ul li {
    margin-bottom: 10px; /* Add margin */
}

/* Style for the middle section of the footer */
.foot-middle ul {
    padding: 0; /* Remove default padding */
    list-style: none; /* Remove default list style */
}

.foot-middle ul li {
    margin-bottom: 10px; /* Add margin */
    color: #333; /* Set text color */
    cursor: pointer; /* Add cursor pointer */
    transition: color 0.3s; /* Add transition effect */
}

.foot-middle ul li:hover {
    color: #007bff; /* Change text color on hover */
}

/* Style for the right section of the footer */
.foot-right {
    width: 30%; /* Set width */
}

/* Style for the input field and arrow button in the right section */
.footer-mail {
    width: calc(100% - 30px); /* Calculate width */
    padding: 10px; /* Add padding */
    margin-bottom: 10px; /* Add margin */
}

/* Style for the follow us section in the right footer */
.foot-right h6 {
    margin-top: 20px; /* Add margin */
}

/* Style for the social media icons in the right footer */
.foot-right ul {
    display: flex; /* Make the icons flex */
    justify-content: space-between; /* Space out the icons */
    width: 80px; /* Set width */
    margin-top: 10px; /* Add margin */
}

.foot-right ul li {
    color: #007bff; /* Set text color */
    cursor: pointer; /* Add cursor pointer */
    transition: color 0.3s; /* Add transition effect */
}

.foot-right ul li:hover {
    color: #0056b3; /* Change text color on hover */
}
