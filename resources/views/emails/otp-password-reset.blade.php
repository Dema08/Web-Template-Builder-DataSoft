<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Password - DataSoft</title>
    <style>
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: #f8fafc;
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }
        .container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #ffffff;
            border-radius: 16px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 800;
        }
        .content {
            padding: 40px 30px;
        }
        .greeting {
            font-size: 18px;
            color: #1e293b;
            margin-bottom: 20px;
        }
        .message {
            color: #64748b;
            margin-bottom: 30px;
        }
        .otp-box {
            background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
            border: 2px dashed #2563eb;
            border-radius: 12px;
            padding: 30px;
            text-align: center;
            margin: 30px 0;
        }
        .otp-label {
            font-size: 14px;
            color: #64748b;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 600;
        }
        .otp-code {
            font-size: 36px;
            font-weight: 800;
            color: #2563eb;
            letter-spacing: 8px;
            font-family: 'Courier New', monospace;
        }
        .warning {
            background-color: #fef3c7;
            border-left: 4px solid #f59e0b;
            padding: 15px 20px;
            border-radius: 8px;
            margin: 20px 0;
            color: #92400e;
            font-size: 14px;
        }
        .footer {
            padding: 20px 30px;
            text-align: center;
            color: #94a3b8;
            font-size: 12px;
            border-top: 1px solid #e2e8f0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>DataSoft</h1>
        </div>

        <div class="content">
            <div class="greeting">
                Halo, {{ $userName }}!
            </div>

            <div class="message">
                Kami menerima permintaan untuk mereset password akun DataSoft Anda.
                Gunakan kode OTP berikut untuk melanjutkan proses reset password:
            </div>

            <div class="otp-box">
                <div class="otp-label">Kode OTP Anda</div>
                <div class="otp-code">{{ $otpCode }}</div>
            </div>

            <div class="warning">
                <strong>⚠️ Penting:</strong> Kode ini akan kedaluwarsa {{ $expiresAt }}.
                Jangan bagikan kode ini kepada siapapun untuk keamanan akun Anda.
            </div>

            <div class="message">
                Jika Anda tidak meminta reset password, abaikan email ini dan password Anda akan tetap unchanged.
            </div>
        </div>

        <div class="footer">
            <p>&copy; 2026 DataSoft Studio Solusindo. All rights reserved.</p>
            <p>Email ini dikirim secara otomatis. Mohon tidak membalas.</p>
        </div>
    </div>
</body>
</html>
