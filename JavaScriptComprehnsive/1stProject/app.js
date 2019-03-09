function Container(){this.items=[];};
Container.prototype.constructor=Container;
Container.prototype.addItem=function(item){this.items.push(item);};
function LimitedContainer(){
    Container.call(this);
};
LimitedContainer.prototype=new Container();
LimitedContainer.prototype.constructor=LimitedContainer;
LimitedContainer.prototype.max=3;
LimitedContainer.prototype.addItem=function(item){
    if(this.items.length>this.max){
        throw "Out of space";
    }
    Container.prototype.addItem.call(this,item);
};