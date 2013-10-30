enyo.loadScript = function (depends, callback) {
  var depends = enyo.isArray(depends) ? depends : [depends],
      ok = true,
      index = 0,
      l = depends.length;

  enyo.runtimeLoading = true;
  
  var complete = function () {
    index++;
    if (index === l) {
      callback(depends);
    } else {
      enyo.machine.script(depends[index], complete, error);
    }
  };
  
  var error = function () {
    ok = false;
    complete();
  };

  if(l > 0) {
    enyo.machine.script(depends[0], complete, error);
  }
};
/*
enyo.loadScript([
  "https://raw.github.com/ryanjduffy/cli/master/source/Command.js",
  "https://raw.github.com/ryanjduffy/cli/master/source/Commands.js",
  "https://raw.github.com/ryanjduffy/cli/master/source/Cursor.js",
], function() {
  // cli.Prompt is dependent on a kind in Command.js
  // cli.Cursor is defined in the last file
  // both should return 'function' if loading happened correctly
  enyo.log(typeof cli.Prompt, typeof cli.Cursor);
});

new enyo.JsonpRequest( {
			url: "https://apis.google.com/js/client.js",
			callbackName: "onload"
		})
		.go()
		.response( this, "apiLoaded" );
*/