// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var result={};
    if(currency>10000){
        result["error"]="You are rich, my friend! We don't have so much coins for exchange";
        return result;
    }
    var sum=0;
    var worth = [50,25,10,5,1];
    var counter = [0,0,0,0,0];
    var letters = ["H","Q","D","N","P"]
    for (var i=0; i<worth.length; i++){
        for(;sum<=currency-worth[i];counter[i]++){
            sum+=worth[i];
        }
    }
    for(var i=0; i<worth.length;i++){
        if (counter[i]>0){result[letters[i]]=counter[i]}
    }
        return result;
    // можно просто 5 циклов и 5 if =)
}
