var app = angular.module("laliTip",[]);
app.controller("tipController",
function($scope) {
	$scope.startingTip = 0;
	$scope.computeTip = function() {
		$scope.arr = [];
    var accumulated = 0;
    var y = 0;
    while (y <= $scope.startingTip) {
      accumulated = accumulated + y * 365;
      $scope.arr.push("con " + y + " años le da " + y * 365 + " euros y en la hucha hay " + accumulated + " euros");
      y++;
    }
  };
});