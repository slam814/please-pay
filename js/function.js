document.getElementById('btn-apply').addEventListener('click', function(){
    const orginalPriceElement = document.getElementById('product-price');
    const orginalPriceString = orginalPriceElement.innerText;
    const orginalPrice = parseFloat(orginalPriceString);

    

    const discountElement = document.getElementById('discount-persent');
    const discountString = discountElement.innerText;
    const discount = parseFloat(discountString);

    // DISCOUNT CALCULATE
    const discountAmount = orginalPrice - ((discount / 100) * orginalPrice);
    console.log(discountAmount);

    const pleasePay = document.getElementById('please-pay');
    pleasePay.innerText = `Please Pay: ${discountAmount.toFixed(2)} Taka`;


})
