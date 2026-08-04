@extends('layouts.admin')

@section('title', 'Dashboard Administrator')
@section('page_title', 'Dashboard Admin')
@section('meta_description', 'Panel administrator untuk monitoring platform dan manajemen pengguna.')

@section('content')
@php
$stats = [
  ['label'=>'Total Pengguna',       'value'=>'1,248','count'=>1248,'icon'=>'bi-people-fill',            'color'=>'#EF4444','bg'=>'#FEE2E2'],
  ['label'=>'Total Project User',   'value'=>'342',  'count'=>342, 'icon'=>'bi-folder2-open',           'color'=>'#7D2AE8','bg'=>'#EDE9FE'],
  ['label'=>'Website Live (Online)','value'=>'218',  'count'=>218, 'icon'=>'bi-globe2',                 'color'=>'#10B981','bg'=>'#D1FAE5'],
  ['label'=>'Template Tersedia',    'value'=>'48',   'count'=>48,  'icon'=>'bi-layout-text-window',     'color'=>'#F59E0B','bg'=>'#FEF3C7'],
];
$recentUsers = \App\Models\User::latest()->get();
@endphp

<div class="container-fluid p-4" style="max-width:1400px">

  {{-- ── ADMIN HERO ────────────────────────────────────────── --}}
  <div class="canva-card p-4 p-md-5 mb-4" style="background:linear-gradient(135deg,#0F172A,#1E293B,#334155);color:#fff;border:none;position:relative;overflow:hidden">
    <div style="position:absolute;top:-60px;right:-60px;width:240px;height:240px;background:radial-gradient(circle,rgba(239,68,68,.3),transparent 70%);border-radius:50%"></div>
    <div style="position:relative;z-index:1">
      <div class="d-flex align-items-center gap-2 mb-3">
        <span style="font-size:11px;font-weight:700;color:#FCA5A5;background:rgba(239,68,68,.2);padding:4px 12px;border-radius:99px;border:1px solid rgba(239,68,68,.3)">
          <i class="bi bi-shield-lock-fill me-1"></i>Level 1 — Administrator
        </span>
        <span style="font-size:12px;color:rgba(255,255,255,.6)">Datasoft SaaS Platform v2.4</span>
      </div>
      <h1 style="font-size:26px;font-weight:900;color:#fff;letter-spacing:-.5px;margin-bottom:6px">
        Admin Dashboard <span style="color:#FCA5A5">Platform Monitor</span>
      </h1>
      <p style="font-size:14px;color:rgba(255,255,255,.75);margin:0;max-width:520px">
        Monitor seluruh aktivitas platform SaaS, kelola pengguna terdaftar, template industri, dan pantau status website yang dipublikasikan.
      </p>
    </div>
  </div>

  {{-- ── STAT CARDS ────────────────────────────────────────── --}}
  <div class="row g-3 mb-4">
    @foreach($stats as $s)
    <div class="col-6 col-xl-3">
      <div class="canva-card p-4 d-flex align-items-center gap-3">
        <div style="width:48px;height:48px;border-radius:14px;background:{{ $s['bg'] }};color:{{ $s['color'] }};display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0">
          <i class="bi {{ $s['icon'] }}"></i>
        </div>
        <div>
          <div style="font-size:12px;color:var(--text-muted);font-weight:600;text-transform:uppercase;letter-spacing:.3px">{{ $s['label'] }}</div>
          <div style="font-size:26px;font-weight:900;color:var(--text-primary);letter-spacing:-1px;line-height:1" data-count="{{ $s['count'] }}">{{ $s['value'] }}</div>
        </div>
      </div>
    </div>
    @endforeach
  </div>

  {{-- ── CHARTS ROW ────────────────────────────────────────── --}}
  <div class="row g-3 mb-4">
    <div class="col-lg-8">
      <div class="canva-card p-4">
        <div class="d-flex align-items-center justify-content-between mb-3">
          <div>
            <h2 style="font-size:15px;font-weight:700;margin:0">Aktivitas Platform</h2>
            <div style="font-size:12px;color:var(--text-muted)">Project dibuat & website dipublish per bulan</div>
          </div>
          <span style="font-size:10px;font-weight:700;color:#EF4444;background:#FEE2E2;padding:3px 10px;border-radius:99px">Admin Analytics</span>
        </div>
        <div id="activityChart" style="min-height:240px"></div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="canva-card p-4 h-100">
        <div class="d-flex align-items-center justify-content-between mb-3">
          <h2 style="font-size:15px;font-weight:700;margin:0">Sebaran Kategori</h2>
          <span class="badge-category" style="font-size:10px">10 Sektor</span>
        </div>
        <div id="categoryChart" style="min-height:240px"></div>
      </div>
    </div>
  </div>

  {{-- ── USER MANAGEMENT TABLE ─────────────────────────────── --}}
  <div class="canva-card p-4">
    <div class="d-flex align-items-center justify-content-between mb-3">
      <div>
        <h2 class="section-heading-canva m-0">Manajemen Pengguna Terdaftar</h2>
        <div style="font-size:12px;color:var(--text-muted)">Data langsung dari database MySQL • <span style="color:var(--success);font-weight:600">{{ $recentUsers->count() }} pengguna aktif</span></div>
      </div>
      <button class="btn-primary-custom" style="font-size:12px;padding:6px 14px;background:linear-gradient(135deg,#EF4444,#DC2626);box-shadow:0 4px 12px rgba(239,68,68,.3)" onclick="showToast('Form tambah pengguna dibuka','default')">
        <i class="bi bi-person-plus-fill me-1"></i> Tambah Pengguna
      </button>
    </div>

    <div class="table-responsive">
      <table class="table-premium">
        <thead>
          <tr>
            <th>ID</th>
            <th>Pengguna</th>
            <th>Email</th>
            <th>Level Akses</th>
            <th>Status</th>
            <th>Terdaftar</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          @foreach($recentUsers as $u)
          <tr>
            <td>
              <span style="font-size:12px;font-weight:700;color:var(--text-muted)">#{{ $u->id }}</span>
            </td>
            <td>
              <div class="d-flex align-items-center gap-2">
                <div style="width:34px;height:34px;border-radius:50%;background:{{ $u->isAdmin() ? 'linear-gradient(135deg,#EF4444,#DC2626)' : 'linear-gradient(135deg,#10B981,#059669)' }};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:12px;flex-shrink:0">
                  {{ strtoupper(substr($u->name,0,2)) }}
                </div>
                <div>
                  <div style="font-weight:700;font-size:13px">{{ $u->name }}</div>
                </div>
              </div>
            </td>
            <td><span style="font-size:13px;color:var(--text-secondary)">{{ $u->email }}</span></td>
            <td>
              @if($u->isAdmin())
                <span style="display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:700;color:#EF4444;background:#FEE2E2;padding:4px 10px;border-radius:99px">
                  <i class="bi bi-shield-lock-fill"></i> Administrator
                </span>
              @else
                <span style="display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:700;color:#059669;background:#D1FAE5;padding:4px 10px;border-radius:99px">
                  <i class="bi bi-person-fill"></i> User
                </span>
              @endif
            </td>
            <td>
              <span class="badge-status published" style="font-size:10px"><span class="dot"></span>Aktif</span>
            </td>
            <td>
              <span style="font-size:12px;color:var(--text-muted)">
                {{ $u->created_at ? $u->created_at->format('d M Y, H:i') : '-' }}
              </span>
            </td>
            <td>
              <div class="d-flex gap-1">
                <button class="btn-ghost p-1 px-2" style="font-size:12px" title="Edit" onclick="showToast('Edit pengguna #{{ $u->id }}','default')">
                  <i class="bi bi-pencil"></i>
                </button>
                @if($u->id !== auth()->id())
                <button class="btn-ghost p-1 px-2 text-danger" style="font-size:12px" title="Hapus" onclick="showToast('Hapus pengguna #{{ $u->id }}','danger')">
                  <i class="bi bi-trash"></i>
                </button>
                @endif
              </div>
            </td>
          </tr>
          @endforeach
        </tbody>
      </table>
    </div>

    {{-- Level Legend --}}
    <div class="d-flex gap-3 mt-3 pt-3" style="border-top:1px solid var(--border)">
      <div style="font-size:12px;color:var(--text-muted);font-weight:500">Keterangan Level Akses:</div>
      <span style="font-size:11px;font-weight:700;color:#EF4444;background:#FEE2E2;padding:3px 10px;border-radius:99px"><i class="bi bi-shield-lock-fill me-1"></i>Level 1 — Administrator (Akses Penuh Admin Panel)</span>
      <span style="font-size:11px;font-weight:700;color:#059669;background:#D1FAE5;padding:3px 10px;border-radius:99px"><i class="bi bi-person-fill me-1"></i>Level 2 — User (Akses Workspace Builder)</span>
    </div>
  </div>

</div>
@endsection
