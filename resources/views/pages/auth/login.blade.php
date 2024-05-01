
@extends('layout.auth')

@section('content')
        <div class="row h-100">
            <div class="col-lg-5 col-12">
                <div id="auth-left">
                    <div class="auth-logo">
                        <a href="index.html"><img src="{{ asset('assets/static/images/logo/logo_zenfemina.svg') }}" alt="Logo" class="logo-kiri-atas"></a>
                    </div>
                    <h1 class="auth-title">Sign In</h1>
                    <p class="auth-subtitle mb-5">Silakan masuk dengan menggunakan email dan password yang Anda daftarkan</p>

                    <form action="/store" method="post">
                        @csrf
                        <div class="form-group position-relative has-icon-left mb-4">
                            <input type="email" class="form-control form-control-xl @error('email') is-invalid @enderror" id="email" placeholder="email" name="email" value="{{old('email')}}">
                            <div class="form-control-icon">
                                <i class="bi bi-person"></i>
                            </div>
                            @error('email')
                            <div class="invaid-feedback">
                                <small class="text-danger">{{ $message }}</small>
                            </div>
                            @enderror
                        </div>
                        <div class="form-group position-relative has-icon-left mb-4">
                            <input type="password"  class="form-control form-control-xl @error('password') is-invalid @enderror" id="password" placeholder="Password" name="password" value="{{old('password')}}">
                            <div class="form-control-icon">
                                <i class="bi bi-shield-lock"></i>
                            </div>
                            @error('password')
                            <div class="invaid-feedback">
                                <small class="text-danger">{{ $message }}</small>
                            </div>
                            @enderror
                        </div>
                        <button class="btn btn-primary btn-block btn-lg shadow-lg mt-5">Log in</button>
                    </form>
                    <div class="text-center mt-5 text-lg fs-4">
                        <p><a class="font-bold" href="#">Forgot password?</a></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-7 d-none d-lg-block">
                <div id="auth-right" style="position: relative;">
                    <img src="{{ asset('assets/static/images/logo/hijab1.png') }}" alt="Background Image" class="auth-background-image"  style="position: absolute; top: 50%; right: 50%; transform: translate(50%, -50%); max-width: 300vw; max-height: 300vh;">
                </div>
            </div>
        </div>
@endsection
