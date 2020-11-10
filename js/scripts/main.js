function search()
{
   var input = $('#input').val();
   $.get('http://api.giphy.com/v1/gifs/search?q='+input+'&api_key=MKnhlA6fn7IktUX3r5DzPOtEipLKtXbF', function(response) {
       $('#img').html("<img src="+ response.data[0].images.downsized_large.url + ">");

}) 


}

