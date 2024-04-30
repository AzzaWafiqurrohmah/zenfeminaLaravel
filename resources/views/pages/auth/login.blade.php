
@extends('layout.auth')

@section('content')
        <div class="row h-100">
            <div class="col-lg-5 col-12">
                <div id="auth-left">
                    <div class="auth-logo">
                        <a href="index.html"><img src="{{ asset('assets/static/images/logo/logo_zenfemina.svg') }}" alt="Logo"></a>
                    </div>
                    <h1 class="auth-title">Log in.</h1>
                    <p class="auth-subtitle mb-5">Log in with your data that you entered during registration.</p>

                    <form action="/store" method="post">
                        @csrf
                        <div class="form-group position-relative has-icon-left mb-4">
                            <input type="email" class="form-control form-control-xl @error('email') is-invalid @enderror" id="email" placeholder="Email" name="email" value="{{old('email')}}"style="padding-left: 20px;">
                            <!-- <div class="form-control-icon">
                                <i class="bi bi-person"></i>
                            </div> -->
                            @error('email')
                            <div class="invaid-feedback">
                                <small class="text-danger">{{ $message }}</small>
                            </div>
                            @enderror
                        </div>
                        <div class="form-group position-relative has-icon-right mb-4">
                            <input type="password"  class="form-control form-control-xl @error('password') is-invalid @enderror" id="password" placeholder="Password" name="password" value="{{old('password')}}"style="padding-left: 20px;">
                            <!-- <div class="form-control-icon">
                                <i class="bi bi-shield-lock"></i>
                            </div> -->
                            <div class="form-control-icon toggle-password has-icon-right"style="margin-right: 20px;">
                                <i class="bi bi-eye"></i>
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
                <div id="auth-right">
                </div>
            </div>
        </div>

<script>
// Toggle password visibility
document.querySelector('.toggle-password').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const icon = this.querySelector('i');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('bi-eye');
        icon.classList.add('bi-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('bi-eye-slash');
        icon.classList.add('bi-eye');
    }
    // Set ulang posisi ikon mata
    // icon.style.marginRight = '10px';
});

</script>


@endsection
