let myOrders = document.getElementById("myOrders");
console.log(myOrders);
let parRacun = document.getElementById("parRacun");
let products = document.getElementsByClassName("product");
console.log(products);
let labels = document.getElementsByTagName("label");
console.log(labels);
let userInfo = document.querySelector("#userInfo");
console.log(userInfo);

console.log("Parent node myOrders: ", myOrders.parentNode)
console.log("Child node myOrders", myOrders.childNodes)

console.log("myOrders next sibling: ", myOrders.nextElementSibling);
console.log("myOrders previous sibling ", myOrders.previousSibling)

let coffee = document.querySelector("#Cappucino").parentNode.childNodes[1];
console.log(coffee);
console.log(coffee.textContent);
coffee.textContent = "Coffee"

let title = document.querySelector(".flexColumn > .titleText");
console.log(title);
console.log(title.innerHTML);
title.innerHTML = "<h2>Place an order</h2>"

let forme = document.forms;
console.log(forme)

let forma = document.forms["forma"]
console.log(forma)

/*forma.addEventListener("submit", function (e) {
    e.preventDefault();
    let vrednost = forma["kreditna"].checked
    console.log("Korisnik je izabrao kreditnu karticu " + vrednost)
})*/


/*let increaseBtns = document.querySelectorAll(".increaseBtn")
increaseBtns = Array.from(increaseBtns)
increaseBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        let quantityItem = btn.parentNode.querySelector(".quantity")
        let quantityText = quantityItem.textContent
        let quantity = Number(quantityText)
        quantity = quantity + 1
        quantityItem.textContent = quantity + ""
    })
})

let decreaseBtns = document.querySelectorAll(".decreaseBtn")
Array.from(decreaseBtns).forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        let quantity = Number(btn.parentNode.querySelector(".quantity").textContent)
        if (quantity > 0) {
            quantity -= 1
            btn.parentNode.querySelector(".quantity").textContent = quantity + ""
        }
    })
})
*/
var billAmount = 0;

const orderButtons = document.querySelectorAll('.orderBtn');
orderButtons.forEach(button => {
    button.addEventListener('click', handleOrder);
});

function handleOrder(event) {
    const productElement = event.target.closest('.product');
    const productName = productElement.querySelector('h1').innerText;
    const quantityElement = productElement.querySelector('.quantity');
    const quantity = quantityElement.innerText;
    const price = productElement.querySelector(".cena").textContent;

    if (parseInt(quantity) > 0) {
        // Get the current orders
        const ordersTextarea = document.getElementById('myOrders');
        const currentOrders = ordersTextarea.value;
        const newOrder = `${productName}: ${quantity} x ${price}  -  ${quantity * parseInt(price)} RSD\n`;
        billAmount = billAmount + quantity * parseInt(price);
        parRacun.textContent = `Your bill: ${billAmount} RSD`
        ordersTextarea.value = currentOrders + newOrder;
        quantityElement.innerText = '0';
    } else {
        alert(`Please select a quantity for ${productName}`);
    }
}

function quantityControl() {
    // Increase function
    function increase(quantity) {
        quantity++;
        return quantity;
    }

    // Decrease function
    function decrease(quantity) {
        if (quantity > 0) {
            quantity--;
        }
        return quantity

    }

    return {
        increase,
        decrease
    };
}

qc = quantityControl()

let increaseBtns = document.querySelectorAll(".increaseBtn")
Array.from(increaseBtns).forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        let quantity = Number(btn.parentNode.querySelector(".quantity").textContent)
        quantity = qc.increase(quantity)
        btn.parentNode.querySelector(".quantity").textContent = quantity + ""
    })
})

let decreaseBtns = document.querySelectorAll(".decreaseBtn")
Array.from(decreaseBtns).forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        let quantity = Number(btn.parentNode.querySelector(".quantity").textContent)
        quantity = qc.decrease(quantity)
        btn.parentNode.querySelector(".quantity").textContent = quantity + ""
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('forma');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        handleFormSubmit();
    });
});

function handleFormSubmit() {
    const paymentType = document.querySelector('input[name="placanje"]:checked')
    console.log(paymentType)
    if (paymentType === null) {
        alert("Molimo vas odaberite nacin placanja.")
        return
    }
    const fullName = document.getElementById('ime_prezime').value;
    const contact = document.getElementById('kontakt').value;
    const selectedPaymentType = paymentType.id;
    const orders = document.getElementById('myOrders').value;

    console.log('Full Name:', fullName);
    console.log('Contact:', contact);
    console.log('Payment Type:', paymentType);
    console.log('Orders:', orders);

    if (fullName === "" || contact === "" || orders === "") {
        alert("Molimo vas popunite sve podatke kako biste napravili pordžbinu.")
        return
    }
    alert(`Order placed successfully for ${fullName}\nTotal: ${billAmount}\nPayment type: ${selectedPaymentType} RSD!`);
}


