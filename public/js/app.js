/**
 * Created by NatalieMenahem on 11/03/2016.
 */

var module = angular.module('gitStatus', []);

module.controller('githubStatusCtrl', function ($scope, $http) {
    $scope.getStatus = function(){
        $http.get("/getStatus")
            .then(function (response) {
                console.log(response.data);
                $scope.gitResults = response.data;
            });
    };
});