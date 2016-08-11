
var app = angular.module('mainApp', [])


app.controller('gifcontroller', ['$scope', '$http', function($scope, $http) {

  $scope.gifsearch = function () {
    $http({
      method:'post',
      url: '/gif',
      data: {query:$scope.query}
    })
    .then(function(data) {
      var gifd = data.data.data[0]
      $scope.url = gifd.images.original.url


      console.log(data.data.data[0])
      // console.log(data.data.data[0].images.original.url)

    })
  }
}]);
