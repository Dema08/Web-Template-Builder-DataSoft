@extends('layouts.app')

@section('title', 'Beranda Canva Workspace')
@section('page_title', 'Beranda')
@section('meta_description', 'Workspace Canva Website Template Builder Datasoft.')

@section('content')
@php
$explorePresets = [
  ['title'=>'Koperasi Simpan Pinjam','cat'=>'koperasi','bg'=>'preset-orange','icon'=>'bi-bank'],
  ['title'=>'Logistik & Transportasi','cat'=>'logistik','bg'=>'preset-purple','icon'=>'bi-truck'],
  ['title'=>'Pendidikan & Training','cat'=>'pendidikan','bg'=>'preset-cyan','icon'=>'bi-mortarboard'],
  ['title'=>'Holding Company','cat'=>'holding','bg'=>'preset-green','icon'=>'bi-buildings'],
  ['title'=>'Perusahaan Jasa','cat'=>'jasa','bg'=>'preset-blue','icon'=>'bi-briefcase'],
  ['title'=>'UMKM & Retail','cat'=>'umkm','bg'=>'preset-pink','icon'=>'bi-shop'],
  ['title'=>'Manufaktur Industri','cat'=>'manufaktur','bg'=>'preset-yellow','icon'=>'bi-gear-wide-connected'],
  ['title'=>'Koperasi Susu Segar','cat'=>'koperasi-susu','bg'=>'preset-purple','icon'=>'bi-cup-hot'],
];

$recentProjects = [
  ['name'=>'Koperasi Maju Bersama','cat'=>'Koperasi','updated'=>'2 jam lalu','status'=>'published','bgGradient'=>'linear-gradient(135deg, #7D2AE8, #2563EB)','img'=>'🏦'],
  ['name'=>'PT Logistik Nusantara','cat'=>'Logistik','updated'=>'1 hari lalu','status'=>'draft','bgGradient'=>'linear-gradient(135deg, #10B981, #059669)','img'=>'🚚'],
  ['name'=>'Yayasan Pendidikan Bakti','cat'=>'Pendidikan','updated'=>'3 hari lalu','status'=>'published','bgGradient'=>'linear-gradient(135deg, #F59E0B, #D97706)','img'=>'🎓'],
  ['name'=>'UMKM Kerajinan Batik','cat'=>'UMKM','updated'=>'5 hari lalu','status'=>'draft','bgGradient'=>'linear-gradient(135deg, #EC4899, #DB2777)','img'=>'🎨'],
];

$popularTemplates = [
  ['name'=>'KoperasiPro Elite','cat'=>'Koperasi','rating'=>'4.9','used'=>'234','bg'=>'preset-orange'],
  ['name'=>'LogisTech Premium','cat'=>'Logistik','rating'=>'4.8','used'=>'189','bg'=>'preset-blue'],
  ['name'=>'EduSmart Academy','cat'=>'Pendidikan','rating'=>'4.7','used'=>'156','bg'=>'preset-green'],
  ['name'=>'ServiceHub Pro','cat'=>'Jasa','rating'=>'4.8','used'=>'143','bg'=>'preset-purple'],
];
@endphp

{{-- ── CANVA HERO BANNER ───────────────────────────────────── --}}
<div class="canva-hero">
  <div class="container-fluid" style="max-width:960px">
    
    <h1 class="canva-hero-title">Mau buat website bisnis apa hari ini?</h1>

    {{-- Tabs --}}
    <div class="canva-tabs">
      <button class="canva-tab-btn active">
        <i class="bi bi-house-door"></i> Beranda
      </button>
      <a href="{{ url('/marketplace') }}" class="canva-tab-btn" style="text-decoration:none">
        <i class="bi bi-layout-text-window"></i> Template
      </a>
    </div>

    {{-- Big Central Search Bar --}}
    <div class="canva-search-bar">
      <i class="bi bi-search"></i>
      <input type="text" id="canva-main-search" placeholder="Cari dari ribuan template website company profile...">
    </div>

    {{-- Quick Categories Pills --}}
    <div class="canva-quick-categories">
      <a href="{{ url('/marketplace') }}" class="canva-cat-pill">
        <i class="bi bi-briefcase" style="color:#7D2AE8"></i> Bisnis
      </a>
      <a href="{{ url('/marketplace') }}" class="canva-cat-pill">
        <i class="bi bi-truck" style="color:#10B981"></i> Logistik
      </a>
      <a href="{{ url('/marketplace') }}" class="canva-cat-pill">
        <i class="bi bi-mortarboard" style="color:#F59E0B"></i> Pendidikan
      </a>
      <a href="{{ url('/marketplace') }}" class="canva-cat-pill">
        <i class="bi bi-bank" style="color:#2563EB"></i> Koperasi
      </a>
      <a href="{{ url('/marketplace') }}" class="canva-cat-pill">
        <i class="bi bi-shop" style="color:#EC4899"></i> UMKM
      </a>
      <a href="{{ url('/marketplace') }}" class="canva-cat-pill">
        <i class="bi bi-gear-wide-connected" style="color:#8B5CF6"></i> Manufaktur
      </a>
    </div>

  </div>
