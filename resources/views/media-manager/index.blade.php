@extends('layouts.app')

@section('title', 'Media Merek')
@section('page_title', 'Media Merek')
@section('meta_description', 'Kelola semua aset merek perusahaan Anda — Logo, Palet Warna, Font, Foto, dan Dokumen.')

@section('content')
@php
$brandLogos = [
  ['name'=>'Logo Utama (Full Color).png','size'=>'245 KB','date'=>'1 Jan 2026','type'=>'png','bg'=>'#2563EB','badge'=>'Utama'],
  ['name'=>'Logo Monochrome White.svg','size'=>'12 KB','date'=>'3 Jan 2026','type'=>'svg','bg'=>'#0F172A','badge'=>'Dark Mode'],
  ['name'=>'Favicon Website 32x32.ico','size'=>'8 KB','date'=>'5 Jan 2026','type'=>'ico','bg'=>'#7D2AE8','badge'=>'Favicon'],
  ['name'=>'Icon App Koperasi.svg','size'=>'16 KB','date'=>'10 Jan 2026','type'=>'svg','bg'=>'#10B981','badge'=>'Icon'],
];

$brandColors = [
  ['name'=>'Primary Royal Blue','hex'=>'#2563EB','rgb'=>'rgb(37, 99, 235)','used'=>'Navbar, Main Buttons'],
  ['name'=>'Secondary Dark Navy','hex'=>'#0F172A','rgb'=>'rgb(15, 23, 42)','used'=>'Footer, Dark Cards'],
  ['name'=>'Accent Emerald','hex'=>'#10B981','rgb'=>'rgb(16, 185, 129)','used'=>'Badges, Success Indicators'],
  ['name'=>'Warning Amber','hex'=>'#F59E0B','rgb'=>'rgb(245, 158, 11)','used'=>'Stars, Alerts'],
  ['name'=>'Canva Purple','hex'=>'#7D2AE8','rgb'=>'rgb(125, 42, 232)','used'=>'Gradient Accents'],
];

$brandPhotos = [
  ['name'=>'hero-banner-koperasi.jpg','size'=>'1.2 MB','date'=>'12 Jan 2026','ratio'=>'16:9','img'=>'🏢'],
  ['name'=>'about-tim-manajemen.jpg','size'=>'876 KB','date'=>'15 Jan 2026','ratio'=>'4:3','img'=>'👥'],
  ['name'=>'layanan-kredit-umkm.jpg','size'=>'654 KB','date'=>'18 Jan 2026','ratio'=>'1:1','img'=>'💼'],
  ['name'=>'foto-kegiatan-anggota.jpg','size'=>'1.1 MB','date'=>'22 Jan 2026','ratio'=>'16:9','img'=>'📸'],
  ['name'=>'kantor-cabang-pusat.jpg','size'=>'940 KB','date'=>'25 Jan 2026','ratio'=>'4:3','img'=>'🏛️'],
  ['name'=>'serah-terima-bantuan.jpg','size'=>'780 KB','date'=>'28 Jan 2026','ratio'=>'1:1','img'=>'🤝'],
];

$brandDocs = [
  ['name'=>'Company-Profile-2026.pdf','size'=>'2.4 MB','date'=>'1 Feb 2026','pages'=>'12 Hal','icon'=>'bi-file-earmark-pdf-fill','color'=>'#EF4444'],
  ['name'=>'Laporan-Keuangan-Tahunan.pdf','size'=>'5.2 MB','date'=>'2 Feb 2026','pages'=>'24 Hal','icon'=>'bi-file-earmark-bar-graph-fill','color'=>'#10B981'],
  ['name'=>'Panduan-Merek-Brand-Kit.pdf','size'=>'1.8 MB','date'=>'3 Feb 2026','pages'=>'8 Hal','icon'=>'bi-file-earmark-richtext-fill','color'=>'#7D2AE8'],
];
@endphp

