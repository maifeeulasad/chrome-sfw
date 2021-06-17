import * as nsfwjs from '/../node_modules/nsfwjs/dist/index.js'

(function (){
	var _images = document.getElementsByTagName("img");

	for(var i = 0; i < _images.length; i++)
	{		
		var _img = _images[i];
		try {
			if(_img.classList===undefined){
				_img.setAttribute('class','');
			}
			_img.classList.add("chrome-sfw");
			_img.addEventListener("mouseenter", function() {	
				_img.classList.remove("chrome-sfw");
			}, false);
			_img.addEventListener("mouseleave", function() {
				_img.classList.add("chrome-sfw");
			}, false);
		} catch (e){
			console.log(e);
		}
	}
})();
