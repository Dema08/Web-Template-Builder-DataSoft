# Implementation Plan - Refactor Template Surat Menjadi Satu Template Dinamis

Sistem pengelolaan dan generate dokumen surat di Desa Rambipuji akan direfaktor dari sistem banyak template Blade terpisah (`ktp.blade.php`, `kartukeluarga.blade.php`, `sktm.blade.php`, dll.) menjadi **satu template surat utama yang dinamis (`surat_utama.blade.php`)**.

## 1. Arsitektur & Komponen Baru

```
┌────────────────────────────────────────────────────────┐
│                   Admin Desa Web                      │
│      (Tambah Jenis Surat Baru di Master Surat)         │
└──────────────────────────┬─────────────────────────────┘
                           │ Menyimpan nama_surat & konfigurasi isi
                           ▼
┌────────────────────────────────────────────────────────┐
│             Database: tabel master_surat               │
│  (id_surat, nama_surat, judul_surat, isi_surat, dll.)  │
└──────────────┬───────────────────────────┬─────────────┘
               │ Tersedia otomatis         │
               ▼                           ▼
┌───────────────────────────┐  ┌─────────────────────────┐
│     Mobile Flutter        │  │       Admin Web         │
│ (/api/surat -> Form)      │  │  (Tambah Pengajuan)     │
└──────────────┬────────────┘  └───────────┬─────────────┘
               │                           │
               ▼                           ▼
┌────────────────────────────────────────────────────────┐
│                   Alur Persetujuan                     │
│         Admin ──► Sekdes ──► Kades (TTE)               │
└──────────────────────────┬─────────────────────────────┘
                           │ Selesai / TTE
                           ▼
┌────────────────────────────────────────────────────────┐
│              TemplateSuratService                      │
│  - Engine mapping placeholder aman ({nama}, dll.)     │
│  - Default template cerdas untuk surat lama & baru     │
│  - Integrasi keterangan_admin                         │
└──────────────────────────┬─────────────────────────────┘
                           │ Render PDF
                           ▼
┌────────────────────────────────────────────────────────┐
│     resources/views/generate/surat_utama.blade.php     │
│   (SATU Template Dinamis Utama Berstandar Resmi)       │
└────────────────────────────────────────────────────────┘
```

## 2. Langkah-Langkah Pengerjaan

1. **Migration & Model `master_surat`**:
   - Buat migration untuk menambahkan kolom opsional: `judul_surat`, `kalimat_pembuka`, `isi_surat`, `kalimat_penutup` pada `master_surat`.
   - Update model `app/Models/master_surat.php` dengan fillable baru.

2. **Buat Service Engine `App\Services\TemplateSuratService`**:
   - Menangani pemetaan data penduduk & pengajuan ke whitelist placeholder (`{nama}`, `{nik}`, `{tempat_tanggal_lahir}`, `{jenis_kelamin}`, `{warga_agama}`, `{pekerjaan}`, `{status_perkawinan}`, `{alamat}`, `{rt}`, `{rw}`, `{nomor_surat}`, `{tgl_surat}`, `{keterangan}`, `{pejabat_desa}`).
   - Menyediakan default template format kalimat untuk setiap surat lama (KTP, KK, SKTM, Pindah Penduduk, Akta Kelahiran, Akta Kematian, Akta Perkawinan, Pernyataan Miskin) dan fallback universal untuk surat baru.
   - Menggantikan placeholder secara aman dan membersihkan tag tak dikenal.

3. **Buat Template Surat Utama (`generate/surat_utama.blade.php`)**:
   - Menggunakan `@include('generate.partials.kop')`.
   - Layout dokumen resmi Desa Rambipuji (font Times New Roman, margin standar, nomor surat, identitas pemohon, isi surat, keterangan, tanda tangan Kades).

4. **Refactor `GeneratePDFController`**:
   - Panggil `TemplateSuratService::buildSuratData($data, $surat)`.
   - Render menggunakan `generate.surat_utama`.

5. **Update Antarmuka Admin Master Surat**:
   - Update form modal tambah/edit di `resources/views/admin/master_surat/index.blade.php` agar admin dapat memasukkan konfigurasi isi surat opsional dengan panduan placeholder.
   - Update `app/Http/Controllers/Admin/SuratController.php` untuk menyimpan field konfigurasi template.
   - Update `public/js/mastersurat.js` untuk mengelola input form modal.

6. **Sinkronisasi Antar Proyek**:
   - Sinkronkan perubahan ke kedua folder backend: `rambipuji` dan `project-desa-rambipuji`.

7. **Pengujian Komprehensif**:
   - Pengujian seluruh jenis surat lama dengan template utama.
   - Pengujian penambahan jenis surat baru tanpa membuat file template Blade baru.
   - Pengujian validasi placeholder dan integrasi `keterangan_admin`.
