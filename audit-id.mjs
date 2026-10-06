import fs from 'fs';
import path from 'path';
function list(a){const o=[];const w=(d)=>{for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name);if(p.includes('node_modules')||p.includes('.kilo'))continue;if(e.isDirectory())w(p);else if(/\.(jsx|js)$/.test(p))o.push(p);}};w(a);return o;}
const targets = list('resources/js').filter(p=>/publish\/pages\/LandingPage|user\/pages\/UserDashboard|user\/pages\/Websites|user\/pages\/Templates|user\/pages\/MyTemplates|user\/pages\/Profile|user\/pages\/Settings|admin\/pages\/Admin|billing\/pages\/Billing|auth\/pages\/Login|auth\/pages\/Register|auth\/pages\/Forgot|auth\/pages\/Verify|auth\/pages\/Reset|layouts\/AppLayout|shared\/components\/ui\//.test(p.replace(/\\/g,'/')));
const out=[];
for(const f of targets){
  const s=fs.readFileSync(f,'utf8');
  const lines=s.split('\n');
  lines.forEach((l,i)=>{
    const m1=l.match(/>([^<>{}]*[A-Za-z][^<>{}]*)</);
    const m2=l.match(/['"]([A-Z][A-Za-z0-9 ,.'\/\-()&]{4,})['"]/);
    const cand=(m1&&m1[1].trim())||(m2&&m2[1].trim())||'';
    if(!cand||cand.length<5) return;
    if(/className|import|export|return|const |function|route|path|http|www|@|#/.test(l.slice(0,60))&&!m1) return;
    if(/[A-Za-z]/.test(cand)&&/\s/.test(cand)){
      const hasID=/\b(dan|yang|untuk|dengan|dari|Anda|Website|Template|Pengaturan|Dasbor|Masuk|Keluar|Simpan|Batal|Hapus|Ubah|Bahasa|Harga|Beranda|Profil|Pengguna|Kategori|Publik|Muat|Cari|Pilih|Buat|Lihat|Hubungi|Mulai|Gratis|Penawaran|Demo|Semua|Aktif|Pasif|Draf|Sistem|Dukungan|Kontak|Tentang|Karier|Dokumentasi|Tutorial|Blog|Produk|Perusahaan|Privasi|Hak cipta|Selamat|Berikut|Ringkasan|Kembali|Acara|Langsung|Panel|Ringkasan|Perbarui|Memuat|Bahasa|Bawaan|Gagal|Galat|Coba|Tim|paket|tepat|Aktif|Tidak ada|kata kunci|kategori lain|Seluruh|Bisnis|Indonesia|Dipercaya|Mulai|Membangun|Penawaran|Terbatas|Paling|Populer|Termasuk|Butuh|kustom|Masih|pertanyaan|siap|membantu|memilih|Normal|Status|Layanan|Platform|Builder|Sumber|Daya)\b/.test(cand);
      if(!hasID) out.push(path.basename(f)+':'+(i+1)+': '+cand.slice(0,120));
    }
  });
}
fs.writeFileSync('audit-id.txt', out.slice(0,400).join('\n')+'\nTOTAL='+out.length);
console.log(out.slice(0,250).join('\n'));
console.log('TOTAL='+out.length);
