
const products = [
    // خواتم (5 منتجات)
    {
        id: 1,
        name: 'خاتم الأمل الذهبي',
        category: 'rings',
        categoryAr: 'خواتم',
        price: 1200,
        description: 'خاتم ذهبي فاخر مرصع بالأحجار الكريمة',
        fullDescription: 'خاتم أنيق من الذهب عيار 21 قيراط، مرصع بأحجار الزركون اللامعة. تصميم عصري يناسب جميع المناسبات. القطعة مصممة بعناية فائقة لتمنحك إطلالة راقية ومميزة.',
        image: 'rings1.jpg',
        icon: '💍',
        badge: 'جديد',
        material: 'ذهب عيار 21',
        weight: '3.5 جرام',
        stones: 'زركون طبيعي',
        size: 'مقاسات متعددة'
    },
    {
        id: 2,
        name: 'خاتم الياقوت الأزرق',
        category: 'rings',
        categoryAr: 'خواتم',
        price: 2200,
        description: 'خاتم ياقوت أزرق نادر بتصميم ملكي',
        fullDescription: 'خاتم فاخر من الذهب الأبيض عيار 18 مرصع بحجر ياقوت أزرق طبيعي نادر. التصميم الكلاسيكي الراقي يجعله مثالياً للمناسبات الخاصة والأعراس.',
        image: 'rings2.jpg',
        icon: '💍',
        badge: 'حصري',
        material: 'ذهب أبيض عيار 18',
        weight: '4.2 جرام',
        stones: 'ياقوت أزرق طبيعي',
        size: 'مقاسات متعددة'
    },
    {
        id: 3,
        name: 'خاتم الزمرد الفاخر',
        category: 'rings',
        categoryAr: 'خواتم',
        price: 2800,
        description: 'خاتم زمرد أخضر طبيعي بإطار ماسي',
        fullDescription: 'قطعة استثنائية من الذهب عيار 18 قيراط مرصعة بحجر زمرد أخضر طبيعي محاط بإطار من الألماس الصغير. تصميم راقي يعكس الذوق الرفيع.',
        image: 'rings3.jpg',
        icon: '💚',
        badge: 'VIP',
        material: 'ذهب عيار 18',
        weight: '5.0 جرام',
        stones: 'زمرد + ألماس',
        size: 'مقاسات متعددة'
    },
    {
        id: 4,
        name: 'خاتم الخطوبة الكلاسيكي',
        category: 'rings',
        categoryAr: 'خواتم',
        price: 1800,
        description: 'خاتم خطوبة أنيق بحجر مركزي لامع',
        fullDescription: 'خاتم خطوبة كلاسيكي من الذهب الأبيض مع حجر زركونيا كبير في المنتصف. التصميم البسيط والأنيق يجعله الاختيار المثالي لخطوبة لا تُنسى.',
        image: 'rings4.jpg',
        icon: '💎',
        badge: 'مميز',
        material: 'ذهب أبيض عيار 18',
        weight: '3.8 جرام',
        stones: 'زركونيا كوبك',
        size: 'مقاسات متعددة'
    },
    {
        id: 5,
        name: 'خاتم الورود الذهبية',
        category: 'rings',
        categoryAr: 'خواتم',
        price: 1500,
        description: 'خاتم بتصميم ورود منقوشة بدقة',
        fullDescription: 'خاتم من الذهب الوردي عيار 21 بتصميم ورود منقوشة يدوياً. القطعة تجمع بين الأناقة والرومانسية في تصميم واحد مميز.',
        image: 'rings5.jpg',
        icon: '🌹',
        badge: '',
        material: 'ذهب وردي عيار 21',
        weight: '3.2 جرام',
        stones: 'بدون أحجار',
        size: 'مقاسات متعددة'
    },

    // أقراط (5 منتجات)
    {
        id: 6,
        name: 'أقراط اللؤلؤ الملكية',
        category: 'earrings',
        categoryAr: 'أقراط',
        price: 850,
        description: 'أقراط لؤلؤ طبيعي بتصميم راقي',
        fullDescription: 'أقراط أنيقة من اللؤلؤ الطبيعي مثبتة على قاعدة ذهبية. اللؤلؤ ذو لمعان طبيعي وجودة عالية. مثالية للإطلالات الرسمية والسهرات.',
        image: 'earrings1.jpg',
        icon: '👂',
        badge: 'مميز',
        material: 'ذهب عيار 21',
        weight: '2.5 جرام',
        stones: 'لؤلؤ طبيعي',
        size: 'قياس موحد'
    },
    {
        id: 7,
        name: 'أقراط الذهب الوردي',
        category: 'earrings',
        categoryAr: 'أقراط',
        price: 950,
        description: 'أقراط ذهب وردي بتصميم أنثوي',
        fullDescription: 'أقراط طويلة من الذهب الوردي عيار 18 بتصميم متدلي أنيق. مناسبة للاستخدام اليومي والمناسبات الخاصة. خفيفة ومريحة للارتداء طوال اليوم.',
        image: 'earrings2.jpg',
        icon: '✨',
        badge: 'جديد',
        material: 'ذهب وردي عيار 18',
        weight: '2.8 جرام',
        stones: 'بدون أحجار',
        size: 'قياس موحد'
    },
    {
        id: 8,
        name: 'أقراط الكريستال المتلألئة',
        category: 'earrings',
        categoryAr: 'أقراط',
        price: 720,
        description: 'أقراط مرصعة بالكريستال اللامع',
        fullDescription: 'أقراط صغيرة أنيقة من الفضة الإيطالية مطلية بالذهب، مرصعة بأحجار الكريستال النمساوي اللامعة. تصميم بسيط وراقي يناسب الإطلالة اليومية.',
        image: 'earrings3.jpg',
        icon: '💫',
        badge: '',
        material: 'فضة مطلية ذهب',
        weight: '1.8 جرام',
        stones: 'كريستال نمساوي',
        size: 'قياس موحد'
    },
    {
        id: 9,
        name: 'أقراط الدوائر الذهبية',
        category: 'earrings',
        categoryAr: 'أقراط',
        price: 1100,
        description: 'أقراط دائرية كبيرة بتصميم عصري',
        fullDescription: 'أقراط دائرية كبيرة (حلق) من الذهب عيار 21 بتصميم عصري وجريء. سطح لامع ومصقول بعناية. مثالية للإطلالات الكاجوال والعصرية.',
        image: 'earrings5.jpg',
        icon: '⭕',
        badge: 'رائج',
        material: 'ذهب عيار 21',
        weight: '4.5 جرام',
        stones: 'بدون أحجار',
        size: 'كبير'
    },
    {
        id: 10,
        name: 'أقراط القطرات الألماسية',
        category: 'earrings',
        categoryAr: 'أقراط',
        price: 1650,
        description: 'أقراط متدلية بأحجار لامعة',
        fullDescription: 'أقراط طويلة متدلية من الذهب الأبيض عيار 18 على شكل قطرات مرصعة بأحجار الزركون. تصميم أنيق يضيف لمسة من الفخامة لإطلالتك.',
        image: 'earrings4.jpg',
        icon: '💧',
        badge: 'فاخر',
        material: 'ذهب أبيض عيار 18',
        weight: '3.5 جرام',
        stones: 'زركون',
        size: 'قياس موحد'
    },

    // عقود (5 منتجات)
    {
        id: 11,
        name: 'عقد الماس الفاخر',
        category: 'necklaces',
        categoryAr: 'عقود',
        price: 3500,
        description: 'عقد ماس أصلي بتصميم عصري',
        fullDescription: 'عقد فاخر من الذهب الأبيض عيار 18 مرصع بأحجار الألماس الطبيعية. التصميم الأنيق والراقي يجعله مثالياً للمناسبات الخاصة والحفلات الفخمة.',
        image: 'necklaces1.jpg',
        icon: '📿',
        badge: 'حصري',
        material: 'ذهب أبيض عيار 18',
        weight: '15.0 جرام',
        stones: 'ألماس طبيعي',
        size: '45 سم'
    },
    {
        id: 12,
        name: 'عقد اللؤلؤ الثلاثي',
        category: 'necklaces',
        categoryAr: 'عقود',
        price: 2800,
        description: 'عقد لؤلؤ بثلاث طبقات فاخرة',
        fullDescription: 'عقد استثنائي من اللؤلؤ الطبيعي مكون من ثلاث طبقات بتدرجات مختلفة. كل لؤلؤة منتقاة بعناية لتمنحك إطلالة ملكية فريدة.',
        image: 'necklaces2.jpg',
        icon: '🤍',
        badge: 'جديد',
        material: 'لؤلؤ طبيعي + قفل ذهبي',
        weight: '25.0 جرام',
        stones: 'لؤلؤ طبيعي',
        size: '40-45-50 سم'
    },
    {
        id: 13,
        name: 'عقد القلب الذهبي',
        category: 'necklaces',
        categoryAr: 'عقود',
        price: 1350,
        description: 'عقد بقلاعة قلب مرصعة',
        fullDescription: 'عقد رقيق من الذهب عيار 21 مع قلاعة على شكل قلب مرصعة بأحجار الزركون الصغيرة. هدية مثالية للأحبة ورمز للحب والوفاء.',
        image: 'necklaces3.jpg',
        icon: '💖',
        badge: 'مميز',
        material: 'ذهب عيار 21',
        weight: '3.5 جرام',
        stones: 'زركون',
        size: '45 سم'
    },
    {
        id: 14,
        name: 'عقد الزمرد الملكي',
        category: 'necklaces',
        categoryAr: 'عقود',
        price: 4200,
        description: 'عقد فاخر بحجر زمرد كبير',
        fullDescription: 'قطعة فنية من الذهب عيار 18 تتوسطها حجر زمرد أخضر طبيعي كبير محاط بأحجار الألماس الصغيرة. تصميم ملكي فاخر لعشاق القطع المميزة.',
        image: 'necklaces4.jpg',
        icon: '💚',
        badge: 'VIP',
        material: 'ذهب عيار 18',
        weight: '18.5 جرام',
        stones: 'زمرد + ألماس',
        size: '50 سم'
    },
    {
        id: 15,
        name: 'عقد الطبقات الذهبية',
        category: 'necklaces',
        categoryAr: 'عقود',
        price: 1950,
        description: 'عقد متعدد الطبقات بتصميم عصري',
        fullDescription: 'عقد عصري من الذهب عيار 21 يتكون من ثلاث سلاسل بأطوال مختلفة وقلاعات متنوعة. تصميم يناسب الإطلالة الكاجوال والعصرية.',
        image: 'necklaces5.jpg',
        icon: '✨',
        badge: 'رائج',
        material: 'ذهب عيار 21',
        weight: '8.5 جرام',
        stones: 'بدون أحجار',
        size: '40-45-50 سم'
    },

    // أساور (5 منتجات)
    {
        id: 16,
        name: 'سوار الزمرد الأخضر',
        category: 'bracelets',
        categoryAr: 'أساور',
        price: 1800,
        description: 'سوار مرصع بأحجار الزمرد الطبيعية',
        fullDescription: 'سوار أنيق من الذهب الأبيض عيار 18 مرصع بسلسلة من أحجار الزمرد الطبيعية الخضراء. التصميم الراقي يجعله مثالياً للسهرات والمناسبات الخاصة.',
        image: 'bracelet3.jpg',
        icon: '💎',
        badge: 'جديد',
        material: 'ذهب أبيض عيار 18',
        weight: '12.0 جرام',
        stones: 'زمرد طبيعي',
        size: 'قابل للتعديل'
    },
    {
        id: 17,
        name: 'سوار الذهب المنقوش',
        category: 'bracelets',
        categoryAr: 'أساور',
        price: 1500,
        description: 'سوار ذهبي بنقوش تراثية',
        fullDescription: 'سوار من الذهب عيار 21 بنقوش تراثية مصرية أصيلة. يجمع بين الأصالة والعراقة في تصميم واحد يليق بك.',
        image: 'bracelet1.jpg',
        icon: '🌟',
        badge: '',
        material: 'ذهب عيار 21',
        weight: '10.5 جرام',
        stones: 'بدون أحجار',
        size: 'قياس موحد'
    },
    {
        id: 18,
        name: 'سوار التنس الألماسي',
        category: 'bracelets',
        categoryAr: 'أساور',
        price: 3200,
        description: 'سوار تنس كلاسيكي مرصع بالألماس',
        fullDescription: 'سوار تنس فاخر من الذهب الأبيض عيار 18 مرصع بصف متصل من أحجار الألماس أو الزركون عالي الجودة. قطعة كلاسيكية لا تفارق معصمك.',
        image: 'bracelet2.jpg',
        // icon: '💫',
        badge: 'فاخر',
        material: 'ذهب أبيض عيار 18',
        weight: '8.5 جرام',
        stones: 'زركون عالي الجودة',
        size: '18 سم'
    },
    {
        id: 19,
        name: 'سوار السلاسل المتشابكة',
        category: 'bracelets',
        categoryAr: 'أساور',
        price: 1350,
        description: 'سوار بتصميم سلاسل متداخلة',
        fullDescription: 'سوار عصري من الذهب عيار 21 بتصميم سلاسل متشابكة ومتداخلة. خفيف ومريح للارتداء اليومي مع لمسة من الأناقة.',
        image: 'bracelet4.jpg',
        icon: '⛓️',
        badge: 'رائج',
        material: 'ذهب عيار 21',
        weight: '6.8 جرام',
        stones: 'بدون أحجار',
        size: 'قابل للتعديل'
    },
    {
        id: 20,
        name: 'سوار الأحجار الملونة',
        category: 'bracelets',
        categoryAr: 'أساور',
        price: 2100,
        description: 'سوار مرصع بأحجار كريمة متعددة الألوان',
        fullDescription: 'سوار مبهج من الذهب عيار 18 مرصع بمجموعة من الأحجار الكريمة الملونة (ياقوت، زمرد، توباز). تصميم مرح وملون يضيف بهجة لإطلالتك.',
        image: 'bracelet5.jpg',
        icon: '🌈',
        badge: 'مميز',
        material: 'ذهب عيار 18',
        weight: '11.5 جرام',
        stones: 'أحجار كريمة متنوعة',
        size: 'قابل للتعديل'
    }
];

