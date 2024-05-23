
		var cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      cartItems = JSON.parse(cartItems);
      var cartItemsContainer = document.getElementById("cartItems");

      cartItems.forEach(function (item) {
        var row = document.createElement("tr");

        var productCell = document.createElement("td");
        productCell.textContent = item.product;
        row.appendChild(productCell);

        var quantityCell = document.createElement("td");
        quantityCell.textContent = item.quantity;
        row.appendChild(quantityCell);

        var priceCell = document.createElement("td");
        priceCell.textContent = item.price;
        row.appendChild(priceCell);

        var totalCell = document.createElement("td");
        var total = parseFloat(item.quantity) * parseFloat(item.price.replace("$", ""));
        totalCell.textContent = "$" + total.toFixed(2);
        row.appendChild(totalCell);

        cartItemsContainer.appendChild(row);
      });

      document.getElementById("cartTable").style.display = "table";
    } else {
      document.getElementById("emptyCartMessage").style.display = "block";
    }

    document.getElementById("clearCart").addEventListener("click", function () {
      localStorage.removeItem("cartItems");
      location.reload();
	  alert("Cart has been Cleared");
    });
	document.getElementById("checkOut").addEventListener("click", function () {
		 localStorage.removeItem("cartItems");
      location.reload();
	 alert("Thank you for choosing CupVerse!");
	});