var app = angular.module('lyricsMod', []);

app.controller('myCtrl', function($scope, $http) {
  console.log('my ctrl is loaded');
  $scope.randomLyric;
  $http({
  method: 'GET',
  url: '/lyrics'
  }).then(function(response) {
    $scope.randomLyric = response.data;
  });
});
