import printProfile from './renderProfile';

const userData = {
  name: 'Tom',
  age: 17,
};

const profile = {
  ...userData,
  company: 'Gromcode',
};

printProfile(profile);

console.log(profile);

const num = 17;

if (num === 18) {
  alert('Hi'); // eslint-disable-line no-alert
}
