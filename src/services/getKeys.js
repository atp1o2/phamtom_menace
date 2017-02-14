import Store from '../store/store';

const collection = Store.getDefaultData();

function allKeys () {
  return Object.keys(collection[0]);
}

function freightKeys () {
  return ['FCL', 'Air Freight', 'LTL', 'TL', 'Linehaul'];
}

export { allKeys, freightKeys }
