(function (){
	var _images = document.getElementsByTagName('img');

	for(var i = 0; i < _images.length; i++)
	{		
		try {
			var _address = _images[i].getAttribute('src');
			var _class = _images[i].getAttribute('class');
			_class += " sfw";
			_images[i].setAttribute('class',_class);
		} catch (e){
			console.log(e)
		}
	}
})();
