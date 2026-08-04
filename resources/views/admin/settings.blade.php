@extends('layouts.admin')

@section('title', 'Pengaturan Sistem')
@section('page_title', 'Pengaturan Sistem SaaS')

@section('content')
<div class="container-fluid p-4" style="max-width:1400px">
  <div class="canva-card p-4">
    <h2 class="section-heading-canva mb-3">Pengaturan Konfigurasi SaaS Datasoft</h2>
    <div class="row g-3">
      <div class="col-md-6">
        <label class="form-label-premium">Nama Platform App</label>
        <input type="text" class="form-input-premium" value="Website Template Builder Datasoft">
      </div>
      <div class="col-md-6">
        <label class="form-label-premium">Domain Utama Subdomain</label>
        <input type="text" class="form-input-premium" value="companybuilder.id">
      </div>
      <div class="col-12 mt-3">
        <button class="btn-primary-custom" style="background:linear-gradient(135deg,#EF4444,#DC2626)" onclick="showToast('Pengaturan sistem disimpan','success')">
          <i class="bi bi-floppy me-1"></i> Simpan Pengaturan
        </button>
      </div>
    </div>
  </div>
</div>
@endsection