let cart = [];
let currentFilter = 'all';
let currentPage = 'home';


// Toggle Mobile Menu
function toggleMenu() {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('active');
}

// Close Mobile Menu
function closeMenu() {
    const nav = document.getElementById('mainNav');
    nav.classList.remove('active');
}

// Show Page Function
function showPage(page) {
    // Hide all pages
    document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
    document.getElementById('productDetailsPage').classList.remove('active');

    // Update navigation
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));

    // Show selected page
    if (page === 'home') {
        document.getElementById('homePage').classList.add('active');
        document.querySelectorAll('nav a')[0].classList.add('active');
        displayProducts('all', 'productsGrid');
    } else if (page === 'products') {
        document.getElementById('productsPage').classList.add('active');
        document.querySelectorAll('nav a')[1].classList.add('active');
        displayProducts('all', 'productsGrid2');
    } else if (page === 'about') {
        document.getElementById('aboutPage').classList.add('active');
        document.querySelectorAll('nav a')[2].classList.add('active');
    } else if (page === 'contact') {
        document.getElementById('contactPage').classList.add('active');
        document.querySelectorAll('nav a')[3].classList.add('active');
    }

    currentPage = page;
    window.scrollTo(0, 0);
}

// Display Products
function displayProducts(filterCategory = 'all', gridId = 'productsGrid') {
    const grid = document.getElementById(gridId);
    const filtered = filterCategory === 'all'
        ? products
        : products.filter(p => p.category === filterCategory);

    grid.innerHTML = filtered.map(product => `
                <div class="product-card" onclick="showProductDetails(${product.id})">
                    <div class="product-image">
                        ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                        ${product.image
            ? `<img src="images/${product.image}" alt="${product.name}" loading="lazy">`
            : `<div class="placeholder-icon">${product.icon}</div>`
        }
                    </div>
                    <div class="product-info">
                        <div class="product-category">${product.categoryAr}</div>
                        <div class="product-name">${product.name}</div>
                        <div class="product-description">${product.description}</div>
                        <div class="product-footer">
                            <div class="product-price">${product.price} ج.س</div>
                            <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                                أضف للسلة
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
}

// Show Product Details
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    const detailsPage = document.getElementById('productDetailsPage');

    detailsPage.innerHTML = `
                <div class="product-details-image">
                    ${product.image
            ? `<img src="images/${product.image}" alt="${product.name}">`
            : `<div class="placeholder-icon">${product.icon}</div>`
        }
                </div>
                <div class="product-details-info">
                    <div class="product-details-category">${product.categoryAr}</div>
                    <h1 class="product-details-name">${product.name}</h1>
                    <div class="product-details-price">${product.price} ج.س</div>
                    <p class="product-details-description">${product.fullDescription}</p>
                    
                    <div class="product-specs">
                        <h3>مواصفات المنتج</h3>
                        <ul>
                            <li>
                                <span class="spec-label">المادة:</span>
                                <span>${product.material}</span>
                            </li>
                            <li>
                                <span class="spec-label">الوزن:</span>
                                <span>${product.weight}</span>
                            </li>
                            <li>
                                <span class="spec-label">الأحجار:</span>
                                <span>${product.stones}</span>
                            </li>
                            <li>
                                <span class="spec-label">المقاس:</span>
                                <span>${product.size}</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div style="display: flex; gap: 1rem;">
                        <button class="add-to-cart" style="flex: 1;" onclick="addToCart(${product.id})">
                            أضف للسلة 🛒
                        </button>
                        <button class="back-btn" onclick="goBack()">
                            رجوع
                        </button>
                    </div>
                </div>
            `;

    // Hide all pages and show details
    document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
    detailsPage.classList.add('active');
    window.scrollTo(0, 0);
}

// Go Back Function
function goBack() {
    document.getElementById('productDetailsPage').classList.remove('active');
    showPage(currentPage);
}

// Filter Products
function filterProducts(category) {
    currentFilter = category;

    if (currentPage === 'home') {
        displayProducts(category, 'productsGrid');
    } else {
        displayProducts(category, 'productsGrid2');
    }

    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();

    // Animation feedback
    if (event && event.target) {
        const originalText = event.target.textContent;
        event.target.textContent = '✓ تمت الإضافة';
        event.target.style.background = '#28a745';
        setTimeout(() => {
            event.target.textContent = originalText;
            event.target.style.background = '';
        }, 1000);
    }
}

// Update Cart
function updateCart() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');

    // Update count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">السلة فارغة 🛒</div>';
        totalPrice.textContent = '0 ج.م';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.icon} ${item.name} × ${item.quantity}</div>
                        <div class="cart-item-price">${item.price * item.quantity} ج.م</div>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">حذف</button>
                </div>
            `).join('');

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPrice.textContent = `${total} ج.م`;
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Toggle Cart
function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('السلة فارغة! 🛒');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemsList = cart.map(item => `• ${item.name} × ${item.quantity}`).join('\n');

    alert(`✨ شكراً لثقتك في الحياة أمل! ✨\n\nتفاصيل طلبك:\n${itemsList}\n\nالإجمالي: ${total} ج.م\n\nسيتم التواصل معك قريباً لتأكيد الطلب والتوصيل 💎`);

    cart = [];
    updateCart();
    toggleCart();
}

// Submit Contact Form
function submitContactForm(event) {
    event.preventDefault();
    alert('✨ شكراً لتواصلك معنا!\n\nتم استلام رسالتك بنجاح.\nسيقوم فريقنا بالرد عليك في أقرب وقت ممكن.\n\n💎 الحياة أمل - نسعد بخدمتك');
    event.target.reset();
}

// Close cart when clicking outside
document.getElementById('cartModal').addEventListener('click', function (e) {
    if (e.target === this) {
        toggleCart();
    }
});

// Initialize
displayProducts('all', 'productsGrid');
