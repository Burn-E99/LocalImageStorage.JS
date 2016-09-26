(function(window) {
	
	'use strict';
	
	function define_library() {
		var LocalImageStorage = {};
		
		LocalImageStorage.GetAvailableSpace = function() {
			var space;
			function gen(n) {
				return new Array((n * 1024) + 1).join('a')
			}
			try {
				for (var i = 0; i <= 10000; i += 250) {
					localStorage.setItem('test', gen(i));
				}
			}
			catch(e) {
				localStorage.removeItem('test');
				space = i ? i - 250 : 0;
			}
			return space;
		};
		
		LocalImageStorage.AddImage = function(path, name) {
			var img = new Image();
			img.src = path;
			img.onload = function() {
				var canvas = document.createElement('LIS_canvas');
				canvas.style.display="none";
				canvas.width = img.width;
				canvas.height = img.height;
				document.body.appendChild(canvas);
				var context = canvas.getContext('2d');
				context.drawImage(img, 0, 0);
				var data = canvas.toDataURL("");
				localStorage.setItem('LIS_' + name, data);
				return "Saved!";
			};
		};
		LocalImageStorage.GetImage = function(name) {
			return localStorage.getItem('LIS_' + name);
		};
		LocalImageStorage.RemoveImage = function(name) {
			localStorage.removeItem('LIS_' + name);
			return "Removed!";
		};
		
		return LocalImageStorage;
	}
	
	if(typeof(LocalImageStorage) === 'undefined') {
		window.LocalImageStorage = define_library();
	} else {
		console.log("pre-defined");
	}
	
})(window);