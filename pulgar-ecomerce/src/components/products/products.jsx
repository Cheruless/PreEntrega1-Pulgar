const products = [
  {name: "Oklahoma Burger",id: "1",price: 6490,stock: 2,category: "Burgers" , imgUrl: "https://smashedburger.fr/wp-content/uploads/2022/05/OKLAHOMA-BURGER__resultat.png"},
  {name: "Cheese Burger",id: "2",price: 6490,stock: 3,category: "Burgers" , imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Cheeseburger.png/320px-Cheeseburger.png"},
  {name: "Grand Classic",id: "3",price: 7990,stock: 4,category: "Burgers" , imgUrl: "https://png.pngtree.com/png-clipart/20231018/original/pngtree-classic-burger-png-image_13354260.png"},
  {name: "Papas fritas",id: "4",price: 3990,stock: 4,category: "Snacks" , imgUrl: "https://static.vecteezy.com/system/resources/previews/025/064/780/non_2x/french-fries-with-ai-generated-free-png.png"},
];

export const mFetch = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(id ? products.find(products => products.id === id ) : products);
    }, 672);
  });
};
