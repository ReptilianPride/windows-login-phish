
const convertToName=(index,flag)=>{
    //flag 1 to get day name
    //flag 0 to get month name
    const dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const monthNames=["January","February","March","April","May","June","July","Augest","September","October","November","December"];
    if(flag){
        return dayNames[index];
    }
    else{
        return monthNames[index];
    }
};

const fixFormat=(data)=>{
    if(data<=1){
        return '0'+data;
    }
    else{
        return data;
    }
};

const getTimeString=()=>{
    const date=new Date();
    let time =date.getTime();
    let data={
        hour: fixFormat(date.getHours()),
        minute: fixFormat(date.getMinutes()),
        dayname: convertToName(date.getDay(),1),
        monthname: convertToName(date.getMonth(),0),
        daydate:date.getDate()
    }
    
    

    const displayString=`
        <p class="time" style="font-size:80px;font-weight:100;margin:0;padding:0;">${data.hour}:${data.minute}</p>
        <p class="dates" style="font-size:50px;font-weight:100;margin:0;padding:0">${data.dayname}, ${data.monthname} ${data.daydate}</p>
    `;
    return displayString;
};






