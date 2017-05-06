/**
 * Created by surfacebook on 5/1/2017.
 */
function getFace(){
    var group_id = "uw00f";
    var url = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/persongroups/" + group_id;
   console.log ($http.get(url));

}