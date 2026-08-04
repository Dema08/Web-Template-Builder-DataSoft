@extends('layouts.app')

@section('title', 'Template Marketplace')
@section('page_title', 'Template Marketplace')
@section('meta_description', 'Pilih template website company profile profesional dari berbagai kategori industri.')

@section('content')
@php
$categories = [
  ['id'=>'all','label'=>'Semua Template','count'=>'48'],
  ['id'=>'koperasibasics','label'=>'Koperasi','count'=>'6'],
  ['id'=>'logistik','label'=>'Logistik','count'=>'6'],
  ['id'=>'holding','label'=>'Holding Company','count'=>'4'],
  ['id'=>'pendidikan','label'=>'Pendidikan','count'=>'5'],
  ['id'=>'jasa','label'=>'Jasa','count'=>'7'],
  ['id'=>'umkm','label'=>'UMKM','count'=>'8'],
  ['id'=>'organisasi','label'=>'Organisasi','count'=>'4'],
  ['id'=>'manufaktur','label'=>'Manufaktur','count'=>'5'],
  ['id'=>'distribusi','label'=>'Distribusi','count'=>'4'],
  ['id'=>'koperasi-susu','label'=>'Koperasi Susu','count'=>'3'],
];

$templates = [
  ['name'=>'KoperasiPro Elite','cat'=>'koperasi','catLabel'=>'Koperasi','rating'=>4.9,'used'=>234,'desc'=>'Template premium untuk koperasi simpan pinjam dengan transparansi laporan.','bgGrad'=>'linear-gradient(135deg, #7D2AE8 0%, #2563EB 100%)','new'=>true],
  ['name'=>'LogisTech Premium','cat'=>'logistik','catLabel'=>'Logistik','rating'=>4.8,'used'=>189,'desc'=>'Website modern untuk perusahaan logistik dan ekspedisi kargo.','bgGrad'=>'linear-gradient(135deg, #10B981 0%, #059669 100%)','new'=>false],
  ['name'=>'EduSmart Academy','cat'=>'pendidikan','catLabel'=>'Pendidikan','rating'=>4.7,'used'=>156,'desc'=>'Platform edukasi untuk sekolah, kampus, dan lembaga kursus profesional.','bgGrad'=>'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)','new'=>false],
  ['name'=>'ServiceHub Pro','cat'=>'jasa','catLabel'=>'Jasa','rating'=>4.8,'used'=>143,'desc'=>'Template modern untuk perusahaan konsultan dan penyedia layanan profesional.','bgGrad'=>'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)','new'=>true],
  ['name'=>'UMKM Nusantara','cat'=>'umkm','catLabel'=>'UMKM','rating'=>4.6,'used'=>201,'desc'=>'Desain elegan untuk memajukan produk usaha mikro kecil dan menengah.','bgGrad'=>'linear-gradient(135deg, #EC4899 0%, #BE185D 100%)','new'=>false],
  ['name'=>'HoldingVision Pro','cat'=>'holding','catLabel'=>'Holding Company','rating'=>4.9,'used'=>87,'desc'=>'Template profesional untuk konglomerasi bisnis dan anak perusahaan.','bgGrad'=>'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)','new'=>true],
  ['name'=>'Manufaktur 4.0','cat'=>'manufaktur','catLabel'=>'Manufaktur','rating'=>4.7,'used'=>112,'desc'=>'Katalog pabrik, lini produksi, dan standar keselamatan industri.','bgGrad'=>'linear-gradient(135deg, #EF4444 0%, #B91C1C 100%)','new'=>false],
  ['name'=>'OrgaNize Asosiasi','cat'=>'organisasi','catLabel'=>'Organisasi','rating'=>4.5,'used'=>98,'desc'=>'Website komunitas, organisasi kemasyarakatan, dan ikatan alumni.','bgGrad'=>'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)','new'=>false],
  ['name'=>'DistribusiMax','cat'=>'distribusi','catLabel'=>'Distribusi','rating'=>4.6,'used'=>134,'desc'=>'Website distributor resmi, agen tunggal, dan jaringan jangkauan toko.','bgGrad'=>'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)','new'=>false],
  ['name'=>'SusuPro Fresh','cat'=>'koperasi-susu','catLabel'=>'Koperasi Susu','rating'=>4.8,'used'=>67,'desc'=>'Template khusus koperasi susu perah dengan statistik setoran harian.','bgGrad'=>'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)','new'=>true],
];
@endphp

