<?php

namespace App\Http\Controllers;

use App\Domains\Shared\Enums\UserRole;
use App\Domains\User\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

/**
 * AuthController — Web (Blade) Authentication
 *
 * Works alongside the teammate's API Auth at:
 *   App\Domains\Auth\Http\Controllers\AuthController (for /api/v1/auth/*)
 *
 * This controller handles the Blade session-based web auth
 * for the legacy Blade frontend.
 */
class AuthController extends Controller
{
    /** Show login form */
    public function showLogin()
    {
        if (Auth::check()) {
            return Auth::user()->isAdmin()
                ? redirect()->route('admin.dashboard')
                : redirect()->route('dashboard');
        }
        return view('auth.login');
    }

    /** Handle login */
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email'    => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials, $request->boolean('remember'))) {
            $request->session()->regenerate();

            return Auth::user()->isAdmin()
                ? redirect()->intended('/admin/dashboard')->with('success', 'Selamat datang, Administrator!')
                : redirect()->intended('/dashboard')->with('success', 'Selamat datang kembali!');
        }

        return back()->withErrors([
            'email' => 'Email atau password yang Anda masukkan salah.',
        ])->onlyInput('email');
    }

    /** Show register form */
    public function showRegister()
    {
        if (Auth::check()) {
            return redirect('/dashboard');
        }
        return view('auth.register');
    }

    /** Handle registration — always Role User */
    public function register(Request $request)
    {
        $validated = $request->validate([
            'name'     => ['required', 'string', 'max:255'],
            'email'    => ['required', 'string', 'email', 'max:255', 'unique:pengguna'],
            'password' => ['required', 'string', 'min:6', 'confirmed'],
        ]);

        $user = User::create([
            'name'     => $validated['name'],
            'email'    => $validated['email'],
            'password' => Hash::make($validated['password']),
            'peran'     => UserRole::User,
        ]);

        Auth::login($user);

        return redirect('/dashboard')->with('success', 'Akun berhasil dibuat! Selamat datang 🎉');
    }

    /** Handle logout */
    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/login')->with('info', 'Anda telah berhasil keluar dari aplikasi.');
    }
}
