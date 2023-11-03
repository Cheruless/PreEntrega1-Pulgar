const products = [
  {name: "Oklahoma Burger",id: 1,price: 6400,stock: 7},
  {name: "Cheese Burger",id: 2,price: 6500,stock: 7},
  {name: "Grand Classic",id: 3,price: 7990,stock: 7},
];

export const loadProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};
