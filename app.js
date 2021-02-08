var order =prompt ("What Do you  prefer a Hotel or a Motel?");
While (order !== "Hotel"&& order !== "Motel")
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
var numOfbeds =prompt ("How many beds do you want?");
var result ="";
for (var i =0;i<numOfbeds;i++)
{
    result =result+choice;

}
document.write (result)