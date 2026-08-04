@extends('layouts.admin')

@section('title', 'Monitor Website & Subdomain')
@section('page_title', 'Monitor Website Published')

@section('content')
@php
$websites = [
  ['name'=>'Koperasi Maju Bersama','subdomain'=>'koperasimaju.companybuilder.id','user'=>'Koperasi User','status'=>'published','uptime'=>'99.9%','ssl'=>true,'date'=>'3 Feb 2026'],
  ['name'=>'PT Logistik Nusantara','subdomain'=>'logistiknusantara.companybuilder.id','user'=>'Logistik Admin','status'=>'published','uptime'=>'99.8%','ssl'=>true,'date'=>'28 Jan 2026'],
  ['name'=>'Yayasan Pendidikan Bakti','subdomain'=>'pendidikanbakti.companybuilder.id','user'=>'Edu Admin','status'=>'published','uptime'=>'100%','ssl'=>true,'date'=>'20 Jan 2026'],
  ['name'=>'UMKM Batik Kerajinan','subdomain'=>'batiknusantara.companybuilder.id','user'=>'Batik User','status'=>'draft','uptime'=>'0%','ssl'=>false,'date'=>'15 Jan 2026'],
];
@endphp

<div class="container-fluid p-4" style="max-width:1400px">
  <div class="canva-card p-4">
    <div class="d-flex align-items-center justify-content-between mb-3">
      <div>
        <h2 class="section-heading-canva m-0">Monitor Website & Subdomain SaaS</h2>
        <div style="font-size:12px;color:var(--text-muted)">Daftar domain/subdomain aktif di seluruh platform</div>
      </div>
      <button class="btn-secondary-custom" style="font-size:12px;padding:6px 14px" onclick="showToast('Status SSL & DNS diperbarui','success')">
        <i class="bi bi-arrow-clockwise me-1"></i> Refresh Status
      </button>
    </div>

    <div class="table-responsive">
      <table class="table-premium">
        <thead>
          <tr>
            <th>Website</th>
            <th>Subdomain URL</th>
            <th>Pemilik Akun</th>
            <th>Status SSL</th>
            <th>Uptime</th>
            <th>Tanggal Deploy</th>
          </tr>
        </thead>
        <tbody>
          @foreach($websites as $w)
          <tr>
            <td><span style="font-weight:700;font-size:13px">{{ $w['name'] }}</span></td>
            <td><a href="#" style="color:var(--primary);font-weight:600;font-size:12px">{{ $w['subdomain'] }}</a></td>
            <td><span style="font-size:12px;color:var(--text-secondary)">{{ $w['user'] }}</span></td>
            <td>
              @if($w['ssl'])
                <span class="badge-status published" style="font-size:10px"><i class="bi bi-shield-check me-1"></i>SSL Aktif</span>
              @else
                <span class="badge-status inactive" style="font-size:10px">Belum SSL</span>
              @endif
            </td>
            <td><span style="font-weight:700;font-size:12px;color:var(--success)">{{ $w['uptime'] }}</span></td>
            <td><span style="font-size:12px;color:var(--text-muted)">{{ $w['date'] }}</span></td>
          </tr>
          @endforeach
        </tbody>
      </table>
    </div>
  </div>
</div>
@endsection
