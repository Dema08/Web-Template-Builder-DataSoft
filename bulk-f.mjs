import fs from 'fs';
const M=[
['Error Approve','Galat Persetujuan'],
['Role Changed','Peran Diubah'],
['Error Update Role','Galat Ubah Peran'],
['Paket Changed','Paket Diubah'],
['Error Update Plan','Galat Ubah Paket'],
['User Deleted','Pengguna Dihapus'],
['Error Delete','Galat Hapus'],
['All Templates','Semua Template'],
['No preview image available','Tidak ada pratinjau gambar'],
['Desktop Ready','Siap Desktop'],
['Mobile Responsive','Responsif Ponsel'],
['>Preview<','>Pratinjau<'],
['Preview Only / Upgrade','Pratinjau Saja / Tingkatkan'],
['Gunakan Template Ini','Gunakan Template Ini'],
['Website Thumbnail','Thumbnail Website'],
['Preview thumbnail','Pratinjau thumbnail'],
['Pilih gambar untuk upload','Pilih gambar untuk upload'],
['Delete Website','Hapus Website'],
['Edit Website','Ubah Website'],
['System Under','Sistem Dalam'],
['Maintenance','Pemeliharaan'],
["We're currently performing system upgrades to serve you better. Please check back later.",'Kami sedang melakukan peningkatan sistem untuk melayani Anda lebih baik. Silakan kembali lagi nanti.'],
['Scheduled','Terjadwal'],
['Our team is working hard to improve the platform.',"Tim kami bekerja keras meningkatkan platform."],
["We'll be back shortly with new features and improvements.",'Kami segera kembali dengan fitur dan peningkatan baru.'],
['System Operational','Sistem Berjalan Normal'],
['Success','Berhasil'],
['Error','Galat'],
['Warning','Peringatan'],
['Failed to','Gagal'],
['Loading','Memuat'],
['Search','Cari'],
['Showing','Menampilkan'],
['Total','Total'],
];
function walk(d,a=[]){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=d+'/'+e.name;if(p.includes('node_modules')||p.includes('.kilo'))continue;if(e.isDirectory())walk(p,a);else if(/\.(jsx|js)$/.test(p))a.push(p);}return a;}
const files=walk('resources/js');let c=0;
for(const f of files){let s=fs.readFileSync(f,'utf8');const o=s;for(const[a,b]of M){if(s.includes(a))s=s.split(a).join(b);}if(s!==o){fs.writeFileSync(f,s);c++;}}
let b='resources/views/maintenance.blade.php';let s=fs.readFileSync(b,'utf8');const o=s;
for(const[a,b2]of M){if(s.includes(a))s=s.split(a).join(b2);}
if(s!==o){fs.writeFileSync(b,s);c++;}
console.log('F changed='+c);
