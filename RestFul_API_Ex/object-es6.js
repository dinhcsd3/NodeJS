let old_object = {"title":'old_object'};
let new_object = Object.assign({}, old_object);

new_object.title = 'new_object';

console.log(JSON.stringify(old_object));
console.log(JSON.stringify(new_object));
