function flatten(obj) {
  console.log('input::', obj);
  let arr = [];
  if (!obj.children) {
    arr.push(obj.value);
    console.log('no children::', arr);
    return arr;
  }
  if (obj.children) {
    let val = flatten(obj.children);
    console.log('val::', val);
    arr.push(obj.value);
    console.log('arr::push::', arr);
    arr = arr.concat(val);
    console.log('arr::concat::', arr);
    return arr;
  }
}

let obj1 = {
  value: 1,
  children: {
    value: 5,
    children: {
      value: 6,
    },
  },
};
console.log(flatten(obj1));
