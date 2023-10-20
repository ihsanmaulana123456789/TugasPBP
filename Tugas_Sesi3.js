const restaurant = {
    name: "Bebek Kaleyo",
    city: "Tangerang BSD",
    favoriteDrink: "Ice Thai Tea",
    favoriteFood: "Bebek Goreng",
    isVegan: true // Ini bisa berupa true atau false sesuai preferensi
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
      favoriteDrink: "Teh Pucuk",
      favoriteFood: "Mie Pedas",
      isVegan: true
    },
    {
      name: "Iga Resto",
      city: "Serpong",
      favoriteDrink: "Coffe Tubruk",
      favoriteFood: "Sate Iga",
      isVegan: false
    },
    // Anda dapat menambahkan lebih banyak objek restaurant ke dalam array ini
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
