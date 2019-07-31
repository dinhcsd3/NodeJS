function funcParent(text, callback) {
    console.log(text);
    callback(text);
};

function funcCallback(text) {
    console.log('Hello' +' '+ text);
}

funcParent('Hoàng Văn Định', funcCallback);
//console.log(test);

// style 2
funcParent('Xin chào', (text) => {
    console.log('Hoang Van Dinh' +' '+ text);
});
