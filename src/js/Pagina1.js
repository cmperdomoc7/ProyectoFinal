// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // DOM Elements
    const navMenu = document.getElementById('navMenu');
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');

    // Form inputs - CORREGIDO: usar los IDs correctos del HTML
    const nameInput = document.getElementById('nameInput');
    const cedulaInput = document.getElementById('cedulaInput');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    // Error elements
    const nameError = document.getElementById('nameError');
    const cedulaError = document.getElementById('cedulaError'); // CORREGIDO
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const messageError = document.getElementById('messageError');


    // Close menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggle) menuToggle.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
        });
    });

    // Validation functions
    function validateName(name) {
        return name.trim().length >= 2;
    }

    // AGREGADO: Función para validar cédula
    function validateCedula(cedula) {
        return cedula.trim().length >= 9;
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePhone(phone) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    }

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

    // Real-time validation
    if (nameInput) {
        nameInput.addEventListener('blur', () => {
            if (nameInput.value && !validateName(nameInput.value)) {
                showError(nameInput, nameError, 'El nombre debe tener al menos 2 caracteres');
            } else {
                clearError(nameInput, nameError);
                if (nameInput.value) nameInput.classList.add('success');
            }
        });
    }

    if (cedulaInput) {
        cedulaInput.addEventListener('blur', () => {
            if (cedulaInput.value && !validateCedula(cedulaInput.value)) {
                showError(cedulaInput, cedulaError, 'La cédula debe tener al menos 9 números');
            } else {
                clearError(cedulaInput, cedulaError);
                if (cedulaInput.value) cedulaInput.classList.add('success');
            }
        });
    }

    if (emailInput) {
        emailInput.addEventListener('blur', () => {
            if (emailInput.value && !validateEmail(emailInput.value)) {
                showError(emailInput, emailError, 'Ingresa un email válido');
            } else {
                clearError(emailInput, emailError);
                if (emailInput.value) emailInput.classList.add('success');
            }
        });
    }

    if (phoneInput) {
        phoneInput.addEventListener('blur', () => {
            if (phoneInput.value && !validatePhone(phoneInput.value)) {
                showError(phoneInput, phoneError, 'Ingresa un teléfono válido');
            } else {
                clearError(phoneInput, phoneError);
                if (phoneInput.value) phoneInput.classList.add('success');
            }
        });
    }

    // Clear errors on focus
    [nameInput, cedulaInput, emailInput, phoneInput, messageInput].forEach(input => {
        if (input) {
            input.addEventListener('focus', () => {
                input.classList.remove('error', 'success');
                const errorElement = document.getElementById(input.id + 'Error');
                if (errorElement) {
                    errorElement.classList.remove('show');
                }
            });
        }
    });

    // Form submission
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Clear previous messages
            successMessage.classList.remove('show');
            
            // Get form data
            const formData = {
                cedula: cedulaInput.value.trim(),
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                phone: phoneInput.value.trim(),
                message: messageInput.value.trim()
            };
            
            // Validate all fields
            let isValid = true;
            
            if (!formData.cedula) {
                showError(cedulaInput, cedulaError, 'La cédula es requerida');
                isValid = false;
            } else if (!validateCedula(formData.cedula)) {
                showError(cedulaInput, cedulaError, 'La cédula debe tener al menos 9 números');
                isValid = false;
            }
            
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
                [nameInput, cedulaInput, emailInput, phoneInput, messageInput].forEach(input => {
                    if (input) input.classList.remove('error', 'success');
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
    }

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
    if (phoneInput) {
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
    }
    
    // Botón flotante WhatsApp
    function redirectToExternalPage() {
        const externalURL = 'https://wa.me/573162314393';
        window.open(externalURL, '_blank');
    }

    // Hacer la función global para que funcione el onclick del HTML
    window.redirectToExternalPage = redirectToExternalPage;

    // Animación de pulso después de 3 segundos
    const floatingIcon = document.querySelector('.floating-icon');
    if (floatingIcon) {
        setTimeout(() => {
            floatingIcon.classList.add('pulse');
        }, 3000);

        floatingIcon.addEventListener('mouseenter', function() {
            this.classList.remove('pulse');
        });
    }

}); // Fin de DOMContentLoaded