<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>System Under Maintenance</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen flex items-center justify-center p-4">
    <div class="max-w-md w-full bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 text-center">
        <div class="mb-6">
            <svg class="h-20 w-20 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
        </div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">System Under Maintenance</h1>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
            We're currently performing system upgrades to serve you better. Please check back later.
        </p>
        <div class="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-2xl p-4 mb-6 text-left">
            <p class="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                <span class="font-bold">Informasi Administrator:</span> Anda dapat tetap masuk ke sistem menggunakan akun Administrator untuk mengelola atau mematikan modus pemeliharaan.
            </p>
        </div>
        <a href="/login?clear_session=1" onclick="try { localStorage.clear(); sessionStorage.clear(); } catch(e){}" class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm shadow-lg shadow-blue-600/30 transition-all">
            Login Administrator
        </a>
    </div>
</body>
</html>