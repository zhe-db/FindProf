'use strict';

function searchService ($http, $q){

    // this.search = function(url,cb){
    //   var search_option = {
    //     method: "post",
    //     url: "https://westus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false",
    //     Content-Type: "application/json",
    //     Ocp-Apim-Subscription-Key: "4db4e7fa5c6a4cbdb36a9ca93ef1cdf2",
    //     Host: "westus.api.cognitive.microsoft.com",
    //     body: {
    //       "url": url
    //     }
    //   }
    //   $http(search_option).then(cb);
    // }
    this.identify = function (faceIds,cb){
      var option = {
        url: "https://westus.api.cognitive.microsoft.com/face/v1.0/identify",
        method: "post",
        host: "westus.api.cognitive.microsoft.com",
        Ocp-Apim-Subscription-Key: "4db4e7fa5c6a4cbdb36a9ca93ef1cdf2",
        body:{
      "personGroupId":"uw00f",
      "faceIds":[
          faceIds.faceId
      ],
      "maxNumOfCandidatesReturned":1,
      "confidenceThreshold": 0.5
    }
      }
      $http(option).then(cb);
    }

    this.searchId = function (id, cb){
      $http.get('/professors/'+id).then(cb);
    }
}
