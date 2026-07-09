document.addEventListener('DOMContentLoaded', () => {

    // 1. تأثير شريط التنقل العلوي عند السكرول
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '12px 0';
            navbar.style.background = 'rgba(3, 3, 7, 0.9)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.background = 'rgba(3, 3, 7, 0.7)';
        }
    });

    // 2. سحر التحويل للواتساب بدون سيرفر
    const contactForm = document.getElementById('main-contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // منع إعادة تحميل الصفحة
        
        // جلب ما كتبه العميل
        const name = document.getElementById('user-name').value;
        const email = document.getElementById('user-email').value;
        const message = document.getElementById('user-message').value;

        formStatus.style.color = '#00f0ff';
        formStatus.textContent = 'Opening WhatsApp...';

        // رقمك مضاف هنا بكود الدولة (مصر 20) ومخفي عن عيون المستخدم في الموقع
        const myPhoneNumber = "201282109106"; 

        // تجهيز نص الرسالة بشكل منسق واحترافي يجيلك على الواتس
        const whatsappText = `Hello Mahmoud!%0A%0AI want to start a project with Nexus Digital.%0A%0A*👤 Name:* ${encodeURIComponent(name)}%0A*📧 Email:* ${encodeURIComponent(email)}%0A*💬 Message:* ${encodeURIComponent(message)}`;
        
        // رابط الواتساب السريع
        const whatsappURL = `https://wa.me/${myPhoneNumber}?text=${whatsappText}`;

        // فتح الشات في تبويب جديد بعد ثانية واحدة
        setTimeout(() => {
            window.open(whatsappURL, '_blank');
            formStatus.style.color = '#00ff77';
            formStatus.textContent = 'Redirected successfully! 🚀';
            contactForm.reset(); // تفريغ الفورم
        }, 1000);
    });
});