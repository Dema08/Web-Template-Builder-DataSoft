<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login — Website Template Builder Datasoft</title>

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

    /* Left Visual Hero Side */
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

    .auth-hero-side::before {
      content: '';
      position: absolute;
      top: -100px;
      right: -100px;
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(236,72,153,.3), transparent 70%);
      border-radius: 50%;
    }

    .auth-hero-side::after {
      content: '';
      position: absolute;
      bottom: -80px;
      left: -80px;
      width: 350px;
      height: 350px;
      background: radial-gradient(circle, rgba(16,185,129,.25), transparent 70%);
      border-radius: 50%;
    }

    /* Right Form Side */
    .auth-form-side {
      flex: 0.9;
      background: #ffffff;
      padding: 60px 48px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 580px;
    }

    .demo-role-btn {
      padding: 12px 16px;
      border-radius: 14px;
      border: 1.5px solid var(--border);
      background: #fff;
      cursor: pointer;
      transition: all .2s ease;
      display: flex;
      align-items: center;
      gap: 12px;
      text-align: left;
    }

    .demo-role-btn:hover {
      border-color: var(--primary);
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(125,42,232,.12);
    }

    .demo-role-btn.admin-btn:hover {
      border-color: #EF4444;
      background: #FFF5F5;
    }

    .demo-role-btn.user-btn:hover {
      border-color: #10B981;
      background: #F0FDF4;
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
      height: 50px;
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

  {{-- ── LEFT HERO BANNER SIDE ────────────────────────────── --}}
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
        Buat Website Company Profile Impian Tanpa Coding
      </h1>
      <p style="font-size:15px;color:rgba(255,255,255,.85);max-width:480px;line-height:1.6">
        Platform SaaS modern terinspirasi Canva & Framer untuk membuat, mengkostumisasi, dan mempublikasikan website bisnis secara instan.
      </p>
    </div>

    {{-- Feature Mockup Card Overlay --}}
    <div style="position:relative;z-index:2;background:rgba(255,255,255,.12);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,.25);border-radius:20px;padding:24px">
      <div class="d-flex align-items-center gap-3 mb-3">
        <div style="width:10px;height:10px;border-radius:50%;background:#FF5F57"></div>
        <div style="width:10px;height:10px;border-radius:50%;background:#FEBC2E"></div>
        <div style="width:10px;height:10px;border-radius:50%;background:#28C840"></div>
        <span style="font-size:11px;color:rgba(255,255,255,.7);margin-left:auto">Preview Builder Canvas</span>
      </div>
      <div class="d-flex gap-2 mb-3">
        <span class="badge-status published" style="background:rgba(255,255,255,.2);color:#fff"><i class="bi bi-check2 me-1"></i>10 Sektor Industri</span>
        <span class="badge-status live" style="background:rgba(255,255,255,.2);color:#fff"><i class="bi bi-lightning me-1"></i>Deploy Instan Subdomain</span>
      </div>
      <div style="font-size:13px;color:rgba(255,255,255,.9);font-weight:600">
        "Website Koperasi & UMKM kami langsung online dalam hitungan menit!"
      </div>
    </div>

    <div style="position:relative;z-index:2;font-size:12px;color:rgba(255,255,255,.7)">
      © 2026 Datasoft SaaS Inc. All rights reserved.
    </div>
  </div>

  {{-- ── RIGHT LOGIN FORM SIDE ────────────────────────────── --}}
  <div class="auth-form-side">

    <div class="mb-4">
      <h2 style="font-size:26px;font-weight:900;color:var(--text-primary);letter-spacing:-.6px;margin-bottom:6px">
        Selamat Datang Kembali 👋
      </h2>
      <p style="font-size:14px;color:var(--text-secondary)">
        Silakan masuk menggunakan akun Anda untuk mengelola website
      </p>
    </div>

    {{-- Session Alerts --}}
    @if(session('success'))
      <div class="alert border-0 rounded-3 p-3 mb-3" style="font-size:13px;background:var(--success-light);color:var(--success);font-weight:600">
        <i class="bi bi-check-circle-fill me-2"></i>{{ session('success') }}
      </div>
    @endif
    @if(session('info'))
      <div class="alert border-0 rounded-3 p-3 mb-3" style="font-size:13px;background:var(--primary-light);color:var(--primary);font-weight:600">
        <i class="bi bi-info-circle-fill me-2"></i>{{ session('info') }}
      </div>
    @endif
    @if(session('error'))
      <div class="alert border-0 rounded-3 p-3 mb-3" style="font-size:13px;background:var(--danger-light);color:var(--danger);font-weight:600">
        <i class="bi bi-exclamation-triangle-fill me-2"></i>{{ session('error') }}
      </div>
    @endif
    @if($errors->any())
      <div class="alert border-0 rounded-3 p-3 mb-3" style="font-size:13px;background:var(--danger-light);color:var(--danger);font-weight:600">
        <i class="bi bi-exclamation-triangle-fill me-2"></i>{{ $errors->first() }}
      </div>
    @endif

    {{-- QUICK DEMO LOGIN LEVEL BUTTONS --}}
    <div class="mb-4">
      <div style="font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">
        ⚡ Demo Quick Login (Pilih Level Akses):
      </div>
      <div class="row g-2">
        <div class="col-6">
          <button type="button" class="demo-role-btn admin-btn w-100" onclick="quickLogin('admin@datasoft.id','password')">
            <div style="width:36px;height:36px;border-radius:10px;background:#FEE2E2;color:#EF4444;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">
              <i class="bi bi-shield-lock-fill"></i>
            </div>
            <div>
              <div style="font-size:12px;font-weight:800;color:#EF4444">Level 1 Admin</div>
              <div style="font-size:10px;color:var(--text-muted)">admin@datasoft.id</div>
            </div>
          </button>
        </div>
        <div class="col-6">
          <button type="button" class="demo-role-btn user-btn w-100" onclick="quickLogin('user@datasoft.id','password')">
            <div style="width:36px;height:36px;border-radius:10px;background:#D1FAE5;color:#059669;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">
              <i class="bi bi-person-fill"></i>
            </div>
            <div>
              <div style="font-size:12px;font-weight:800;color:#059669">Level 2 User</div>
              <div style="font-size:10px;color:var(--text-muted)">user@datasoft.id</div>
            </div>
          </button>
        </div>
      </div>
    </div>

    <div class="d-flex align-items-center gap-3 mb-4">
      <hr class="flex-grow-1 border-secondary opacity-25 m-0">
      <span style="font-size:12px;color:var(--text-muted);font-weight:600">atau login manual</span>
      <hr class="flex-grow-1 border-secondary opacity-25 m-0">
    </div>

    {{-- LOGIN FORM --}}
    <form action="{{ route('login') }}" method="POST" id="loginForm">
      @csrf

      <div class="mb-3">
        <label class="form-label-premium">Alamat Email</label>
        <div class="input-group-premium">
          <i class="bi bi-envelope input-icon"></i>
          <input type="email" name="email" id="email" value="{{ old('email') }}" placeholder="nama@perusahaan.co.id" required autofocus>
        </div>
      </div>

      <div class="mb-3">
        <div class="d-flex justify-content-between align-items-center mb-1">
          <label class="form-label-premium m-0">Kata Sandi</label>
          <a href="#" style="font-size:12px;color:var(--primary);text-decoration:none;font-weight:600">Lupa kata sandi?</a>
        </div>
        <div class="input-group-premium">
          <i class="bi bi-lock input-icon"></i>
          <input type="password" name="password" id="password" placeholder="••••••••" required>
        </div>
      </div>

      <div class="mb-4 d-flex align-items-center justify-content-between">
        <div class="form-check m-0">
          <input class="form-check-input" type="checkbox" name="remember" id="remember" style="cursor:pointer">
          <label class="form-check-label" for="remember" style="font-size:13px;color:var(--text-secondary);cursor:pointer">
            Ingat Saya
          </label>
        </div>
      </div>

      <button type="submit" class="btn-primary-custom w-100 justify-content-center" style="height:50px;font-size:15px;border-radius:12px">
        <i class="bi bi-box-arrow-in-right"></i> Masuk ke Platform
      </button>
    </form>

    <div class="text-center mt-4" style="font-size:14px;color:var(--text-secondary)">
      Belum memiliki akun? <a href="{{ route('register') }}" style="color:var(--primary);font-weight:700;text-decoration:none">Daftar Akun Baru</a>
    </div>

  </div>

</div>

<script>
function quickLogin(email, password) {
  document.getElementById('email').value = email;
  document.getElementById('password').value = password;
  document.getElementById('loginForm').submit();
}
</script>

</body>
</html>
