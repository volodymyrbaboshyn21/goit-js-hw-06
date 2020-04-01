import users from './users.js';
const getUsersWithGender = (users, gender) => {
  // твой код
  return users.filter(user => user.gender === gender).map(user => user.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// const activeUsers = users.filter(user => user.isActive);
