        // Smooth Scroll Animation Logic
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

        // Navbar Hover Effect
        const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if(window.scrollY > 50) {
                nav.style.background = 'rgba(5, 5, 5, 0.8)';
                nav.style.backdropFilter = 'blur(10px)';
                nav.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
            } else {
                nav.style.background = 'transparent';
                nav.style.backdropFilter = 'none';
                nav.style.borderBottom = 'none';
            }
        });