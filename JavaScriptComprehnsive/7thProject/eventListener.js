function getTextDataFetch(){
    fetch('text.txt')
        .then(function (res) {
            return res.text;
        }).then(function (data) {
        console.log(data);
        document.getElementById('output').innerHTML=`<h3>${data}</h3>`
    })
}
document.getElementById('button1').addEventListener('click', getTextDataFetch);


document.getElementById('button2').addEventListener('click', getJsonDataFecth);
function getJsonDataFecth() {
    fetch('data.json')
        .then(function (res) {
            return res.json();
        }).then(function (data) {
        console.log(data);
        let output ='<ul>';
        data.forEach((user)=>{
            output+=`<li>
             <h2>Name : ${user.login}</h2> 
              Avatar : <img src="${user.avator.url}">
            </li>`
        });
        output+='</ul>';
        document.getElementById('output').innerHTML= output;
    }).catch(function (err) {
        console.log(err);
    })
}

document.getElementById('button3').addEventListener('click', getAPIDataFecth);
function getAPIDataFecth() {
}

