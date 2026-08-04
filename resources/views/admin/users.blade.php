@extends('layouts.admin')
@section('title','Kelola Pengguna')
@section('page_title','Kelola Pengguna')
@section('content')
@php $users = \App\Models\User::latest()->get(); @endphp
<div class="container-fluid p-4" style="max-width:1400px">
  <div class="canva-card p-4">
    <div class="d-flex align-items-center justify-content-between mb-3">
      <div>
        <h2 class="section-heading-canva m-0">Daftar Semua Pengguna</h2>
        <div style="font-size:12px;color:var(--text-muted)">Total {{ $users->count() }} pengguna terdaftar di database</div>
      </div>
      <button class="btn-primary-custom" style="font-size:12px;padding:6px 14px;background:linear-gradient(135deg,#EF4444,#DC2626)" onclick="showToast('Form tambah pengguna','default')">
        <i class="bi bi-person-plus me-1"></i> Tambah Pengguna
      </button>
    </div>
    <div class="table-responsive">
      <table class="table-premium">
        <thead>
          <tr><th>ID</th><th>Nama</th><th>Email</th><th>Level Akses</th><th>Terdaftar</th><th>Aksi</th></tr>
        </thead>
        <tbody>
          @foreach($users as $u)
          <tr>
            <td><span style="font-size:12px;font-weight:700;color:var(--text-muted)">#{{ $u->id }}</span></td>
            <td>
              <div class="d-flex align-items-center gap-2">
                <div style="width:32px;height:32px;border-radius:50%;background:{{ $u->isAdmin()?'linear-gradient(135deg,#EF4444,#DC2626)':'linear-gradient(135deg,#10B981,#059669)' }};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:12px">{{ strtoupper(substr($u->name,0,2)) }}</div>
                <span style="font-weight:700;font-size:13px">{{ $u->name }}</span>
              </div>
            </td>
            <td><span style="font-size:13px;color:var(--text-secondary)">{{ $u->email }}</span></td>
            <td>
              @if($u->isAdmin())
                <span style="font-size:11px;font-weight:700;color:#EF4444;background:#FEE2E2;padding:4px 10px;border-radius:99px"><i class="bi bi-shield-lock-fill me-1"></i>Administrator</span>
              @else
                <span style="font-size:11px;font-weight:700;color:#059669;background:#D1FAE5;padding:4px 10px;border-radius:99px"><i class="bi bi-person-fill me-1"></i>User</span>
              @endif
            </td>
            <td><span style="font-size:12px;color:var(--text-muted)">{{ $u->created_at?->format('d M Y') }}</span></td>
            <td>
              <button class="btn-ghost p-1 px-2" style="font-size:12px" onclick="showToast('Edit #{{ $u->id }}','default')"><i class="bi bi-pencil"></i></button>
              @if($u->id!==auth()->id())
              <button class="btn-ghost p-1 px-2 text-danger" style="font-size:12px" onclick="showToast('Hapus #{{ $u->id }}','danger')"><i class="bi bi-trash"></i></button>
              @endif
            </td>
          </tr>
          @endforeach
        </tbody>
      </table>
    </div>
  </div>
</div>
@endsection
