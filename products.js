document.getElementById("addToCart").addEventListener("click", function () {
      var quantity = document.getElementById("message").value;
      var cartItem = {
        product: "CupVerse BrownMug",
        quantity: quantity,
        price: "$9.99"
      };
      var cartItems = localStorage.getItem("cartItems");
      if (cartItems) {
        cartItems = JSON.parse(cartItems);
        cartItems.push(cartItem);
      } else {
        cartItems = [cartItem];
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
	  alert("CupVerse BrownMug has been added to cart.");
    });

	