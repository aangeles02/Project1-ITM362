function init(){
	
	var FirstName = document.forms["info"]["FirstName"].value;
	var LastName = document.forms["info"]["LastName"].value;
	var Email = document.forms["info"]["email"].value;
	
		if(FirstName =="")
		{
			alert("Please enter your first name");
		}
		else if(LastName =="")
		{
			alert("Please enter your last name");
		}
		else if (Email =="")
		{
			alert("Please enter your email address");
		}
		else
		{
			alert("Thank you for signing up");
		}
	}

