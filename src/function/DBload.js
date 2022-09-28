import itemData from '../db/productlist.json';

//항목을 불러오는 함수
export function DBload(item) {
  let itemArr = itemData['product']
    .filter( (db) => {
      return db.itemkind === item;
    })
    .find( (db) => {
      return db.itemlist;
    });


  return itemArr;
}