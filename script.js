// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.padding = '0.5rem 5%';
        nav.style.boxShadow = '0 5px 30px rgba(0,0,0,0.15)';
    } else {
        nav.style.padding = '1rem 5%';
        nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
});

// Animate stats on scroll
const animateStats = () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.stats');
    const sectionTop = statsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.75) {
        statNumbers.forEach(stat => {
            if (!stat.classList.contains('animated')) {
                stat.classList.add('animated');
                const text = stat.textContent;
                const isNumber = !isNaN(parseInt(text));

                if (isNumber) {
                    const target = parseInt(text);
                    let count = 0;
                    const increment = target / 50;
                    const timer = setInterval(() => {
                        count += increment;
                        if (count >= target) {
                            stat.textContent = text;
                            clearInterval(timer);
                        } else {
                            stat.textContent = Math.floor(count) + '+';
                        }
                    }, 30);
                }
            }
        });
    }
};

window.addEventListener('scroll', animateStats);

// Feature cards hover effect enhancement
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)';
    });
    card.addEventListener('mouseleave', function () {
        this.style.background = 'white';
    });
});