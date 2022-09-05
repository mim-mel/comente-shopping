export const getFromStorage = () => {
  const items = localStorage.getItem("basket");
  return items ? JSON.parse(items) : [];
};

export const saveToStorage = (product) => {
  let items = getFromStorage();

  const isSameProduct = !!items.find((it) => it.id === product.id);

  if (!isSameProduct) {
    items.push(product);
    localStorage.setItem("basket", JSON.stringify(items));
  }
};
