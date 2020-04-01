import users from './users.js';
const getSortedUniqueSkills = users =>
  // твой код
  users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      return allSkills;
    }, [])
    .sort()
    .reduce((acc, allSkill) => {
      return acc.includes(allSkill) ? acc : [...acc, allSkill];
    }, []);

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]


