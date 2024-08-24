var meal_name;
meal_name = document.getElementsByClassName("meal_name")[0];

// alert(`${meal_name}`);

meal_name.addEventListener("click", () => {
  alert("Here");
  show_menu();
});

function show_menu() {
  var item_container = document.getElementByClassName("item_container")[0];
  item_container.innerHTML = `
        <div class="item">
              <div class="item_img">
                <img
                  src="images/Chicken_Republic-New-Spicy-ChickWhizz-Meal.jpg"
                  alt="spicy chckwizz"
                />
              </div>
              <div class="item_info">
                <p class="dish_name">Chick Wizz</p>
                <p class="dish_price">N2,500</p>
              </div>
              <div class="item_button">
                <button>Order</button>
              </div>
            </div>
    `;
}
