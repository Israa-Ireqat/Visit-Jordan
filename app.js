var order =prompt ("What Do you  prefer a Hotel or a Motel?");
while (order !== "Hotel" && order !== "Motel")
{
    order= prompt ("What Do you prefer a Hotel or Motel?")
}
var choice ="";
if (order =="Hotel")
{
   choice ='<img src="Hotel.jpg"/>';
}
else if (order =="Motel")
{
choice ='<img src="Motel.jpg"/>';
}
document.write(choice)
var bed = '<img src="bed.jpg"/>'
var numOfbeds =prompt ("How many beds do you want?");
var result ="";
for (var i =0 ;i<numOfbeds ;i++)
{
    result=result+bed;
}
function printInput (orderf,numOfbedsf){
    document.write ('Your choice is :'+ orderf +' room Consists of '+numOfbedsf+ 'beds');
}
printInput (order,numOfbeds)
document.write (result);

