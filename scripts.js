document.addEventListener('DOMContentLoaded', function() {
    // Typing effect
    var typed = new Typed('#typed', {
        strings: ["A passionate Front end developer", "experienced in HTML, CSS, and JavaScript", "familiar with libraries and frameworks"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

    // Progress bars
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = percentage;
    });

    // Contact form submission
    document.getElementById('contact-form').addEventListener('submit', async function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const response = await fetch('/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });

        const result = await response.json();
        if (result.success) {
            alert('Message sent successfully!');
        } else {
            alert('There was an error sending your message.');
        }
    });
});
