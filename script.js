// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mainNav && mainNav.classList.contains('active') && 
            !e.target.closest('.main-nav') && 
            !e.target.closest('.menu-toggle')) {
            mainNav.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
    
    // Product quick view functionality
    const quickViewButtons = document.querySelectorAll('.quick-view');
    
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real implementation, this would open a modal with product details
            alert('Quick view feature would show product details here.');
        });
    });
    
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            count++;
            cartCount.textContent = count;
            
            // Show added to cart feedback
            const product = this.closest('.product');
            const productTitle = product.querySelector('.product-title').textContent;
            
            // Create and show notification
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.innerHTML = `
                <p>Added ${productTitle} to your cart</p>
            `;
            
            notification.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: #000;
                color: #fff;
                padding: 15px 20px;
                border-radius: 4px;
                z-index: 1000;
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.3s, transform 0.3s;
            `;
            
            document.body.appendChild(notification);
            
            // Animate in
            setTimeout(() => {
                notification.style.opacity = '1';
                notification.style.transform = 'translateY(0)';
            }, 10);
            
            // Animate out and remove after delay
            setTimeout(() => {
                notification.style.opacity = '0';
                notification.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        });
    });
    
    // Load more products functionality
    const loadMoreBtn = document.querySelector('.load-more-btn');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // In a real implementation, this would load more products via AJAX
            this.textContent = 'Loading...';
            
            setTimeout(() => {
                // Simulate loading more products
                const productsContainer = document.querySelector('.products');
                const productTemplate = document.querySelector('.product').cloneNode(true);
                
                // Add some new products
                for (let i = 0; i < 4; i++) {
                    productsContainer.appendChild(productTemplate.cloneNode(true));
                }
                
                this.textContent = 'Load More';
                
                // Reattach event listeners to new products
                initProductInteractions();
            }, 1500);
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            // Simple validation
            if (!emailInput.value || !isValidEmail(emailInput.value)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // In a real implementation, this would submit to a server
            this.querySelector('button').textContent = 'Subscribing...';
            
            setTimeout(() => {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
                this.querySelector('button').textContent = 'Subscribe';
            }, 1000);
        });
    }
    
    // Helper function to validate email
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Initialize product interactions
    function initProductInteractions() {
        // Reinitialize quick view buttons
        const newQuickViewButtons = document.querySelectorAll('.quick-view');
        newQuickViewButtons.forEach(button => {
            button.addEventListener('click', function() {
                alert('Quick view feature would show product details here.');
            });
        });
        
        // Reinitialize add to cart buttons
        const newAddToCartButtons = document.querySelectorAll('.add-to-cart');
        newAddToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                count++;
                cartCount.textContent = count;
                
                // Show notification
                const product = this.closest('.product');
                const productTitle = product.querySelector('.product-title').textContent;
                
                alert(`Added ${productTitle} to your cart`);
            });
        });
    }
    
    // Filter functionality
    const sortSelect = document.getElementById('sort-by');
    const filterSelect = document.getElementById('filter-by');
    
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            // In a real implementation, this would sort products
            console.log('Sorting by:', this.value);
        });
    }
    
    if (filterSelect) {
        filterSelect.addEventListener('change', function() {
            // In a real implementation, this would filter products
            console.log('Filtering by:', this.value);
        });
    }
});