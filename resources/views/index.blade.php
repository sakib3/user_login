
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>User Login</title>

        <link rel="stylesheet" href="css/vendor/bootstrap.css">
        <link rel="stylesheet" href="css/vendor/toastr.css">
        <link href="https://fonts.googleapis.com/css?family=Lato:300" rel="stylesheet" type="text/css">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.css" rel="stylesheet" type="text/css">
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
        </style>
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">User App</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li class="active"><a href="#">Login <span class="sr-only">(current)</span></a></li>
                <li><a href="#register">SignUp</a></li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                <li>
                  <a href="#" id="btn-logout"class="btn btn-warning ">
                    <i class="fa fa-sign-out"></i>
                  Logout</a>
                </li>
              </ul>
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>
    </head>
    <body ng-app="App">




        <div class="container">
            <div ui-view></div>
        </div>

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
</html>
