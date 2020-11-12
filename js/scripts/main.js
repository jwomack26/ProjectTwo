function search(){
  var resultHtml; var input=$('#input').val(); console.log(input) 
  $.get("http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=MKnhlA6fn7IktUX3r5DzPOtEipLKtXbF&quot;", function(response){
    console.log(response.data[0]);
    $('#img').html("<img src="+ response.data[0].images.downsized_large.url + ">");
    
    for(let image of response.data){
      resultHtml = resultHtml + '<img src=' +image.images.downsized_large.url + ">"
    }
    $('#img').html(resultHtml)
  })
}
