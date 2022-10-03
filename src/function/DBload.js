import itemData from '../db/productlist.json';

//항목을 불러오는 함수
export function DBload(item) {
  let itemArr = itemData.product
    .filter( (db) => {
      return db.itemkind === item;
    })
    .find( (db) => {
      return db.itemlist;
    });

    // console.log(itemArr.itemlist);
  return itemArr.itemlist;
}

export function RecommendProduct(itemId) {
  let itemArr = itemData.product
  .filter( (db) => {
    return db.itemkind === "FABRIC";
  })
  .find( (db) => {
    return db;
  });
  itemArr = itemArr.itemlist.find(
    (db) => {
      return db.id === itemId;
    }
  );

  return itemArr;
}