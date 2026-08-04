@extends('layouts.admin')

@section('title', 'Analytics Platform')
@section('page_title', 'Analytics Platform SaaS')

@section('content')
<div class="container-fluid p-4" style="max-width:1400px">
  <div class="row g-3 mb-4">
    <div class="col-lg-8">
      <div class="canva-card p-4">
        <h2 class="section-heading-canva mb-3">Tren Pertumbuhan Pengguna & Website</h2>
        <div id="activityChart" style="min-height:280px"></div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="canva-card p-4 h-100">
        <h2 class="section-heading-canva mb-3">Penggunaan Server</h2>
        <div id="categoryChart" style="min-height:280px"></div>
      </div>
    </div>
  </div>
</div>
@endsection
