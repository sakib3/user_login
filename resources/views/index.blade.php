
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>User Login</title>

        <link rel="stylesheet" href="css/vendor/bootstrap.css">
        <link rel="stylesheet" href="css/vendor/toastr.css">
        <link href="https://fonts.googleapis.com/css?family=Lato:300" rel="stylesheet" type="text/css">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.css" rel="stylesheet" type="text/css">
        <link href="css/app.css" rel="stylesheet">
        <link rel="apple-touch-icon" href="favicon.ico">

        <style>
            body {
              font-family: 'Lato';
            }

            .btn {

              border-radius: 0;
            }
            #btn-logout{
              color:black;

            }
            .form-control{
                border-radius: 0;
            }
            .well, .list-group{
                border-radius: 0;
            }
        </style>

    </head>
    <body ng-app="App">
      <div ui-view></div>
    </body>

    <!-- Application Dependencies -->
    <script src="js/vendor/jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.js"></script>
    <script src="js/vendor/angular.js"></script>
    <script src="js/vendor/angular-ui-router.js"></script>
    <script src="js/vendor/satellizer.js"></script>
    <script src="js/vendor/toastr.js"></script>

    <!-- Application Scripts -->
    <script src="js/scripts/app.js"></script>
    <script src="js/scripts/authController.js"></script>
    <script src="js/scripts/userController.js"></script>
    <script src="js/scripts/registerController.js"></script>
    <script src="js/scripts/logoutController.js"></script>
    <script src="js/scripts/navBarDirective.js"></script>
</html>
