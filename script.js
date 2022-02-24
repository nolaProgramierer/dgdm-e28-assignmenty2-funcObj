document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    function OrderItem(item, price, num = 0) {
        this.item = item;
        this.price = price;
        this.num = num;
        this.itemTotal = function() {
            return (this.num * this.price);
        }
    }
    
    var hotdog = new OrderItem('hotdog', 4.5);
    var fries = new OrderItem('fries', 3.5);
    var soda = new OrderItem('soda', 1.5);
    var sauerkraut = new OrderItem('sauerkraut', 1);

    document.querySelector('input[type=submit]').addEventListener('click', function (e) {
        // Clear div for repeat orders
        document.querySelector('#ordered-items-list').innerHTML = "";
        // Associative array of quantities
        var quantities = getQuantity();
        // Add order quantities to array and calculate new array key values
        var netTotals = gatherTotals(quantities);
        // Add totals of individuals items for grand total
        var total = totalItems(netTotals);

        document.querySelector('#order-total').innerHTML = "Your order total is: $" + total.toFixed(2);
        // Clear values from form
        document.querySelector('form').reset();
         // Display ordered items
         showOrderedItems(quantities);
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
            allOrderItems[i].num = q[i];
            prices.push(allOrderItems[i].itemTotal());
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

    function showOrderedItems(q) {
        let allOrderItems = [hotdog, fries, soda, sauerkraut];
        let orderList = document.querySelector('#ordered-items-list');
        for (let i = 0; i < allOrderItems.length; i++) {
            allOrderItems[i].num = q[i];
            let li = document.createElement('li');
            li.innerText = allOrderItems[i].num + ": " + allOrderItems[i].name;
            orderList.appendChild(li);
        }
    }
    console.log("DOM content parsed and loaded");
}); // end DOMContentLoaded