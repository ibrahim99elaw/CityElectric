// فتح و إغلاق القائمة الجانبية
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// إخفاء القائمة عند اختيار عنصر منها
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('show');
    });
});

// فتح الواتساب للطلب
function orderProduct(productName) {
    const phoneNumber = "+201093373497"; // رقم واتساب
    const message = `اهلا وسهلا انا مهتم بشراء :- ${productName}.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
}




 function sendWhatsAppMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // إعداد الرسالة المخصصة التي سيتم إرسالها عبر WhatsApp
    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    
    // الرابط لفتح WhatsApp مع الرسالة
    const whatsappUrl = `https://wa.me/201093373497?text=${encodeURIComponent(whatsappMessage)}`;
    
    // فتح الرابط في نافذة جديدة
    window.open(whatsappUrl, '_blank');
  }