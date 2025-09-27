 // Reveal animations on scroll
        function revealOnScroll() {
            const reveals = document.querySelectorAll('.reveal');
            
            reveals.forEach(reveal => {
                const windowHeight = window.innerHeight;
                const elementTop = reveal.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Check on load

        
        // CTA Functions
        function startConsultation() {
            alert('¡Excelente! Un especialista te contactará en las próximas 2 horas para tu consulta gratuita.');
            console.log('Consultation requested');
            
            // You can integrate with your CRM or contact system here
            const userInfo = {
                action: 'consultation_request',
                timestamp: new Date().toISOString(),
                page: 'why-choose-us'
            };
            
            // Send to analytics or CRM
            console.log('User action:', userInfo);
        }

        function downloadGuide() {
            alert('Tu guía "10 Claves para el Éxito Ambiental Empresarial" se descargará automáticamente.');
            console.log('Guide download initiated');
            
            // Here you would typically trigger a download
            // For demo purposes, we'll just log the action
            const downloadInfo = {
                action: 'guide_download',
                guide: 'environmental_success_keys',
                timestamp: new Date().toISOString()
            };
            
            console.log('Download info:', downloadInfo);
        }

        // Smooth scrolling for navigation
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

        // Navbar background change on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.9)';
                navbar.style.boxShadow = 'none';
            }
        });