@extends('layouts.app')

@section('title', 'Project Builder')
@section('page_title', 'Project Builder')
@section('meta_description', 'Kustomisasi website company profile Anda dengan mudah menggunakan Project Builder.')
@section('page_class', 'p-0')

@section('head')
<style>
  .page-body { padding: 0 !important; }
</style>
@endsection

@section('content')
@php
$navItems = [
  ['icon'=>'bi-info-circle','label'=>'Informasi Website','active'=>true],
  ['icon'=>'bi-image','label'=>'Brand Identity','active'=>false],
  ['icon'=>'bi-list-ul','label'=>'Kelola Menu','active'=>false],
  ['icon'=>'bi-grid-3x3-gap','label'=>'Kelola Modul','active'=>false],
  ['icon'=>'bi-phone','label'=>'Preview Responsif','active'=>false],
  ['icon'=>'bi-gear','label'=>'Pengaturan SEO','active'=>false],
];

$menus = [
  ['name'=>'Beranda','active'=>true,'icon'=>'bi-house'],
  ['name'=>'Tentang Kami','active'=>true,'icon'=>'bi-building'],
  ['name'=>'Produk & Layanan','active'=>true,'icon'=>'bi-box-seam'],
  ['name'=>'Galeri','active'=>false,'icon'=>'bi-images'],
  ['name'=>'Berita','active'=>false,'icon'=>'bi-newspaper'],
  ['name'=>'Kontak','active'=>true,'icon'=>'bi-telephone'],
  ['name'=>'Karir','active'=>false,'icon'=>'bi-briefcase'],
  ['name'=>'FAQ','active'=>false,'icon'=>'bi-question-circle'],
];

$modules = [
  ['name'=>'Dashboard Anggota','icon'=>'bi-speedometer2','checked'=>true,'desc'=>'Portal login untuk anggota/pelanggan'],
  ['name'=>'Master Data','icon'=>'bi-database','checked'=>true,'desc'=>'Pengelolaan data induk organisasi'],
  ['name'=>'Keuangan','icon'=>'bi-cash-stack','checked'=>false,'desc'=>'Laporan dan pengelolaan keuangan'],
  ['name'=>'Laporan','icon'=>'bi-bar-chart','checked'=>true,'desc'=>'Generate laporan otomatis'],
  ['name'=>'Audit Log','icon'=>'bi-shield-check','checked'=>false,'desc'=>'Catatan aktivitas sistem'],
  ['name'=>'Pengaturan Sistem','icon'=>'bi-gear','checked'=>true,'desc'=>'Konfigurasi sistem website'],
];
@endphp

