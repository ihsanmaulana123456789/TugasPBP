const restaurant = {
    name: "Bebek Kaleyo",
    city: "Tangerang BSD",
    favoriteDrink: "Ice Thai Tea",
    favoriteFood: "Bebek Goreng",
    isVegan: true
  };
  
  // Mengecek apakah properti tidak kosong atau null
  if (
    restaurant.name !== "" &&
    restaurant.city !== "" &&
    restaurant.favoriteDrink !== "" &&
    restaurant.favoriteFood !== ""
  ) {
    console.log(restaurant);
  } else {
    console.log("Properti restaurant tidak boleh kosong atau null.");
  }
  
  // Membuat array restaurant
const restaurants = [
    {
      name: "Gacoan",
      city: "Bogor",
      favoriteDrink: "Lemon Tea",
      favoriteFood: "Mie Pedas",
      isVegan: true
    },
    {
      name: "Iga Resto",
      city: "Serpong",
      favoriteDrink: "Teh Pucuk",
      favoriteFood: "Sate Iga",
      isVegan: false
    },
  ];
  
  // Mengecek apakah properti tidak kosong atau null pada setiap objek di dalam array
  restaurants.forEach(restaurant => {
    if (
      restaurant.name !== "" &&
      restaurant.city !== "" &&
      restaurant.favoriteDrink !== "" &&
      restaurant.favoriteFood !== ""
    ) {
      console.log(restaurant);
    } else {
      console.log("Properti restaurant tidak boleh kosong")
    }});
