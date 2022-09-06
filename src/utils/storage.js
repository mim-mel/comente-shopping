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

export const removeItem = (productId) => {
  //아이템 꺼내오기
  let items = getFromStorage();
  //해당 아이템 삭제하기
  items = items.filter((item) => item.id !== productId);
  //localStorage basket 키 삭제하기
  console.log(items);
  localStorage.removeItem("basket");
  //새로 집어넣기
  localStorage.setItem("basket", JSON.stringify(items));
};
