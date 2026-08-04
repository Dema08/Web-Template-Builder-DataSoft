<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Daftar Akun — Website Template Builder Datasoft</title>

  {{-- Google Fonts: Inter --}}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  {{-- Bootstrap 5 & Icons --}}
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">

  {{-- Custom Style --}}
  <link href="{{ asset('assets/css/style.css') }}" rel="stylesheet">

  <style>
    body {
      min-height: 100vh;
      background: #FAF9FC;
      font-family: 'Inter', sans-serif;
      overflow-x: hidden;
    }
    
    .auth-page-wrapper {
      min-height: 100vh;
      display: flex;
    }

    .auth-hero-side {
      flex: 1.1;
      background: linear-gradient(135deg, #7D2AE8 0%, #2563EB 50%, #1E1B4B 100%);
      padding: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      overflow: hidden;
      color: #fff;
    }

    .auth-form-side {
      flex: 0.9;
      background: #ffffff;
      padding: 60px 48px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 580px;
    }

    .input-group-premium {
      position: relative;
    }

    .input-group-premium i.input-icon {
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 18px;
      color: var(--text-muted);
      z-index: 5;
    }

    .input-group-premium input {
      padding-left: 48px;
      height: 48px;
      border-radius: 12px;
      border: 1.5px solid var(--border);
      font-size: 14px;
      width: 100%;
      transition: all .2s ease;
    }

    .input-group-premium input:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 4px rgba(125,42,232,.12);
      outline: none;
    }

    @media (max-width: 992px) {
      .auth-hero-side { display: none; }
      .auth-form-side { flex: 1; max-width: 100%; padding: 36px 24px; }
    }
  </style>
</head>
<body>

<div class="auth-page-wrapper">

  {{-- LEFT HERO BANNER SIDE --}}
  <div class="auth-hero-side">
    <div style="position:relative;z-index:2">
      <div class="d-flex align-items-center gap-3 mb-4">
        <div style="width:44px;height:44px;background:rgba(255,255,255,.2);backdrop-filter:blur(10px);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px">
          <i class="bi bi-stack text-white"></i>
        </div>
        <div>
          <div style="font-size:16px;font-weight:900;letter-spacing:-.3px">Datasoft Template Builder</div>
          <div style="font-size:11px;color:rgba(255,255,255,.8);text-transform:uppercase;letter-spacing:.5px">Canva SaaS Platform</div>
        </div>
      </div>

      <h1 style="font-size:36px;font-weight:900;line-height:1.25;letter-spacing:-1px;margin-bottom:16px">
        Bergabung & Mulai Buat Website Perusahaan Anda
      </h1>
      <p style="font-size:15px;color:rgba(255,255,255,.85);max-width:480px;line-height:1.6">
        Akses gratis ke 48+ template industri, editor visual Canva, storage media merek, dan deploy subdomain otomatis.
      </p>
    </div>

    <div style="position:relative;z-index:2;background:rgba(255,255,255,.12);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,.25);border-radius:20px;padding:24px">
      <div class="d-flex align-items-center gap-2 mb-2">
        <i class="bi bi-check-circle-fill text-success fs-5"></i>
        <span style="font-weight:700;font-size:14px">Pendaftaran Gratis Tanpa Kartu Kredit</span>
      </div>
      <div style="font-size:13px;color:rgba(255,255,255,.8)">
        Semua akun baru secara otomatis mendapatkan akun <strong>Level 2 User</strong> dengan fitur lengkap.
      </div>
    </div>

    <div style="position:relative;z-index:2;font-size:12px;color:rgba(255,255,255,.7)">
      © 2026 Datasoft SaaS Inc. All rights reserved.
    </div>
  </div>

  {{-- RIGHT REGISTER FORM SIDE --}}
  <div class="auth-form-side">

    <div class="mb-4">
      <h2 style="font-size:26px;font-weight:900;color:var(--text-primary);letter-spacing:-.6px;margin-bottom:6px">
        Buat Akun Baru ✨
      </h2>
      <p style="font-size:14px;color:var(--text-secondary)">
        Lengkapi formulir di bawah untuk mendaftarkan akun baru
      </p>
    </div>

    @if($errors->any())
      <div class="alert border-0 rounded-3 p-3 mb-3" style="font-size:13px;background:var(--danger-light);color:var(--danger)">
        <ul class="mb-0 ps-3">
          @foreach($errors->all() as $error)
            <li>{{ $error }}</li>
          @endforeach
        </ul>
      </div>
    @endif

    <form action="{{ route('register') }}" method="POST">
      @csrf

      <div class="mb-3">
        <label class="form-label-premium">Nama Lengkap</label>
        <div class="input-group-premium">
          <i class="bi bi-person input-icon"></i>
          <input type="text" name="name" value="{{ old('name') }}" placeholder="Contoh: Hafizh Datasoft" required autofocus>
        </div>
      </div>

      <div class="mb-3">
        <label class="form-label-premium">Alamat Email</label>
        <div class="input-group-premium">
          <i class="bi bi-envelope input-icon"></i>
          <input type="email" name="email" value="{{ old('email') }}" placeholder="nama@perusahaan.co.id" required>
        </div>
      </div>

      <div class="mb-3">
        <label class="form-label-premium">Kata Sandi</label>
        <div class="input-group-premium">
          <i class="bi bi-lock input-icon"></i>
          <input type="password" name="password" placeholder="Minimal 6 karakter" required>
        </div>
      </div>

      <div class="mb-4">
        <label class="form-label-premium">Konfirmasi Kata Sandi</label>
        <div class="input-group-premium">
          <i class="bi bi-shield-check input-icon"></i>
          <input type="password" name="password_confirmation" placeholder="Ulangi kata sandi" required>
        </div>
      </div>

      <button type="submit" class="btn-primary-custom w-100 justify-content-center" style="height:50px;font-size:15px;border-radius:12px">
        <i class="bi bi-check-circle-fill"></i> Buat Akun Sekarang
      </button>
    </form>

    <div class="text-center mt-4" style="font-size:14px;color:var(--text-secondary)">
      Sudah memiliki akun? <a href="{{ route('login') }}" style="color:var(--primary);font-weight:700;text-decoration:none">Masuk di sini</a>
    </div>

  </div>

</div>

</body>
</html>
