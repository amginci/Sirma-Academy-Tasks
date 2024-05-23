function euroToBgnConverter(euro) {
    let bgn = (euro * 1.95583).toFixed(2)
    console.log(bgn);
}
euroToBgnConverter(1);
euroToBgnConverter(15);
euroToBgnConverter(123);
euroToBgnConverter(0.5);
euroToBgnConverter(0.51);