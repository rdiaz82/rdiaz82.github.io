// Efecto parallax y fade a negro
function parallaxAndFadeEffect() {
    const sections = document.querySelectorAll('section[data-speed]');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Parallax effect
        const parallaxBg = section.querySelector('.parallax-bg');
        const speed = parseFloat(section.dataset.speed) || 0.5;
        
        if (parallaxBg) {
            const yPos = sectionTop * speed;
            parallaxBg.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
        
        // Fade to black effect
        const fadeOverlay = section.querySelector('.fade-overlay');
        if (fadeOverlay) {
            let opacity = 0;
            
            // Calcular opacidad basada en posición del scroll
            if (sectionTop < 0) {
                // Cuando la sección está saliendo por arriba
                const fadeProgress = Math.abs(sectionTop) / (sectionHeight * 0.5);
                opacity = Math.min(fadeProgress, 1);
            } else if (sectionTop > windowHeight * 0.5) {
                // Cuando la sección está entrando por abajo
                const fadeProgress = (sectionTop - windowHeight * 0.5) / (windowHeight * 0.5);
                opacity = Math.min(fadeProgress, 1);
            }
            
            fadeOverlay.style.opacity = opacity;
        }
    });
}

// Optimizar el scroll con requestAnimationFrame
let ticking = false;

function updateEffects() {
    parallaxAndFadeEffect();
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateEffects);
        ticking = true;
    }
});

// Inicializar efectos
window.addEventListener('load', () => {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking on links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
    
    // Inicializar efecto de máquina de escribir simple
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const text = 'Hello there,';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                typewriterElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Agregar cursor parpadeante al final
                typewriterElement.innerHTML += '<span class="cursor">|</span>';
                // Quitar cursor después de 3 segundos
                setTimeout(() => {
                    const cursor = typewriterElement.querySelector('.cursor');
                    if (cursor) cursor.remove();
                }, 3000);
            }
        }
        
        // Iniciar el efecto después de un pequeño delay
        setTimeout(typeWriter, 500);
    }
    
    // Agregar IDs a las secciones para navegación (solo si no tienen id ya)
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        if (!section.id) {
            section.id = `slide${index}`;
        }
    });
    
    // Ejecutar efectos iniciales
    parallaxAndFadeEffect();
});

// Efecto de aparición suave para el texto
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const textContent = entry.target.querySelector('.relative.z-10 > div > div');
            if (textContent) {
                textContent.style.animation = 'slideInLeft 1s ease-out forwards';
            }
        }
    });
}, observerOptions);

// Observar todas las secciones después de que se cargue el DOM
window.addEventListener('load', () => {
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}); 