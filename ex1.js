function canBuyBeer(age, money) {
    const legalDrinkingAge = 21;
    const minimumBeerPrice = 20;

    const isOldEnough = age >= legalDrinkingAge;
    const hasEnoughMoney = money >= minimumBeerPrice;

    return isOldEnough && hasEnoughMoney;
}