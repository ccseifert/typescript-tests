function identity(arg) {
    return arg;
}
var output = identity("myString"); // type of output will be 'string'
var output2 = identity("myString"); // type of output will be 'string'
function identity2(arg) {
    return arg;
}
var myIdentity = identity;
2;
function identity3(arg) {
    return arg;
}
var myIdentity2 = identity3;
