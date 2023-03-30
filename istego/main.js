const obj = {
    a: 1234,
    b: 2345,
    c: 234234,
    test: {
        g: 7777,
        j: 88888
    }
}


const clone = {};

Object.assign(clone,obj);

clone.test.j = 9999;

console.log(obj);
console.log(clone);