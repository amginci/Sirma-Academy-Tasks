function orderProfitCalculator (renovationPrice, powdersCount, lipsticksCount, spiralsCount, shadowsCount, concealerCount) {
    // Calculate the total count of the items ordered
    let totalCount = powdersCount + lipsticksCount + spiralsCount + shadowsCount + concealerCount;
    // console.log('Total count:');
    // console.log(totalCount); 
    
    // Calculate the total profit of the items ordered
    let powderPrice = 2.6;
    let lipstickPrice = 3;
    let spiralPrice = 4.10;
    let shadowsPrice = 8.20;
    let concealerPrice = 2;
    
    let totalProfit;
    totalProfit = powdersCount * powderPrice + lipsticksCount * lipstickPrice + spiralsCount * spiralPrice + shadowsCount * shadowsPrice + concealerCount * concealerPrice;
    // console.log('Total profit:');
    // console.log(totalProfit);
    
    // Apply 25% discount to the total price if the count of items ordered > 50
    if (totalCount > 50) {
        totalProfit = totalProfit - (totalProfit * 0.25);
        // console.log(totalProfit);
    }

    // Deduct money to rent the shop 10%
    totalProfit = totalProfit - (totalProfit * 0.1);
    // console.log('Final profit after deduction:');
    // console.log(totalProfit);

    // Check if money is enough ot do a renovation
    let remainingMoney;
    let moneyLack;

    if (totalProfit > renovationPrice) {
        remainingMoney = totalProfit - renovationPrice;
        console.log(`Yes! ${remainingMoney.toFixed(2)} BGN left.`);
    } else if (totalProfit < renovationPrice) {
        moneyLack = renovationPrice - totalProfit;
        console.log(`Not enough money! ${moneyLack.toFixed(2)} BGN needed.`);
    }

}
orderProfitCalculator(40.8, 20, 25, 30, 50, 10);
orderProfitCalculator(320, 8, 2, 5, 5, 1);