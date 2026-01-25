// ==========================================
// AS-COLLECTION - Main JavaScript File
// 20 Pre-loaded Products + Custom Products Support
// ==========================================

// Default Products (20 Pre-loaded - No Cloudinary needed!)
const defaultProducts = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 299,
        originalPrice: 399,
        rating: 4.8,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        category: "electronics",
        badge: "hot"
    },
    {
        id: 2,
        name: "Luxury Automatic Watch",
        price: 549,
        originalPrice: null,
        rating: 4.9,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
        category: "accessories",
        badge: null
    },
    {
        id: 3,
        name: "Classic Running Sneakers",
        price: 129,
        originalPrice: 179,
        rating: 4.7,
        reviews: 423,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
        category: "footwear",
        badge: "sale"
    },
    {
        id: 4,
        name: "Modern Laptop Computer",
        price: 1299,
        originalPrice: null,
        rating: 4.9,
        reviews: 189,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
        category: "electronics",
        badge: null
    },
    {
        id: 5,
        name: "Designer Sunglasses",
        price: 199,
        originalPrice: 249,
        rating: 4.6,
        reviews: 87,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
        category: "accessories",
        badge: null
    },
    {
        id: 6,
        name: "Urban Travel Backpack",
        price: 89,
        originalPrice: null,
        rating: 4.8,
        reviews: 312,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
        category: "accessories",
        badge: "new"
    },
    {
        id: 7,
        name: "Fashion Denim Jacket",
        price: 149,
        originalPrice: 199,
        rating: 4.5,
        reviews: 92,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
        category: "clothing",
        badge: "sale"
    },
    {
        id: 8,
        name: "Smart Fitness Tracker",
        price: 79,
        originalPrice: null,
        rating: 4.4,
        reviews: 567,
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
        category: "electronics",
        badge: null
    },
    {
        id: 9,
        name: "Leather Messenger Bag",
        price: 175,
        originalPrice: null,
        rating: 4.8,
        reviews: 124,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400",
        category: "accessories",
        badge: null
    },
    {
        id: 10,
        name: "Bluetooth Portable Speaker",
        price: 210,
        originalPrice: 280,
        rating: 4.7,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
        category: "electronics",
        badge: "sale"
    },
    {
        id: 11,
        name: "Classic White Sneakers",
        price: 95,
        originalPrice: null,
        rating: 4.6,
        reviews: 278,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
        category: "footwear",
        badge: null
    },
    {
        id: 12,
        name: "Premium Cotton T-Shirt",
        price: 45,
        originalPrice: null,
        rating: 4.5,
        reviews: 456,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
        category: "clothing",
        badge: null
    },
    {
        id: 13,
        name: "Wireless Earbuds Pro",
        price: 159,
        originalPrice: 199,
        rating: 4.7,
        reviews: 345,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        category: "electronics",
        badge: "hot"
    },
    {
        id: 14,
        name: "Leather Wallet",
        price: 65,
        originalPrice: null,
        rating: 4.8,
        reviews: 167,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400",
        category: "accessories",
        badge: null
    },
    {
        id: 15,
        name: "Sports Running Shoes",
        price: 145,
        originalPrice: 185,
        rating: 4.6,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400",
        category: "footwear",
        badge: "sale"
    },
    {
        id: 16,
        name: "Winter Hoodie",
        price: 75,
        originalPrice: null,
        rating: 4.5,
        reviews: 189,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
        category: "clothing",
        badge: "new"
    },
    {
        id: 17,
        name: "Smart Watch Series X",
        price: 399,
        originalPrice: 499,
        rating: 4.9,
        reviews: 567,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400",
        category: "electronics",
        badge: "hot"
    },
    {
        id: 18,
        name: "Canvas Tote Bag",
        price: 55,
        originalPrice: null,
        rating: 4.4,
        reviews: 123,
        image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400",
        category: "accessories",
        badge: null
    },
    {
        id: 19,
        name: "Casual Loafers",
        price: 110,
        originalPrice: null,
        rating: 4.6,
        reviews: 98,
        image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400",
        category: "footwear",
        badge: null
    },
    {
        id: 20,
        name: "Slim Fit Jeans",
        price: 85,
        originalPrice: 110,
        rating: 4.5,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
        category: "clothing",
        badge: "sale"
    }
];

