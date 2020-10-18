export const checkRegister = (listData, title, isRegister) => {
  const listStrings = listData.filter(item => {
    if (!isRegister) {
      let compareItem = item.toLowerCase();
      let compareTitle = title.toLowerCase();
      if (compareItem.includes(compareTitle)) return item;
    }
    return item.includes(title);
  });
  return listStrings;
}
