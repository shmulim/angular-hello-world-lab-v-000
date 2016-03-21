angular.module('app')
  .controller('MainController', MainController);

function MainController($scope){
  $scope.name = 'Shmuli Markel';
  $scope.email = 'shmuel.markel@gmail.com';
  $scope.phone = '(818) 555-1212';
}