//MENU
        const menuToggle = document.getElementById('menuToggle');

        // Mobile menu toggle
        //menuToggle.addEventListener('click',()=>{
        //    menuToggle.classList.toggle('active');
        //    navMenu.classList.toggle('active');
        //});

        // Close menu when clicking on links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });



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
            alert('¡Excelente! Llena a continuacion el formulario despues de este mensaje y te contactaremos lo mas pronto posible.');
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