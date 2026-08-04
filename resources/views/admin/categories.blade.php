@extends('layouts.admin')

@section('title', 'Kelola Kategori')
@section('page_title', 'Kelola Kategori Industri')

@section('content')
@php
$categories = [
  ['name'=>'Logistik & Transportasi','slug'=>'logistik','count'=>6,'icon'=>'bi-truck','color'=>'#10B981'],
  ['name'=>'Holding Company','slug'=>'holding','count'=>4,'icon'=>'bi-buildings','color'=>'#0F172A'],
  ['name'=>'Pendidikan & Training','slug'=>'pendidikan','count'=>5,'icon'=>'bi-mortarboard','color'=>'#F59E0B'],
  ['name'=>'Perusahaan Jasa','slug'=>'jasa','count'=>7,'icon'=>'bi-briefcase','color'=>'#8B5CF6'],
  ['name'=>'UMKM & Retail','slug'=>'umkm','count'=>8,'icon'=>'bi-shop','color'=>'#EC4899'],
  ['name'=>'Organisasi & Komunitas','slug'=>'organisasi','count'=>4,'icon'=>'bi-people','color'=>'#06B6D4'],
  ['name'=>'Manufaktur & Industri','slug'=>'manufaktur','count'=>5,'icon'=>'bi-gear-wide-connected','color'=>'#EF4444'],
  ['name'=>'Koperasi Simpan Pinjam','slug'=>'koperasi','count'=>6,'icon'=>'bi-bank','color'=>'#7D2AE8'],
  ['name'=>'Distribusi & Trading','slug'=>'distribusi','count'=>4,'icon'=>'bi-box-seam','color'=>'#3B82F6'],
  ['name'=>'Koperasi Susu Segar','slug'=>'koperasi-susu','count'=>3,'icon'=>'bi-cup-hot','color'=>'#14B8A6'],
];
@endphp

<div class="container-fluid p-4" style="max-width:1400px">
  <div class="canva-card p-4">
    <div class="d-flex align-items-center justify-content-between mb-3">
      <div>
        <h2 class="section-heading-canva m-0">Kelola 10 Kategori Industri Website</h2>
        <div style="font-size:12px;color:var(--text-muted)">Daftar kategori industri untuk pengelompokan template SaaS</div>
      </div>
      <button class="btn-primary-custom" style="font-size:12px;padding:6px 14px;background:linear-gradient(135deg,#EF4444,#DC2626)" onclick="showToast('Form Tambah Kategori Baru','default')">
        <i class="bi bi-plus-lg me-1"></i> Tambah Kategori
      </button>
    </div>

    <div class="row g-3">
      @foreach($categories as $cat)
      <div class="col-md-6 col-lg-4">
        <div class="canva-card p-3 d-flex align-items-center gap-3">
          <div style="width:46px;height:46px;border-radius:12px;background:{{ $cat['color'] }}15;color:{{ $cat['color'] }};display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0">
            <i class="bi {{ $cat['icon'] }}"></i>
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:700;color:var(--text-primary)" class="text-truncate">{{ $cat['name'] }}</div>
            <div style="font-size:11px;color:var(--text-muted)">Slug: <code>{{ $cat['slug'] }}</code> • {{ $cat['count'] }} Template</div>
          </div>
          <div class="d-flex gap-1">
            <button class="btn-ghost p-1" style="font-size:13px" onclick="showToast('Edit {{ $cat['name'] }}','default')"><i class="bi bi-pencil"></i></button>
          </div>
        </div>
      </div>
      @endforeach
    </div>
  </div>
</div>
@endsection
