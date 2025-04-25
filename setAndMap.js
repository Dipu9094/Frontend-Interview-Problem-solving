// Set: stores unique values
const ids = new Set([1, 2, 2, 3]);
console.log(ids); // Set(3) { 1, 2, 3 }

// Map: key-value pairs (keys can be anything)
const userMap = new Map();
userMap.set('name', 'Fauzia');
userMap.set({ id: 1 }, 'admin');
console.log(userMap.get('name')); // Fauzia
