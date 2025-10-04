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
            alert('Te llevaremos a nuestra linea de WhatsApp');
            console.log('Guide download initiated');
        }