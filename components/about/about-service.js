angular.module("iss").service("aboutSrvc", function($http) {
  this.getApod = function() {
    return $http
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=Bol3YHaNFONjhzNnoCDEfO7PAU85Lh5qpfgl5wpX"
      )
      .then(function(response) {
        console.log(response);
        return response.data;
      });
  };
});
