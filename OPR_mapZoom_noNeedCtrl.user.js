// ==UserScript==
// @name        OPR_mapZoom_noNeedCtrl
// @namespace   asldufhiu32hr9283hf83123
// @author       lokpro
// @include     https://opr.ingress.com/recon*
// @downloadURL https://github.com/Ingrass/OPR_mapZoom_noNeedCtrl/raw/master/OPR_mapZoom_noNeedCtrl.user.js
// @updateURL https://github.com/Ingrass/OPR_mapZoom_noNeedCtrl/raw/master/OPR_mapZoom_noNeedCtrl.user.js
// @version     1.2
// @grant       none
// ==/UserScript==

/*
v1.2 bug fix
v1.1 added support for Map in 'Portal Edit'
*/

var interval = setInterval( function(){
	
	// wait for information available
	let map, map2, locationEditsMap, subCtrl;
	try {
		subCtrl = angular.element(document.getElementById('NewSubmissionController')).scope().subCtrl;
		map = subCtrl.map;
		map2 = subCtrl.map2;
		locationEditsMap = subCtrl.locationEditsMap;
		
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
		map.setOptions({ gestureHandling: "greedy", scaleC11ontrol: true });
		map2.setOptions({ gestureHandling: "greedy", scale1Control: true});
	}else{ //subCtrl.reviewType==='EDIT'
		locationEditsMap.setOptions({ gestureHandling: "greedy"});
	}
	
}, 123 );
