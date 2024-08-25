var left_button = document.getElementById("left_button");
var right_button = document.getElementById("right_button");
var meal_name = document.getElementsByClassName("meal_name")[0];
var menu_items_list_index = 0;
var menu_items_list = ["Meals","Chicken","Sides","Dessert & Drinks",];

var menu_items_objects = {
  meals: [
    { name: 'Dodo Max', image: 'meals/Meal-Dodo-Max.jpg', price: 3200 },
    { name: 'Dodo Reg', image: 'meals/Meal-Dodo-Regular.jpg', price: 2700 },
    { name: 'Fried Rice Max', image: 'meals/Meal-FriedRice-Max.jpg', price: 3400 },
    { name: 'Fried Rice Reg', image: 'meals/Meal-FriedRice-Regular.jpg', price: 2000 },
    { name: 'Jollf Max', image: 'meals/Meal-Jollof-Max.jpg', price: 3400  },
    { name: 'Jollf Reg', image: 'meals/Meal-Jollof-Regular.jpg', price: 2000 },
    { name: 'Rice & Beans Max', image: 'meals/Meal-RiceBeans-Max.jpg', price: 3400 },
    { name: 'Rice & Beans Reg', image: 'meals/Meal-RiceBeans-Regular.jpg', price: 2000 },
    { name: 'Spaghetti Max', image: 'meals/Meal-Spaghetti-Max.jpg', price: 3200 },
    { name: 'Spaghetti Reg', image: 'meals/Meal-Spaghetti-Regular.jpg', price: 2000 },
  ], 
  chicken: { 
    fried: [
      { name: 'Chicken Pieces', image: 'chicken/fried/Chicken-Pieces.jpg', price: 2000 },
      { name: 'Citizen Meal M', image: 'chicken/fried/Meal-Citizens-Chips.png', price: 4500 },
      { name: 'Citizen Meal L', image: 'chicken/fried/Meal-Citizens-Chips.png', price: 6600 },
      { name: 'Citizen Meal', image: 'chicken/fried/Meal-Citizens.jpg', price: 5600 },
      { name: 'Express Meal M', image: 'chicken/fried/Meal-Express-Chips.jpg', price: 4400 },
      { name: 'Express Meal L', image: 'chicken/fried/Meal-Express-Chips.jpg', price: 5600 },
      { name: 'Pot Reg', image: 'chicken/fried/Meal-Pot-Regular.jpg', price: 22200 },
      { name: 'Pot Max', image: 'chicken/fried/Meal-Pot-Max.jpg', price: 31300 },
      { name: 'Spicy Yam Reg M', image: 'chicken/fried/Meal-SpicyYam-Regular.jpg', price: 2900 },
      { name: 'Spicy Yam Reg L', image: 'chicken/fried/Meal-SpicyYam-Regular.jpg', price: 3600 },
      { name: 'Spicy Yam Max M', image: 'chicken/fried/Meal-SpicyYam-Max.jpg', price: 4000 },
      { name: 'Spicy Yam Max L', image: 'chicken/fried/Meal-SpicyYam-Max.jpg', price: 4500 },
    ], 
    grilled: [
      { name: 'Full ', image: 'chicken/grilled/Full-Grilled.jpg', price: 15200 },
      { name: 'Half ', image: 'chicken/grilled/Half-Grilled.jpg', price: 9800 },
      { name: 'Quarter Meal', image: 'chicken/grilled/Meal-Quarter-Grilled.jpg', price: 6100 },
      { name: 'Quarter Chips M', image: 'chicken/grilled/Quarter-Grilled-Chips.jpg', price: 4000 },
      { name: 'Quarter Chips L', image: 'chicken/grilled/Quarter-Grilled-Chips.jpg', price: 4500 },
      { name: 'Quarter', image: 'chicken/grilled/Quarter-Grilled.jpg', price: 4400 },
    ], 
    rotisserie: [
      { name: 'Full', image: 'chicken/rotisserie/Full-Rotisserie.jpg', price: 14700 },
      { name: 'Half M', image: 'chicken/rotisserie/Half-Rotisserie-Chips.jpg', price: 10600 },
      { name: 'Half L', image: 'chicken/rotisserie/Half-Rotisserie-Chips.jpg', price: 11100 },
      { name: 'Half ', image: 'chicken/rotisserie/Half-Rotisserie.jpg', price: 7600 },
      { name: 'Big Crew Meal', image: 'chicken/rotisserie/Meal-BigCrew.jpg', price: 24500 },
      { name: 'Half Meal', image: 'chicken/rotisserie/Meal-Half-Rotisserie.jpg', price: 9500 },
      { name: 'Quarter Meal', image: 'chicken/rotisserie/Meal-Quarter-Rotisserie.jpg', price: 6900 },
      { name: 'Quarter M', image: 'chicken/rotisserie/Quarter-Rotisserie-Chips.jpg', price: 6900 },
      { name: 'Quarter L', image: 'chicken/rotisserie/Quarter-Rotisserie-Chips.jpg', price: 7400 },
      { name: 'Quarter', image: 'chicken/rotisserie/Quarter-Rotisserie.jpg', price: 9500 },
      { name: 'Chicken Salad', image: 'chicken/rotisserie/Chicken-Salad.jpg', price: 2900 },
    ] 
  },

  sides: [{ name: 'Dodo Max', image: 'Meal-Dodo-Max.jpg', price: 3200 }],
  dessert_drinks: [{ name: 'Dodo Max', image: 'Meal-Dodo-Max.jpg', price: 3200 }],
};

