//node connections
const loginscreen=document.querySelector('.prelogin');
const button=document.querySelector('.arrow');

//force fullscreen (NOT WORKING)
// document.addEventListener('mousemove',e=>toggleFullscreen())
//does not work without user gesture


//run time code time code
timeContainer=document.querySelector('.timearea');
timeContainer.innerHTML=getTimeString();

//slide up animaton onclick
loginscreen.addEventListener('click',e=>handleSlideUp(e));
document.addEventListener('keyup',e=>spaceSlideUp(e));//for working with spacebar (NOT WORKING)

//login events
document.addEventListener("keyup",e=>handleSubmit(e)); //for pressing enter button
button.addEventListener('click',e=>handleSubmit(e));   //for pressing the arrow button


//code for full screen:
// document.body.requestFullscreen.call(document.body)