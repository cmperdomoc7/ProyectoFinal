//MENU
        // Mobile menu toggle
        menuToggle.addEventListener('click',()=>{
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

//Servicios
    // Intersection Observer para animaciones al scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observar todas las tarjetas de servicios
        document.querySelectorAll('.service-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            observer.observe(card);
        });

        // Efecto de hover mejorado
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                // Agregar clase activa para efectos especiales
                this.classList.add('active');
                
                // Efecto de vibración sutil en el icono
                const icon = this.querySelector('.service-icon');
                icon.style.transform = 'scale(1.1)';
            });

            card.addEventListener('mouseleave', function() {
                // Remover clase activa
                this.classList.remove('active');
                
                // Restaurar icono
                const icon = this.querySelector('.service-icon');
                icon.style.transform = 'scale(1)';
            });

            // Efecto de clic
            card.addEventListener('click', function(e) {
                // Si no se hace clic en un enlace
                if (!e.target.closest('.service-link')) {
                    // Agregar efecto de clic
                    this.style.transform = 'translateY(-8px) scale(0.98)';
                    
                    setTimeout(() => {
                        this.style.transform = 'translateY(-8px) scale(1)';
                    }, 150);
                    
                    // Log para fines de desarrollo
                    const serviceType = this.dataset.service;
                    console.log(`Servicio seleccionado: ${serviceType}`);
                }
            });
        });

        // Manejar clics en los enlaces de servicios
        document.querySelectorAll('.service-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const card = this.closest('.service-card');
                const serviceType = card.dataset.service;
                
                // Efecto visual de clic
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 100);
                
                // Aquí puedes agregar la lógica para navegar o mostrar más detalles
                console.log(`Enlace clickeado: ${serviceType}`);
                
                // Ejemplo: mostrar modal o navegar a otra página
                showServiceDetails(serviceType);
            });
        });

        // Función para mostrar detalles del servicio (ejemplo)
        function showServiceDetails(serviceType) {
            const serviceDetails = {
                'estudios': {
                    title: 'Estudios Ambientales',
                    description: 'Evaluaciones completas de impacto ambiental para proyectos de desarrollo sostenible.'
                },
                'gestion': {
                    title: 'Gestión Ambiental Empresarial',
                    description: 'Implementación de sistemas de gestión ambiental certificados ISO 14001.'
                },
                'geografica': {
                    title: 'Servicios de Información Geográfica',
                    description: 'Análisis espacial y cartografía digital para decisiones ambientales informadas.'
                },
                'tramites': {
                    title: 'Trámites Ambientales',
                    description: 'Gestión integral de permisos y licencias ambientales.'
                },
                'biodiversidad': {
                    title: 'Biodiversidad',
                    description: 'Estudios especializados en fauna, flora y conservación de ecosistemas.'
                },
                'sostenible': {
                    title: 'Desarrollo Sostenible',
                    description: 'Estrategias de sostenibilidad y economía circular para empresas.'
                },
                'agua': {
                    title: 'Gestión del Agua',
                    description: 'Estudios hidrológicos y gestión integral del recurso hídrico.'
                }
            };

            const service = serviceDetails[serviceType];
            if (service) {
                alert(`${service.title}\n\n${service.description}\n\n¡Contáctanos para más información!`);
            }
        }

        // Animación de contador para estadísticas (opcional)
        function animateCounter(element, target, duration = 2000) {
            let start = 0;
            const increment = target / (duration / 16);
            
            function updateCounter() {
                start += increment;
                if (start < target) {
                    element.textContent = Math.floor(start);
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = target;
                }
            }
            
            updateCounter();
        }

        // Efecto parallax sutil en scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const cards = document.querySelectorAll('.service-card');
            
            cards.forEach((card, index) => {
                const speed = 0.5 + (index * 0.1);
                const yPos = -(scrolled * speed / 10);
                card.style.transform = `translateY(${yPos}px)`;
            });
        });

        // Preloader para las tarjetas
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.service-card');
            
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
        });

