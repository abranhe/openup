module.exports = function() {
	this.netbeans = function(url){
		// require('child_process').exec('open /Applications/NetBeans/NetBeans\\ 8.2.app/ && /Applications/NetBeans/NetBeans\\ 8.2.app/Contents/MacOS/netbeans --open ' + url);
		require('child_process').exec('open  /Applications/NetBeans/NetBeans\\ 8.2.app/Contents/MacOS/netbeans --open ' + url);
	};
}
