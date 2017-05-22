'use strict';
function mainCtrl ($scope,getFaceListService, updateUrlService){
    $scope.text_input = "";
    console.log($scope.text_input);
    $scope.select_item = function(person){
        $scope.current = person;
        $scope.toedit = false;
        $scope.current.splitData = $scope.current.userData.replace(/" "/g,"-").split("-");
        for (var i = 0; i < $scope.current.splitData.length; i++){
            $scope.current.splitData[i]= $scope.current.splitData[i].replace(/"/g,"");
        }
        //$scope.current.url="https://cs.uwaterloo.ca/~dtompkin/dtompkins.jpg"
    }
    $scope.edit_url = function(person){
      updateUrlService(person);
    }
    getFaceListService.getFace(function (response){
        $scope.people = response.data;
        for(var i = 0; i < response.data.length; i++){
            $scope.people[i].course = $scope.people[i].userData.replace(/"&"/g,"-").split("-")[0].replace(/"/g,"");
            //console.log($scope.people[i].userData.replace(/" "/g,"-").split("-"));
        }
       // console.log($scope.people[0].userData.replace(/" "/g,"-").split("-"));
    })
}
// File for mainCtrl of find prof angular app
