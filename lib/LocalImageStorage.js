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
			img.setAttribute('crossOrigin', 'anonymous');
			img.src = path;
			img.onload = function() {
				var canvas = document.createElement('canvas');
				canvas.id = "LIS_Canvas";
				canvas.style.display = "none";
				canvas.width = img.width;
				canvas.height = img.height;
				document.body.appendChild(canvas);
				var context = canvas.getContext('2d');
				context.drawImage(img, 0, 0);
				var data = canvas.toDataURL("");
				if(LocalImageStorage.GetAvailableSpace() < data.length*2/1024){
					throw {
						'error': "Image too large!",
						'message': "This web browser has no more space to 'offline' images.  Use this error to know when to stop saving to localstorage."
					};
					return path;
				} else {
					localStorage.setItem('LIS_' + name, data);
					var LISCan = document.getElementById("LIS_Canvas");
					LISCan.parentElement.removeChild(LISCan);
					return "Saved!";
				}
			};
		};
		LocalImageStorage.GetImage = function(name) {
			return localStorage.getItem('LIS_' + name);
		};
		LocalImageStorage.RemoveImage = function(name) {
			localStorage.removeItem('LIS_' + name);
			return "Removed!";
		};
		LocalImageStorage.InitializeImage = function(path, name) {
			return new Promise(function(resolve, reject){
				if(!localStorage.getItem('LIS_' + name)) {
					var img = new Image();
					img.setAttribute('crossOrigin', 'anonymous');
					img.src = path;
					img.onload = function() {
						var canvas = document.createElement('canvas');
						canvas.id = "LIS_Canvas";
						canvas.style.display = "none";
						canvas.width = img.width;
						canvas.height = img.height;
						document.body.appendChild(canvas);
						var context = canvas.getContext('2d');
						context.drawImage(img, 0, 0);
						var data = canvas.toDataURL("");
						if(LocalImageStorage.GetAvailableSpace() < data.length*2/1024){
							throw {
								'error': "Image too large!",
								'message': "This web browser has no more space to 'offline' images.  Use this error to know when to stop saving to localstorage."
							};
							resolve(path);
						} else {
							localStorage.setItem('LIS_' + name, data);
							var LISCan = document.getElementById("LIS_Canvas");
							LISCan.parentElement.removeChild(LISCan);
							resolve(LocalImageStorage.GetImage(name));
						};
					};
				} else {
					resolve(LocalImageStorage.GetImage(name));
				}
			});
		};
		
		return LocalImageStorage;
	}
	
	if(typeof(LocalImageStorage) === 'undefined') {
		window.LocalImageStorage = define_library();
	} else {
		console.log("pre-defined");
	}
	
})(window);