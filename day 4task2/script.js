var req= new XMLHttpRequest();
//STEP 2:OPEN A CONNECTION
req.open('GET','https://restcountries.eu/rest/v2/all',true);
//step3: initiate the connection.
req.send();
// step 4: once teh data loaded from the server successfully 
req.onload=function(){
    // here we are convrting
    var result=JSON.parse(req.response);
     console.log(result);
   for (var i=0;i<result.length;i++){
        console.log(result[i].countryflags);
    }
}