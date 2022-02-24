document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    function OrderItem(item, price) {
        this.item = item;
        this.price = price;
    }
    
    var hotdog = new OrderItem('hotdog', 4.5);
    var fries = new OrderItem('fries', 3.5);
    var soda = new OrderItem('soda', 1.5);
    var sauerkraut = new OrderItem('sauerkraut', 1);

    document.querySelector('input[type=submit]').addEventListener('click', function (e) {
        // Associative array of quantities
        var quantities = getQuantity();
        // Add order quantities to array and calculate new array key values
        var netTotals = gatherTotals(quantities);
        // Add totals of individuals items for grand total
        var total = totalItems(netTotals);

        document.querySelector('#order-total').innerHTML = "Your order total is: $" + total.toFixed(2);
        // Clear values from form
        document.querySelector('form').reset();
        // Prevent page refresh
        e.preventDefault();
    });


    // Retrieve quantities and add order quantities to array
    function getQuantity() {
        let quantities = [];
        let allMenuItems = document.querySelectorAll('.menu-item');
       for (let i = 0; i < allMenuItems.length; i++) {
           quantities.push(allMenuItems[i].value);
           }
        console.log(quantities);
        return quantities;
    }

    function gatherTotals(q) {
        let prices = [];
        let allOrderItems = [hotdog, fries, soda, sauerkraut];
        for( let i = 0; i < allOrderItems.length; i++) {
            prices.push(allOrderItems[i].price * q[i]);
        }
        console.log(prices);
        return prices;
    }

    function totalItems(arr) {
        var total = 0;
        for (let value in arr) {
            total += arr[value];
        }
        console.log(total);
        return total;
    }
    console.log("DOM content parsed and loaded");
}); // end DOMContentLoaded