<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pendaftaran Akun Disetujui - DataSoft</title>
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
        .success-box {
            background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
            border: 2px solid #22c55e;
            border-radius: 12px;
            padding: 30px;
            text-align: center;
            margin: 30px 0;
        }
        .success-icon {
            font-size: 48px;
            margin-bottom: 10px;
        }
        .success-title {
            font-size: 20px;
            font-weight: 800;
            color: #15803d;
            margin: 0;
        }
        .success-subtitle {
            font-size: 14px;
            color: #166534;
            margin-top: 8px;
        }
        .info-box {
            background-color: #eff6ff;
            border-left: 4px solid #2563eb;
            padding: 15px 20px;
            border-radius: 8px;
            margin: 20px 0;
            color: #1e40af;
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
            <h1>{{ $brandName }}</h1>
        </div>

        <div class="content">
            <div class="greeting">
                Halo, {{ $userName }}! 🎉
            </div>

            <div class="message">
                Kabar baik untuk Anda! Akun DataSoft Anda telah <strong>disetujui</strong> oleh tim admin.
                Sekarang Anda dapat login dan mulai menggunakan semua fitur yang tersedia.
            </div>

            <div class="success-box">
                <div class="success-icon">✅</div>
                <div class="success-title">Pendaftaran Berhasil Disetujui</div>
                <div class="success-subtitle">Akun Anda sekarang aktif dan siap digunakan</div>
            </div>

            <div class="info-box">
                <strong>💡 Langkah Selanjutnya:</strong><br>
                1. Kunjungi halaman login DataSoft<br>
                2. Masukkan email dan password yang Anda daftarkan<br>
                3. Mulai eksplorasi dan bangun website impian Anda!
            </div>

            <div class="message">
                Jika Anda memiliki pertanyaan atau memerlukan bantuan, jangan ragu untuk menghubungi tim support kami.
            </div>
        </div>

        <div class="footer">
            <p>&copy; 2026 {{ $brandName }}. All rights reserved.</p>
            <p>Email ini dikirim secara otomatis. Mohon tidak membalas.</p>
        </div>
    </div>
</body>
</html>