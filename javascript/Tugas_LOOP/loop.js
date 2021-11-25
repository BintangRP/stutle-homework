
function segitiga(){
    var hasil = "";

    for(var i=1;i<=5;i++){
        var k = 1; 
        for (var k = 1; k <= i; k++){
            hasil = hasil + '*';
        }
        hasil = hasil + "\n"
    }
    return hasil;
}
console.log(segitiga())