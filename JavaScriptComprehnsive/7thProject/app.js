const posts = [
{title: 'JS conprehensive ', body: 'This is the js class'},
{title: 'Express conprehensive ', body: 'This is the express class'}
];

function createPosts(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    },3000)
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

createPosts({title: 'New JS conprehensive ', body: 'New body for This is the js class'}, getPosts());
//getPosts(); -- if you don't have a `callback` function, you need to separate this step.