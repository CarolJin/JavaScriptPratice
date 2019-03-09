function httpLib() {
    this.http= new XMLHttpRequest();
};

httpLib.prototype.get = function (url, callBack) {
    this.http.open('GET',url);
    let self = this;
    this.http.onload = function () {
        if(self.http.status===200){
            callBack(null, self.http.responseText);
        }else {
            callBack('Error'+self.http.status);
        }
    };
    this.http.send();
};

httpLib.prototype.post = function (url,data,callBack) {
    this.http.open('POST',url);
    this.http.setRequestHeader('Content-type','application/json');
    let self = this;
    this.http.onload = function () {
        if(self.http.status===200){
            callBack(null, self.http.responseText);
        }else {
            callBack('Error'+self.http.status);
        }
    }
    this.http.send(JSON.stringify(data));
};

httpLib.prototype.put = function (url, data, callBack) {
    this.http.open('PUT',url);
    this.http.setRequestHeader('Content-type','application/json');
    let self = this;
    this.http.onload = function () {
        if(self.http.status===200){
            callBack(null, self.http.responseText);
        }else {
            callBack('Error'+self.http.status);
        }
    };
    this.http.send(JSON.stringify(data));
};

httpLib.prototype.delete = function (url,callBack) {
    this.http.open('DELETE',url);
    this.http.setRequestHeader('Content-type','application/json');
    let self = this;
    this.http.onload = function () {
        if(self.http.status===200){
            callBack(null, self.http.responseText);
        }else {
            callBack('Error'+self.http.status);
        }
    };
    this.http.send();
};

