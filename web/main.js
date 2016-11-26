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
			discount = product.discount;
			category = product.category;
			
			
			discountpercent = "0." + discount;
			discountedprice = price * discountpercent;
			
			
			if(category == "bag"){
				$("#bags").append(
					'<li><a href="#bag-deals">'+header+'</a></li>'
				);
				
				$("#bag-deals").append(
					'<div class="col-sm-12 col-md-4">' +
					'<div class="thumbnail">' +
					'<p class="discount">'+discount+'% OFF!</p>' +
					'<img src="images/products/'+img+'" alt="product">' +
					
					'<div class="caption">' +
					'<h3>'+header+'</h3>' +
					'<h4><span class="line-thru">€'+price+'</span> NOW €'+discountedprice.toFixed(2)+'</h4>' +
					'<p>'+description+'</p>' +
					'<p><a href="#" class="btn btn-success btn-buy" role="button" data-toggle="modal" data-target="#myModal">ADD TO CART</a></p>' +
					'</div>' +
					'</div>' +
					'</div>'
				)
			}else{
				$("#chairs").append(
					'<li><a href="#chair-deals">'+header+'</a></li>'
				);
				$("#chair-deals").append(
					'<div class="col-sm-12 col-md-4">' +
					'<div class="thumbnail">' +
					'<p class="discount">'+discount+'% OFF!</p>' +
					'<img src="images/products/'+img+'" alt="product">' +
					
					'<div class="caption">' +
					'<h3>'+header+'</h3>' +
					'<h4><span class="line-thru">€'+price+'</span> NOW €'+discountedprice.toFixed(2)+'</h4>' +
					'<p>'+description+'</p>' +
					'<p><a href="#" class="btn btn-success btn-buy" role="button" data-toggle="modal" data-target="#myModal">ADD TO CART</a></p>' +
					'</div>' +
					'</div>' +
					'</div>'
				)
			}
			
			
			
			
			
			
			
			
			
		}
	});
}


loadJSON();
