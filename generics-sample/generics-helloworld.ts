function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");  // type of output will be 'string'

let output2 = identity("myString");  // type of output will be 'string'



function identity2<T>(arg: T): T {
    return arg;
}

let myIdentity: <U>(arg: U) => U = identity;2



// generic interface
interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identity3<T>(arg: T): T {
    return arg;
}

let myIdentity2: GenericIdentityFn = identity3;