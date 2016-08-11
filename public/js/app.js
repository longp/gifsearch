
var app = angular.module('mainApp', [])


app.controller('gifcontroller', ['$scope', '$http', function($scope, $http) {

  $scope.gifsearch = function () {
    $http({
      method:'post',
      url: '/gif',
      data: {query:$scope.query}
    })
    .then(function(data) {
      $scope.url = data.data.data[0].images.original.url
      console.log($scope.url)
      // console.log(data.data.data[0].images.original.url)

    })
  }
}]);
