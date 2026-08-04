@extends('layouts.admin')
@section('title','Kelola Template')
@section('page_title','Kelola Template')
@section('content')
<div class="container-fluid p-4" style="max-width:1400px">
  <div class="canva-card p-5 text-center">
    <i class="bi bi-layout-text-window-reverse" style="font-size:56px;color:#EF4444"></i>
    <h2 class="mt-3" style="font-weight:800">Kelola Template</h2>
    <p style="color:var(--text-muted)">Tambah, edit, dan hapus template industri yang tersedia di marketplace pengguna.</p>
    <button class="btn-primary-custom mt-2" style="background:linear-gradient(135deg,#EF4444,#DC2626)" onclick="showToast('Segera hadir — Admin Template Management','default')">
      <i class="bi bi-plus-lg"></i> Tambah Template Baru
    </button>
  </div>
</div>
@endsection