<div class="container-fluid p-4" style="max-width:1400px">

  {{-- ── CANVA BRAND KIT HERO ──────────────────────────────── --}}
  <div class="canva-card p-4 p-md-5 mb-4" style="background: linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4338CA 100%); color:#fff; border:none; position:relative; overflow:hidden">
    <div style="position:absolute;top:-60px;right:-60px;width:260px;height:260px;background:radial-gradient(circle,rgba(125,42,232,.3),transparent 70%);border-radius:50%"></div>
    <div style="position:relative;z-index:1">
      <div class="row align-items-center">
        <div class="col-md-8">
          <div class="d-flex align-items-center gap-2 mb-2">
            <span class="badge-status live" style="background:rgba(255,255,255,.2);color:#fff"><span class="dot" style="background:#10B981"></span> Canva Brand Hub</span>
            <span style="font-size:12px;color:rgba(255,255,255,.8)">Datasoft Media Merek</span>
          </div>
          <h1 style="font-size:28px;font-weight:900;letter-spacing:-.5px;margin-bottom:8px;color:#fff">
            Media Merek & Brand Kit
          </h1>
          <p style="font-size:14px;color:rgba(255,255,255,.85);margin-bottom:20px;max-width:540px">
            Simpan dan kelola seluruh aset resmi perusahaan Anda — Logo, Palet Warna Brand, Tipografi, Foto, dan Dokumen Pendukung.
          </p>

          {{-- Storage Bar --}}
          <div style="background:rgba(255,255,255,.12);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.25);border-radius:14px;padding:12px 18px;max-width:440px">
            <div class="d-flex align-items-center justify-content-between mb-2" style="font-size:12px;color:rgba(255,255,255,.9)">
              <span><i class="bi bi-hdd-network me-1"></i> Penyimpanan Media Merek</span>
              <span style="font-weight:700">2.3 GB / 10 GB (23%)</span>
            </div>
            <div style="height:6px;background:rgba(255,255,255,.2);border-radius:99px;overflow:hidden">
              <div style="width:23%;height:100%;background:linear-gradient(90deg,#10B981,#34D399);border-radius:99px"></div>
            </div>
          </div>
        </div>

        <div class="col-md-4 d-none d-md-flex flex-column align-items-end gap-2 mt-3 mt-md-0">
          <button class="btn-primary-custom" style="background:#fff;color:#312E81;box-shadow:0 6px 20px rgba(0,0,0,.2);width:220px;justify-content:center" onclick="document.getElementById('brand-upload-input').click()">
            <i class="bi bi-cloud-upload"></i> Unggah Aset Merek
          </button>
          <button class="btn-secondary-custom" style="background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3);width:220px;justify-content:center" onclick="showToast('Panduan Merek PDF berhasil didownload','success')">
            <i class="bi bi-download"></i> Unduh Brand Guidelines
          </button>
        </div>
      </div>
    </div>
  </div>

  {{-- Hidden Input for Upload --}}
  <input type="file" id="brand-upload-input" multiple style="display:none" onchange="showToast(`${this.files.length} file merek berhasil diunggah!`,`success`)">

  {{-- ── UPLOAD ZONE ────────────────────────────────────────── --}}
  <div class="canva-card p-4 mb-4 text-center upload-zone" style="border: 2px dashed var(--primary); background: var(--primary-light); cursor:pointer">
    <div style="width:54px;height:54px;border-radius:50%;background:#fff;color:var(--primary);display:flex;align-items:center;justify-content:center;margin:0 auto 12px;font-size:24px;box-shadow:0 4px 12px rgba(125,42,232,.15)">
      <i class="bi bi-cloud-arrow-up"></i>
    </div>
    <h3 style="font-size:16px;font-weight:800;color:var(--text-primary);margin-bottom:4px">Tarik & Lepas File Aset Merek Di Sini</h3>
    <p style="font-size:13px;color:var(--text-secondary);margin-bottom:12px">Mendukung format Logo (PNG, SVG), Foto (JPG, WEBP), Palet Warna, dan Dokumen (PDF)</p>
    <div class="d-flex gap-2 justify-content-center flex-wrap">
      <span class="badge-status live" style="font-size:11px">Maksimal 25MB / file</span>
      <span class="badge-category" style="font-size:11px">Otomatis Kompresi HD</span>
    </div>
  </div>

  {{-- ── SECTION 1: LOGO MEREK ──────────────────────────────── --}}
  <div class="mb-5">
    <div class="d-flex align-items-center justify-content-between mb-3">
      <div>
        <h2 class="section-heading-canva m-0"><i class="bi bi-award me-2" style="color:var(--primary)"></i>Logo Merek Perusahaan</h2>
        <div style="font-size:12px;color:var(--text-muted)">Varian logo resmi dalam latar belakang terang & gelap</div>
      </div>
      <button class="btn-secondary-custom" style="font-size:12px;padding:6px 14px" onclick="document.getElementById('brand-upload-input').click()">
        <i class="bi bi-plus-lg me-1"></i> Tambah Logo
      </button>
    </div>

    <div class="row g-3">
      @foreach($brandLogos as $logo)
      <div class="col-sm-6 col-lg-3">
        <div class="canva-card h-100">
          <div class="canva-card-thumb" style="background:{{ $logo['bg'] }};height:140px">
            <div class="text-center text-white p-3">
              <i class="bi bi-stack display-4"></i>
              <div style="font-size:11px;font-weight:700;margin-top:6px;opacity:.9">LOGO MEREK</div>
            </div>
            <div class="canva-card-overlay">
              <button class="btn-primary-custom" style="font-size:11px;padding:5px 12px" onclick="navigator.clipboard.writeText('{{ $logo['name'] }}');showToast('URL Logo disalin!','success')">
                <i class="bi bi-link-45deg"></i> Salin URL
              </button>
              <button class="btn-secondary-custom" style="font-size:11px;padding:5px 12px;background:#fff" onclick="showToast('Mengunduh {{ $logo['name'] }}','success')">
                <i class="bi bi-download"></i> Unduh
              </button>
            </div>
          </div>
          <div class="canva-card-body">
            <div class="d-flex align-items-center justify-content-between mb-1">
              <div class="canva-card-title m-0" style="font-size:13px">{{ $logo['name'] }}</div>
              <span class="badge-category" style="font-size:9px">{{ $logo['badge'] }}</span>
            </div>
            <div class="canva-card-sub" style="font-size:11px">
              <span>{{ $logo['size'] }}</span>
              <span>{{ $logo['date'] }}</span>
            </div>
          </div>
        </div>
      </div>
      @endforeach
    </div>
  </div>

  {{-- ── SECTION 2: PALET WARNA BRAND ───────────────────────── --}}
  <div class="mb-5">
    <div class="d-flex align-items-center justify-content-between mb-3">
      <div>
        <h2 class="section-heading-canva m-0"><i class="bi bi-palette me-2" style="color:var(--primary)"></i>Palet Warna Brand (Color Swatches)</h2>
        <div style="font-size:12px;color:var(--text-muted)">Warna standar resmi yang digunakan dalam tema website</div>
      </div>
      <button class="btn-secondary-custom" style="font-size:12px;padding:6px 14px" onclick="showToast('Pilih warna baru','default')">
        <i class="bi bi-plus-lg me-1"></i> Tambah Warna
      </button>
    </div>

    <div class="row g-3">
      @foreach($brandColors as $color)
      <div class="col-6 col-sm-4 col-lg-2-4" style="flex:0 0 auto;width:20%">
        <div class="canva-card p-3 h-100 text-center">
          <div style="height:70px;background:{{ $color['hex'] }};border-radius:12px;margin-bottom:10px;box-shadow:0 4px 12px rgba(0,0,0,.1);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:13px">
            {{ $color['hex'] }}
          </div>
          <div style="font-size:13px;font-weight:700;color:var(--text-primary);margin-bottom:2px">{{ $color['name'] }}</div>
          <div style="font-size:11px;color:var(--text-muted);margin-bottom:8px">{{ $color['used'] }}</div>
          <button class="btn-secondary-custom w-100 justify-content-center" style="font-size:11px;padding:4px 8px" onclick="navigator.clipboard.writeText('{{ $color['hex'] }}');showToast('Kode hex {{ $color['hex'] }} disalin!','success')">
            <i class="bi bi-copy me-1"></i> Salin Hex
          </button>
        </div>
      </div>
      @endforeach
    </div>
  </div>

  {{-- ── SECTION 3: FOTO & MEDIA ────────────────────────────── --}}
  <div class="mb-5">
    <div class="d-flex align-items-center justify-content-between mb-3">
      <div>
        <h2 class="section-heading-canva m-0"><i class="bi bi-images me-2" style="color:var(--primary)"></i>Galeri Foto & Gambar Merek</h2>
        <div style="font-size:12px;color:var(--text-muted)">Aset fotografi resolusi tinggi untuk Hero, Galeri, dan Banner</div>
      </div>
      <button class="btn-secondary-custom" style="font-size:12px;padding:6px 14px" onclick="document.getElementById('brand-upload-input').click()">
        <i class="bi bi-cloud-upload me-1"></i> Upload Foto
      </button>
    </div>

    <div class="row g-3">
      @foreach($brandPhotos as $photo)
      <div class="col-6 col-sm-4 col-lg-2">
        <div class="canva-card h-100">
          <div class="canva-card-thumb" style="background:var(--surface-2);height:120px">
            <div style="font-size:42px">{{ $photo['img'] }}</div>
            <div class="canva-card-overlay">
              <button class="btn-primary-custom" style="font-size:10px;padding:4px 8px" onclick="showToast('Foto dipilih untuk builder','success')">Pilih</button>
              <button class="btn-secondary-custom btn-delete-asset" style="font-size:10px;padding:4px 8px;background:#fff"><i class="bi bi-trash"></i></button>
            </div>
          </div>
          <div class="canva-card-body p-2 px-3">
            <div class="canva-card-title text-truncate" style="font-size:12px;margin:0">{{ $photo['name'] }}</div>
            <div class="canva-card-sub" style="font-size:10px">
              <span>{{ $photo['size'] }}</span>
              <span>{{ $photo['ratio'] }}</span>
            </div>
          </div>
        </div>
      </div>
      @endforeach
    </div>
  </div>

  {{-- ── SECTION 4: DOKUMEN & PDF ────────────────────────────── --}}
  <div class="mb-4">
    <div class="d-flex align-items-center justify-content-between mb-3">
      <div>
        <h2 class="section-heading-canva m-0"><i class="bi bi-file-earmark-text me-2" style="color:var(--primary)"></i>Dokumen Merek & PDF Resmi</h2>
        <div style="font-size:12px;color:var(--text-muted)">Berkas profil perusahaan, laporan tahunan, dan legalitas</div>
      </div>
      <button class="btn-secondary-custom" style="font-size:12px;padding:6px 14px" onclick="document.getElementById('brand-upload-input').click()">
        <i class="bi bi-plus-lg me-1"></i> Tambah Dokumen
      </button>
    </div>

    <div class="row g-3">
      @foreach($brandDocs as $doc)
      <div class="col-md-4">
        <div class="canva-card p-3 d-flex align-items-center gap-3">
          <div style="width:48px;height:48px;border-radius:12px;background:{{ $doc['color'] }}18;color:{{ $doc['color'] }};display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0">
            <i class="bi {{ $doc['icon'] }}"></i>
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:700;color:var(--text-primary)" class="text-truncate">{{ $doc['name'] }}</div>
            <div style="font-size:11px;color:var(--text-muted)">{{ $doc['size'] }} · {{ $doc['pages'] }} · {{ $doc['date'] }}</div>
          </div>
          <div class="d-flex gap-1">
            <button class="btn-ghost p-1" style="font-size:14px" title="Unduh" onclick="showToast('Mengunduh dokumen...','success')"><i class="bi bi-download"></i></button>
            <button class="btn-ghost p-1 text-danger btn-delete-asset" style="font-size:14px" title="Hapus"><i class="bi bi-trash"></i></button>
          </div>
        </div>
      </div>
      @endforeach
    </div>
  </div>

</div>
@endsection
