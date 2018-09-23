// get the name of day and time

var d = new Date();
    var str = "Today is: ";
    var str2 = "<br>Current time is: ";
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
document.write(str+days[d.getDay()]);

if( (d.getHours()) > 12)
{
  str2+=(d.getHours()%12)+" PM : " + d.getMinutes()+ " : " + d.getSeconds();
}
else
{
  str2+=d.getHours()+ " AM : " + d.getMinutes() + " : " + d.getSeconds();
}
document.write( str2);

// Sample Output

// Today is: Sunday
// Current time is : 10PM : 38 : 40