// alert(`src="images/${menu_items_objects.meals[0].image}.jpg"`);

meal_name.addEventListener("click", () => {
  // alert("Here");
  // show_menu(); 
});

function show_menu(c) {
  // alert(c);
  let item_container = document.getElementsByClassName("container")[0];
  item_container.innerHTML = c.trim();
}

left_button.addEventListener("click", () => {
  if (!(menu_items_list_index < 1)) {
    menu_items_list_index -= 1;
    meal_name.innerHTML = `<p>${menu_items_list[menu_items_list_index]}</p>`;
    check_menu_item(menu_items_list[menu_items_list_index])
  }
});

right_button.addEventListener("click", () => {
  if (!(menu_items_list_index > menu_items_list.length - 2)) {
    menu_items_list_index += 1;
    meal_name.innerHTML = `<p>${menu_items_list[menu_items_list_index]}</p>`;
    // alert("About checking item");
    check_menu_item(menu_items_list[menu_items_list_index]);
  }
});

function check_menu_item(item){
  // alert("in check");
  if (item == 'Meals'){
    let template = create_item(menu_items_objects.meals);
    // alert(template);
    show_menu(template);
  };

  if (item == 'Chicken'){
    let template = `
    <div class="type">
      <p>Fried</p>
    </div>
    ${create_item(menu_items_objects.chicken.fried)} 
    <div class="type">
      <p>Grilled</p>
    </div>
    ${create_item(menu_items_objects.chicken.grilled)}
    <div class="type">
      <p>Rotisserie</p>
    </div> 
    ${create_item(menu_items_objects.chicken.rotisserie)}`;
    show_menu(template);
  };
  // if (item == 'Sides'){
    
  // }
  // if (item == 'Dessert & Drinks'){
    
  // }
}

function create_item(m_i_o){
  var content = '';
  for (let i = 0; i < m_i_o.length; i++){
    var item = `
            <div class="item">
                <div class="item_img">
                  <img
                    src="images/${m_i_o[i].image}"
                    alt="${m_i_o[i].name}"
                  />
                </div>
                <div class="item_info">
                  <p class="dish_name">${m_i_o[i].name}</p>
                  <p class="dish_price">N${m_i_o[i].price}</p>
                </div>
                <div class="item_button">
                  <button>Order</button>
                </div>
            </div>
      `;
    content += item;
  };
  return content;
}