import users from './users.js';
const getInactiveUsers = users => {
  // твой код
  return users.filter(user => user.isActive === false);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
