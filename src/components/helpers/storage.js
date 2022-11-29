const storageName = 'products';

// irasyti i storage
//====================(item, keyValue)
/*
localStorage.setItem('key, value');

// pasiimam is storage
const value = localStorage.getItem('key');

if (value) {
  //we have value in storage
}
*/

// funkcija issaugoti localStorage:
export function store(arrToBeStored) {
  const stringFromArr = JSON.stringify(arrToBeStored);
  localStorage.setItem(storageName, stringFromArr);
}

export function isThereValueStored() {
  //======== !! grazina boolean reiksme, null, undefined = false
  return !!localStorage.getItem(storageName);
}

// grazinam verte pries tai su parsindami is json
export function getFromStore() {
  const jsonStoreValue = localStorage.getItem(storageName);
  return JSON.parse(jsonStoreValue);
}
