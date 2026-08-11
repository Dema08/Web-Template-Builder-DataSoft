<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>System Under Maintenance — DataSoft</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        * { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
        @keyframes pulse-slow { 0%,100%{opacity:1} 50%{opacity:.5} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
    </style>
</head>
<body class="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8 antialiased relative overflow-hidden bg-slate-100">

    <!-- Layer 1: Background image (same as login) -->
    <div class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
         style="background-image: url('/images/auth-bg.jpg');"></div>

    <!-- Layer 2: Ambient corner glow orbs -->
    <div class="absolute -top-20 -left-20 z-0 w-80 h-80 rounded-full pointer-events-none"
         style="background: radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(99,102,241,0.15) 50%, transparent 70%); filter: blur(40px);"></div>
    <div class="absolute -bottom-20 -right-20 z-0 w-80 h-80 rounded-full pointer-events-none"
         style="background: radial-gradient(circle, rgba(99,102,241,0.3) 0%, rgba(168,85,247,0.15) 50%, transparent 70%); filter: blur(40px);"></div>

    <!-- Layer 3: Soft center radial highlight -->
    <div class="absolute z-0 pointer-events-none inset-0"
         style="background: radial-gradient(ellipse at center, rgba(255,255,255,0.2) 0%, rgba(240,244,255,0.1) 60%, transparent 100%);"></div>

    <!-- Card Container -->
    <div class="relative z-10 w-full flex items-center justify-center">
        <div class="max-w-3xl w-full rounded-[28px] overflow-hidden flex flex-col md:flex-row min-h-[520px] bg-white"
             style="box-shadow: 0 25px 70px rgba(30,41,59,0.18); border: 1px solid rgba(255,255,255,0.9);">

            <!-- LEFT COLUMN — Maintenance Info -->
            <div class="w-full md:w-1/2 p-8 sm:p-11 flex flex-col justify-between bg-white">
                <div>
                    <!-- Brand Logo -->
                    <div class="flex items-center gap-2.5">
                        <div class="h-9 w-9 rounded-xl flex items-center justify-center text-white font-extrabold text-sm shadow-md"
                             style="background-color: #2563eb;">DS</div>
                        <div>
                            <div class="text-[15px] font-extrabold text-slate-900 tracking-tight leading-tight">DataSoft</div>
                            <div class="text-[9px] font-bold uppercase tracking-[0.18em] text-blue-600">Premium Plan</div>
                        </div>
                    </div>

                    <!-- Heading -->
                    <div class="mt-8 mb-6">
                        <!-- Animated gear icon -->
                        <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                             style="background: linear-gradient(135deg, #eff6ff 0%, #eef2ff 100%); border: 1px solid #dbeafe;">
                            <svg class="h-7 w-7 text-blue-600 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                        </div>

                        <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            System Under<br>Maintenance
                        </h1>
                        <p class="text-xs sm:text-sm text-slate-500 mt-2 font-medium leading-relaxed">
                            We're currently performing system upgrades to serve you better. Please check back later.
                        </p>
                    </div>

                    <!-- Info box -->
                    <div class="rounded-xl p-4 mb-6"
                         style="background: #fffbeb; border: 1px solid #fde68a;">
                        <div class="flex items-start gap-2.5">
                            <svg class="h-4 w-4 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <div>
                                <p class="text-xs font-bold text-amber-800">Informasi Administrator</p>
                                <p class="text-xs text-amber-700 mt-0.5 leading-relaxed">
                                    Anda dapat tetap masuk ke sistem menggunakan akun <strong>Administrator</strong> untuk mengelola atau mematikan modus pemeliharaan.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Login Button -->
                    <a href="/login?clear_session=1"
                       onclick="try { localStorage.clear(); sessionStorage.clear(); } catch(e){}"
                       class="w-full py-3.5 px-4 flex items-center justify-center gap-2 text-white font-semibold rounded-xl text-sm shadow-lg transition-all duration-200"
                       style="background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%); box-shadow: 0 8px 25px rgba(37,99,235,0.3);">
                        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                        </svg>
                        Login Administrator
                        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                    </a>
                </div>

                <!-- Footer note -->
                <p class="mt-6 text-center text-xs text-slate-400 font-medium">
                    © 2026 PT DataSoft Solusindo. All rights reserved.
                </p>
            </div>

            <!-- RIGHT COLUMN — Hero Banner (same as login) -->
            <div class="hidden md:flex md:w-1/2 relative p-8 sm:p-11 flex-col justify-between text-white overflow-hidden"
                 style="background: linear-gradient(135deg, #3b82f6 0%, #4f46e5 60%, #6d28d9 100%);">

                <!-- Dot Matrix Pattern -->
                <div class="absolute top-6 right-6 z-10 pointer-events-none opacity-30 grid gap-2"
                     style="grid-template-columns: repeat(6, 1fr);">
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>

                <!-- Top Badge -->
                <div class="relative z-10 flex justify-start pt-2">
                    <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-white uppercase"
                         style="background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); backdrop-filter: blur(8px);">
                        <svg class="h-3 w-3 text-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3l14 9-14 9V3z"/>
                        </svg>
                        DATASOFT STUDIO
                    </div>
                </div>

                <!-- Center Hero Content -->
                <div class="relative z-10 my-auto py-6">
                    <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 animate-pulse-slow"
                         style="background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.2);">
                        <svg class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                    </div>

                    <h2 class="text-3xl font-extrabold leading-tight text-white mb-3 tracking-tight">
                        Scheduled<br>Maintenance.
                    </h2>
                    <p class="text-xs text-blue-100 leading-relaxed max-w-xs font-normal" style="opacity:0.9;">
                        Our team is working hard to improve the platform. We'll be back shortly with new features and improvements.
                    </p>
                </div>

                <!-- Bottom Stats -->
                <div class="relative z-10 grid grid-cols-3 gap-3 pt-6"
                     style="border-top: 1px solid rgba(255,255,255,0.2);">
                    <div class="flex flex-col items-center text-center">
                        <div class="w-8 h-8 rounded-lg flex items-center justify-center mb-2"
                             style="background: rgba(255,255,255,0.1);">
                            <svg class="h-4 w-4 text-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                            </svg>
                        </div>
                        <div class="text-base font-extrabold text-white tracking-tight">1.2M+</div>
                        <div class="text-[9px] font-bold uppercase tracking-wider mt-0.5" style="color: rgba(191,219,254,0.8);">Sites Built</div>
                    </div>
                    <div class="flex flex-col items-center text-center">
                        <div class="w-8 h-8 rounded-lg flex items-center justify-center mb-2"
                             style="background: rgba(255,255,255,0.1);">
                            <svg class="h-4 w-4 text-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                            </svg>
                        </div>
                        <div class="text-base font-extrabold text-white tracking-tight">99.9%</div>
                        <div class="text-[9px] font-bold uppercase tracking-wider mt-0.5" style="color: rgba(191,219,254,0.8);">Uptime</div>
                    </div>
                    <div class="flex flex-col items-center text-center">
                        <div class="w-8 h-8 rounded-lg flex items-center justify-center mb-2"
                             style="background: rgba(255,255,255,0.1);">
                            <svg class="h-4 w-4 text-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                            </svg>
                        </div>
                        <div class="text-base font-extrabold text-white tracking-tight">24/7</div>
                        <div class="text-[9px] font-bold uppercase tracking-wider mt-0.5" style="color: rgba(191,219,254,0.8);">Support</div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</body>
</html>