//FORMULARIO
    // DOM Elements
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');
        const contactForm = document.getElementById('contactForm');
        const submitBtn = document.getElementById('submitBtn');
        const successMessage = document.getElementById('successMessage');

        // Form inputs
        const nameInput = document.getElementById('name');
        const cedulaInput = document.getElementById('cedula');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const messageInput = document.getElementById('message');

        // Error elements
        const nameError = document.getElementById('nameError');
        const cedulaError = document.getElementById('cedulaError');
        const emailError = document.getElementById('emailError');
        const phoneError = document.getElementById('phoneError');
        const messageError = document.getElementById('messageError');


        // Validation functions
        function validateName(name) {
            return name.trim().length >= 2;
        }

        function validatecedula(cedula) {
            return name.trim().length >= 2;
        }

        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function validatePhone(phone) {
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
            return phoneRegex.test(phone.replace(/\s/g, ''));
        }

        // Real-time validation
        nameInput.addEventListener('blur', () => {
            if (nameInput.value && !validateName(nameInput.value)) {
                showError(nameInput, nameError, 'El nombre debe tener al menos 2 caracteres');
            } else {
                clearError(nameInput, nameError);
                if (nameInput.value) nameInput.classList.add('success');
            }
        });

        nameInput.addEventListener('blur', () => {
            if (cedulaInput.value && !validatecedula(cedulaInput.value)) {
                showError(cedulaInput, cedulaError, 'La cédula debe tener al menos 9 caracteres');
            } else {
                clearError(cedulaInput, cedulaError);
                if (cedulaInput.value) cedulaInput.classList.add('success');
            }
        });

        emailInput.addEventListener('blur', () => {
            if (emailInput.value && !validateEmail(emailInput.value)) {
                showError(emailInput, emailError, 'Ingresa un email válido');
            } else {
                clearError(emailInput, emailError);
                if (emailInput.value) emailInput.classList.add('success');
            }
        });

        phoneInput.addEventListener('blur', () => {
            if (phoneInput.value && !validatePhone(phoneInput.value)) {
                showError(phoneInput, phoneError, 'Ingresa un teléfono válido');
            } else {
                clearError(phoneInput, phoneError);
                if (phoneInput.value) phoneInput.classList.add('success');
            }
        });

        // Clear errors on focus
        [nameInput, emailInput, phoneInput, messageInput].forEach(input => {
            input.addEventListener('focus', () => {
                input.classList.remove('error', 'success');
                const errorElement = document.getElementById(input.id + 'Error');
                if (errorElement) {
                    errorElement.classList.remove('show');
                }
            });
        });

        function showError(input, errorElement, message) {
            input.classList.add('error');
            input.classList.remove('success');
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }

        function clearError(input, errorElement) {
            input.classList.remove('error');
            errorElement.classList.remove('show');
        }

        // Form submission
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Clear previous messages
            successMessage.classList.remove('show');
            
            // Get form data
            const formData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                phone: phoneInput.value.trim(),
                message: messageInput.value.trim()
            };
            
            // Validate all fields
            let isValid = true;
            
            if (!formData.name) {
                showError(nameInput, nameError, 'El nombre es requerido');
                isValid = false;
            } else if (!validateName(formData.name)) {
                showError(nameInput, nameError, 'El nombre debe tener al menos 2 caracteres');
                isValid = false;
            }
            
            if (!formData.email) {
                showError(emailInput, emailError, 'El email es requerido');
                isValid = false;
            } else if (!validateEmail(formData.email)) {
                showError(emailInput, emailError, 'Ingresa un email válido');
                isValid = false;
            }
            
            if (!formData.phone) {
                showError(phoneInput, phoneError, 'El teléfono es requerido');
                isValid = false;
            } else if (!validatePhone(formData.phone)) {
                showError(phoneInput, phoneError, 'Ingresa un teléfono válido');
                isValid = false;
            }
            
            if (!isValid) {
                return;
            }
            
            // Submit form
            try {
                // Show loading state
                submitBtn.textContent = 'Enviando...';
                submitBtn.disabled = true;
                submitBtn.classList.add('loading');
                
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // Success
                successMessage.classList.add('show');
                contactForm.reset();
                
                // Clear all field states
                [nameInput, emailInput, phoneInput, messageInput].forEach(input => {
                    input.classList.remove('error', 'success');
                });
                
                // Log data (remove in production)
                console.log('Form submitted:', formData);
                
                // Auto-hide success message
                setTimeout(() => {
                    successMessage.classList.remove('show');
                }, 5000);
                
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Hubo un error al enviar el mensaje. Por favor intenta nuevamente.');
            } finally {
                // Reset button state
                submitBtn.textContent = 'Enviar Mensaje';
                submitBtn.disabled = false;
                submitBtn.classList.remove('loading');
            }
        });

        // Smooth scroll for navigation
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

        // Phone number formatting
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            let formattedValue = '';
            
            if (value.length > 0) {
                if (value.length <= 3) {
                    formattedValue = value;
                } else if (value.length <= 6) {
                    formattedValue = value.slice(0, 3) + '-' + value.slice(3);
                } else {
                    formattedValue = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
                }
            }
            
            e.target.value = formattedValue;
        });

//boton flotante wsp

 // Función para redirigir a página externa
        function redirectToExternalPage() {
            // Cambia esta URL por la que necesites
            const externalURL = 'https://www.google.com';
            
            // Abre en nueva ventana/pestaña
            window.open(externalURL, '_blank');
            
            // Si prefieres redirigir en la misma ventana, usa:
            // window.location.href = externalURL;
        }

        // Opcional: Agregar animación de pulso después de 3 segundos
        setTimeout(() => {
            document.querySelector('.floating-icon').classList.add('pulse');
        }, 3000);

        // Opcional: Remover animación al hacer hover
        document.querySelector('.floating-icon').addEventListener('mouseenter', function() {
            this.classList.remove('pulse');
        });