// Get custom products from localStorage and combine with default
function getAllProducts() {
    const customProducts = JSON.parse(localStorage.getItem('as_custom_products')) || [];
    return [...defaultProducts, ...customProducts];
}

// State
let products = getAllProducts();
let cart = [];
let currentCategory = 'all';

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartBadge = document.getElementById('cartBadge');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartFooter = document.getElementById('cartFooter');
const cartItemCount = document.getElementById('cartItemCount');
const subtotalEl = document.getElementById('subtotal');
const shippingEl = document.getElementById('shipping');
const totalEl = document.getElementById('total');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const continueShoppingBtn = document.getElementById('continueShoppingBtn');
const continueShoppingBtn2 = document.getElementById('continueShoppingBtn2');
const categoryTabs = document.querySelectorAll('.tab-btn');
const themeToggle = document.getElementById('themeToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

// Initialize
function init() {
    products = getAllProducts();
    renderProducts();
    setupEventListeners();
    loadCartFromStorage();
    updateCartUI();
    loadThemeFromStorage();
}

// Setup Event Listeners
function setupEventListeners() {
    if (cartBtn) cartBtn.addEventListener('click', openCart);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
    if (continueShoppingBtn) continueShoppingBtn.addEventListener('click', closeCart);
    if (continueShoppingBtn2) continueShoppingBtn2.addEventListener('click', closeCart);
    
    // Checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', proceedToCheckout);
    }
    
    // Category tabs
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.dataset.category;
            renderProducts();
        });
    });
    
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            if (query.length > 0) {
                const filtered = getAllProducts().filter(p => 
                    p.name.toLowerCase().includes(query) || 
                    p.category.toLowerCase().includes(query)
                );
                renderFilteredProducts(filtered);
            } else {
                renderProducts();
            }
        });
    }
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                showToast('Successfully subscribed!');
                emailInput.value = '';
            }
        });
    }
    
    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Message sent successfully!');
            contactForm.reset();
        });
    }
}

// Proceed to Checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 50 ? 0 : 10;
    const total = subtotal + shipping;
    
    const itemsList = cart.map(item => 
        `${item.quantity}x ${item.name} - $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');
    
    alert(`ORDER SUMMARY\n\n${itemsList}\n\nSubtotal: $${subtotal.toFixed(2)}\nShipping: $${shipping.toFixed(2)}\nTotal: $${total.toFixed(2)}\n\nThank you for shopping with AS-Collection!`);
    
    showToast('Order placed successfully!');
    cart = [];
    updateCartUI();
    saveCartToStorage();
    closeCart();
}

// Render Products
function renderProducts() {
    if (!productsGrid) return;
    
    products = getAllProducts();
    const filteredProducts = currentCategory === 'all' 
        ? products 
        : products.filter(p => p.category === currentCategory);
    
    renderFilteredProducts(filteredProducts);
}

function renderFilteredProducts(filteredProducts) {
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; padding:3rem; color:var(--text-secondary);">No products found.</p>';
        return;
    }
    
    filteredProducts.forEach((product, index) => {
        const productCard = createProductCard(product);
        productCard.style.animationDelay = `${index * 0.05}s`;
        productsGrid.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const discount = product.originalPrice 
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;
    
    card.innerHTML = `
        <div class="product-image-wrapper">
            <img src="${product.image}" alt="${product.name}" class="product-image" crossorigin="anonymous" loading="lazy">
            ${product.badge ? `<span class="product-badge badge-${product.badge}">${product.badge.toUpperCase()}</span>` : ''}
            ${discount > 0 ? `<span class="product-discount">-${discount}%</span>` : ''}
            <button class="wishlist-btn" onclick="toggleWishlist(${product.id})">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </button>
        </div>
        <div class="product-info">
            <p class="product-category">${product.category}</p>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                <svg class="star-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span>${product.rating}</span>
                <span class="rating-count">(${product.reviews})</span>
            </div>
            <div class="product-footer">
                <div class="product-price">
                    <span class="price-current">$${product.price}</span>
                    ${product.originalPrice ? `<span class="price-original">$${product.originalPrice}</span>` : ''}
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    Add
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Add to Cart
function addToCart(productId) {
    const allProducts = getAllProducts();
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
        showToast(`Updated ${product.name} quantity`);
    } else {
        cart.push({ ...product, quantity: 1 });
        showToast(`${product.name} added to cart`);
    }
    
    updateCartUI();
    saveCartToStorage();
    
    if (cartBtn) {
        cartBtn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartBtn.style.transform = 'scale(1)';
        }, 200);
    }
}

