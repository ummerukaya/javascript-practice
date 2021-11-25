
let eventDate,date,today,difference,day,hour,min,sec;
function takeDate(){
    eventDate = document.getElementById('eventdate').value;
    document.getElementById('countdowntimer').style.display = 'block';
    date = new Date(eventDate).getTime();
    //console.log(date-today);
    
    let interval = setInterval(function(){
        today = new Date().getTime();
        difference = date-today;
        day = Math.floor(difference/(1000*24*60*60));
        difference = (difference % (1000*24*60*60));
        hour = Math.floor(difference/(1000*60*60));
        difference = (difference %(1000*60*60));
        min = Math.floor(difference/(1000*60));
        difference = (difference%(1000*60));
        sec = Math.floor(difference/1000);
        let showTime=day+" days | "+hour+" hrs | "+min+" min | "+sec+" sec";
        document.getElementById('countdowntimer').innerHTML = showTime;
    },1000);
}


