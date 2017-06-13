var Clock = {};
Date d=new Date();
Clock.hr=d.getHours();
Clock.min=d.getMinutes();
Clock.sec=d.getSeconds();
Clock.getHours=function(){
return Clock.hr;
};
Clock.getMinutes=function(){
return Clock.min;
};
Clock.getSeconds=function(){
return Clock.sec;
};