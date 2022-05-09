    $(document).ready(function()
    {
        var content1="";
  content1="<div class='row'>";
  var rowcount=0;
    $.ajax({
      url:"https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=CoronaVirusInd2&count=30",
      method:'GET',
      headers:{
            'Content-Type': 'application/json',  
            'authorization':"Bearer AAAAAAAAAAAAAAAAAAAAAFAOEQEAAAAACOjqe2myc07Jn7AcLmM0pcJug74%3DIA7Qn38zWSlXIoWHA6QC5VkiLaNzicPpoUMn0HD6OvyCLjOCYS"
      },beforeSend: function(){
        $("#loader").show();
        $(".footer").hide();
         },
      success:function(data)
      {
        console.log(data);
        for(var i=0;i<data.length;i++)
        {
          var temp="";
          rowcount++;
          if(data[i].hasOwnProperty('retweeted_status'))
          {
            if(data[i].retweeted_status.hasOwnProperty('entities'))
            {
               if(data[i].retweeted_status.entities.hasOwnProperty('media'))
              {
                temp=data[i].retweeted_status.entities.media[0].media_url;
                console.log(temp);
              }
            }
          }
            content1+="<div class='col-md-3 tweet'><div class='four'><div class='four1' style='display:flex;'><img class='img1 img-fluid' src='"+data[i].user.profile_image_url+"'/><h4 class='text-center head'>"+data[i].user.name+"</h4></div><br/><img alt='Sorry no image Found' class='abc' src='"+temp+"'><p class='data-time'>"+data[i].created_at.substring(0,19)+"<br/><span style='color:#4ba3bd;'>"+data[i].retweet_count+" Tweets</span></p></p><center><p class='data1'>"+data[i].text+"</p></center><br/></div></div>";
                    if(rowcount%3==0)
          {
            content1+="</div><div class='row'>";
          }
        }
        content1+="</div>";
        $(".main").append(content1);
      },complete:function(data){
      $("#loader").hide();
      $(".footer").show();
    }});
    });