const Api  = (url)  => {
  return fetch(url).then(res => res.json())
};

const ghUrl = 'https://Api.github.com';
const user = 'mjgartendev';

const profileRef = Api(`${ghUrl}/users/${user}`);
const gistsRef = Api(`${ghUrl}/users/${user}/gists`);
const reposRef = Api(`${ghUrl}/users/${user}/repos`);

const Store = new Map();
Store.set('checked', true)
  .set('name', user)
  .set('number', 10)
  .set('lists', ['one', 'two', 'three'])
  .set('profile', profileRef)
  .set('gists', gistsRef)
  .set('repos', reposRef)
;
export {
  Store
}