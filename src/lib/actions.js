


export const getProducts = async () => {
  const products = await fetch("https://fakestoreapi.com/products");
  if (!products.ok) {
    throw new Error("Something went wrong");
  }
  return products.json();
};

export const getProduct = async (id) => {
  const product = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!product.ok) {
    throw new Error("Something went wrong");
  }
  return product.json();
};

export const getProductByCategory = async (category) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

