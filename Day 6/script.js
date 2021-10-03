var req= new XMLHttpRequest();
//STEP 2:OPEN A CONNECTION
req.open('GET','https://restcountries.com/v2/all',true);
//step3: initiate the connection.
req.send();
// step 4: once teh data loaded from the server successfully 
req.onload=function(){
    // here we are convrting
    var result=JSON.parse(req.response);
    console.log(result);
    for (var i=0;i<result.length;i++){
        var name=result[i].name;
        var lat=result[i].latlng[0];
        var lon=result[i].latlng[1];
        if(latlng.length ===0){
            console.log("values are unavailabale");
        }
        console.log(`${name}: ${lat}: ${lon}`);  
     }
}