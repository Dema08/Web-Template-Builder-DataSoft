<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>@yield('title', 'Admin Panel') — Datasoft Administrator</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
  <link href="{{ asset('assets/css/style.css') }}" rel="stylesheet">
  <style>
    /* Admin sidebar uses a distinct dark navy-red theme */
    .sidebar { background: #0F172A; border-right: none; }
    .sidebar-brand-text { color: #fff; }
    .sidebar-brand-sub  { color: rgba(255,255,255,.5); }
    .sidebar-item { color: rgba(255,255,255,.65); border-radius: var(--radius-sm); }
    .sidebar-item i { color: rgba(255,255,255,.45); }
    .sidebar-item:hover { background: rgba(255,255,255,.08); color: #fff; }
    .sidebar-item:hover i { color: #fff; }
    .sidebar-item.active { background: linear-gradient(135deg,#EF4444,#DC2626); color: #fff; box-shadow:0 4px 14px rgba(239,68,68,.35); }
    .sidebar-item.active i { color: #fff; }
    .sidebar-section-divider { height:1px; background:rgba(255,255,255,.1); margin:12px 14px; }
    .sidebar-section-label-dark { font-size:10px; font-weight:700; color:rgba(255,255,255,.35); text-transform:uppercase; letter-spacing:.8px; padding:0 16px 6px; }
    .admin-sidebar-user { display:flex; align-items:center; gap:10px; padding:10px 12px; border-radius:var(--radius-sm); background:rgba(255,255,255,.07); margin-top:auto; }
  </style>
  @yield('head')
</head>
<body>
<div class="app-wrapper">

  {{-- ═══════════════════════════════════════════════════════
       SIDEBAR — ADMINISTRATOR (Level 1)
       Menu: Dashboard, Kelola User, Kelola Template,
             Kelola Kategori, Monitor Website, Pengaturan
  ═══════════════════════════════════════════════════════ --}}
  <aside class="sidebar" id="sidebar">

    <a href="{{ url('/admin/dashboard') }}" class="sidebar-brand">
      <div class="sidebar-brand-icon" style="background:linear-gradient(135deg,#EF4444,#DC2626);box-shadow:0 4px 12px rgba(239,68,68,.4)">
        <i class="bi bi-shield-lock-fill"></i>
      </div>
      <div>
        <div class="sidebar-brand-text">Admin Panel</div>
        <div class="sidebar-brand-sub">Datasoft Administrator</div>
      </div>
    </a>

    <nav class="sidebar-nav">

      <div class="sidebar-section-label-dark">Utama</div>

      <a href="{{ url('/admin/dashboard') }}"
         class="sidebar-item {{ request()->is('admin/dashboard') ? 'active' : '' }}">
        <i class="bi bi-speedometer2"></i><span>Dashboard Admin</span>
      </a>

      <div class="sidebar-section-divider"></div>
      <div class="sidebar-section-label-dark">Manajemen</div>

      <a href="{{ url('/admin/users') }}"
         class="sidebar-item {{ request()->is('admin/users*') ? 'active' : '' }}">
        <i class="bi bi-people-fill"></i><span>Kelola Pengguna</span>
      </a>

      <a href="{{ url('/admin/templates') }}"
         class="sidebar-item {{ request()->is('admin/templates*') ? 'active' : '' }}">
        <i class="bi bi-layout-text-window-reverse"></i><span>Kelola Template</span>
      </a>

      <a href="{{ url('/admin/categories') }}"
         class="sidebar-item {{ request()->is('admin/categories*') ? 'active' : '' }}">
        <i class="bi bi-tags-fill"></i><span>Kelola Kategori</span>
      </a>

      <div class="sidebar-section-divider"></div>
      <div class="sidebar-section-label-dark">Monitoring</div>

      <a href="{{ url('/admin/websites') }}"
         class="sidebar-item {{ request()->is('admin/websites*') ? 'active' : '' }}">
        <i class="bi bi-globe2"></i><span>Monitor Website</span>
      </a>

      <a href="{{ url('/admin/analytics') }}"
         class="sidebar-item {{ request()->is('admin/analytics*') ? 'active' : '' }}">
        <i class="bi bi-bar-chart-line-fill"></i><span>Analytics Platform</span>
      </a>

      <div class="sidebar-section-divider"></div>
      <div class="sidebar-section-label-dark">Sistem</div>

      <a href="{{ url('/admin/settings') }}"
         class="sidebar-item {{ request()->is('admin/settings*') ? 'active' : '' }}">
        <i class="bi bi-gear-wide-connected"></i><span>Pengaturan Sistem</span>
      </a>

    </nav>

    @auth
    <div class="admin-sidebar-user">
      <div style="width:36px;height:36px;background:linear-gradient(135deg,#EF4444,#DC2626);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:13px;flex-shrink:0">
        {{ strtoupper(substr(auth()->user()->name, 0, 2)) }}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:12px;font-weight:700;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">{{ auth()->user()->name }}</div>
        <div style="font-size:10px;font-weight:700;color:#FCA5A5;display:flex;align-items:center;gap:4px">
          <i class="bi bi-shield-fill-check"></i> Administrator
        </div>
      </div>
      <form action="{{ route('logout') }}" method="POST" class="ms-auto">
        @csrf
        <button type="submit" class="btn-ghost p-1" title="Keluar">
          <i class="bi bi-box-arrow-right" style="color:#FCA5A5"></i>
        </button>
      </form>
    </div>
    @endauth

  </aside>

  {{-- Main Content --}}
  <div class="main-content">
    <header class="top-bar-canva" style="background:rgba(255,255,255,.95)">
      <div class="d-flex align-items-center gap-2">
        <button class="btn-ghost d-lg-none p-1" id="sidebarToggle">
          <i class="bi bi-list fs-4"></i>
        </button>
        {{-- Admin breadcrumb --}}
        <div class="d-flex align-items-center gap-2">
          <span style="font-size:12px;font-weight:700;color:#EF4444;background:#FEE2E2;padding:3px 10px;border-radius:99px">
            <i class="bi bi-shield-fill-check me-1"></i>ADMIN
          </span>
          <i class="bi bi-chevron-right" style="font-size:11px;color:var(--text-muted)"></i>
          <span style="font-size:15px;font-weight:700;color:var(--text-primary)">@yield('page_title','Dashboard Admin')</span>
        </div>
      </div>

      <div class="d-flex align-items-center gap-3">
        {{-- Quick link ke User Workspace --}}
        <a href="{{ url('/dashboard') }}" class="btn-ghost d-none d-md-flex" style="font-size:12px;padding:6px 12px">
          <i class="bi bi-person me-1"></i> Lihat Workspace User
        </a>

        {{-- Notifikasi Admin --}}
        <div class="dropdown">
          <button style="border:none;background:transparent;position:relative;width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer" data-bs-toggle="dropdown">
            <i class="bi bi-bell fs-5" style="color:var(--text-secondary)"></i>
            <span style="position:absolute;top:8px;right:8px;width:8px;height:8px;background:var(--danger);border-radius:50%"></span>
          </button>
          <div class="dropdown-menu dropdown-menu-end shadow-sm border-0 p-0" style="width:320px;border-radius:16px;overflow:hidden;margin-top:8px">
            <div class="p-3 border-bottom d-flex justify-content-between align-items-center">
              <span style="font-weight:700;font-size:14px">Notifikasi Admin</span>
              <span class="badge-status published" style="font-size:10px;background:#FEE2E2;color:#DC2626">Level 1</span>
            </div>
            @php $adminNotifs = [
              ['icon'=>'bi-person-plus-fill','title'=>'User Baru Terdaftar','sub'=>'3 pendaftar baru hari ini','time'=>'30 mnt lalu'],
              ['icon'=>'bi-globe2','title'=>'Website Dipublish','sub'=>'koperasimaju.companybuilder.id','time'=>'2 jam lalu'],
              ['icon'=>'bi-exclamation-triangle-fill','title'=>'Laporan Error','sub'=>'1 deployment gagal dideteksi','time'=>'3 jam lalu'],
            ]; @endphp
            @foreach($adminNotifs as $n)
            <div class="d-flex align-items-start gap-3 p-3 border-bottom" style="font-size:13px;cursor:pointer" onmouseover="this.style.background='#FFF5F5'" onmouseout="this.style.background=''">
              <div style="width:34px;height:34px;border-radius:10px;background:#FEE2E2;display:flex;align-items:center;justify-content:center;flex-shrink:0">
                <i class="bi {{ $n['icon'] }}" style="color:#EF4444"></i>
              </div>
              <div>
                <div style="font-weight:700;color:var(--text-primary)">{{ $n['title'] }}</div>
                <div style="color:var(--text-secondary);font-size:12px">{{ $n['sub'] }}</div>
                <div style="color:var(--text-muted);font-size:11px;margin-top:2px">{{ $n['time'] }}</div>
              </div>
            </div>
            @endforeach
          </div>
        </div>

        {{-- Admin Dropdown --}}
        @auth
        <div class="dropdown">
          <div class="d-flex align-items-center gap-2" data-bs-toggle="dropdown" style="cursor:pointer">
            <div style="width:36px;height:36px;background:linear-gradient(135deg,#EF4444,#DC2626);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:13px">
              {{ strtoupper(substr(auth()->user()->name, 0, 2)) }}
            </div>
            <div class="d-none d-md-block text-start">
              <div style="font-size:13px;font-weight:700;line-height:1.2">{{ auth()->user()->name }}</div>
              <div style="font-size:10px;color:#EF4444;font-weight:700">{{ ucfirst(auth()->user()->role->value) }} • Administrator</div>
            </div>
            <i class="bi bi-chevron-down" style="font-size:11px;color:var(--text-muted)"></i>
          </div>
          <div class="dropdown-menu dropdown-menu-end shadow-sm border-0 mt-2 p-2" style="min-width:220px;border-radius:12px">
            <div class="px-3 py-2 mb-1">
              <div style="font-weight:700;font-size:13px">{{ auth()->user()->name }}</div>
              <div style="font-size:11px;color:var(--text-muted)">{{ auth()->user()->email }}</div>
              <div class="mt-1 d-flex align-items-center gap-1">
                <span style="font-size:10px;font-weight:700;color:#EF4444;background:#FEE2E2;padding:2px 8px;border-radius:99px">
                  <i class="bi bi-shield-lock-fill me-1"></i>{{ ucfirst(auth()->user()->role->value) }} — ADMIN
                </span>
              </div>
            </div>
            <hr class="dropdown-divider">
            <a href="{{ url('/admin/dashboard') }}" class="dropdown-item rounded-2 d-flex align-items-center gap-2" style="font-size:13px;padding:8px 12px"><i class="bi bi-speedometer2"></i> Dashboard Admin</a>
            <a href="{{ url('/admin/users') }}" class="dropdown-item rounded-2 d-flex align-items-center gap-2" style="font-size:13px;padding:8px 12px"><i class="bi bi-people-fill"></i> Kelola Pengguna</a>
            <a href="{{ url('/dashboard') }}" class="dropdown-item rounded-2 d-flex align-items-center gap-2" style="font-size:13px;padding:8px 12px"><i class="bi bi-person"></i> Lihat Workspace User</a>
            <hr class="dropdown-divider">
            <form action="{{ route('logout') }}" method="POST">
              @csrf
              <button type="submit" class="dropdown-item rounded-2 d-flex align-items-center gap-2 text-danger w-100 border-0" style="font-size:13px;padding:8px 12px;background:transparent">
                <i class="bi bi-box-arrow-right"></i> Keluar (Logout)
              </button>
            </form>
          </div>
        </div>
        @endauth
      </div>
    </header>

    <main style="flex:1">@yield('content')</main>
  </div>

</div>

<button class="floating-help-btn" onclick="showToast('Admin Support: admin@datasoft.id','default')" title="Bantuan Admin" style="background:linear-gradient(135deg,#EF4444,#DC2626)">?</button>
<div class="toast-container-custom" id="toast-container"></div>

@if(session('success'))<script>document.addEventListener('DOMContentLoaded',()=>showToast("{{ session('success') }}",'success'));</script>@endif
@if(session('error'))<script>document.addEventListener('DOMContentLoaded',()=>showToast("{{ session('error') }}",'danger'));</script>@endif

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.49.2/dist/apexcharts.min.js"></script>
<script src="{{ asset('assets/js/app.js') }}"></script>
@yield('scripts')
</body>
</html>
