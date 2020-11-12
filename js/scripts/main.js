function search()
{
   var input = $('#input').val();
   $.get("http://api.giphy.com/v1/gifs/search?q='&limit=1'"+input+"&api_key=MKnhlA6fn7IktUX3r5DzPOtEipLKtXbF", function(response) {
       $('#img').html("<img src="+ response.data[0].images.downsized_large.url + ">");

    for(let image of response.images){
      resultHtml = resultHtml + '<img src=${image.images.downsized_large.url} />'
      }
  $('#img').thml(resultsHtml)
}) 
}



