@push('style')
    <style>
        .password-input-container {
            position: relative;
        }

        #togglePassword {
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            cursor: pointer;
            z-index: 1; /* Ensure the icon appears above the input */
        }

        .invalid-feedback {
            /* Atur jarak ke kiri saat kondisi tidak valid */
            left: 30px; /* Sesuaikan nilai ini sesuai kebutuhan Anda */
        }

    </style>
@endpush

<div class="modal fade" id="user-modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <form action="" id="user-form">
                <div class="modal-header">
                    <h5 class="modal-title" id="user-modal-title">--</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-4">
                        <label for="userName" class="form-label">username</label>
                        <input type="text" class="form-control" id="username" name="username">
                        <div class="invalid-feedback"></div>
                    </div>
                    <div class="mb-4">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" name="email">
                        <div class="invalid-feedback"></div>
                    </div>
                    <div class="mb-4">
                        <label for="password" class="form-label">Password</label>
                        <div class="password-input-container">
                            <input type="password" name="password" class="form-control" id="password">
                            <div class="invalid-feedback"></div>
                            <span id="togglePassword" class="toggle-password bi bi-eye-fill"></span>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Batal</button>
                    <button type="submit" class="btn btn-primary" id="btn-save">Simpan</button>
                </div>
            </form>
        </div>
    </div>
</div>

@push('script')
    <script>
        const passwordInput = document.getElementById('password');
        const toggleButton = document.getElementById('togglePassword');

        toggleButton.addEventListener('click', function () {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggleButton.classList.remove('bi-eye-fill');
                toggleButton.classList.add('bi-eye-slash-fill');
            } else {
                passwordInput.type = 'password';
                toggleButton.classList.remove('bi-eye-slash-fill');
                toggleButton.classList.add('bi-eye-fill');
            }
        });
    </script>
@endpush
