$(document).ready(function()
{
	$.ajax({url:"https://api.covid19india.org/raw_data.json",async:false,beforeSend: function(){
				$(".footer").hide();
			   }, success: function(data)
		{
			       $(".data").html("");
			      var content="";
			      var temp="";
               var temp1="";
               var temp2="";
               var temp3="";
               var temp4="";
               var temp5="";
               var temp6="";
               var temp7="";
               var b="Ludhiana";
 		 	       content+="<table class='table  table-bordered'><tr><th>Patient No</th><th>Gender</th><th>Detected City</th><th>Detected District</th><th>Nationality</th><th>State-Patient-Number</th><th>Status-Change-Date</th><th>View More</th></tr>";
   		    	 for(a in data.raw_data)
   		   		 {
   		   	
   		    		if(b==data.raw_data[a].detectedstate||b==data.raw_data[a].detecteddistrict||b==data.raw_data[a].detectedcity)
   		    		{
   		    				var temp=data.raw_data[a].patientnumber;
   		    				var temp1=data.raw_data[a].gender;
   		    				var temp2=data.raw_data[a].nationality;
   		    				var temp3=data.raw_data[a].statepatientnumber;
   		    				var temp4=data.raw_data[a].statuschangedate;
   		    				var temp5=data.raw_data[a].detectedcity;
   		    				var temp6=data.raw_data[a].detecteddistrict;
   		    				var temp7=data.raw_data[a].source2;
   		    				if(temp.length==0)
   		    				{
   		    					temp="No Data Found";
   		    				}
   		    				if(temp1.length==0)
   		    				{
   		    					temp1="No Data Found";
   		    				}
   		    				if(temp2.length==0)
   		    				{
   		    					temp2="No Data Found";
   		    				}
   		    				if(temp3.length==0)
   		    				{
   		    					temp3="No Data Found";
   		    				}
   		    				if(temp4.length==0)
   		    				{
   		    					temp4="No Data Found";
   		    				}
   		    				if(temp5.length==0)
   		    				{
   		    					temp5="No Data Found";
   		    				}
   		    				if(temp6.length==0)
   		    				{
   		    					temp6="No Data Found";
   		    				}
   		    				if(temp7.length==0)
   		    				{
   		    					temp7="";
   		    				}
   		    				
   		    		content+="<tr><td><center>"+temp+"</center></td><td>"+temp1+"</td><td>"+temp5+"</td><td>"+temp6+"</td><td>"+temp2+"</td><td>"+temp3+"</td><td>"+temp4+"</td><td><button class='btn btn-danger'><a class='link1' target='_blank' href='"+temp7+"'>Click here</a></button></tr>";
					}
			}
			content+="</table>";
			$(".data").html("");
			$(".data").append(content);
			 },complete:function(data){
				$("#loader").hide();
				$(".footer").show();
			   }});
	$("#sub").click(function()
	{
		$(".data").html("");
		$.ajax({url:"https://api.covid19india.org/raw_data.json",async:false, success: function(data)
		{
			$(".data").html("");
			var content="";
			var temp="";
			var temp1="";
			var temp2="";
			var temp3="";
			var temp4="";
			var temp5="";
			var temp6="";
			var temp7="";
			var b=$(".search2").val();
			var count=0;
			if(b.length==0)
			{
				alert("Please enter some text");
				return;
			}
			b=b.charAt(0).toUpperCase() + b.slice(1).toLowerCase();
         content+="<table class='table  table-bordered'><tr><th>Patient No</th><th>Gender</th><th>Detected City</th><th>Detected District</th><th>Nationality</th><th>State-Patient-Number</th><th>Status-Change-Date</th><th>View More</th></tr>";
   		    	 for(a in data.raw_data)
   		   		 {
   		   	
   		    		if(b==data.raw_data[a].detectedstate||b==data.raw_data[a].detecteddistrict||b==data.raw_data[a].detectedcity)
   		    		{
   		    				var temp=data.raw_data[a].patientnumber;
   		    				var temp1=data.raw_data[a].gender;
   		    				var temp2=data.raw_data[a].nationality;
   		    				var temp3=data.raw_data[a].statepatientnumber;
   		    				var temp4=data.raw_data[a].statuschangedate;
   		    				var temp5=data.raw_data[a].detectedcity;
   		    				var temp6=data.raw_data[a].detecteddistrict;
   		    				var temp7=data.raw_data[a].source2;
   		    				if(temp.length==0)
   		    				{
   		    					temp="No Data Found";
   		    				}
   		    				if(temp1.length==0)
   		    				{
   		    					temp1="No Data Found";
   		    				}
   		    				if(temp2.length==0)
   		    				{
   		    					temp2="No Data Found";
   		    				}
   		    				if(temp3.length==0)
   		    				{
   		    					temp3="No Data Found";
   		    				}
   		    				if(temp4.length==0)
   		    				{
   		    					temp4="No Data Found";
   		    				}
   		    				if(temp5.length==0)
   		    				{
   		    					temp5="No Data Found";
   		    				}
   		    				if(temp6.length==0)
   		    				{
   		    					temp6="No Data Found";
   		    				}
   		    				if(temp7.length==0)
   		    				{
   		    					temp7="";
   		    				}
   		    				
   		    		content+="<tr><td><center>"+temp+"</center></td><td>"+temp1+"</td><td>"+temp5+"</td><td>"+temp6+"</td><td>"+temp2+"</td><td>"+temp3+"</td><td>"+temp4+"</td><td><button class='btn btn-danger'><a target='_blank' href='"+temp7+"'>Click here</a></button></tr>";
   		    				count++;
					}
			}
			content+="</table>";
			if(count==0)
			{
				content="";
				content+="<h1 class='text-center text-danger'>Sorry No Data Found</h1>";
				$(".data").html("");
				$(".data").append(content);
				$(".search2").val("");
				return;
			}
			$(".data").html("");
			$(".data").append(content);
			$(".search2").val("");
	}});
	});

});


