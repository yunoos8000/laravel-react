
    <!DOCTYPE html>
    <html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Tasksman</title>
        <!-- Styles -->
        <link rel="manifest" href="{{ asset('manifest.json') }}" />
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Muli:300,400,400i,600,700') }}">
        <link rel="stylesheet" id="css-main" href="{{ asset('assets/css/codebase.css') }}">
    </head>
    <body>
        <div id="app"></div>


        <!--
            Codebase JS

            Custom functionality including Blocks/Layout API as well as other vital and optional helpers
            webpack is putting everything together at assets/_es6/main/app.js
        -->

        <script src="{{ asset('assets/js/codebase.app.min.js') }}"></script>

        <!-- Page JS Plugins -->
        <script src="{{ asset('assets/js/plugins/bootstrap-notify/bootstrap-notify.min.js') }}"></script>
        <script src="{{ asset('assets/js/plugins/es6-promise/es6-promise.auto.min.js') }}"></script>
        <script src="{{ asset('assets/js/plugins/sweetalert2/sweetalert2.min.js') }}"></script>

        <script src="{{ asset('assets/js/plugins/jquery-validation/jquery.validate.min.js') }}"></script>

        <!-- Page JS Code -->
        <!-- <script src="assets/js/pages/op_auth_signup.min.js"></script> -->
    <script>jQuery(function(){ Codebase.helpers('notify'); });</script>

        <script src="{{ asset('js/app.js') }}"></script>
    </body>
    </html>
