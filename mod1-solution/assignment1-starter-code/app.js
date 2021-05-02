(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
        // const words = $scope.lunchItems.split(' ');
        // console.log(words[3]);
    let validator = function (lunchItems) {
        console.log(lunchItems);
        if (!lunchItems) {
            return "Please enter data first"
        } else {
            const items = lunchItems.split(',');
            if (items.length > 3){
                return "Too much!";
            } else {
                return "Enjoy!";
            }
        }
    };

    $scope.checker = function () {
        console.log($scope.lunchItems);
        $scope.lunchCheckResult =  validator($scope.lunchItems)
    };


};

})();
