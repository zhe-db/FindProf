'use strict';
function searchCtrl ($scope, searchService){
  $scope.search = function(url){
     searchService.search(url,function(res){
        searchService.identify(res.personId, function(res){
          var id = res.candidiates[0].personId;
          searchService.searchId(id, function(res){
            $scope.target = res.prof
          });
        })
      });
    }
}

//file for prof controller of angular app of find prof