</div>

{{-- ── CANVA PAGE BODY CONTENT ────────────────────────────── --}}
<div class="container-fluid p-4" style="max-width:1400px">

  {{-- ── SECTION 1: JELAJAHI TEMPLATE (Pastel Cards Grid) ───── --}}
  <div class="mb-5">
    <div class="d-flex align-items-center justify-content-between mb-3">
      <h2 class="section-heading-canva">Jelajahi template</h2>
      <a href="{{ url('/marketplace') }}" class="btn-secondary-custom" style="font-size:12px;padding:6px 14px">
        Lihat semua <i class="bi bi-chevron-right ms-1"></i>
      </a>
    </div>

    <div class="canva-explore-grid">
      @foreach($explorePresets as $preset)
      <a href="{{ url('/marketplace') }}?category={{ $preset['cat'] }}" class="canva-preset-card {{ $preset['bg'] }}">
        <div class="preset-title">{{ $preset['title'] }}</div>
        <div class="preset-icon-thumb">
          <i class="bi {{ $preset['icon'] }}" style="color:rgba(13,18,28,.6)"></i>
        </div>
      </a>
      @endforeach
    </div>
  </div>

  {{-- ── SECTION 2: TERINSPIRASI OLEH DESAIN ANDA (Projects) ── --}}
  <div class="mb-5">
    <div class="d-flex align-items-center justify-content-between mb-3">
      <h2 class="section-heading-canva">Terinspirasi oleh desain Anda (Project Terbaru)</h2>
      <a href="{{ url('/project-builder') }}" class="btn-primary-custom" style="font-size:12px;padding:7px 16px">
        <i class="bi bi-plus-lg"></i> Buat Baru
      </a>
    </div>

    <div class="row g-3">
      @foreach($recentProjects as $p)
      <div class="col-sm-6 col-lg-3">
        <div class="canva-card">
          <div class="canva-card-thumb" style="background:{{ $p['bgGradient'] }}">
            <div style="font-size:48px">{{ $p['img'] }}</div>
            <div class="canva-card-overlay">
              <a href="{{ url('/project-builder') }}" class="btn-primary-custom" style="font-size:12px;padding:6px 14px">
                <i class="bi bi-pencil-square"></i> Edit
              </a>
              <a href="{{ url('/publish') }}" class="btn-secondary-custom" style="font-size:12px;padding:6px 14px">
                Publish
              </a>
            </div>
          </div>
          <div class="canva-card-body">
            <div class="canva-card-title">{{ $p['name'] }}</div>
            <div class="canva-card-sub">
              <span>{{ $p['cat'] }} · {{ $p['updated'] }}</span>
              @if($p['status']==='published')
                <span class="badge-status published" style="font-size:10px"><span class="dot"></span>Live</span>
              @else
                <span class="badge-status draft" style="font-size:10px"><span class="dot"></span>Draft</span>
              @endif
            </div>
          </div>
        </div>
      </div>
      @endforeach
    </div>
  </div>

  {{-- ── SECTION 3: TEMPLATE POPULER ────────────────────────── --}}
  <div class="mb-4">
    <div class="d-flex align-items-center justify-content-between mb-3">
      <h2 class="section-heading-canva">Template Paling Banyak Digunakan</h2>
      <a href="{{ url('/marketplace') }}" class="btn-secondary-custom" style="font-size:12px;padding:6px 14px">
        Ke Marketplace <i class="bi bi-arrow-right ms-1"></i>
      </a>
    </div>

    <div class="row g-3">
      @foreach($popularTemplates as $t)
      <div class="col-sm-6 col-lg-3">
        <div class="canva-card">
          <div class="canva-card-thumb {{ $t['bg'] }}" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px">
            <i class="bi bi-layout-text-window" style="font-size:36px;color:var(--primary)"></i>
            <span class="badge-category" style="font-size:10px">{{ $t['cat'] }}</span>
          </div>
          <div class="canva-card-body">
            <div class="canva-card-title">{{ $t['name'] }}</div>
            <div class="canva-card-sub">
              <span style="color:var(--warning);font-weight:700"><i class="bi bi-star-fill"></i> {{ $t['rating'] }}</span>
              <span><i class="bi bi-people"></i> {{ $t['used'] }}x dipakai</span>
            </div>
          </div>
        </div>
      </div>
      @endforeach
    </div>
  </div>

</div>
@endsection
