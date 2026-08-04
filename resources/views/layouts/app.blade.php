<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>@yield('title', 'Dashboard') — Datasoft SaaS User</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
  <link href="{{ asset('assets/css/style.css') }}" rel="stylesheet">
  @yield('head')
</head>
<body>
<div class="app-wrapper">

  {{-- ═══════════════════════════════════════════════════════
       SIDEBAR — USER (Level 2)
       Menu: Beranda, Template, Proyek Builder, Media Merek,
             Theme Kit, Publish Website
  ═══════════════════════════════════════════════════════ --}}
  <aside class="sidebar" id="sidebar">

    <a href="{{ url('/dashboard') }}" class="sidebar-brand">
      <div class="sidebar-brand-icon"><i class="bi bi-stack"></i></div>
      <div>
        <div class="sidebar-brand-text">Template Builder</div>
        <div class="sidebar-brand-sub">Datasoft SaaS</div>
      </div>
    </a>

    <a href="{{ url('/project-builder') }}" class="btn-create-canva">
      <i class="bi bi-plus-lg"></i><span>Buat Project</span>
    </a>

    <nav class="sidebar-nav">
      <a href="{{ url('/dashboard') }}"
         class="sidebar-item {{ request()->is('dashboard') ? 'active' : '' }}">
        <i class="bi bi-house-door"></i><span>Beranda</span>
      </a>
      <a href="{{ url('/marketplace') }}"
         class="sidebar-item {{ request()->is('marketplace*') ? 'active' : '' }}">
        <i class="bi bi-shop"></i><span>Template</span>
        <span class="badge-pill">Hot</span>
      </a>
      <a href="{{ url('/project-builder') }}"
         class="sidebar-item {{ request()->is('project-builder*') ? 'active' : '' }}">
        <i class="bi bi-pencil-square"></i><span>Proyek Builder</span>
      </a>
      <a href="{{ url('/media-manager') }}"
         class="sidebar-item {{ request()->is('media-manager*') ? 'active' : '' }}">
        <i class="bi bi-images"></i><span>Media Merek</span>
      </a>
      <a href="{{ url('/theme-builder') }}"
         class="sidebar-item {{ request()->is('theme-builder*') ? 'active' : '' }}">
        <i class="bi bi-palette"></i><span>Theme Kit</span>
      </a>
      <a href="{{ url('/publish') }}"
         class="sidebar-item {{ request()->is('publish*') ? 'active' : '' }}">
        <i class="bi bi-rocket-takeoff"></i><span>Publish Website</span>
      </a>
    </nav>

    @auth
    <div class="sidebar-user-canva">
      <div class="sidebar-user-avatar" style="background: linear-gradient(135deg,#10B981,#059669)">
        {{ strtoupper(substr(auth()->user()->name, 0, 2)) }}
      </div>
      <div class="sidebar-user-info">
        <div class="sidebar-user-name text-truncate" style="max-width:120px">{{ auth()->user()->name }}</div>
        <div class="sidebar-user-plan" style="background:#D1FAE5;color:#059669">
          <i class="bi bi-person-fill me-1"></i>{{ ucfirst(auth()->user()->role->value) }}
        </div>
      </div>
      <form action="{{ route('logout') }}" method="POST" class="ms-auto">
        @csrf
        <button type="submit" class="btn-ghost p-1" title="Keluar">
          <i class="bi bi-box-arrow-right" style="color:var(--danger)"></i>
        </button>
      </form>
    </div>
    @endauth
  </aside>

  {{-- Main Content --}}
  <div class="main-content">
    <header class="top-bar-canva">
      <div class="d-flex align-items-center gap-2">
        <button class="btn-ghost d-lg-none p-1" id="sidebarToggle">
          <i class="bi bi-list fs-4"></i>
        </button>
        <span style="font-size:15px;font-weight:700;color:var(--text-primary)">@yield('page_title','Beranda')</span>
      </div>

      <div class="d-flex align-items-center gap-3">
        {{-- Notifikasi --}}
        <div class="dropdown">
          <button style="border:none;background:transparent;position:relative;width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer" data-bs-toggle="dropdown">
            <i class="bi bi-bell fs-5" style="color:var(--text-secondary)"></i>
            <span style="position:absolute;top:8px;right:8px;width:8px;height:8px;background:var(--danger);border-radius:50%"></span>
          </button>
          <div class="dropdown-menu dropdown-menu-end shadow-sm border-0 p-0" style="width:320px;border-radius:16px;overflow:hidden;margin-top:8px">
            <div class="p-3 border-bottom d-flex justify-content-between align-items-center">
              <span style="font-weight:700;font-size:14px">Notifikasi</span>
              <span class="badge-status published" style="font-size:10px">3 Baru</span>
            </div>
            @php $notifs = [
              ['icon'=>'bi-rocket-takeoff','title'=>'Website Dipublish','sub'=>'koperasimaju.companybuilder.id live','time'=>'5 mnt lalu'],
              ['icon'=>'bi-palette','title'=>'Theme Diperbarui','sub'=>'Warna primary berhasil disimpan','time'=>'1 jam lalu'],
              ['icon'=>'bi-images','title'=>'Upload Selesai','sub'=>'5 foto berhasil diunggah','time'=>'3 jam lalu'],
            ]; @endphp
            @foreach($notifs as $n)
            <div class="d-flex align-items-start gap-3 p-3 border-bottom" style="font-size:13px;cursor:pointer" onmouseover="this.style.background='var(--canva-bg)'" onmouseout="this.style.background=''">
              <div style="width:34px;height:34px;border-radius:10px;background:var(--primary-light);display:flex;align-items:center;justify-content:center;flex-shrink:0">
                <i class="bi {{ $n['icon'] }}" style="color:var(--primary)"></i>
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

        {{-- User Dropdown --}}
        @auth
        <div class="dropdown">
          <div class="d-flex align-items-center gap-2" data-bs-toggle="dropdown" style="cursor:pointer">
            <div style="width:36px;height:36px;background:linear-gradient(135deg,#10B981,#059669);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:13px">
              {{ strtoupper(substr(auth()->user()->name, 0, 2)) }}
            </div>
            <div class="d-none d-md-block text-start">
              <div style="font-size:13px;font-weight:700;line-height:1.2">{{ auth()->user()->name }}</div>
              <div style="font-size:10px;color:var(--success);font-weight:700">{{ ucfirst(auth()->user()->role->value) }}</div>
            </div>
            <i class="bi bi-chevron-down" style="font-size:11px;color:var(--text-muted)"></i>
          </div>
          <div class="dropdown-menu dropdown-menu-end shadow-sm border-0 mt-2 p-2" style="min-width:210px;border-radius:12px">
            <div class="px-3 py-2 mb-1">
              <div style="font-weight:700;font-size:13px">{{ auth()->user()->name }}</div>
              <div style="font-size:11px;color:var(--text-muted)">{{ auth()->user()->email }}</div>
              <div class="mt-1 d-flex align-items-center gap-1">
                <span class="badge-status published" style="font-size:10px">{{ ucfirst(auth()->user()->role->value) }}</span>
                <span class="badge-category" style="font-size:10px">USER</span>
              </div>
            </div>
            <hr class="dropdown-divider">
            <a href="{{ url('/dashboard') }}" class="dropdown-item rounded-2 d-flex align-items-center gap-2" style="font-size:13px;padding:8px 12px"><i class="bi bi-house"></i> Workspace Saya</a>
            <a href="{{ url('/project-builder') }}" class="dropdown-item rounded-2 d-flex align-items-center gap-2" style="font-size:13px;padding:8px 12px"><i class="bi bi-pencil-square"></i> Proyek Builder</a>
            <hr class="dropdown-divider">
            <form action="{{ route('logout') }}" method="POST">
              @csrf
              <button type="submit" class="dropdown-item rounded-2 d-flex align-items-center gap-2 text-danger w-100 border-0" style="font-size:13px;padding:8px 12px;background:transparent">
                <i class="bi bi-box-arrow-right"></i> Keluar
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

<button class="floating-help-btn" onclick="showToast('Pusat Bantuan siap membantu!','default')" title="Bantuan">?</button>
<div class="toast-container-custom" id="toast-container"></div>

@if(session('success'))<script>document.addEventListener('DOMContentLoaded',()=>showToast("{{ session('success') }}",'success'));</script>@endif
@if(session('error'))<script>document.addEventListener('DOMContentLoaded',()=>showToast("{{ session('error') }}",'danger'));</script>@endif

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.49.2/dist/apexcharts.min.js"></script>
<script src="{{ asset('assets/js/app.js') }}"></script>
@yield('scripts')
</body>
</html>
