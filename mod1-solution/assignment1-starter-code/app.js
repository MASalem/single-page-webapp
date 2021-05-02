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
            return ["Please enter data first", "red"];
        } else {
            const items = lunchItems.split(',');
            if (items.length > 3){
                return ["Too much!", "green"];
            } else {
                return ["Enjoy!", "green"];
            }
        }
    };

    $scope.checker = function () {
        var checkResults=  validator($scope.lunchItems)
        $scope.lunchCheckResult = checkResults[0]
        console.log(checkResults[1]);

        $scope.fontColor = checkResults[1]
    };


};

})();
