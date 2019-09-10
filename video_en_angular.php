<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="refresh" content="18000"/><!--actualiza cada 5h-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Plantilles INMOSCREEN">
    <meta name="author" content="Innova Marketing">
    <title>INMOSCREEN</title>

    <link href="/assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="/assets/css/bootstrap-theme.min.css" rel="stylesheet">
    <link href="/assets/vendor/angular-carousel/dist/angular-carousel.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

    <!-- LINKS PERSONALES -->
    <link href="/themes/remax/vtl_style.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet">
    <!-- FIN LINKS PERSONALES -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="/assets/js/bootstrap.min.js"></script>
    <script src="/assets/vendor/angular/angular.min.js"></script>

    <script src="http://malsup.github.io/min/jquery.cycle2.min.js"></script>
    <script src="http://malsup.github.io/jquery.cycle2.shuffle.js"></script>
    <script src="http://malsup.github.io/jquery.cycle2.tile.js"></script>
    <script src="http://malsup.github.io/jquery.cycle2.flip.js"></script>

    <script>
      "use strict";

        var angularApp = angular.module('angularApp', []);

        angularApp.controller("angularController", ["$scope", "$http", "$interval", "$timeout", function ($scope, $http, $interval, $timeout) {

          $scope.playlistid_venta = 'PLDPoi9RrXf-ZXt_0r-Q94tsVSJhP4_dh3';
          $scope.playlistid_alquiler = 'PLDPoi9RrXf-bVk_FFonF4E1dpOYiR5reo';

          $http.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=' + $scope.playlistid_venta + '&key=AIzaSyDQRYzpcfg8KXkpBvoKTMrY0eJhLP06l_Y').success(function (data) {
            $scope.videos_venta = data;
          });

          $http.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=' + $scope.playlistid_alquiler + '&key=AIzaSyDQRYzpcfg8KXkpBvoKTMrY0eJhLP06l_Y').success(function (data) {
            $scope.videos_alquiler = data;
          });

        }]);

        angularApp.filter('trustedVideos', ['$sce', function ($sce) {
          return function(video) {
              //console.log(video);
              //console.log(video.snippet.resourceId.videoId);
              return $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + video.snippet.resourceId.videoId + "?list=PLDPoi9RrXf-ZXt_0r-Q94tsVSJhP4_dh3&amp;widgetid=1&amp;enablejsapi=1&amp;autoplay=1&amp;controls=0&amp;rel=0&amp;showinfo=0&amp;loop=1&amp;modestbranding=1&amp;iv_load_policy=3");
          };
        }]);

        angularApp.filter('trustedAlquileres', ['$sce', function ($sce) {
          return function(video) {
              //console.log(video);
              //console.log(video.snippet.resourceId.videoId);
              return $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + video.snippet.resourceId.videoId + "?list=PLDPoi9RrXf-bVk_FFonF4E1dpOYiR5reo&amp;widgetid=1&amp;enablejsapi=1&amp;autoplay=1&amp;controls=0&amp;rel=0&amp;showinfo=0&amp;loop=1&amp;modestbranding=1&amp;iv_load_policy=3");
          };
        }]);
    </script>
  </head>
  <body class="vtl" ng-app="angularApp" ng-controller="angularController">
    <div class="screen_video">
      <header>
        <div class="logo">
          <img src="/themes/remax/images/logo.svg" alt="REMAX Project"/>
        </div>
      </header>
      <div class="list_screen_video" ng-repeat="video in videos_venta.items | limitTo: 1">
        <h1>PROPIEDADES DESTACADAS</h1>
        <div class="diagonal diagonal_red"></div>
        <iframe ng-src="{{video | trustedVideos}}" frameborder="0" allowfullscreen></iframe>
        <div class="mas_info_screen_video">Pídenos información de este inmueble en nuestra oficina o entra en la web project.remax.es</div>
        <div class="diagonal diagonal_blue"></div>
      </div>
      <!--<div ng-repeat="video in videos_alquiler.items | limitTo: 1"  style="padding:20px">
        <p>Alquiler</p>
        <div>
           <iframe width="560" height="315" ng-src="{{video | trustedAlquileres}}" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>-->
      <div class="social_screen_video">
        Síguenos en nuestras REDES SOCIALES
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <i class="fa fa-facebook-square" aria-hidden="true"></i>
      </div>
    </div>
    <footer class="footer_screen_video">
      <div class="row">
        <div class="col-xs-7 left_footer">
          project.remax.es
        </div>
        <div class="col-xs-5 right_footer">
          930 215 640
        </div>
      </div>
    </footer>
    <div class="publi_screen_video">
      <img src="/themes/remax/publi/pantalla_video/v_banner_bottom_cambia_casa.jpg" alt="CAmbia de casa"/>
    </div>
  </body>
</html>
