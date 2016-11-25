$('.btn-buy').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

$('.contactUsBtn').on('shown.bs.modal', function () {
  $('#contactusModal').focus()
})

$('.loginModalBtn').on('shown.bs.modal', function () {
  $('#loginModal').focus()
})


console.log("GETJSON");
// Load JSON file products.js
function loadJSON(){
	$.getJSON("products.json", function(data){
		
		for(var i = 0; i < data.length; i++){
			console.log(data[i]);
			product = data[i];
			
			description = product.description;
			header = product.header;
			img = product.image;
			price = product.price;
			productid = product.productid;
			
			
			$("#deals").append(
				'<div class="col-sm-12 col-md-4">' +
				'<div class="thumbnail">' +
				'<img src="images/products/'+img+'" alt="product">' +
				'<div class="caption">' +
				'<h3>'+header+'</h3>' +
				'<p>'+description+'</p>' +
				'<p><a href="#" class="btn btn-primary" role="button">READ MORE</a> <a href="#" class="btn btn-default btn-buy" role="button" data-toggle="modal" data-target="#myModal">BUY NOW</a></p>' +
				'</div>' +
				'</div>' +
				'</div>'
			)
			
			
		}
	});
}


loadJSON();
