@extends('layouts.app')

@section('title', 'Publish Website')
@section('page_title', 'Publish Website')
@section('meta_description', 'Publish dan kelola website company profile Anda ke subdomain publik.')

@section('content')
@php
$deployments = [
  ['url'=>'koperasimaju.companybuilder.id','status'=>'published','date'=>'3 Feb 2026','updated'=>'3 Feb 2026, 14:22','version'=>'v2.4'],
  ['url'=>'koperasimaju.companybuilder.id','status'=>'published','date'=>'28 Jan 2026','updated'=>'28 Jan 2026, 09:15','version'=>'v2.3'],
  ['url'=>'koperasimaju.companybuilder.id','status'=>'inactive','date'=>'20 Jan 2026','updated'=>'20 Jan 2026, 16:45','version'=>'v2.2'],
  ['url'=>'koperasimaju.companybuilder.id','status'=>'inactive','date'=>'15 Jan 2026','updated'=>'15 Jan 2026, 11:30','version'=>'v2.1'],
  ['url'=>'koperasimaju.companybuilder.id','status'=>'inactive','date'=>'5 Jan 2026','updated'=>'5 Jan 2026, 08:00','version'=>'v2.0'],
];
@endphp

<div class="container-fluid p-4" style="max-width:1400px">

  {{-- ── CANVA PUBLISH HERO ─────────────────────────────────── --}}
  <div class="canva-card p-4 p-md-5 mb-4" style="background: linear-gradient(135deg, #7D2AE8 0%, #3B82F6 100%); color:#fff; border:none; position:relative; overflow:hidden">
    <div style="position:absolute;top:-60px;right:-60px;width:260px;height:260px;background:radial-gradient(circle,rgba(255,255,255,.2),transparent 70%);border-radius:50%"></div>
    <div style="position:relative;z-index:1">
      <div class="row align-items-center">
        <div class="col-md-7">
          <div class="d-flex align-items-center gap-2 mb-2">
            <span class="badge-status published" style="background:rgba(255,255,255,.2);color:#fff"><span class="dot" style="background:#10B981"></span> Live di Subdomain</span>
            <span style="font-size:12px;color:rgba(255,255,255,.8)">Terakhir di-deploy 3 Feb 2026</span>
          </div>
          <h1 style="font-size:26px;font-weight:900;letter-spacing:-.5px;margin-bottom:8px;color:#fff">
            Deploy & Publish Website
          </h1>
          <p style="font-size:14px;color:rgba(255,255,255,.85);margin-bottom:20px;max-width:520px">
            Website company profile Anda siap dipublikasikan ke publik. Dapatkan subdomain otomatis dan kontrol versi deployment dalam satu tempat.
          </p>
          
          <div class="d-flex align-items-center gap-2 p-2 px-3 rounded-pill" style="background:rgba(255,255,255,.15);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.3);max-width:440px">
            <i class="bi bi-globe2" style="font-size:16px;color:#fff"></i>
            <span style="font-size:13px;font-weight:700;color:#fff;flex:1" id="subdomain-display">koperasimaju.companybuilder.id</span>
            <button onclick="navigator.clipboard.writeText('https://koperasimaju.companybuilder.id');showToast('URL disalin!','success')" class="btn-ghost p-1 px-2" style="color:#fff;background:rgba(255,255,255,.2);border-radius:99px;font-size:11px">
              <i class="bi bi-copy"></i> Salin
            </button>
          </div>
        </div>

        <div class="col-md-5 d-none d-md-flex flex-column align-items-end gap-2 mt-3 mt-md-0">
          <button class="btn-primary-custom" style="background:#fff;color:var(--primary);box-shadow:0 6px 20px rgba(0,0,0,.15);width:220px;justify-content:center" id="btn-update">
            <i class="bi bi-rocket-takeoff"></i> Update Website
          </button>
          <button class="btn-secondary-custom" style="background:rgba(255,255,255,.2);color:#fff;border-color:rgba(255,255,255,.4);width:220px;justify-content:center" onclick="window.open('https://koperasimaju.companybuilder.id','_blank')">
            <i class="bi bi-box-arrow-up-right"></i> Buka Website
          </button>
          <button class="btn-secondary-custom" style="background:transparent;color:rgba(255,255,255,.8);border-color:transparent;width:220px;justify-content:center" id="btn-unpublish">
            <i class="bi bi-pause-circle"></i> Unpublish
          </button>
        </div>
      </div>
    </div>
  </div>

  {{-- ── STATUS CARDS ──────────────────────────────────────── --}}
  <div class="row g-3 mb-4">
    <div class="col-md-4">
      <div class="canva-card p-4 text-center">
        <div style="width:52px;height:52px;border-radius:16px;background:var(--success-light);color:var(--success);display:flex;align-items:center;justify-content:center;margin:0 auto 12px;font-size:24px">
          <i class="bi bi-check-circle-fill"></i>
        </div>
        <div style="font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase">Status Website</div>
        <div style="font-size:22px;font-weight:800;color:var(--success);margin:2px 0">Published (Live)</div>
        <div style="font-size:12px;color:var(--text-secondary)">Domain aktif & dapat diakses publik</div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="canva-card p-4 text-center">
        <div style="width:52px;height:52px;border-radius:16px;background:var(--warning-light);color:#B45309;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;font-size:24px">
          <i class="bi bi-pencil-square"></i>
        </div>
        <div style="font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase">Draft Terakhir</div>
        <div style="font-size:22px;font-weight:800;color:var(--text-primary);margin:2px 0">v2.4 Ready</div>
        <div style="font-size:12px;color:var(--text-secondary)">Diperbarui 2 jam yang lalu</div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="canva-card p-4 text-center">
        <div style="width:52px;height:52px;border-radius:16px;background:var(--primary-light);color:var(--primary);display:flex;align-items:center;justify-content:center;margin:0 auto 12px;font-size:24px">
          <i class="bi bi-lightning-charge-fill"></i>
        </div>
        <div style="font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase">Kecepatan PageSpeed</div>
        <div style="font-size:22px;font-weight:800;color:var(--primary);margin:2px 0">98 / 100</div>
        <div style="font-size:12px;color:var(--text-secondary)">Optimasi Blade Rendering Sangat Cepat</div>
      </div>
    </div>
  </div>

  {{-- ── SUBDOMAIN BUILDER + CHART ROW ─────────────────────── --}}
  <div class="row g-3 mb-4">
    {{-- Subdomain Builder --}}
    <div class="col-lg-5">
      <div class="canva-card p-4 h-100">
        <h2 class="section-heading-canva mb-1">Subdomain Builder</h2>
        <p style="font-size:13px;color:var(--text-secondary);margin-bottom:20px">Tentukan subdomain unik untuk website perusahaan Anda.</p>

        <div class="mb-3">
          <label class="form-label-premium">Nama Subdomain</label>
          <div class="subdomain-input-wrap">
            <input type="text" id="subdomain-input" value="koperasimaju" placeholder="nama-perusahaan">
            <div class="subdomain-suffix">.companybuilder.id</div>
          </div>
        </div>

        <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:var(--radius-xs);padding:12px 14px;margin-bottom:16px">
          <div style="font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;margin-bottom:4px">Preview URL Publik</div>
          <div class="d-flex align-items-center gap-2">
            <i class="bi bi-link-45deg" style="color:var(--primary);font-size:18px"></i>
            <span id="subdomain-preview" style="font-size:14px;font-weight:800;color:var(--primary)">koperasimaju.companybuilder.id</span>
          </div>
        </div>

        <div class="mb-3" id="subdomain-status">
          <span class="badge-status published"><span class="dot"></span> Subdomain Tersedia</span>
        </div>

        <div class="mb-4">
          <div style="font-size:12px;font-weight:700;color:var(--text-secondary);margin-bottom:6px">Ketentuan Subdomain:</div>
          <div style="font-size:12px;color:var(--text-muted);display:flex;flex-direction:column;gap:4px">
            <span><i class="bi bi-check2 me-1" style="color:var(--success)"></i> Bebas tanpa biaya hosting tambahan</span>
            <span><i class="bi bi-check2 me-1" style="color:var(--success)"></i> Otomatis mendapat SSL (HTTPS)</span>
            <span><i class="bi bi-check2 me-1" style="color:var(--success)"></i> Perubahan berlaku instan</span>
          </div>
        </div>

        <button class="btn-primary-custom w-100 justify-content-center" id="btn-publish">
          <i class="bi bi-rocket-takeoff"></i> Simpan & Publish Subdomain
        </button>
      </div>
    </div>

    {{-- Publish History Chart --}}
    <div class="col-lg-7">
      <div class="canva-card p-4 h-100">
        <div class="d-flex align-items-center justify-content-between mb-3">
          <div>
            <h2 class="section-heading-canva m-0">Riwayat & Statistik Deployment</h2>
            <div style="font-size:12px;color:var(--text-muted)">Frekuensi publish per bulan di tahun 2026</div>
          </div>
          <span class="badge-category">Total 18 Publish</span>
        </div>
        <div id="publishChart" style="min-height:220px"></div>
      </div>
    </div>
  </div>

  {{-- ── DEPLOYMENT HISTORY TABLE ──────────────────────────── --}}
  <div class="canva-card p-4">
    <div class="d-flex align-items-center justify-content-between mb-3">
      <div>
        <h2 class="section-heading-canva m-0">Riwayat Deployment Versi</h2>
        <div style="font-size:12px;color:var(--text-muted)">Daftar seluruh rilis yang pernah di-publish ke publik</div>
      </div>
      <button class="btn-secondary-custom" style="font-size:12px;padding:6px 14px" onclick="showToast('Riwayat diperbarui','default')">
        <i class="bi bi-arrow-clockwise me-1"></i> Refresh Log
      </button>
    </div>

    <div class="table-responsive">
      <table class="table-premium">
        <thead>
          <tr>
            <th>Versi</th>
            <th>URL Website</th>
            <th>Status</th>
            <th>Tanggal Publish</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          @foreach($deployments as $i => $d)
          <tr>
            <td>
              <span style="font-size:12px;font-weight:700;color:var(--primary);background:var(--primary-light);padding:3px 10px;border-radius:99px">{{ $d['version'] }}</span>
              @if($i===0)<span class="ms-1" style="font-size:10px;font-weight:700;color:var(--success);background:var(--success-light);padding:2px 8px;border-radius:99px">AKTIF</span>@endif
            </td>
            <td>
              <a href="#" style="color:var(--primary);font-size:13px;font-weight:600;text-decoration:none">
                {{ $d['url'] }}
              </a>
            </td>
            <td>
              @if($d['status']==='published')
                <span class="badge-status published"><span class="dot"></span>Published</span>
              @else
                <span class="badge-status inactive"><span class="dot"></span>Inactive</span>
              @endif
            </td>
            <td><span style="font-size:13px;color:var(--text-secondary)">{{ $d['date'] }}</span></td>
            <td>
              <div class="d-flex gap-2">
                @if($i===0)
                  <button class="btn-primary-custom" style="font-size:11px;padding:4px 12px" onclick="window.open('https://koperasimaju.companybuilder.id','_blank')">Buka Website</button>
                @else
                  <button class="btn-secondary-custom" style="font-size:11px;padding:4px 12px" onclick="showToast('Rollback ke {{ $d['version'] }} berhasil!','success')">Rollback</button>
                @endif
              </div>
            </td>
          </tr>
          @endforeach
        </tbody>
      </table>
    </div>
  </div>

</div>
@endsection
