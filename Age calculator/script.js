function calculateAge(){
   let bday=Number(document.getElementById("bday").value);
   let bmonth=Number(document.getElementById("bmonth").value);
   let byear=Number(document.getElementById("byear").value);
   let cday=Number(document.getElementById("cday").value);
   let cmonth=Number(document.getElementById("cmonth").value);
   let cyear=Number(document.getElementById("cyear").value);
   let pyear=cyear-byear;
   let pmonth=cmonth-bmonth;
   let pday=cday-bday;
   if(pmonth<0){
    pmonth+=12;
    pyear--;
   }
   if(pday<0){
    pday+=30;
    pmonth--;
   }

   document.getElementById("result").innerHTML=
    pyear +" years  "+pmonth+" months  "+pday+" days";
   
}