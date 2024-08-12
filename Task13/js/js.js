function sub()
{
   

  const age=document.getElementById("age").value;
   const  name=document.getElementById("name").value;
   const timestamp = new Date().toISOString();
   const userObject = {
                "name": name,
                "age": age,
                "timestamp": timestamp
            };
            console.log(userObject);

}


