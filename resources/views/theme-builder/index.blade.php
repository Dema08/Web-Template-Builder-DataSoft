@extends('layouts.app')

@section('title', 'Theme Builder')
@section('page_title', 'Theme Builder')
@section('meta_description', 'Kustomisasi tampilan dan tema website Anda dengan Theme Builder.')
@section('page_class', 'p-0')

@section('head')
<style>
  .page-body { padding: 0 !important; }
  .theme-layout { display:flex; height:calc(100vh - 64px); overflow:hidden; }
  .theme-nav { width:220px; flex-shrink:0; background:var(--surface); border-right:1px solid var(--border); display:flex; flex-direction:column; overflow-y:auto; }
  .theme-canvas { flex:1; background:#E8ECF0; display:flex; flex-direction:column; align-items:center; justify-content:flex-start; padding:24px; overflow-y:auto; }
  .theme-settings { width:300px; flex-shrink:0; background:var(--surface); border-left:1px solid var(--border); display:flex; flex-direction:column; overflow-y:auto; }
  .settings-section { padding:16px; border-bottom:1px solid var(--border); }
  .settings-section-title { font-size:11px; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:.7px; margin-bottom:12px; display:flex; align-items:center; gap:6px; }
  .color-row { display:flex; flex-direction:column; gap:8px; }
  .font-option { display:flex; align-items:center; gap:8px; padding:9px 12px; border:1.5px solid var(--border); border-radius:var(--radius-xs); cursor:pointer; transition:var(--transition); }
  .font-option.active { border-color:var(--primary); background:var(--primary-light); }
  .font-option:hover:not(.active) { border-color:rgba(37,99,235,.3); }
  .appearance-toggle { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
  .appearance-option { padding:12px; border:2px solid var(--border); border-radius:var(--radius-xs); cursor:pointer; text-align:center; transition:var(--transition); }
  .appearance-option.active { border-color:var(--primary); background:var(--primary-light); }
  .appearance-option:hover:not(.active) { border-color:rgba(37,99,235,.3); }
</style>
@endsection

@section('content')
@php
$themeNavs = [
  ['icon'=>'bi-palette','label'=>'Warna','active'=>true],
  ['icon'=>'bi-type','label'=>'Tipografi','active'=>false],
  ['icon'=>'bi-layout-sidebar','label'=>'Layout','active'=>false],
  ['icon'=>'bi-eye','label'=>'Tampilan','active'=>false],
  ['icon'=>'bi-award','label'=>'Brand Kit','active'=>false],
  ['icon'=>'bi-gear','label'=>'Advanced','active'=>false],
];

$fonts = [
  ['name'=>'Inter','preview'=>'Aa','active'=>true],
  ['name'=>'Poppins','preview'=>'Aa','active'=>false],
  ['name'=>'Roboto','preview'=>'Aa','active'=>false],
  ['name'=>'Montserrat','preview'=>'Aa','active'=>false],
  ['name'=>'Playfair Display','preview'=>'Aa','active'=>false],
  ['name'=>'DM Sans','preview'=>'Aa','active'=>false],
];
@endphp

<div class="theme-layout">

  {{-- ── Theme Nav ────────────────────────────────────────── --}}
  <div class="theme-nav">
    <div class="builder-panel-header">
      <div>
        <div style="font-size:13px;font-weight:600;color:var(--text-primary)">Theme Builder</div>
        <div style="font-size:11px;color:var(--text-muted)">KoperasiPro Elite</div>
      </div>
    </div>
    <div style="padding:10px">
      @foreach($themeNavs as $n)
      <button class="builder-section-btn {{ $n['active'] ? 'active' : '' }}">
        <i class="bi {{ $n['icon'] }}"></i>
        {{ $n['label'] }}
      </button>
      @endforeach
    </div>

    {{-- Saved Themes --}}
    <div style="padding:12px;margin-top:auto;border-top:1px solid var(--border)">
      <div style="font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Preset Tema</div>
      @php $presets = [['name'=>'Ocean Blue','c1'=>'#2563EB','c2'=>'#0F172A'],['name'=>'Forest Green','c1'=>'#10B981','c2'=>'#064E3B'],['name'=>'Royal Purple','c1'=>'#8B5CF6','c2'=>'#1E1B4B'],['name'=>'Sunset Orange','c1'=>'#F97316','c2'=>'#431407']]; @endphp
      @foreach($presets as $i => $p)
      <div style="display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:var(--radius-xs);cursor:pointer;transition:var(--transition);{{ $i===0 ? 'background:var(--primary-light);border:1px solid var(--primary-light)' : 'border:1px solid transparent' }}" onclick="showToast('Preset {{ $p['name'] }} diterapkan','success')">
        <div style="display:flex;gap:3px">
          <div style="width:14px;height:14px;border-radius:4px;background:{{ $p['c1'] }}"></div>
          <div style="width:14px;height:14px;border-radius:4px;background:{{ $p['c2'] }}"></div>
        </div>
        <span style="font-size:12px;font-weight:500;color:var(--text-primary)">{{ $p['name'] }}</span>
        @if($i===0)<i class="bi bi-check2" style="color:var(--primary);margin-left:auto;font-size:13px"></i>@endif
      </div>
      @endforeach
    </div>
  </div>

  {{-- ── Canvas (Live Preview) ───────────────────────────── --}}
  <div class="theme-canvas">

    {{-- Preview Controls --}}
    <div style="width:100%;max-width:860px;display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <div style="display:flex;gap:6px">
        <button class="btn-ghost" style="font-size:12px;padding:6px 12px"><i class="bi bi-display"></i></button>
        <button class="btn-ghost" style="font-size:12px;padding:6px 12px"><i class="bi bi-tablet"></i></button>
        <button class="btn-ghost" style="font-size:12px;padding:6px 12px"><i class="bi bi-phone"></i></button>
      </div>
      <span style="font-size:12px;color:var(--text-muted);background:var(--surface);padding:5px 14px;border-radius:8px;border:1px solid var(--border)">
        Live Preview — Koperasi Maju Bersama
      </span>
      <button class="btn-primary-custom" style="font-size:12px;padding:7px 16px" id="btn-save-draft" onclick="showToast('Tema berhasil disimpan! ✨','success')">
        <i class="bi bi-floppy"></i> Simpan Tema
      </button>
    </div>

    {{-- Preview Frame --}}
    <div class="preview-frame-wrap" style="max-width:860px;width:100%">
      <div class="preview-frame-bar">
        <div class="preview-frame-dots">
          <div class="preview-dot red"></div>
          <div class="preview-dot yellow"></div>
          <div class="preview-dot green"></div>
        </div>
        <div class="preview-url">koperasimaju.companybuilder.id</div>
      </div>

      {{-- Live Preview Content --}}
      <div id="theme-preview-content" style="background:#fff;min-height:540px;overflow:hidden">

        {{-- Navbar --}}
        <div id="preview-navbar" style="background:#2563EB;padding:0 24px;height:52px;display:flex;align-items:center;justify-content:space-between;transition:.3s">
          <div style="display:flex;align-items:center;gap:10px">
            <div style="width:28px;height:28px;background:rgba(255,255,255,.2);border-radius:7px;display:flex;align-items:center;justify-content:center">
              <i class="bi bi-stack" style="color:#fff;font-size:14px"></i>
            </div>
            <span id="preview-brand" style="color:#fff;font-size:13px;font-weight:700;font-family:'Inter',sans-serif">Koperasi Maju Bersama</span>
          </div>
          <div style="display:flex;gap:16px">
            @foreach(['Beranda','Tentang','Layanan','Kontak'] as $m)
            <span style="color:rgba(255,255,255,.85);font-size:12px">{{ $m }}</span>
            @endforeach
          </div>
        </div>

        {{-- Hero --}}
        <div id="preview-hero" style="background:linear-gradient(135deg,#1E3A8A,#2563EB);padding:44px 28px;text-align:center;transition:.3s">
          <div style="display:inline-block;background:rgba(255,255,255,.12);border-radius:99px;padding:4px 16px;font-size:10px;color:rgba(255,255,255,.9);margin-bottom:14px;font-weight:500">
            ✨ Koperasi Terpercaya Sejak 2010
          </div>
          <h2 id="preview-title" style="color:#fff;font-size:24px;font-weight:800;margin-bottom:10px;font-family:'Inter',sans-serif;letter-spacing:-.5px">
            Bersama Kita Lebih Kuat
          </h2>
          <p style="color:rgba(255,255,255,.75);font-size:13px;margin-bottom:18px;max-width:400px;margin-left:auto;margin-right:auto">
            Melayani lebih dari 5.000 anggota aktif dengan layanan keuangan terpercaya.
          </p>
          <div style="display:flex;gap:10px;justify-content:center">
            <button id="preview-btn-primary" style="background:#fff;color:#2563EB;border:none;border-radius:8px;padding:10px 22px;font-size:13px;font-weight:700;font-family:'Inter',sans-serif;transition:.3s;cursor:pointer">Bergabung Sekarang</button>
            <button style="background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.3);border-radius:8px;padding:10px 22px;font-size:13px;font-weight:500;cursor:pointer">Pelajari Lebih</button>
          </div>
        </div>

        {{-- Stats Bar --}}
        <div style="display:grid;grid-template-columns:repeat(4,1fr);border-bottom:1px solid #F1F5F9">
          @foreach(['5.000+ Anggota','Rp 2M+ Aset','98% Kepuasan','15 Cabang'] as $s)
          <div style="padding:16px;text-align:center;border-right:1px solid #F1F5F9">
            <div id="preview-stat-{{ $loop->index }}" style="font-size:16px;font-weight:800;color:#2563EB;font-family:'Inter',sans-serif;transition:.3s">{{ $s }}</div>
          </div>
          @endforeach
        </div>

        {{-- Services --}}
        <div style="padding:28px">
          <div style="text-align:center;margin-bottom:20px">
            <div style="font-size:16px;font-weight:700;color:#0F172A;font-family:'Inter',sans-serif">Layanan Unggulan</div>
            <div style="font-size:12px;color:#64748B;margin-top:4px">Solusi terbaik untuk kebutuhan keuangan Anda</div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px">
            @foreach([['icon'=>'bi-cash-stack','name'=>'Simpan Pinjam','desc'=>'Bunga kompetitif'],['icon'=>'bi-graph-up-arrow','name'=>'Kredit UMKM','desc'=>'Proses cepat 3 hari'],['icon'=>'bi-shield-check','name'=>'Asuransi','desc'=>'Perlindungan penuh']] as $sv)
            <div style="background:#F8FAFC;border-radius:12px;padding:18px;text-align:center;border:1px solid #F1F5F9">
              <div id="preview-service-icon-{{ $loop->index }}" style="width:42px;height:42px;background:#DBEAFE;border-radius:12px;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;transition:.3s">
                <i class="bi {{ $sv['icon'] }}" style="color:#2563EB;font-size:18px;transition:.3s" id="preview-service-ico-{{ $loop->index }}"></i>
              </div>
              <div style="font-size:13px;font-weight:600;color:#0F172A;font-family:'Inter',sans-serif;margin-bottom:3px">{{ $sv['name'] }}</div>
              <div style="font-size:11px;color:#64748B">{{ $sv['desc'] }}</div>
            </div>
            @endforeach
          </div>
        </div>

      </div>
    </div>
  </div>

  {{-- ── Theme Settings Panel ────────────────────────────── --}}
  <div class="theme-settings">
    <div class="builder-panel-header">
      <span>Theme Settings</span>
      <button class="btn-ghost" style="padding:4px 8px;font-size:12px" onclick="showToast('Tema di-reset ke default','warning')">
        <i class="bi bi-arrow-counterclockwise"></i> Reset
      </button>
    </div>

    {{-- Color Settings --}}
    <div class="settings-section">
      <div class="settings-section-title">
        <i class="bi bi-palette" style="color:var(--primary)"></i> Warna Brand
      </div>
      <div class="color-row">
        <div>
          <div style="font-size:11.5px;font-weight:500;color:var(--text-secondary);margin-bottom:5px">Primary Color</div>
          <label class="color-swatch-btn" for="primaryColor">
            <div class="color-preview" id="primaryPreview" style="background:#2563EB"></div>
            <span style="flex:1;font-size:13px;color:var(--text-primary)" id="primaryHex">#2563EB</span>
            <input type="color" id="primaryColor" value="#2563EB" style="opacity:0;width:0;height:0;position:absolute">
            <i class="bi bi-eyedropper" style="color:var(--text-muted);font-size:14px"></i>
          </label>
        </div>
        <div>
          <div style="font-size:11.5px;font-weight:500;color:var(--text-secondary);margin-bottom:5px">Secondary Color</div>
          <label class="color-swatch-btn" for="secondaryColor">
            <div class="color-preview" style="background:#0F172A"></div>
            <span style="flex:1;font-size:13px;color:var(--text-primary)" id="secondaryHex">#0F172A</span>
            <input type="color" id="secondaryColor" value="#0F172A" style="opacity:0;width:0;height:0;position:absolute">
            <i class="bi bi-eyedropper" style="color:var(--text-muted);font-size:14px"></i>
          </label>
        </div>
        <div>
          <div style="font-size:11.5px;font-weight:500;color:var(--text-secondary);margin-bottom:5px">Accent Color</div>
          <label class="color-swatch-btn" for="accentColor">
            <div class="color-preview" style="background:#10B981"></div>
            <span style="flex:1;font-size:13px;color:var(--text-primary)" id="accentHex">#10B981</span>
            <input type="color" id="accentColor" value="#10B981" style="opacity:0;width:0;height:0;position:absolute">
            <i class="bi bi-eyedropper" style="color:var(--text-muted);font-size:14px"></i>
          </label>
        </div>
      </div>
    </div>

    {{-- Typography --}}
    <div class="settings-section">
      <div class="settings-section-title">
        <i class="bi bi-type" style="color:var(--primary)"></i> Tipografi
      </div>
      <div style="font-size:11.5px;font-weight:500;color:var(--text-secondary);margin-bottom:8px">Font Family</div>
      <div style="display:flex;flex-direction:column;gap:6px;max-height:200px;overflow-y:auto">
        @foreach($fonts as $f)
        <div class="font-option {{ $f['active'] ? 'active' : '' }}">
          <div style="width:30px;height:30px;border-radius:8px;background:{{ $f['active'] ? 'var(--primary)' : 'var(--surface-2)' }};display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:{{ $f['active'] ? '#fff' : 'var(--text-secondary)' }};flex-shrink:0;transition:.2s">
            {{ $f['preview'] }}
          </div>
          <div>
            <div style="font-size:13px;font-weight:500;color:var(--text-primary)">{{ $f['name'] }}</div>
          </div>
          @if($f['active'])<i class="bi bi-check2-circle" style="color:var(--primary);margin-left:auto;font-size:14px"></i>@endif
        </div>
        @endforeach
      </div>

      <div style="margin-top:14px">
        <div style="font-size:11.5px;font-weight:500;color:var(--text-secondary);margin-bottom:6px">Base Font Size</div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px">
          @foreach(['13px','14px','15px','16px'] as $i => $fs)
          <button style="padding:6px;border:1.5px solid {{ $i===1 ? 'var(--primary)' : 'var(--border)' }};background:{{ $i===1 ? 'var(--primary-light)' : 'transparent' }};border-radius:var(--radius-xs);font-size:12px;color:{{ $i===1 ? 'var(--primary)' : 'var(--text-secondary)' }};cursor:pointer;font-family:'Inter',sans-serif;transition:.2s">{{ $fs }}</button>
          @endforeach
        </div>
      </div>
    </div>

    {{-- Layout --}}
    <div class="settings-section">
      <div class="settings-section-title">
        <i class="bi bi-layout-sidebar" style="color:var(--primary)"></i> Layout
      </div>
      <div style="font-size:11.5px;font-weight:500;color:var(--text-secondary);margin-bottom:8px">Sidebar Style</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:14px">
        @foreach([['name'=>'Modern','icon'=>'bi-layout-sidebar'],['name'=>'Classic','icon'=>'bi-layout-three-columns']] as $i => $l)
        <div style="padding:10px;border:2px solid {{ $i===0 ? 'var(--primary)' : 'var(--border)' }};background:{{ $i===0 ? 'var(--primary-light)' : 'transparent' }};border-radius:var(--radius-xs);cursor:pointer;text-align:center;transition:.2s">
          <i class="bi {{ $l['icon'] }}" style="display:block;font-size:18px;color:{{ $i===0 ? 'var(--primary)' : 'var(--text-muted)' }};margin-bottom:4px"></i>
          <span style="font-size:11px;font-weight:500;color:{{ $i===0 ? 'var(--primary)' : 'var(--text-secondary)' }}">{{ $l['name'] }}</span>
        </div>
        @endforeach
      </div>
      <div style="font-size:11.5px;font-weight:500;color:var(--text-secondary);margin-bottom:8px">Border Radius</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px">
        @foreach([['name'=>'Sharp','r'=>'4px'],['name'=>'Rounded','r'=>'12px'],['name'=>'Pill','r'=>'24px']] as $i => $r)
        <div style="padding:10px 6px;border:2px solid {{ $i===1 ? 'var(--primary)' : 'var(--border)' }};background:{{ $i===1 ? 'var(--primary-light)' : 'transparent' }};border-radius:{{ $r['r'] }};cursor:pointer;text-align:center;transition:.2s">
          <span style="font-size:11px;font-weight:500;color:{{ $i===1 ? 'var(--primary)' : 'var(--text-secondary)' }}">{{ $r['name'] }}</span>
        </div>
        @endforeach
      </div>
    </div>

    {{-- Appearance --}}
    <div class="settings-section">
      <div class="settings-section-title">
        <i class="bi bi-sun" style="color:var(--primary)"></i> Tampilan
      </div>
      <div class="appearance-toggle">
        <div class="appearance-option active" onclick="this.parentElement.querySelectorAll('.appearance-option').forEach(e=>e.classList.remove('active'));this.classList.add('active')">
          <i class="bi bi-sun" style="font-size:20px;color:var(--primary);display:block;margin-bottom:4px"></i>
          <div style="font-size:12px;font-weight:500;color:var(--primary)">Light Mode</div>
        </div>
        <div class="appearance-option" onclick="this.parentElement.querySelectorAll('.appearance-option').forEach(e=>e.classList.remove('active'));this.classList.add('active')">
          <i class="bi bi-moon-stars" style="font-size:20px;color:var(--text-muted);display:block;margin-bottom:4px"></i>
          <div style="font-size:12px;font-weight:500;color:var(--text-muted)">Dark Mode</div>
        </div>
      </div>
    </div>

    {{-- Brand Kit --}}
    <div class="settings-section">
      <div class="settings-section-title">
        <i class="bi bi-award" style="color:var(--primary)"></i> Brand Kit
      </div>
      <div style="display:flex;flex-direction:column;gap:10px">
        <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--surface-2);border-radius:var(--radius-xs)">
          <div style="width:36px;height:36px;background:#2563EB;border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <i class="bi bi-stack" style="color:#fff;font-size:16px"></i>
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:12px;font-weight:600;color:var(--text-primary)">logo-koperasi-maju.png</div>
            <div style="font-size:11px;color:var(--text-muted)">245 KB · PNG</div>
          </div>
          <button class="btn-ghost" style="padding:4px 8px;font-size:12px"><i class="bi bi-arrow-repeat"></i></button>
        </div>
        <div style="display:flex;gap:6px">
          @foreach(['#2563EB','#0F172A','#10B981','#F59E0B'] as $c)
          <div style="width:28px;height:28px;border-radius:8px;background:{{ $c }};cursor:pointer;border:2px solid {{ $c==='#2563EB' ? 'var(--primary)' : 'transparent' }};box-shadow:0 2px 6px rgba(0,0,0,.12);transition:.2s" title="{{ $c }}"></div>
          @endforeach
          <div style="width:28px;height:28px;border-radius:8px;background:var(--surface-2);border:2px dashed var(--border);display:flex;align-items:center;justify-content:center;cursor:pointer">
            <i class="bi bi-plus" style="font-size:14px;color:var(--text-muted)"></i>
          </div>
        </div>
      </div>
    </div>

  </div>{{-- end theme-settings --}}

</div>{{-- end theme-layout --}}

@endsection

@section('scripts')
<script>
// Color pickers sync to preview
document.getElementById('primaryColor')?.addEventListener('input', function() {
  const hex = this.value.toUpperCase();
  document.getElementById('primaryPreview').style.background = hex;
  document.getElementById('primaryHex').textContent = hex;
  // Update preview
  document.getElementById('preview-navbar').style.background = hex;
  document.querySelectorAll('[id^="preview-stat-"]').forEach(el => el.style.color = hex);
  document.querySelectorAll('[id^="preview-service-ico-"]').forEach(el => el.style.color = hex);
  document.querySelectorAll('[id^="preview-service-icon-"]').forEach(el => el.style.background = hex + '22');
  document.getElementById('preview-btn-primary').style.color = hex;
});

// Font options toggle
document.querySelectorAll('.font-option').forEach(opt => {
  opt.addEventListener('click', () => {
    document.querySelectorAll('.font-option').forEach(o => {
      o.classList.remove('active');
      o.querySelector('div').style.background = 'var(--surface-2)';
      o.querySelector('div').style.color = 'var(--text-secondary)';
    });
    opt.classList.add('active');
    opt.querySelector('div').style.background = 'var(--primary)';
    opt.querySelector('div').style.color = '#fff';
    const fontName = opt.querySelector('[style*="font-size:13px"]').textContent.trim();
    showToast(`Font "${fontName}" diterapkan`, 'success');
  });
});
</script>
@endsection
