angular.module("iss").controller('aboutCtrl', function($scope, aboutSrvc) {
  $scope.test = aboutSrvc.test;
  aboutSrvc.getApod().then(function(response) {
    console.log(response);
    $scope.apod = response;
  });

});