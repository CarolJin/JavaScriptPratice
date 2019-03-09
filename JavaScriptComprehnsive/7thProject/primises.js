function createPost(post) {
    new Promise(function (resolve,reject) {
        setTimeout(function () {
            const posts = [
                {title: 'JS conprehensive ', body: 'This is the js class'},
                {title: 'Express conprehensive ', body: 'This is the express class'}
            ];
            let error = true;
            if(error){
                reject('Error...');
            }else{
            posts.push(post);
            resolve(posts);}
        },2000)
    })
};

httpLib.prototype.put = function (url, data) {
    this.http.open('PUT',url);
    this.http.setRequestHeader('Content-type','application/json');
    let self = this;
    return new Promise(function (resolve,reject ) {
        self.http.onload = function () {
            if(self.http.status===200){
                resolve(null, self.http.responseText);
            }else {
                reject('Error'+self.http.status);
            }
        };
        this.http.send(JSON.stringify(data));
    })

};

function getPosts(){
    setTimeout(()=>{
        let output ='<ul>';
        posts.forEach((post)=>{
            output+=`<li>Post: ${post.title}, Content: ${post.body}</li>`
        });
        document.getElementById('output').innerHTML=output;
    },4000);
}

createPost({title: 'Post three', body: 'body of the post'}
        .then(getPosts)
        .catch(err=>console.log(err))
);