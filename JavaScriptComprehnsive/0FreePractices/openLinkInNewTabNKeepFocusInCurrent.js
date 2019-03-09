var i = 0;
var windows = [];
window.name = 'parent';

//handle child birth
function announceWindow(win){
    //if there is already a window open, close it and save ref to new one
    if(i==1){
        windows[0].close();
        delete windows[0];
        i = 0;
    }
    //store a reference to the window
    windows[i] = win;
    i++;
}

if (window.opener) {
    window.opener.announceWindow(window);
}
//set the focus back to the parent window
function focusParentWindow(){
    window.open('','parent').focus();
}

function openWindow(url)
{
   // window.name='parent';
    window.open(url, '_blank');
    //window.focus();
    window.blur();
}