function totalFine(fare) {
    if (typeof fare !== 'number' || fare <= 0) {
        return "Invalid";
    }
    const serviceCharge = fare * 0.2;
    const extraServiceCharge = 30;
    const totalFare = fare + serviceCharge + extraServiceCharge;
    return totalFare;
}


