// 1.feetToMile
function feetToMile(feet){
var mile = feet/5280; //5280 feet = 1mile.
return mile;
}
var result = feetToMile(54555);
console.log(result);

//2.woodCalculator
function woodCalculator(chair, table, bed){
    var chairCount = chair*1;
    var tableCount = table* 3;
    var bedCount =bed* 5;
    var total = chairCount + tableCount + bedCount;
    return total;
}
var result = woodCalculator(16,7,3);
console.log("The amount of Cubic = " + result);


//3.brickCalculator
brickCalculator function brickCalculator(numOfFloors){
        if(numOfFloors<=0){
        console.log("Number of floors can't be 0 or less")
        return;
        }
        else if(numOfFloors<=10)
        return numOfFloors*15*1000;
        else if(numOfFloors<=20)
        return 150000 + ((numOfFloors-10));
        }

        //4.tinyFriend
        function tinyFriend (name){
            var shortestName = name[0].length; 
            for(var i = 0; i < name.length; i++){
             if(name[i].length < shortestName){
                shortestName =name[i].length;   
            shortestName = name[i];            
            }
              }
          return shortestName;
            }
        var myTinyBuddy = tinyFriend(['nahid', 'asad','shohel','abdullah']);
        console.log(myTinyBuddy);
