angular.module("faceListApp")
.controller('mainCtrl', function($scope,getFaceListService){
    $scope.text_input = "Search a name";
        console.log($scope.text_input);
    $scope.select_item = function(person){
        $scope.current = person;
        $scope.toedit = false;
        $scope.current.splitData = $scope.current.userData.replace(/" "/g,"-").split("-");
        for (var i = 0; i < $scope.current.splitData.length; i++){
            $scope.current.splitData[i]= $scope.current.splitData[i].replace(/"/g,"");
        }
        $scope.current.url="https://cs.uwaterloo.ca/~dtompkin/dtompkins.jpg"
    }
    getFaceListService.getFace(function (response){
        $scope.people = response.data;
        console.log($scope.people[0].userData.replace(/" "/g,"-").split("-"));
    })    
})
.service("getFaceListService",function($http){
    this.getFace = function(callback){
        var group_info_req ={
            method: 'GET',
            host: "westus.api.cognitive.microsoft.com",
            url: "https://westus.api.cognitive.microsoft.com/face/v1.0/persongroups/uw00f",
            headers: {
            "Ocp-Apim-Subscription-Key" : "4db4e7fa5c6a4cbdb36a9ca93ef1cdf2"
        }
        };
        var person_info_req ={
            method: 'GET',
            host: "westus.api.cognitive.microsoft.com",
            url: "https://westus.api.cognitive.microsoft.com/face/v1.0/persongroups/uw00f/persons",
            headers: {
            "Ocp-Apim-Subscription-Key" : "4db4e7fa5c6a4cbdb36a9ca93ef1cdf2"
        }
        };
        $http(person_info_req).then(callback)
    }
    
})