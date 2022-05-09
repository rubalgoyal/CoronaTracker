$(document).ready(function()
{
    var i=0;
    setInterval(function()
        {
            i=i+1;
            $.get("https://programming-quotes-api.herokuapp.com/quotes/lang/en" , function(data, status){
        $("#quote").text(data[i].en);
    });},4000);
		  $.ajax({url: "https://api.covid19india.org/data.json",success:function(cases_time_series)
            {
            $("#mydiv").html("");
            content="";
                 content+="<table class='table table-hover table-striped table-bordered' style='width:100%;'><tr><th>State</th><th>Active</th><th>Confirmed</th><th>Deaths</th><th>Recovered</th></tr>";
                 for(a in cases_time_series.statewise)
                 {

            content+="<tr><td>"+cases_time_series.statewise[a].state+"</td><td>"+cases_time_series.statewise[a].active+"</td><td>"+cases_time_series.statewise[a].confirmed+"</td><td>"+cases_time_series.statewise[a].deaths+"</td><td>"+cases_time_series.statewise[a].recovered+"</td></tr>";
                } 
                content+="</table>";
                $("#mydiv").append(content);
            }});
	
				$.get("https://corona.lmao.ninja/v2/all" , function(data, status){
			$("#cases").text(data.cases);
				$("#deaths").text(data.deaths);
					$("#recovered").text(data.recovered);
						$("#tests").text(data.tests);
					
		});
    content="";
	content1="<div class='jumbotron row'>";
			
		 	$.ajax({url:"https://corona.lmao.ninja/v2/countries/india", success: function(data){
   				
					content1+="<center><h1 class='country'>"+data.country+"</h1></center><div class='col-md-1'></div><div class='col-md-2'><h3>Current Cases</h3><p>"+data.cases+"</p></div><div class='col-md-2'><h3>Today's Cases</h3><p>"+data.todayCases+"</p></div><div class='col-md-2'><h3> Current Deaths</h3><p>"+data.deaths+"</p></div><div class='col-md-2'><h3>Today's Deaths</h3><p>"+data.todayDeaths+"</p></div><div class='col-md-2'><h3>Recovered Cases</h3><p>"+data.recovered+"</p></div><div class='col-md-1'></div>"
										
				content1+="</div>";
				$(".abc").append(content1);

				}});


		 	var dataPoints = [];

var options =  {
    animationEnabled: true,
    theme: "light2",
    title: {
        text: " Covid-19 Cases Data"
    },
    axisX: {
        valueFormatString: "DD MMM YYYY",
    },
    axisY: {
        title: "CASES",
        titleFontSize: 24,
        includeZero: false
    },
    data: [{
        type: "spline", 
        yValueFormatString: "$#,###.##",
        dataPoints: dataPoints
    }]
};

$.ajax({url: "https://api.covid19api.com/country/india/status/confirmed/live", success: function(timelineitems){
    for(var i=0;i<timelineitems.length;i++)
    {
        dataPoints.push({
            x: new Date(timelineitems[i].Date),
            y: timelineitems[i].Cases
        });
    }
    $("#chartContainer").CanvasJSChart(options);
  }});
$(document).on("change", "input",function()
	{
		$(".abc").html("");
		content="";
		content1="";
		content=$("#country").val();
		if(content.length==0)
		{
			alert("Please Enter Some text");
		}
		else
		{
			content1="<div class='jumbotron row'>";
			
		 	$.ajax({url:"https://corona.lmao.ninja/v2/countries/"+content, success: function(data){
   				
					content1+="<center><h1 class='country'>"+data.country+"</h1></center><div class='col-md-1'></div><div class='col-md-2'><h3>Current Cases</h3><p>"+data.cases+"</p></div><div class='col-md-2'><h3>Today's Cases</h3><p>"+data.todayCases+"</p></div><div class='col-md-2'><h3> Current Deaths</h3><p>"+data.deaths+"</p></div><div class='col-md-2'><h3>Today's Deaths</h3><p>"+data.todayDeaths+"</p></div><div class='col-md-2'><h3>Recovered Cases</h3><p>"+data.recovered+"</p></div><div class='col-md-1'></div>"
							
				
				content1+="</div>";
				$(".abc").append(content1);

				}});
			
		}
			var dataPoints = [];

var options =  {
    animationEnabled: true,
    theme: "light2",
    title: {
        text: "Covid-19 Cases Data"
    },
    axisX: {
        valueFormatString: "DD MMM YYYY",
    },
    axisY: {
        title: "CASES",
        titleFontSize: 24,
        includeZero: false
    },
    data: [{
        type: "spline", 
        yValueFormatString: "$#,###.##",
        dataPoints: dataPoints
    }]
};

$.ajax({url: "https://api.covid19api.com/country/"+content+"/status/confirmed/live", success: function(timelineitems){
    for(var i=0;i<timelineitems.length;i++)
    {
        dataPoints.push({
            x: new Date(timelineitems[i].Date),
            y: timelineitems[i].Cases
        });
    }
    $("#chartContainer").CanvasJSChart(options);
  }});

	});
});
