let welcome;
let myDate = new Date ();
let hour = myDate.getHours();
let minute = myDate.getMinutes();
let second = myDate.getSeconds();
let day = myDate.getDay();
let days = [ "კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი" ];
let months = [ "იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"];
let fullDate = "დღეს" + "/" + myDate.getFullYear() + "/წლის" + myDate.getDate() + "/" + months [myDate.getMonth()] + "ა" + "/" + days[myDate.getDay()];
document.write(fullDate);

if(minute < 10 ){
    minute = "0" + minute;
}

if( second < 10){
    second = "0" + second;
}

if(hour < 12){
    welcome= "დილა მშვიდობისა";
}else if ( hour < 17){
welcome=  "/" + "დღე მშვიდობისა";
}else{
welcome= "საღამო მშვიდობისა";
}
document.write(welcome + "/მიმდინარე დროა:" + hour + ":" + minute + ":" + second);