// Update Quantity
function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    if (newQuantity < 1) return;
    
    item.quantity = newQuantity;
    updateCartUI();
    saveCartToStorage();
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    showToast('Item removed from cart');
    updateCartUI();
    saveCartToStorage();
}

// Update Cart UI
function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (cartBadge) cartBadge.textContent = totalItems;
    if (cartItemCount) cartItemCount.textContent = `(${cart.length})`;
    
    if (cart.length === 0) {
        if (cartEmpty) cartEmpty.classList.remove('hidden');
        if (cartFooter) cartFooter.classList.add('hidden');
        if (cartItems) cartItems.innerHTML = '';
    } else {
        if (cartEmpty) cartEmpty.classList.add('hidden');
        if (cartFooter) cartFooter.classList.remove('hidden');
        renderCartItems();
        updateCartTotals();
    }
}

// Render Cart Items
function renderCartItems() {
    if (!cartItems) return;
    
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image" crossorigin="anonymous">
            <div class="cart-item-details">
                <div class="cart-item-header">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <p class="cart-item-category">${item.category}</p>
                <div class="cart-item-footer">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                    </div>
                    <span class="cart-item-total">$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
}

// Update Cart Totals
function updateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 50 ? 0 : 10;
    const total = subtotal + shipping;
    
    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (shippingEl) shippingEl.textContent = subtotal > 50 ? 'FREE' : `$${shipping.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}

// Open/Close Cart
function openCart() {
    if (cartSidebar) cartSidebar.classList.add('active');
    if (cartOverlay) cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    if (cartSidebar) cartSidebar.classList.remove('active');
    if (cartOverlay) cartOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Show Toast
function showToast(message) {
    if (!toast || !toastMessage) return;
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Toggle Wishlist
function toggleWishlist(productId) {
    showToast('Added to wishlist');
}

// Local Storage
function saveCartToStorage() {
    localStorage.setItem('as_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('as_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Theme
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('as_theme', isDark ? 'dark' : 'light');
}

function loadThemeFromStorage() {
    const savedTheme = localStorage.getItem('as_theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// Mobile Menu
function toggleMobileMenu() {
    if (mobileMenu) mobileMenu.classList.toggle('active');
    if (mobileMenuBtn) mobileMenuBtn.classList.toggle('active');
}

// Counter Animation
function animateCounter(element) {
    const target = parseFloat(element.dataset.target);
    const isDecimal = target % 1 !== 0;
    const increment = target / 50;
    let current = 0;
    
    const updateCounter = () => {
        if (current < target) {
            current += increment;
            if (current > target) current = target;
            element.textContent = isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = isDecimal ? target.toFixed(1) : target.toLocaleString();
        }
    };
    
    updateCounter();
}

// Initialize on DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    init();
    
    // Intersection Observer for animations
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                if (entry.target.classList.contains('animate-count')) {
                    const numberEl = entry.target.querySelector('.stat-number');
                    if (numberEl && numberEl.dataset.target) {
                        animateCounter(numberEl);
                    }
                    scrollObserver.unobserve(entry.target);
                }
            }
        });
    }, { threshold: 0.2 });
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-count');
    animatedElements.forEach(el => scrollObserver.observe(el));
});
