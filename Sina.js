(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Sina_atlas_", frames: [[0,0,1400,615],[1392,646,461,212],[1402,431,462,213],[0,617,462,213],[1402,216,463,213],[928,831,460,212],[1402,0,463,214],[928,617,462,212],[464,617,462,213],[0,832,461,208]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.點陣圖1 = function() {
	this.spriteSheet = ss["Sina_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖10 = function() {
	this.spriteSheet = ss["Sina_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖11 = function() {
	this.spriteSheet = ss["Sina_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖2 = function() {
	this.spriteSheet = ss["Sina_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖3 = function() {
	this.spriteSheet = ss["Sina_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖4 = function() {
	this.spriteSheet = ss["Sina_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖5 = function() {
	this.spriteSheet = ss["Sina_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖6 = function() {
	this.spriteSheet = ss["Sina_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖7 = function() {
	this.spriteSheet = ss["Sina_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.點陣圖9 = function() {
	this.spriteSheet = ss["Sina_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.高清图二维码 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.點陣圖7();
	this.instance.parent = this;
	this.instance.setTransform(-184,-106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184,-106,462,213);


(lib.股票二维码 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.點陣圖4();
	this.instance.parent = this;
	this.instance.setTransform(-183,-106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183,-106,460,212);


(lib.直播二维码 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.點陣圖2();
	this.instance.parent = this;
	this.instance.setTransform(-184,-106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184,-106,462,213);


(lib.新闻二维码 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.點陣圖3();
	this.instance.parent = this;
	this.instance.setTransform(-184,-106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184,-106,463,213);


(lib.博客二维码 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.點陣圖10();
	this.instance.parent = this;
	this.instance.setTransform(-183,-106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183,-106,461,212);


(lib.体育二维码 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.點陣圖6();
	this.instance.parent = this;
	this.instance.setTransform(-184,-106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184,-106,462,212);


(lib.手机新浪网二维码 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.點陣圖5();
	this.instance.parent = this;
	this.instance.setTransform(-184,-107);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184,-107,463,214);


(lib.财经二维码 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.點陣圖11();
	this.instance.parent = this;
	this.instance.setTransform(-184,-107);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184,-107,462,213);


(lib.星座二维码 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.點陣圖9();
	this.instance.parent = this;
	this.instance.setTransform(-253,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-253,-105,461,208);


(lib.高清图 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.instance = new lib.高清图二维码("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-244,59.1,1,1,0,0,0,47,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AlfFfQiRiRgBjOQABjNCRiSQCSiRDNgBQDOABCRCRQCTCSAADNQAADOiTCRQiRCTjOAAQjNAAiSiTg");
	this.shape.setTransform(49.8,49.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.股票 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.instance = new lib.股票二维码("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(337,106,1,1,0,0,0,47,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AlfFfQiRiRgBjOQABjNCRiSQCSiRDNgBQDOABCRCRQCTCSAADNQAADOiTCRQiRCTjOAAQjNAAiSiTg");
	this.shape.setTransform(49.8,49.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.直播 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.instance = new lib.直播二维码("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(347,106.5,1,1,0,0,0,47,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AlmFmQiViUAAjSQAAjRCViVQCViVDRAAQDSAACUCVQCVCVABDRQgBDSiVCUQiUCVjSABQjRgBiViVg");
	this.shape.setTransform(50.8,50.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.新闻 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.instance = new lib.新闻二维码("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(336,106.5,1,1,0,0,0,47.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AlYFZQiPiPAAjKQAAjJCPiPQCPiPDJAAQDKAACPCPQCOCPABDJQgBDKiOCPQiPCOjKABQjJgBiPiOg");
	this.shape.setTransform(49.5,49.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.博客 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.instance = new lib.博客二维码("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-241,71,1,1,0,0,0,47.5,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AlwFxQiZiYgBjZQABjXCZiZQCZiZDXgBQDZABCYCZQCZCZAADXQAADZiZCYQiYCZjZAAQjXAAiZiZg");
	this.shape.setTransform(52.3,52.3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.体育 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.instance = new lib.体育二维码("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-244,55.1,1,1,0,0,0,47,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AlwFxQiZiYgBjZQABjXCZiZQCZiZDXgBQDZABCYCZQCZCZAADXQAADZiZCYQiYCZjZAAQjXAAiZiZg");
	this.shape.setTransform(52.3,52.3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.手机新浪网 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.instance = new lib.手机新浪网二维码("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(384,70.1,1,1,0,0,0,47.5,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AnZHaQjEjFAAkVQAAkVDEjEQDEjEEVAAQEVAADFDEQDEDEAAEVQAAEVjEDFQjFDEkVAAQkVAAjEjEg");
	this.shape.setTransform(67,67);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.财经 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.instance = new lib.财经二维码("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-240,-32.9,1,1,0,0,0,47,-0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AlwFxQiZiYgBjZQABjXCZiZQCZiZDXgBQDZABCYCZQCZCZAADXQAADZiZCYQiYCZjZAAQjXAAiZiZg");
	this.shape.setTransform(52.3,52.3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.星座 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.instance = new lib.星座二维码("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-238,15.1,1,1,0,0,0,-22.5,-1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AlwFxQiZiYgBjZQABjXCZiZQCZiZDXgBQDZABCYCZQCZCZAADXQAADZiZCYQiYCZjZAAQjXAAiZiZg");
	this.shape.setTransform(52.3,52.3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.Sina = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.财经();
	this.instance.parent = this;
	this.instance.setTransform(1071.8,460.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.财经(), 3);

	this.instance_1 = new lib.博客();
	this.instance_1.parent = this;
	this.instance_1.setTransform(987.8,246.7);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.博客(), 3);

	this.instance_2 = new lib.星座();
	this.instance_2.parent = this;
	this.instance_2.setTransform(836.5,118.7);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.星座(), 3);

	this.instance_3 = new lib.高清图();
	this.instance_3.parent = this;
	this.instance_3.setTransform(789.8,546.7,1,1,0,0,0,49.8,49.8);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.高清图(), 3);

	this.instance_4 = new lib.体育();
	this.instance_4.parent = this;
	this.instance_4.setTransform(726.3,195.3,1,1,0,0,0,52.3,52.3);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.体育(), 3);

	this.instance_5 = new lib.手机新浪网();
	this.instance_5.parent = this;
	this.instance_5.setTransform(671,354.9,1,1,0,0,0,67,67);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.手机新浪网(), 3);

	this.instance_6 = new lib.股票();
	this.instance_6.parent = this;
	this.instance_6.setTransform(496.8,490.7,1,1,0,0,0,49.8,49.8);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2, false, new lib.股票(), 3);

	this.instance_7 = new lib.新闻();
	this.instance_7.parent = this;
	this.instance_7.setTransform(285.9,322.8,1,1,0,0,0,48.8,48.8);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2, false, new lib.新闻(), 3);

	this.instance_8 = new lib.直播();
	this.instance_8.parent = this;
	this.instance_8.setTransform(455.8,194.8,1,1,0,0,0,50.8,50.8);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 2, false, new lib.直播(), 3);

	this.instance_9 = new lib.點陣圖1();
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(700,350,1400,662.5);
// library properties:
lib.properties = {
	width: 1400,
	height: 700,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Sina_atlas_.png", id:"Sina_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;