{{-- ── HERO SECTION ───────────────────────────────────────── --}}
<div class="canva-hero" style="padding: 40px 24px 30px">
  <div class="container-fluid" style="max-width:960px">
    <div class="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-white shadow-sm mb-3">
      <span class="badge-status live" style="font-size:11px"><span class="dot"></span> 48 Template Siap Pakai</span>
      <span style="font-size:12px;color:var(--text-muted)">Desain Premium Canva & Framer</span>
    </div>
    
    <h1 class="canva-hero-title">Koleksi Template Company Profile</h1>

    {{-- Search Bar --}}
    <div class="canva-search-bar" style="max-width:600px">
      <i class="bi bi-search"></i>
      <input type="text" id="template-search" placeholder="Cari template berdasarkan nama atau industri...">
    </div>
  </div>
</div>

<div class="container-fluid p-4" style="max-width:1400px">

  {{-- ── CATEGORY FILTER PILLS ──────────────────────────────── --}}
  <div class="mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
    <div class="canva-quick-categories flex-wrap justify-content-start" id="category-pills">
      @foreach($categories as $c)
      <button class="filter-pill {{ $c['id']==='all' ? 'active' : '' }}" data-filter="{{ $c['id'] }}" style="padding:8px 18px;border-radius:99px;font-size:13px;font-weight:600">
        {{ $c['label'] }}
        <span class="ms-1 opacity-75" style="font-size:11px">({{ $c['count'] }})</span>
      </button>
      @endforeach
    </div>
  </div>

  {{-- ── TEMPLATE GRID ──────────────────────────────────────── --}}
  <div class="row g-3" id="template-grid">
    @foreach($templates as $t)
    <div class="col-sm-6 col-lg-4 col-xl-3">
      <div class="canva-card" data-category="{{ $t['cat'] }}">
        <div class="canva-card-thumb" style="background:{{ $t['bgGrad'] }}">
          <div class="text-center p-3 text-white">
            <i class="bi bi-layout-text-window display-5 mb-2"></i>
            <div style="font-size:13px;font-weight:800">{{ $t['catLabel'] }}</div>
          </div>

          <div class="canva-card-overlay">
            <button class="btn-primary-custom" style="font-size:12px;padding:7px 14px">
              <i class="bi bi-eye"></i> Preview
            </button>
            <a href="{{ url('/project-builder') }}" class="btn-secondary-custom" style="font-size:12px;padding:7px 14px;background:#fff">
              Gunakan
            </a>
          </div>

          @if($t['new'])
          <div style="position:absolute;top:12px;right:12px">
            <span class="badge-status published" style="font-size:10px"><span class="dot"></span>Baru</span>
          </div>
          @endif
        </div>

        <div class="canva-card-body">
          <div class="d-flex align-items-center justify-content-between mb-1">
            <div class="canva-card-title m-0">{{ $t['name'] }}</div>
            <div style="font-size:12px;font-weight:700;color:var(--warning)">
              <i class="bi bi-star-fill"></i> {{ $t['rating'] }}
            </div>
          </div>
          <div style="font-size:11px;color:var(--text-muted);margin-bottom:8px">
            <i class="bi bi-people me-1"></i> {{ $t['used'] }}x digunakan
          </div>
          <div style="font-size:12px;color:var(--text-secondary);line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">
            {{ $t['desc'] }}
          </div>
        </div>
      </div>
    </div>
    @endforeach
  </div>

</div>
@endsection
