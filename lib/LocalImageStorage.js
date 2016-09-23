(function(window) {
	
	'use strict';
	
	function define_library() {
		var LocalImageStorage = {};
		
		LocalImageStorage.help = function() {
			console.log("HELP ME");
		};
		
		LocalImageStorage.GetAvailableSpace = function() {};
		LocalImageStorage.GetUsedSpace = function() {};
		LocalImageStorage.GetReservedSpace = function() {};
		
		LocalImageStorage.AddImage = function(path, name) {};
		LocalImageStorage.GetImage = function(name) {};
		LocalImageStorage.RemoveImage = function(name) {};
		LocalImageStorage.SetReservedSpace = function(size) {};
		
		return LocalImageStorage;
	}
	
	if(typeof(LocalImageStorage) === 'undefined') {
		window.LocalImageStorage = define_library();
	} else {
		console.log("pre-defined");
	}
	
})(window);