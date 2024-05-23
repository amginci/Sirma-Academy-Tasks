function paintLitersSpent(yellowPaint) {

    let redPaint = yellowPaint / 4
    let whitePaint = yellowPaint * 2
    
    let desiredColor = redPaint + yellowPaint + whitePaint

    console.log('Red: ' + redPaint);
    console.log('Yellow: '  + yellowPaint);
    console.log('White: ' + whitePaint);
    console.log('Total: ' + desiredColor);
}
paintLitersSpent(10)
paintLitersSpent(17)
paintLitersSpent(42)