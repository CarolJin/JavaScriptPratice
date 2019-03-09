const http = new httpLib();
/*http.get('https://jsonplaceholder.typicode.com/posts',function (err, data) {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
}); */

//get post
http.get('https://jsonplaceholder.typicode.com/posts/1',function (err, data) {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

const data = {
    title: 'Custom post',
    body: 'this is a custom post'
};
/*http.post('https://jsonplaceholder.typicode.com/posts',data, function (err,data) {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});*/
//Put
/*http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err,data) {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});*/

/*Delete
http.delete('https://jsonplaceholder.typicode.com/posts/1',data, function (err,data) {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
*/

