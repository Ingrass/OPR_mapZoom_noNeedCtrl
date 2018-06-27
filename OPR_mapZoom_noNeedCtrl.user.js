// ==UserScript==
// @name        OPR_mapZoom_noNeedCtrl
// @namespace   asldufhiu32hr9283hf83123
// @author       lokpro
// @include     https://opr.ingress.com/recon*
// @downloadURL https://github.com/Ingrass/OPR_mapZoom_noNeedCtrl/raw/master/OPR_mapZoom_noNeedCtrl.user.js
// @updateURL https://github.com/Ingrass/OPR_mapZoom_noNeedCtrl/raw/master/OPR_mapZoom_noNeedCtrl.user.js
// @version     1.1
// @grant       none
// ==/UserScript==

/*
v1.1 added support for Map in 'Portal Edit'
*/

var interval = setInterval( function(){
	
	// wait for information available
	let map, map2, locationEditsMap;
	try {
		map = angular.element(document.getElementById('NewSubmissionController')).scope().subCtrl.map;
		map2 = angular.element(document.getElementById('NewSubmissionController')).scope().subCtrl.map2;
		locationEditsMap = angular.element(document.getElementById('NewSubmissionController')).scope().subCtrl.locationEditsMap;
		
		if( subCtrl.reviewType==='NEW' ){
			if( ! map || !map2 ) return;
		}else{ //subCtrl.reviewType==='EDIT'
			if( !locationEditsMap ) return;
		}
	} catch (e) {
		return;
	}
	// information OK
	clearInterval( interval );
	
	if( subCtrl.reviewType==='NEW' ){
		map.setOptions({ gestureHandling: "greedy"});
		map2.setOptions({ gestureHandling: "greedy"});
	}else{ //subCtrl.reviewType==='EDIT'
		locationEditsMap.setOptions({ gestureHandling: "greedy"});
	}
	
}, 123 );