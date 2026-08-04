/* ============================================================
   Website Template Builder Datasoft — app.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Filter Pills ──────────────────────────────────────── */
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const group = pill.closest('.filter-pills');
      if (group) {
        group.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      }
      pill.classList.add('active');

      // Template filtering
      const target = pill.getAttribute('data-filter');
      if (target) filterTemplates(target);
    });
  });

  function filterTemplates(category) {
    document.querySelectorAll('.template-card[data-category]').forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = '';
        card.style.animation = 'fadeInUp .3s ease';
      } else {
        card.style.display = 'none';
      }
    });
  }

  /* ── Drag & Drop Upload ────────────────────────────────── */
  const uploadZone = document.querySelector('.upload-zone');
  if (uploadZone) {
    ['dragenter', 'dragover'].forEach(e => {
      uploadZone.addEventListener(e, ev => {
        ev.preventDefault();
        uploadZone.classList.add('drag-over');
      });
    });

    ['dragleave', 'drop'].forEach(e => {
      uploadZone.addEventListener(e, ev => {
        ev.preventDefault();
        uploadZone.classList.remove('drag-over');
      });
    });

    uploadZone.addEventListener('drop', ev => {
      const files = ev.dataTransfer.files;
      if (files.length) showToast(`${files.length} file(s) berhasil diupload`, 'success');
    });

    uploadZone.addEventListener('click', () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.multiple = true;
      input.onchange = e => {
        if (e.target.files.length) showToast(`${e.target.files.length} file siap diupload`, 'success');
      };
      input.click();
    });
  }

  /* ── Toast Notifications ───────────────────────────────── */
  window.showToast = function(message, type = 'default', duration = 3500) {
    let container = document.querySelector('.toast-container-custom');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container-custom';
      document.body.appendChild(container);
    }

    const icons = {
      success: 'bi-check-circle-fill',
      warning: 'bi-exclamation-triangle-fill',
      danger:  'bi-x-circle-fill',
      default: 'bi-info-circle-fill'
    };

    const toast = document.createElement('div');
    toast.className = `toast-custom ${type !== 'default' ? type : ''}`;
    toast.innerHTML = `<i class="bi ${icons[type] || icons.default}"></i><span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'toastOut .25s ease forwards';
      setTimeout(() => toast.remove(), 250);
    }, duration);
  };

  /* ── Subdomain Preview ─────────────────────────────────── */
  const subdomainInput = document.getElementById('subdomain-input');
  const subdomainPreview = document.getElementById('subdomain-preview');
  const subdomainStatus = document.getElementById('subdomain-status');

  if (subdomainInput && subdomainPreview) {
    const takenSubdomains = ['admin', 'demo', 'test', 'api', 'www'];

    subdomainInput.addEventListener('input', () => {
      const val = subdomainInput.value.toLowerCase().replace(/[^a-z0-9-]/g, '');
      subdomainInput.value = val;
      subdomainPreview.textContent = val ? `${val}.companybuilder.id` : 'nama-perusahaan.companybuilder.id';

      if (subdomainStatus) {
        if (!val) {
          subdomainStatus.innerHTML = '';
          return;
        }
        if (takenSubdomains.includes(val)) {
          subdomainStatus.innerHTML = `<span class="badge-status error"><span class="dot"></span> Tidak Tersedia</span>`;
        } else if (val.length >= 3) {
          subdomainStatus.innerHTML = `<span class="badge-status published"><span class="dot"></span> Tersedia</span>`;
        } else {
          subdomainStatus.innerHTML = `<span class="text-muted" style="font-size:12px">Minimal 3 karakter</span>`;
        }
      }
    });
  }

  /* ── Color Picker Sync ─────────────────────────────────── */
  document.querySelectorAll('input[type="color"]').forEach(input => {
    input.addEventListener('input', () => {
      const preview = input.closest('.color-swatch-btn')?.querySelector('.color-preview');
      const hex = input.closest('.color-swatch-btn')?.querySelector('.color-hex');
      if (preview) preview.style.background = input.value;
      if (hex) hex.textContent = input.value.toUpperCase();

      // Live preview update for theme builder
      if (input.id === 'primaryColor') {
        document.documentElement.style.setProperty('--primary', input.value);
      } else if (input.id === 'secondaryColor') {
        document.documentElement.style.setProperty('--secondary', input.value);
      } else if (input.id === 'accentColor') {
        document.documentElement.style.setProperty('--success', input.value);
      }
    });
  });

  /* ── Module Checkboxes ─────────────────────────────────── */
  document.querySelectorAll('.module-check-item').forEach(item => {
    item.addEventListener('click', () => {
      const cb = item.querySelector('input[type="checkbox"]');
      if (cb) {
        cb.checked = !cb.checked;
        item.classList.toggle('checked', cb.checked);
      }
    });
  });

  /* ── Builder Section Nav ───────────────────────────────── */
  document.querySelectorAll('.builder-section-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.builder-section-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  /* ── ApexCharts Initialization ─────────────────────────── */
  initCharts();

  /* ── Sidebar Mobile Toggle ─────────────────────────────── */
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.querySelector('.sidebar');
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }

  /* ── Asset Search ──────────────────────────────────────── */
  const assetSearch = document.getElementById('asset-search');
  if (assetSearch) {
    assetSearch.addEventListener('input', () => {
      const q = assetSearch.value.toLowerCase();
      document.querySelectorAll('.asset-card').forEach(card => {
        const name = card.querySelector('.asset-card-name')?.textContent.toLowerCase() || '';
        card.style.display = name.includes(q) ? '' : 'none';
      });
    });
  }

  /* ── Template Search ───────────────────────────────────── */
  const tmplSearch = document.getElementById('template-search');
  if (tmplSearch) {
    tmplSearch.addEventListener('input', () => {
      const q = tmplSearch.value.toLowerCase();
      document.querySelectorAll('.template-card').forEach(card => {
        const name = card.querySelector('.template-name')?.textContent.toLowerCase() || '';
        const cat  = card.querySelector('.badge-category')?.textContent.toLowerCase() || '';
        card.style.display = (name.includes(q) || cat.includes(q)) ? '' : 'none';
      });
    });
  }

  /* ── Rename Modal ──────────────────────────────────────── */
  document.querySelectorAll('.btn-rename-asset').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const card = btn.closest('.asset-card');
      const name = card?.querySelector('.asset-card-name')?.textContent || '';
      const newName = prompt('Rename file:', name);
      if (newName) {
        if (card) card.querySelector('.asset-card-name').textContent = newName;
        showToast('File berhasil direname', 'success');
      }
    });
  });

  /* ── Delete Asset ──────────────────────────────────────── */
  document.querySelectorAll('.btn-delete-asset').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const card = btn.closest('.asset-card');
      if (confirm('Hapus file ini?') && card) {
        card.style.animation = 'fadeOut .2s ease';
        setTimeout(() => card.remove(), 200);
        showToast('File berhasil dihapus', 'danger');
      }
    });
  });

  /* ── Save Draft / Publish Buttons ─────────────────────── */
  document.getElementById('btn-save-draft')?.addEventListener('click', () => {
    showToast('Draft berhasil disimpan', 'success');
  });

  document.getElementById('btn-publish')?.addEventListener('click', () => {
    showToast('Website berhasil dipublish! 🚀', 'success', 5000);
  });

  document.getElementById('btn-update')?.addEventListener('click', () => {
    showToast('Website berhasil diupdate', 'success');
  });

  document.getElementById('btn-unpublish')?.addEventListener('click', () => {
    if (confirm('Yakin ingin meng-unpublish website?')) {
      showToast('Website berhasil di-unpublish', 'warning');
    }
  });

  /* ── Animated Counters ─────────────────────────────────── */
  function animateCounter(el, target, duration = 1200) {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { start = target; clearInterval(timer); }
      el.textContent = Math.floor(start).toLocaleString('id-ID');
    }, 16);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'), 10);
        if (!isNaN(target)) animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('[data-count]').forEach(el => observer.observe(el));
});

/* ── ApexCharts ────────────────────────────────────────── */
function initCharts() {

  /* Activity Chart */
  const activityEl = document.getElementById('activityChart');
  if (activityEl && typeof ApexCharts !== 'undefined') {
    new ApexCharts(activityEl, {
      series: [{
        name: 'Project Dibuat',
        data: [4, 6, 5, 8, 7, 9, 12, 10, 13, 11, 15, 14]
      }, {
        name: 'Website Published',
        data: [2, 3, 2, 4, 5, 6, 7, 6, 8, 7, 10, 9]
      }],
      chart: {
        type: 'area',
        height: 260,
        toolbar: { show: false },
        fontFamily: 'Inter, sans-serif',
        sparkline: { enabled: false },
      },
      colors: ['#2563EB', '#10B981'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: .25,
          opacityTo: .02,
          stops: [0, 90, 100]
        }
      },
      stroke: { curve: 'smooth', width: 2.5 },
      grid: {
        borderColor: '#F1F5F9',
        strokeDashArray: 4,
        yaxis: { lines: { show: true } }
      },
      xaxis: {
        categories: ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'],
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: { style: { colors: '#94A3B8', fontSize: '12px', fontFamily: 'Inter' } }
      },
      yaxis: {
        labels: { style: { colors: '#94A3B8', fontSize: '12px', fontFamily: 'Inter' } }
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        fontFamily: 'Inter',
        fontSize: '12px',
        markers: { radius: 3 }
      },
      tooltip: { theme: 'light', shared: true, intersect: false }
    }).render();
  }

  /* Category Donut */
  const donutEl = document.getElementById('categoryChart');
  if (donutEl && typeof ApexCharts !== 'undefined') {
    new ApexCharts(donutEl, {
      series: [28, 18, 14, 12, 10, 8, 6, 4],
      chart: {
        type: 'donut',
        height: 260,
        fontFamily: 'Inter, sans-serif',
      },
      labels: ['Koperasi', 'UMKM', 'Jasa', 'Pendidikan', 'Logistik', 'Manufaktur', 'Organisasi', 'Lainnya'],
      colors: ['#2563EB','#10B981','#F59E0B','#8B5CF6','#EF4444','#06B6D4','#F97316','#64748B'],
      legend: {
        position: 'bottom',
        fontFamily: 'Inter',
        fontSize: '12px',
      },
      dataLabels: { enabled: false },
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
            labels: {
              show: true,
              total: {
                show: true,
                label: 'Total',
                fontSize: '13px',
                fontFamily: 'Inter',
                color: '#64748B',
                formatter: () => '100'
              }
            }
          }
        }
      },
      tooltip: { theme: 'light' }
    }).render();
  }

  /* Publish Trend */
  const publishEl = document.getElementById('publishChart');
  if (publishEl && typeof ApexCharts !== 'undefined') {
    new ApexCharts(publishEl, {
      series: [{ name: 'Website Published', data: [3, 5, 4, 7, 6, 9, 11, 8, 12, 14, 10, 16] }],
      chart: {
        type: 'bar',
        height: 240,
        toolbar: { show: false },
        fontFamily: 'Inter, sans-serif',
      },
      colors: ['#2563EB'],
      plotOptions: {
        bar: { borderRadius: 6, columnWidth: '55%' }
      },
      grid: {
        borderColor: '#F1F5F9',
        strokeDashArray: 4,
        yaxis: { lines: { show: true } },
        xaxis: { lines: { show: false } }
      },
      xaxis: {
        categories: ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'],
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: { style: { colors: '#94A3B8', fontSize: '12px', fontFamily: 'Inter' } }
      },
      yaxis: {
        labels: { style: { colors: '#94A3B8', fontSize: '12px', fontFamily: 'Inter' } }
      },
      tooltip: { theme: 'light' }
    }).render();
  }
}

// CSS animation for toast out
const style = document.createElement('style');
style.textContent = `
  @keyframes toastOut {
    to { opacity: 0; transform: translateX(60px) scale(.9); }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeOut {
    to { opacity: 0; transform: scale(.95); }
  }
`;
document.head.appendChild(style);
