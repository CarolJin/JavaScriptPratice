/**
 * Created by viveksh2 on 6/13/16.
 */
function getRequest() {
  var request;
    if(window.XMLHttpRequest){
        request  = new XMLHttpRequest();
    }else{
        request = new ActiveXObject();
    }
   return request;
}

function loadAsynchronousXHR() {
    //1. create an XHR
    //2. configure an XHR: using the open method
    //3. wait for any state changes
    //4. send the XHR
    let xhr = getRequest();
    xhr.open('GET','data.txt');
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState=== 4 && xhr.status === 200){
            console.log("XHR "+ xhr.responseText);
            document.querySelector('#output1').textContent=xhr.responseText;
        }
    };
    xhr.send();
}

function loadAsynchronousXMLFile() {
    //1. create an XHR
    //2. configure an XHR: using the open method
    //3. wait for any state changes
    //4. send the XHR
    let xhr = getRequest();
    xhr.open('GET','myXml.xml');
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState=== 4 && xhr.status === 200){
            console.log(xhr.responseXML);
          //  document.querySelector('#output2').textContent=xhr.responseText;
            let items = xhr.responseXML.getElementsByTagName('name');
            let output = '<ul>';
           // let itemsArr = Array.from(items);
            for(let i=0; i<items.length; i++){
                output+= `<li>${items[i].firstChild.nodeValue}</li>`
            }
            output+='<ul>';
            document.querySelector('#output2').innerHTML=output;
        }
    };
    xhr.send();
}

document.querySelector('#searchInput').addEventListener('keyup',loadAsynchronousJsonFile);

function loadAsynchronousJsonFile(evt) {
    //1. create an XHR
    //2. configure an XHR: using the open method
    //3. wait for any state changes
    //4. send the XHR
    let val = evt.target.value;
    let myRegexp = new RegExp(val,'i');
    let xhr = getRequest();
    xhr.open('GET','data.json');
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState=== 4 && xhr.status === 200){
            console.log(xhr.responseText);
            //  document.querySelector('#output2').textContent=xhr.responseText;
            let items = JSON.parse(xhr.responseText);
            let output = '<ul>';
            for(let key in items){
                if(items[key].name.search(myRegexp) !== -1 || items[key].bio.search(myRegexp) !== -1) {
                    output += `<li>
                        <h2>${items[key].name}</h2>
                        <img src="images/${items[key].shortname}_tn.jpg"/>
                        <p>${items[key].bio}</p>
                        </li>`;
                    output += '</ul>'
                }
            }
            output+='<ul>';
            document.querySelector('#output3').innerHTML=output;
        }
    };
    xhr.send();
}



