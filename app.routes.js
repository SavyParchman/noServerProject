angular.module('iss').config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './components/home/home-view.html',
      controller: 'homeCtrl'
  })
    .state('about', {
      url: '/about',
      templateUrl: './components/about/about-view.html',
      controller: 'aboutCtrl'
    })
    .state('issNow', {
      url: '/issNow',
      templateUrl: './components/iss-now/iss-now-map.html',
      controller: 'issNowCtrl'
    })
    .state('passTimes', {
      url: '/passTimes',
      templateUrl: './components/pass-times/pass-times-view.html',
      controller: 'passTimesCtrl'
    })
    .state('spacemen', {
      url: '/spacemen',
      templateUrl: './components/spacemen/spacemen-view.html',
      controller: 'spacemenCtrl'
    })
    .state('explore', {
      url: '/explore',
      templateUrl: './components/explore/explore-view.html',
      controller: 'spacemenCtrl'
    })


});