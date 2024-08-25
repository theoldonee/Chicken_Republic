var meal_name;
var left_button = document.getElementById("left_button");
var right_button = document.getElementById("right_button");
meal_name = document.getElementsByClassName("meal_name")[0];
var menu_items_list_index = 0;
var menu_items_list = ["Meals", "Chicken", "Sides", "Dessert & Drinks"];

meal_name.addEventListener("click", () => {
  // alert("Here");
  show_menu();
});

function show_menu() {
  var item_container = document.getElementsByClassName("item_container")[0];
  var item = `
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

  item_container.innerHTML += item.trim();
}

left_button.addEventListener("click", () => {
  if (!(menu_items_list_index < 1)) {
    menu_items_list_index -= 1;
    meal_name.innerHTML = `<p>${menu_items_list[menu_items_list_index]}</p>`;
  }
});

right_button.addEventListener("click", () => {
  if (!(menu_items_list_index > menu_items_list.length - 2)) {
    menu_items_list_index += 1;
    meal_name.innerHTML = `<p>${menu_items_list[menu_items_list_index]}</p>`;
  }
});
