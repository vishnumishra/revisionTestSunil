var r = {};
//fibonacci
r.fibonacci = function (position) {
    if (position < 1) return;
    if (Math.floor(position) != position) return;
    if (position == 1) {
        return 0;
    }
    if(position == 2){
        return 1;
    }
    return r.fibonacci(position-1) + r.fibonacci(position -2);
}
//reverse text
r.reverseText = function (str){
    splitString = str.split("");
    reverseArray = splitString.reverse();
    joinArray = reverseArray.join("");
    return joinArray;
}
//reverse text with white spaces
r.reverseText = function (str){
    splitString = str.split("");
    reverseArray = splitString.reverse();
    joinArray = reverseArray.join("");
    return joinArray;
}

exports.r = r;