<div class="builder-layout">

  {{-- ── Left Nav ────────────────────────────────────────── --}}
  <div class="builder-sidebar-left">
    <div class="builder-panel-header">
      <div>
        <div style="font-size:13px;font-weight:600;color:var(--text-primary)">Project Builder</div>
        <div style="font-size:11px;color:var(--text-muted)">Koperasi Maju Bersama</div>
      </div>
      <span class="badge-status draft"><span class="dot"></span>Draft</span>
    </div>
    <div style="padding:10px">
      @foreach($navItems as $n)
      <button class="builder-section-btn {{ $n['active'] ? 'active' : '' }}" data-section="{{ Str::slug($n['label']) }}">
        <i class="bi {{ $n['icon'] }}"></i>
        {{ $n['label'] }}
      </button>
      @endforeach
    </div>

    <div style="margin-top:auto;padding:12px;border-top:1px solid var(--border)">
      <div style="font-size:11px;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Template Aktif</div>
      <div style="display:flex;align-items:center;gap:8px;background:var(--surface-2);border-radius:10px;padding:10px">
        <div style="width:32px;height:32px;background:var(--primary);border-radius:8px;display:flex;align-items:center;justify-content:center">
          <i class="bi bi-layout-text-window" style="color:#fff;font-size:15px"></i>
        </div>
        <div>
          <div style="font-size:12px;font-weight:600;color:var(--text-primary)">KoperasiPro Elite</div>
          <div style="font-size:10px;color:var(--text-muted)">Koperasi • v2.1</div>
        </div>
      </div>
      <button class="btn-ghost w-100 mt-2" style="font-size:12px;justify-content:center">
        <i class="bi bi-arrow-repeat"></i> Ganti Template
      </button>
    </div>
  </div>

  {{-- ── Center Preview ──────────────────────────────────── --}}
  <div class="builder-center">

    {{-- Toolbar --}}
    <div style="width:100%;max-width:860px;display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <div style="display:flex;gap:6px">
        <button class="btn-ghost" style="font-size:12px;padding:6px 12px" title="Desktop"><i class="bi bi-display"></i></button>
        <button class="btn-ghost" style="font-size:12px;padding:6px 12px" title="Tablet"><i class="bi bi-tablet"></i></button>
        <button class="btn-ghost" style="font-size:12px;padding:6px 12px" title="Mobile"><i class="bi bi-phone"></i></button>
      </div>
      <div style="font-size:12px;font-weight:500;color:var(--text-secondary);background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:5px 12px">
        koperasimaju.companybuilder.id
      </div>
      <div style="display:flex;gap:6px">
        <button class="btn-ghost" style="font-size:12px;padding:6px 12px"><i class="bi bi-arrow-counterclockwise"></i></button>
        <button class="btn-ghost" style="font-size:12px;padding:6px 12px"><i class="bi bi-arrow-clockwise"></i></button>
        <button class="btn-ghost" style="font-size:12px;padding:6px 12px"><i class="bi bi-fullscreen"></i></button>
      </div>
    </div>

    {{-- Preview Frame --}}
    <div class="preview-frame-wrap">
      <div class="preview-frame-bar">
        <div class="preview-frame-dots">
          <div class="preview-dot red"></div>
          <div class="preview-dot yellow"></div>
          <div class="preview-dot green"></div>
        </div>
        <div class="preview-url">https://koperasimaju.companybuilder.id</div>
        <button class="btn-ghost" style="font-size:12px;padding:4px 10px;margin-left:auto">
          <i class="bi bi-arrow-clockwise"></i>
        </button>
      </div>
      {{-- Mockup Content --}}
      <div style="background:#fff;min-height:520px">
        {{-- Mockup Navbar --}}
        <div style="background:#2563EB;padding:0 28px;height:52px;display:flex;align-items:center;justify-content:space-between">
          <div style="display:flex;align-items:center;gap:10px">
            <div style="width:28px;height:28px;background:rgba(255,255,255,.2);border-radius:7px"></div>
            <span style="color:#fff;font-size:13px;font-weight:700">Koperasi Maju Bersama</span>
          </div>
          <div style="display:flex;gap:16px">
            @foreach(['Beranda','Tentang','Layanan','Kontak'] as $m)
            <span style="color:rgba(255,255,255,.8);font-size:12px">{{ $m }}</span>
            @endforeach
          </div>
        </div>
        {{-- Hero --}}
        <div style="background:linear-gradient(135deg,#1E3A8A,#2563EB);padding:40px 28px;text-align:center">
          <div style="background:rgba(255,255,255,.15);border-radius:99px;display:inline-block;padding:4px 14px;font-size:10px;color:#fff;margin-bottom:12px">🏆 Koperasi Terpercaya Sejak 2010</div>
          <h2 style="color:#fff;font-size:22px;font-weight:800;margin-bottom:8px">Bersama Kita Lebih Kuat</h2>
          <p style="color:rgba(255,255,255,.7);font-size:12px;margin-bottom:16px">Melayani lebih dari 5.000 anggota aktif di seluruh Indonesia</p>
          <button style="background:#fff;color:#2563EB;border:none;border-radius:8px;padding:8px 20px;font-size:12px;font-weight:700">Bergabung Sekarang</button>
        </div>
        {{-- Stats --}}
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0;border-bottom:1px solid #F1F5F9">
          @foreach(['5.000+ Anggota','Rp 2M+ Aset','98% Kepuasan','15 Cabang'] as $s)
          <div style="padding:16px;text-align:center;border-right:1px solid #F1F5F9">
            <div style="font-size:15px;font-weight:800;color:#2563EB">{{ $s }}</div>
          </div>
          @endforeach
        </div>
        {{-- Services --}}
        <div style="padding:24px 28px">
          <div style="font-size:14px;font-weight:700;color:#0F172A;text-align:center;margin-bottom:16px">Layanan Kami</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px">
            @foreach(['Simpan Pinjam','Kredit UMKM','Asuransi Anggota'] as $sv)
            <div style="background:#F8FAFC;border-radius:10px;padding:14px;text-align:center">
              <div style="width:36px;height:36px;background:#DBEAFE;border-radius:10px;display:flex;align-items:center;justify-content:center;margin:0 auto 8px">
                <i class="bi bi-check2-circle" style="color:#2563EB;font-size:16px"></i>
              </div>
              <div style="font-size:12px;font-weight:600;color:#0F172A">{{ $sv }}</div>
            </div>
            @endforeach
          </div>
        </div>
      </div>
    </div>

  </div>

  {{-- ── Right Panel ──────────────────────────────────────── --}}
  <div class="builder-panel-right">
    <div class="builder-panel-header">
      <span>Pengaturan Project</span>
      <button class="btn-ghost" style="padding:4px 8px;font-size:12px">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>

    <div class="builder-panel-body">

      {{-- Website Info --}}
      <div class="mb-4" id="section-informasi-website">
        <div style="font-size:12px;font-weight:700;color:var(--text-primary);text-transform:uppercase;letter-spacing:.5px;margin-bottom:12px;display:flex;align-items:center;gap:6px">
          <i class="bi bi-info-circle" style="color:var(--primary)"></i> Informasi Website
        </div>

        <div class="form-group-premium">
          <label class="form-label-premium">Nama Website</label>
          <input type="text" class="form-input-premium" value="Koperasi Maju Bersama" placeholder="Nama Website">
        </div>

        <div class="form-group-premium">
          <label class="form-label-premium">Nama Perusahaan</label>
          <input type="text" class="form-input-premium" value="KSP Maju Bersama" placeholder="Nama Perusahaan">
        </div>

        <div class="form-group-premium">
          <label class="form-label-premium">Email</label>
          <input type="email" class="form-input-premium" value="info@koperasimaju.co.id" placeholder="Email">
        </div>

        <div class="form-group-premium">
          <label class="form-label-premium">No. Kontak</label>
          <input type="text" class="form-input-premium" value="+62 812-3456-7890" placeholder="Nomor Kontak">
        </div>

        <div class="form-group-premium">
          <label class="form-label-premium">Deskripsi Perusahaan</label>
          <textarea class="form-textarea-premium" placeholder="Deskripsi singkat perusahaan...">Koperasi Simpan Pinjam Maju Bersama berdiri sejak 2010 dan telah melayani lebih dari 5.000 anggota aktif di seluruh Indonesia.</textarea>
        </div>
      </div>

      <hr class="divider-premium">

      {{-- Brand Identity --}}
      <div class="mb-4" id="section-brand-identity">
        <div style="font-size:12px;font-weight:700;color:var(--text-primary);text-transform:uppercase;letter-spacing:.5px;margin-bottom:12px;display:flex;align-items:center;gap:6px">
          <i class="bi bi-image" style="color:var(--primary)"></i> Brand Identity
        </div>

        <div class="form-group-premium">
          <label class="form-label-premium">Logo Perusahaan</label>
          <div style="border:2px dashed var(--border);border-radius:var(--radius-xs);padding:20px;text-align:center;background:var(--surface-2);cursor:pointer;transition:var(--transition)" onclick="showToast('Pilih file logo','default')">
            <i class="bi bi-cloud-upload" style="font-size:24px;color:var(--text-muted);display:block;margin-bottom:6px"></i>
            <div style="font-size:12px;color:var(--text-secondary)">Upload Logo (PNG/SVG)</div>
            <div style="font-size:11px;color:var(--text-muted);margin-top:2px">Maks. 2MB</div>
          </div>
        </div>

        <div class="form-group-premium">
          <label class="form-label-premium">Favicon</label>
          <div style="border:2px dashed var(--border);border-radius:var(--radius-xs);padding:16px;text-align:center;background:var(--surface-2);cursor:pointer;transition:var(--transition)" onclick="showToast('Pilih file favicon','default')">
            <i class="bi bi-image" style="font-size:20px;color:var(--text-muted);display:block;margin-bottom:4px"></i>
            <div style="font-size:12px;color:var(--text-secondary)">Upload Favicon (ICO/PNG 32×32)</div>
          </div>
        </div>
      </div>

      <hr class="divider-premium">

      {{-- Menu Management --}}
      <div class="mb-4" id="section-kelola-menu">
        <div style="font-size:12px;font-weight:700;color:var(--text-primary);text-transform:uppercase;letter-spacing:.5px;margin-bottom:12px;display:flex;align-items:center;gap:6px">
          <i class="bi bi-list-ul" style="color:var(--primary)"></i> Kelola Menu
        </div>
        @foreach($menus as $menu)
        <div style="display:flex;align-items:center;gap:10px;padding:9px 12px;border:1px solid var(--border);border-radius:var(--radius-xs);margin-bottom:6px;background:var(--surface);transition:var(--transition)">
          <i class="bi {{ $menu['icon'] }}" style="font-size:14px;color:var(--text-muted);width:16px;flex-shrink:0"></i>
          <span style="flex:1;font-size:13px;font-weight:500;color:var(--text-primary)">{{ $menu['name'] }}</span>
          <label class="toggle-switch">
            <input type="checkbox" {{ $menu['active'] ? 'checked' : '' }}>
            <span class="toggle-slider"></span>
          </label>
        </div>
        @endforeach
      </div>

      <hr class="divider-premium">

      {{-- Module Management --}}
      <div class="mb-4" id="section-kelola-modul">
        <div style="font-size:12px;font-weight:700;color:var(--text-primary);text-transform:uppercase;letter-spacing:.5px;margin-bottom:12px;display:flex;align-items:center;gap:6px">
          <i class="bi bi-grid-3x3-gap" style="color:var(--primary)"></i> Kelola Modul
        </div>
        @foreach($modules as $mod)
        <div class="module-check-item {{ $mod['checked'] ? 'checked' : '' }}">
          <div class="module-check-label">
            <i class="bi {{ $mod['icon'] }}" style="color:var(--primary);font-size:15px"></i>
            <div>
              <div style="font-size:13px">{{ $mod['name'] }}</div>
              <div style="font-size:11px;color:var(--text-muted)">{{ $mod['desc'] }}</div>
            </div>
          </div>
          <input type="checkbox" {{ $mod['checked'] ? 'checked' : '' }} style="display:none">
          <div style="width:18px;height:18px;border-radius:5px;border:2px solid {{ $mod['checked'] ? 'var(--primary)' : 'var(--border)' }};background:{{ $mod['checked'] ? 'var(--primary)' : 'transparent' }};display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:var(--transition)">
            @if($mod['checked'])
            <i class="bi bi-check" style="color:#fff;font-size:12px"></i>
            @endif
          </div>
        </div>
        @endforeach
      </div>

    </div>{{-- end panel body --}}
  </div>{{-- end right panel --}}

</div>{{-- end builder-layout --}}

{{-- FAB Buttons --}}
<div class="fab-group">
  <button class="fab-btn secondary" id="btn-save-draft">
    <i class="bi bi-floppy"></i> Simpan Draft
  </button>
  <button class="fab-btn primary" onclick="window.open('','_blank')">
    <i class="bi bi-eye"></i> Preview
  </button>
  <button class="fab-btn success" id="btn-publish">
    <i class="bi bi-rocket-takeoff"></i> Publish
  </button>
</div>

@endsection
