
$(document).ready(function()
{

	var content="";
	content1="<div class='row'>";
	var rowcount=0;
	
	 $.ajax({
	 		url:"https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=COVID&sortBy=popularity&from=2020-05-30&sortBy=publishedAt&apiKey=bc3fbc09cc7c432eb1721599f5d03a06",
			     headers: {
      "X-Requested-With": "XMLHttpRequest",
    },beforeSend: function(){
				$("#loader").show();
				$(".footer").hide();
			   },success: function(data)
	 	 	{
	 	 		console.log("Hi"+data);
	 	 		for(x in data.articles)
	 	 		{
	 	 			rowcount++;
	 	 			content1+="<div class='col-md-3 news'><div class='four'><img alt='Sorry no image' src='"+data.articles[x].urlToImage+"'><h1 class='text-center head'>"+data.articles[x].title+"</h1><div class='overlay'><div class='text'><p>"+data.articles[x].description+"</p><br/><a target='_blank' href='"+data.articles[x].url+"'><button class='btn btn-lg btn-success'>Read More</button></a></div></div></div></div>";
	 	 			if(rowcount%3==0)
					{
						content1+="</div><div class='row'>";
					}
	 	 		}
				content1+="</div>";
				$(".abc").append(content1);
	 	 },   complete:function(data){
			$("#loader").hide();
			$(".footer").show();
		   }});
  });