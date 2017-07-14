/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/



    function handValue (cards) {
     let totalValue = 0;
          for (var i = 0; i < cards.length; i++) {
            if(cards[i] === "K" || cards[i] === "J" || cards[i] === "Q"){
              totalValue += 10
            } else if(cards[i] === "A" && totalValue > 10){
              totalValue += 1
            }else if (cards[i] === "A" && totalValue <= 10){
              totalValue += 11
            } else {
            totalValue = parseInt(cards[i]) + totalValue;
          }
          }
        if (totalValue > 21 && cards.includes("A")){
          totalValue -= 10;
        }
      return totalValue;
    }





/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
