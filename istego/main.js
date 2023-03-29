const obj = {
    a: 1234,
    b: 2345,
    c: 234234,
    add (name, number) {
        this[name] = number;
    }
}

obj.test = 333;

delete obj.a;

console.log(obj);