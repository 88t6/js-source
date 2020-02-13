/**
* @Author wangcheng
* @domain www.vwkit.com,www.88t6.com
* 插件使用方法
* LOADING类(用于等待):
*	new VK_LOADING(loadingImageUrl,width,height),
*	params:{loadingImageUrl:'loading等待图片',width:'图片显示宽度',height:'图片显示高度'};
*	method:
*		showLoading(id)--显示Loading,
*		hideLoading(id)--隐藏Loading;
*	params:{id:'LoadingID'}(同一ID只能展示出来一个);
* 自定义弹窗类
*	new VK_POPUPWINDOW(),
*	method:
*		openWindow(data)--打开弹窗,
*		closeWindow(id)--关闭弹窗;
*	data是JSON格式:{html:'文档html',width:'弹窗宽度',height:'弹窗高度'
*		,params:'JSON格式,key支持#.和tagName格式选择器,value为要填充的内容'
*		,events:'JSON格式,key支持#.和tagName格式选择器,value为回调函数',
*		,isMove(选填):'true:可移动,false:不可移动',id:'弹窗ID'};
*	return:openWindow返回windowId用于closeWindow
* 系统弹窗类
*	new VK_SYSTEMWINDOW(),
*	method:
*		initSysWindow(alertCss,confirmCss,toastCss)--初始化系统弹窗,
*		showAlertWindow(title,content,btnName,callback)--打开alert弹窗,
*		showConfirmWindow(title,content,btnNames,callbacks)--打开confirm弹窗;
*		showToast(text,timeout)--打开toast
*		closeToast(id)--关闭toast(id不填则全部关闭)
*	params:{css(选填):'系统弹窗css样式',title:'弹窗标题',content:'弹窗内容'
*		,btnName:'按钮名称',callback:'按钮回调函数',btnNames:'按钮名称(数组)'
*		,callbacks:'按钮回调函数(数组)',text:'内容',timeout:'显示时间'};
*	
* Canvas类(Canvas工具)
*	new VK_CANVAS(domId,width,height,contextType)
*	method:
*		getPoints(),返回数组canvas-ctx
*	params:{domId:'canvasId',width:'宽度','height':'高度',contextType(选填):'不填默认2d'}
*/

(function(window,undefined){
/*系统工具类*/
function System(){};
System.prototype = new Object();
/*DOM对象查找支持#.和TAGNAME*/
System.prototype.find = function(selector,docs){
	if(!docs || docs == null){docs = document;};
	if(!(docs instanceof Array)){docs = [docs];};
	if(!(selector instanceof Array)){
		selector = selector.replace(/( )+/g,' ').replace(/^( )+/,'').replace(/( )+$/,'').split(' ');
	};
	var temp = selector.shift();
	var tempDocs = new Array();
	for(var i=0;i<docs.length;i++){
		var tags = docs[i].getElementsByTagName('*');
		for(var j=0;j<tags.length;j++){
			var tag = tags[j];
			var id = tag.getAttribute("id");
			id = id!=null?id:"";
			var className = tag.className;
			className = className!=null?(className.replace(/( )+/g,'.')):"";
			var tagName = tag.tagName;
			var abc = "#"+id+"."+className+"%"+tagName;
			var a = /\#[0-9A-Za-z_]+/g.exec(temp);a=a!=null?a[0]:"";
			var b = /\.[0-9A-Za-z_]+/g.exec(temp);b=b!=null?b[0]:"";
			var c = /\%[0-9A-Za-z_]+/g.exec("%"+temp);c=c!=null?c[0].toUpperCase():"";
			if(abc.indexOf(a)>=0 && (abc.indexOf(b+'.')>=0 || abc.indexOf(b+'%')>=0) && abc.indexOf(c)>=0){
				tempDocs.push(tags[j]);
			};
		};
	};
	if(selector.length>0){
		return this.find(selector,tempDocs);
	}else{
		return tempDocs;
	};
};
/*新增样式表*/
System.prototype.appendCss = function(domId,css){
	var cssFile = this.find("#"+domId)[0];
	if(cssFile){
		if('styleSheet' in cssFile){
			cssFile.styleSheet.cssText = (cssFile.styleSheet.cssText+css);
		}else{
			cssFile.innerHTML=cssFile.innerHTML+css;
		};
	}else{
		cssFile = document.createElement("style");cssFile.setAttribute("id",domId);
		cssFile.setAttribute("rel","stylesheet");cssFile.setAttribute("type","text/css");
		if('styleSheet' in cssFile){
			cssFile.styleSheet.cssText = css;
		}else{
			cssFile.innerHTML = css;
		};
		this.find('head')[0].appendChild(cssFile);
	};
};
/*DOM对象增加CLASS*/
System.prototype.addClass = function(elem, cls){
	if(!this.hasClass(elem, cls)){
		elem.className = elem.className == '' ? cls : elem.className + ' ' + cls;
	};
};
/*删除DOM对象的CLASS*/
System.prototype.removeClass = function(elem, cls){
	if(this.hasClass(elem, cls)){
		var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' ';
		while (newClass.indexOf(' ' + cls + ' ') >= 0) {
			newClass = newClass.replace(' ' + cls + ' ', ' ');
		};
		elem.className = newClass.replace(/^\s+|\s+$/g, '');
	};
};
/*查看DOM对象是否有这个CLASS*/
System.prototype.hasClass = function(elem, cls){
	cls = cls || '';
	if(cls.replace(/\s/g, '').length == 0){return false;};
	return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
};
/*DOM事件绑定*/
System.prototype.bind = function(dom,type,fun){
	if('addEventListener' in dom){
		dom.addEventListener(type,function(event){
			fun.call(dom,event);
		});
	}else{
		dom.attachEvent("on"+type,function(event){
			fun.call(dom,event);
		});
	};
};
/*删除DOM*/
System.prototype.remove = function(dom){
	if(dom){dom.parentNode.removeChild(dom);};
};
/*获取浏览器参数*/
System.prototype.getBrowser = function(){
	return {
		'width':document.documentElement.clientWidth,
		'height':document.documentElement.clientHeight,
		'scrollTop':document.body.scrollTop||document.documentElement.scrollTop,
		'scrollLeft':document.body.scrollLeft||document.documentElement.scrollLeft
	};
};
/*DOM对象事件类*/
function DOMEvent(){
	this.onResize();
	this.onLoad();
};
DOMEvent.prototype = new System();
/*RESIZE数组事件定义*/
DOMEvent.prototype.resizeEventList = {};
/*新增RESIZE事件*/
DOMEvent.prototype.addResizeEvent = function(key,fun){
	this.resizeEventList[key] = fun;
	if(fun && fun!=null){fun.call(this,null);};
};
/*删除RESIZE事件*/
DOMEvent.prototype.delResizeEvent = function(key){
	this.resizeEventList[key] = null;
};
/*浏览器RESIZE事件监听*/
DOMEvent.prototype.onResize = function(){
	var obj = this;
	this.bind(window,'resize',function(event){
		for(var key in obj.resizeEventList){
			if(obj.resizeEventList[key] && obj.resizeEventList[key]!=null){
				obj.resizeEventList[key].call(this,event);
			};
		};
	});
};
/*ONLOAD数组事件定义*/
DOMEvent.prototype.loadEventList = {};
/*新增ONLOAD事件*/
DOMEvent.prototype.addLoadEvent = function(key,fun){
	this.loadEventList[key] = fun;
};
/*删除ONLOAD事件*/
DOMEvent.prototype.delLoadEvent = function(key){
	this.loadEventList[key] = null;
};
/*浏览器ONLOAD事件监听*/
DOMEvent.prototype.onLoad = function(){
	var obj = this;
	this.bind(window,'load',function(event){
		for(var key in obj.loadEventList){
			if(obj.loadEventList[key] && obj.loadEventList[key]!=null){
				obj.loadEventList[key].call(this,event);
			};
		};
	});
};
/*遮罩层类*/
function Mask(css,className){this.initMask(css,className);};
Mask.prototype = new DOMEvent();
Mask.prototype.defaultCssId = "VK_SYS";
Mask.prototype.defaultMaskClass = "VK_MASK_CLS";
/*初始化MASK*/
Mask.prototype.initMask = function(css,className){
	if(!css || css == null || css == ''){
		css = "."+this.defaultMaskClass+"{position:fixed;top:0px;left:0px;z-index:1000000;"
			+"background:black;opacity:0.5;filter:alpha(opacity=50);"
			+"}";
	}else{
		if(className && className!=null && className!=''){this.defaultMaskClass = className;};
	};
	this.appendCss(this.defaultCssId,css);
};
/*展示MASK*/
Mask.prototype.showMask = function(id){
	if(!id || id == null || id == ''){
		id = this.defaultMaskClass;
	}else{
		id = "VK_MASK_" + id;
	};
	var mask = this.find("#"+id);
	var obj = this;
	if(this.find("."+this.defaultMaskClass).length == 0){
		this.scrollTop = this.getBrowser().scrollTop;
		this.scrollLeft = this.getBrowser().scrollLeft;
		this.overflow = this.find("body")[0].style.overflow;
		this.find("body")[0].style.overflow = 'hidden';
	};
	if(mask.length<=0){
		mask = document.createElement("div");
		mask.setAttribute("id",id);this.addClass(mask,this.defaultMaskClass);
		this.find("body")[0].appendChild(mask);
		this.addResizeEvent(this.defaultMaskClass,function(){
			obj.resizeMask();
		});
	};
};
/*隐藏MASK*/
Mask.prototype.hideMask = function(id){
	if(!id || id == null || id == ''){
		id = this.defaultMaskClass;
	}else{
		id = "VK_MASK_" + id;
	};
	var mask = this.find("#"+id)[0];
	if(mask){this.remove(mask);};
	if(this.find("."+this.defaultMaskClass).length == 0){
		window.scrollTo(this.scrollLeft,this.scrollTop);
		this.find("body")[0].style.overflow = this.overflow;
		this.delResizeEvent(this.defaultMaskClass);
	};
};
/*RESIZE-MASK*/
Mask.prototype.resizeMask = function(){
	var masks = this.find("."+this.defaultMaskClass);
	for(var i=0;i<masks.length;i++){
		var mask = masks[i];
		var browser = this.getBrowser();
		mask.style.width = browser.width+"px";
		mask.style.height = browser.height+"px";
	};
};
/*LOADING类*/
function Loading(loadingImageUrl,width,height){
	this.loadingImageUrl = loadingImageUrl?loadingImageUrl:"http://files.88t6.com/images/loading.gif";
	this.loadingImageWidth = width?width:100;
	this.loadingImageHeight = height?height:100;
	this.initLoading(this.loadingImageUrl,this.loadingImageWidth,this.loadingImageHeight);
};
Loading.prototype = new Mask(".mask_loading{position:fixed;top:0px;left:0px;z-index:1000000;"
	+"background:black;opacity:0.5;filter:alpha(opacity=50);"
	+"}","mask_loading");
Loading.prototype.defaultLoadingId = "VK_LOADING";
Loading.prototype.defaultLoadingClass = "VK_LOADING_CLS";
/*初始化Loading*/
Loading.prototype.initLoading = function(loadingImageUrl,width,height){
	this.appendCss(this.defaultCssId,"."+this.defaultLoadingClass+"{"
		+"width:"+width+"px;"+"height:"+height+"px;position:fixed;z-index:1000001;}");
	this.appendCss(this.defaultCssId,"."+this.defaultLoadingClass+" img{margin:0;padding:0;"
		+"width:"+width+"px;height:"+height+"px;}");
};
/*展示Loading*/
Loading.prototype.showLoading = function(id){
	if(!id || id == null || id == ''){
		id = this.defaultLoadingId;
	}else{
		id = "VK_LOADING_" + id;
	};
	if(this.find("#"+id).length<=0){
		var obj = this;
		this.showMask(id);
		var loading = document.createElement("div");
		loading.setAttribute("id",id);
		this.addClass(loading,this.defaultLoadingClass);
		var loadingImg = document.createElement("img");
		loadingImg.setAttribute("src",this.loadingImageUrl);
		loading.appendChild(loadingImg);
		this.find("body")[0].appendChild(loading);
		this.addResizeEvent(this.defaultLoadingClass,function(){
			obj.resizeLoading();
		});
	};
};
/*隐藏Loading*/
Loading.prototype.hideLoading = function(id){
	if(!id || id == null || id == ''){
		id = this.defaultLoadingId;
	}else{
		id = "VK_LOADING_" + id;
	};
	var loading = this.find("#"+id)[0];
	if(loading){this.hideMask(id);this.remove(loading);};
	if(this.find("."+this.defaultLoadingClass).length == 0){
		this.delResizeEvent(this.defaultLoadingClass);
	};
};
/*RESIZE-Loading*/
Loading.prototype.resizeLoading = function(){
	var loadings = this.find("."+this.defaultLoadingClass);
	for(var i=0;i<loadings.length;i++){
		var loading = loadings[i];
		var browser = this.getBrowser();
		var left = (browser.width-loading.offsetWidth)/2;
		var top = (browser.height-loading.offsetHeight)/2;
		loading.style.left = (left>0?left:0)+"px";
		loading.style.top = (top>0?top:0)+"px";
	};
};
/*自定义内容的弹窗类*/
function PopupWindow(){this.initPopWindow();};
PopupWindow.prototype = new Mask(".mask_window{position:fixed;top:0px;left:0px;z-index:100000;"
	+"background:black;opacity:0.5;filter:alpha(opacity=50);"
	+"}","mask_window");
PopupWindow.prototype.windowIndex = 100000;
PopupWindow.prototype.windowClassName = "VK_POPUPWINDOW";
PopupWindow.prototype.windowTitleClassName = "VK_POPUPWINDOW_TITLE";
/*初始化自定义弹窗*/
PopupWindow.prototype.initPopWindow = function(){
	this.appendCss(this.defaultCssId,"."+this.windowClassName+"{position:fixed;}");
	this.appendCss(this.defaultCssId,"."+this.windowClassName+" ."+this.windowTitleClassName+"{"
		+"position:absolute;top:-10px;left:0px;width:100%;height:20px;cursor:move;}");
};
/*开启一个弹窗*/
PopupWindow.prototype.openWindow = function(data){
	if(data["html"]!=null && data["width"]!=null && data["height"]!=null && data["params"]!=null && data["events"]!=null){
		this.showMask(this.windowClassName);
		var windowId = "WINDOW_"+parseInt(Math.random()*1000000000000000);
		if(this.find("#"+windowId).length<=0){
			var windowTitleHTML = "<div id='"+windowId+"_title' class='"+this.windowTitleClassName+"'></div>";
			var windowDiv = document.createElement("div");
			windowDiv.setAttribute("id",windowId);
			this.addClass(windowDiv,this.windowClassName);
			windowDiv.style.zIndex = (++this.windowIndex);
			if(!data['isMove']){data['isMove'] = false;};
			if(data['isMove']){
				windowDiv.innerHTML = windowTitleHTML+data['html'];
			}else{
				windowDiv.innerHTML = data['html'];
			};
			windowDiv.style.width = data["width"];
			windowDiv.style.height = data["height"];
			this.find("body")[0].appendChild(windowDiv);
			this.activeWindow(windowId);
			this.dragWindow(windowId);
			for(var key in data['params']){
				var tags = this.find(key,[windowDiv]);
				for(var i=0;i<tags.length;i++){
					var dom = tags[i];
					if(this.find("."+this.windowTitleClassName,[windowDiv])[0]!=dom){
						if(dom.tagName.toUpperCase() == "INPUT"){
							dom.value = data['params'][key];
						}else if(dom.tagName.toUpperCase() == "TEXTAREA"){
							dom.innerText = data['params'][key];
						}else{
							dom.innerHTML = data['params'][key];
						};
					};
				};
			};
			for(var key in data['events']){
				var tags = this.find(key,[windowDiv]);
				for(var i=0;i<tags.length;i++){
					var dom = tags[i];dom.setAttribute("selector",key);
					this.bind(dom,'click',function(){
						var key = this.getAttribute("selector");
						if(data['events'][key]){data['events'][key].call(this);};
					});
				};
			};
			var obj = this;
			this.bind(windowDiv,"click",function(){
				obj.activeWindow(windowId);
			});
			this.addResizeEvent(this.windowClassName,function(){
				obj.resizeWindow();
			});
		};
		return windowId;
	}else{
		throw "JsonData must required 'html,width,height,params,events'";
	};
	return null;
};
/*关闭一个弹窗*/
PopupWindow.prototype.closeWindow = function(windowId){
	var windowDiv = this.find("#"+windowId)[0];
	if(windowDiv){this.remove(windowDiv)};
	if(this.find("."+this.windowClassName).length <= 0){
		this.hideMask(this.windowClassName);
		this.delResizeEvent(this.windowClassName);
	};
};
/*激活窗口*/
PopupWindow.prototype.activeWindow = function(windowId){
	var popupWindows = this.find("."+this.windowClassName);
	var w = this.find("#"+windowId)[0];
	var index = 0,temp1 = 0;
	if(w){temp1 = parseInt(w.style.zIndex);};
	for(var i=0;i<popupWindows.length;i++){
		var popupWindow = popupWindows[i];
		var temp2 = parseInt(popupWindow.style.zIndex);
		if(temp1<temp2){
			popupWindow.style.zIndex = (temp2-1);
			if(index<temp2){index = temp2;};
		};
	};
	if(index!=0){w.style.zIndex = index;};
};
/*弹窗拖动事件绑定*/
PopupWindow.prototype.dragWindow = function(windowId){
	var windowDiv = this.find("#"+windowId);
	var titleDiv = this.find("."+this.windowTitleClassName,windowDiv)[0];
	if(titleDiv){
		var obj = this;
		var startFlag = false;
		var startX=null,startY=null,divLeft=null,divTop=null;
		function start(event){
			if('stopPropagation' in event){event.stopPropagation();};
			if('preventDefault' in event){event.preventDefault();};
			if('cancleBubble' in event){event.cancleBubble();};
			startX = event.targetTouches?event.targetTouches[0].screenX:event.screenX;
			startY = event.targetTouches?event.targetTouches[0].screenY:event.screenY;
			divLeft = windowDiv[0].style.left.substring(0,windowDiv[0].style.left.indexOf('p'));
			divTop = windowDiv[0].style.top.substring(0,windowDiv[0].style.left.indexOf('p'));
			startFlag = true;
			obj.activeWindow(windowId);
		};
		function end(event){startX=null,startY=null,divLeft=null,divTop=null;startFlag = false;};
		function process(event){
			if(startFlag && startX!=null && startY!=null && divLeft!=null && divTop!=null){
				var x = event.targetTouches?event.targetTouches[0].screenX:event.screenX;
				var y = event.targetTouches?event.targetTouches[0].screenY:event.screenY;
				var left = (x-startX+parseFloat(divLeft))>=0?(x-startX+parseFloat(divLeft)):0;
				var top = (y-startY+parseFloat(divTop))>=0?(y-startY+parseFloat(divTop)):0;
				var browser = obj.getBrowser();
				if((left + windowDiv[0].offsetWidth)>browser.width){
					left = browser.width - windowDiv[0].offsetWidth;
				};
				if((top + windowDiv[0].offsetHeight)>browser.height){
					top = browser.height - windowDiv[0].offsetHeight;
				};
				windowDiv[0].style.left = left+"px";
				windowDiv[0].style.top = top +"px";
			};
		};
		this.bind(titleDiv,"mousedown",function(event){start(event);});
		this.bind(document,"mousemove",function(event){process(event);});
		this.bind(document,"mouseup",function(event){end(event);});
		this.bind(titleDiv,"touchstart",function(event){start(event);});
		this.bind(document,"touchmove",function(event){process(event);});
		this.bind(document,"touchend",function(event){end(event);});
	};
};
/*RESIZE-弹窗*/
PopupWindow.prototype.resizeWindow = function(){
	var popupWindows = this.find("."+this.windowClassName);
	for(var i=0;i<popupWindows.length;i++){
		var popupWindow = popupWindows[i];
		var browser = this.getBrowser();
		var left = (browser.width-popupWindow.offsetWidth)/2+i*30;
		var top = (browser.height-popupWindow.offsetHeight)/2+i*30;
		popupWindow.style.left = (left>0?left:0)+"px";
		popupWindow.style.top = (top>0?top:0)+"px";
	};
};
/*系统弹窗类*/
function SystemWindow(alertCss,confirmCss){this.initSysWindow(alertCss,confirmCss);};
SystemWindow.prototype = new Mask(".mask_sys_window{position:fixed;top:0px;left:0px;z-index:1000000;"
	+"background:black;opacity:0.5;filter:alpha(opacity=50);"
	+"}","mask_sys_window");
SystemWindow.prototype.defaultAlertId = "VK_ALERT";
SystemWindow.prototype.defaultConfirmId = "VK_CONFIRM";
SystemWindow.prototype.defaultToastCls = "VK_TOAST";
/*初始化系统弹窗*/
SystemWindow.prototype.initSysWindow = function(alertCss,confirmCss,toastCss){
	if(alertCss && alertCss!=null && alertCss!=''){
		this.appendCss(this.defaultCssId,alertCss);
	}else{
		/*alert默认样式*/
		this.appendCss(this.defaultCssId,"#"+this.defaultAlertId+"{width:350px;background:#fff;border-radius:4px;}");
		this.appendCss(this.defaultCssId,"#"+this.defaultAlertId+" .VK_TITLE{width:100%;height:50px;line-height:50px;background-color:#f6f6f6;border-radius: 4px 4px 0px 0px;text-align:left;border-bottom: 1px solid #dcdcdc;font-size:14px;text-indent:24px;color:#424242;}");
		this.appendCss(this.defaultCssId,"#"+this.defaultAlertId+" .VK_CLOSE{position:absolute;cursor:pointer;top:12px;right:10px;width:20px;height:20px;}");
		this.appendCss(this.defaultCssId,"#"+this.defaultAlertId+" .VK_CLOSE span{color:#ccc;font-weight:bold;display:block;color:#424242;}");
		this.appendCss(this.defaultCssId,"#"+this.defaultAlertId+" .VK_CONTENT{width:90%;margin: 0 5%;}");
		this.appendCss(this.defaultCssId,"#"+this.defaultAlertId+" .VK_CONTENT .VK_TEXT{word-break:break-all;margin-top:20px;margin-bottom:10px;text-align:center;font-size:14px;line-height:20px;}");
		this.appendCss(this.defaultCssId,"#"+this.defaultAlertId+" .VK_EVENT{cursor:pointer;font-size:14px;text-align:center;width:80px;height:35px;line-height:35px;background-color:#f15352;color:white;border-radius:4px;margin:28px auto 18px auto;}");
	};
	if(confirmCss && confirmCss!=null && confirmCss!=''){
		this.appendCss(this.defaultCssId,confirmCss);
	}else{
		/*confirm默认样式*/
		this.appendCss(this.defaultCssId,"#"+this.defaultConfirmId+"{width:350px;background:#fff;border-radius:4px;}");
		this.appendCss(this.defaultCssId,"#"+this.defaultConfirmId+" .VK_TITLE{width:100%;height:50px;line-height:50px;background-color:#f6f6f6;border-radius: 4px 4px 0px 0px;text-align:left;border-bottom: 1px solid #dcdcdc;font-size:14px;text-indent:24px;color:#424242;}");
		this.appendCss(this.defaultCssId,"#"+this.defaultConfirmId+" .VK_CLOSE{position:absolute;cursor:pointer;top:12px;right:10px;width:20px;height:20px;}");
		this.appendCss(this.defaultCssId,"#"+this.defaultConfirmId+" .VK_CLOSE span{color:#ccc;font-weight:bold;display:block;color:#424242;}");
		this.appendCss(this.defaultCssId,"#"+this.defaultConfirmId+" .VK_CONTENT{width:90%;margin: 0 5%;}");
		this.appendCss(this.defaultCssId,"#"+this.defaultConfirmId+" .VK_CONTENT .VK_TEXT{word-break:break-all;margin-top:20px;margin-bottom:10px;text-align:center;font-size:14px;line-height:20px;}");
		this.appendCss(this.defaultCssId,"#"+this.defaultConfirmId+" .VK_EVENTS{width:100%;height:65px;font-size:14px;}");
		this.appendCss(this.defaultCssId,"#"+this.defaultConfirmId+" .VK_EVENTS .VK_BTN{width:25%;height:35px;line-height:35px;border-radius:4px;float:left;margin-top:15px;margin-left:16.67%;text-align:center;cursor:pointer;}");
		this.appendCss(this.defaultCssId,"#"+this.defaultConfirmId+" .VK_EVENTS .VK_BTN_CONFIRM{background-color:#f15352;color:white;}");
		this.appendCss(this.defaultCssId,"#"+this.defaultConfirmId+" .VK_EVENTS .VK_BTN_CANCEL{background-color:gray;color:white;}");
	};
	if(toastCss && toastCss!=null && toastCss!=''){
		this.appendCss(this.defaultCssId,toastCss);
	}else{
		/*Toast默认样式*/
		this.appendCss(this.defaultCssId,"."+this.defaultToastCls+"{background-color:black;padding:10px 20px;color:white;font-size:16px;border-radius:5px;text-align:center;min-width:100px;}");
	};
	this.appendCss(this.defaultCssId,"#"+this.defaultAlertId+",#"+this.defaultConfirmId+",."+this.defaultToastCls+"{position:fixed;z-index:1000000;}");
};
/*开启alert弹窗*/
SystemWindow.prototype.showAlertWindow = function(title,content,btnName,callback){
	var obj = this;this.closeAlertWindow();
	this.showMask(this.defaultAlertId);
	var alertDiv = document.createElement("div");
	alertDiv.setAttribute("id",this.defaultAlertId);
	/*title*/
	var alertTitleDiv = document.createElement("div");
	this.addClass(alertTitleDiv,"VK_TITLE");
	alertTitleDiv.innerHTML = (title!=null?title:"系统提示");
	alertDiv.appendChild(alertTitleDiv);
	/*内容*/
	var alertContentDiv = document.createElement("div");
	this.addClass(alertContentDiv,"VK_CONTENT");
	var alertTextDiv = document.createElement("div");
	this.addClass(alertTextDiv,"VK_TEXT");
	alertTextDiv.innerHTML = content;
	alertContentDiv.appendChild(alertTextDiv);
	alertDiv.appendChild(alertContentDiv);
	/*按钮*/
	var alertEventDiv = document.createElement("div");
	this.addClass(alertEventDiv,"VK_EVENT");
	alertEventDiv.innerHTML = (btnName!=null?btnName:"确定");
	this.bind(alertEventDiv,"click",function(){
		if(callback!=null){callback.call(alertEventDiv);};
		obj.closeAlertWindow();
	});
	alertDiv.appendChild(alertEventDiv);
	/*Close按钮*/
	var alertCloseDiv = document.createElement("div");
	this.addClass(alertCloseDiv,"VK_CLOSE");
	var alertSpanDiv = document.createElement("span");
	alertSpanDiv.innerHTML="×";alertCloseDiv.appendChild(alertSpanDiv);
	this.bind(alertCloseDiv,"click",function(){
		obj.closeAlertWindow();
	});
	alertDiv.appendChild(alertCloseDiv);
	this.find("body")[0].appendChild(alertDiv);
	this.addResizeEvent(this.defaultAlertId,function(){
		obj.resizeAlertWindow();
	});
};
/*关闭alert弹窗*/
SystemWindow.prototype.closeAlertWindow = function(){
	var alertWindow = this.find("#"+this.defaultAlertId)[0];
	if(alertWindow){
		this.remove(alertWindow);
		this.hideMask(this.defaultAlertId);
		this.delResizeEvent(this.defaultAlertId);
	};
};
/*RESIZE—alert弹窗*/
SystemWindow.prototype.resizeAlertWindow = function(){
	var alertWindow = this.find("#"+this.defaultAlertId)[0];
	if(alertWindow){
		var browser = this.getBrowser();
		var left = (browser.width-alertWindow.offsetWidth)/2;
		var top = (browser.height-alertWindow.offsetHeight)/2;
		alertWindow.style.left = (left>0?left:0)+"px";
		alertWindow.style.top = (top>0?top:0)+"px";
	};
};
/*开启Confirm弹窗*/
SystemWindow.prototype.showConfirmWindow = function(title,content,btnNames,callbacks){
	/*数据校验*/
	if(btnNames && btnNames!=null && !btnNames instanceof Array){
		console.error("btnNames type must be Array!");return;
	};
	if(callbacks && callbacks!=null && !callbacks instanceof Array){
		console.error("callbacks type must be Array!");return;
	};
	if(!btnNames || btnNames == null){btnNames = new Array();};
	if(!callbacks || callbacks == null){callbacks = new Array();};
	var obj = this;this.closeConfirmWindow();
	this.showMask(this.defaultConfirmId);
	var confirmDiv = document.createElement("div");
	confirmDiv.setAttribute("id",this.defaultConfirmId);
	/*title*/
	var confirmTitleDiv = document.createElement("div");
	this.addClass(confirmTitleDiv,"VK_TITLE");
	confirmTitleDiv.innerHTML = (title!=null?title:"系统提示");
	confirmDiv.appendChild(confirmTitleDiv);
	/*内容*/
	var confirmContentDiv = document.createElement("div");
	this.addClass(confirmContentDiv,"VK_CONTENT");
	var confirmTextDiv = document.createElement("div");
	this.addClass(confirmTextDiv,"VK_TEXT");
	confirmTextDiv.innerHTML = content;
	confirmContentDiv.appendChild(confirmTextDiv);
	confirmDiv.appendChild(confirmContentDiv);
	/*按钮*/
	var confirmEventDiv = document.createElement("div");
	this.addClass(confirmEventDiv,"VK_EVENTS");
	/*确认按钮*/
	var confirmBtn = document.createElement("div");
	this.addClass(confirmBtn,"VK_BTN");
	this.addClass(confirmBtn,"VK_BTN_CONFIRM");
	confirmBtn.innerHTML = (btnNames[0]?btnNames[0]:"确定");
	this.bind(confirmBtn,"click",function(){
		if(callbacks[0]){callbacks[0].call(confirmBtn);};
		obj.closeConfirmWindow();
	});
	confirmEventDiv.appendChild(confirmBtn);
	/*取消按钮*/
	var cancelBtn = document.createElement("div");
	this.addClass(cancelBtn,"VK_BTN");
	this.addClass(cancelBtn,"VK_BTN_CANCEL");
	cancelBtn.innerHTML = (btnNames[1]?btnNames[1]:"取消");
	this.bind(cancelBtn,"click",function(){
		if(callbacks[1]){callbacks[1].call(cancelBtn);};
		obj.closeConfirmWindow();
	});
	confirmEventDiv.appendChild(cancelBtn);
	confirmDiv.appendChild(confirmEventDiv);
	/*Close按钮*/
	var confirmCloseDiv = document.createElement("div");
	this.addClass(confirmCloseDiv,"VK_CLOSE");
	var confirmSpanDiv = document.createElement("span");
	confirmSpanDiv.innerHTML="×";confirmCloseDiv.appendChild(confirmSpanDiv);
	this.bind(confirmCloseDiv,"click",function(){
		obj.closeConfirmWindow();
	});
	confirmDiv.appendChild(confirmCloseDiv);
	this.find("body")[0].appendChild(confirmDiv);
	this.addResizeEvent(this.defaultConfirmId,function(){
		obj.resizeConfirmWindow();
	});
};
/*关闭Confirm弹窗*/
SystemWindow.prototype.closeConfirmWindow = function(){
	var confirmWindow = this.find("#"+this.defaultConfirmId)[0];
	if(confirmWindow){
		this.remove(confirmWindow);
		this.hideMask(this.defaultConfirmId);
		this.delResizeEvent(this.defaultConfirmId);
	};
};
/*RESIZE—Confirm弹窗*/
SystemWindow.prototype.resizeConfirmWindow = function(){
	var confirmWindow = this.find("#"+this.defaultConfirmId)[0];
	if(confirmWindow){
		var browser = this.getBrowser();
		var left = (browser.width-confirmWindow.offsetWidth)/2;
		var top = (browser.height-confirmWindow.offsetHeight)/2;
		confirmWindow.style.left = (left>0?left:0)+"px";
		confirmWindow.style.top = (top>0?top:0)+"px";
	};
};
/*打开Toast*/
SystemWindow.prototype.showToast = function(text,timeout){
	var obj = this;
	var toastId = "TOAST_"+parseInt(Math.random()*1000000000000000);
	var toast = document.createElement("div");
	toast.setAttribute("id",toastId);
	this.addClass(toast,this.defaultToastCls);
	toast.innerHTML = text;
	this.find("body")[0].appendChild(toast);
	setTimeout(function(){obj.closeToast(toastId);},timeout?timeout:3000);
	this.addResizeEvent(this.defaultConfirmId,function(){
		obj.resizeToast();
	});
	return toastId;
};
/*关闭Toast*/
SystemWindow.prototype.closeToast = function(id){
	if(id && id!=null && id!=''){
		var toastWindow = this.find("#"+id)[0];
		if(toastWindow){
			this.remove(toastWindow);
		};
	}else{
		var toastWindow = this.find("."+this.defaultToastCls);
		for(var i=0;i<toastWindow.length;i++){
			if(toastWindow[i]){
				this.remove(toastWindow[i]);
			};
		};
	};
	if(this.find("."+this.defaultToastCls).length<=0){
		this.delResizeEvent(this.defaultToastId);
	};
};
/*Resize-Toast*/
SystemWindow.prototype.resizeToast = function(){
	var toastWindow = this.find("."+this.defaultToastCls);
	for(var i=0;i<toastWindow.length;i++){
		if(toastWindow[i]){
			var browser = this.getBrowser();
			var left = (browser.width-toastWindow[i].offsetWidth)/2;
			var top = (browser.height-toastWindow[i].offsetHeight)/2;
			toastWindow[i].style.left = (left>0?left:0)+"px";
			toastWindow[i].style.top = (top>0?top:0)+"px";
		};
	};
};
/*canvas工具*/
function Canvas(domId,width,height,contextType){
	this.canvas = this.find(domId);
	this.canvasCache = [];
	this.contextType = contextType?contextType:'2d';
	this.init(width,height);
	return this;
};
Canvas.prototype = new System();
Canvas.prototype.init = function(width,height){
	for(var i=0;i<this.canvas.length;i++){
		if(width){this.canvas[i].style.width=width;};
		if(height){this.canvas[i].style.height=height;};
		this.canvasCache.push(document.createElement('canvas'));
	};
	this.draw();
};
Canvas.prototype.getPaints = function(){
	var paints = [];
	for(var i=0;i<this.canvasCache.length;i++){
		paints.push(this.canvasCache[i].getContext(this.contextType));
	};
	return paints;
};
Canvas.prototype.draw = function(){
	var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame;
	var obj = this;
	function execute(){
		for(var i=0;i<obj.canvas.length;i++){
			var point = obj.canvas[i].getContext(obj.contextType);
			point.drawImage(obj.canvasCache[i],0,0);
		};
		requestAnimationFrame(execute);
	};
	execute();
};
Canvas.prototype.clear = function(){
	var paints = this.getPaints();
	for(var i=0;i<paints.length;i++){
		var paint = paints[i];
		paint.fillStyle="#FFFFFF";
		paint.beginPath();  
		paint.fillRect(0,0,this.canvas[i].width,this.canvas[i].height);  
		paint.closePath();
	};
};
/*对外接口*/
/*LOADING*/
window['VK_LOADING'] = Loading;
/*自定义弹窗*/
window['VK_POPUPWINDOW'] = PopupWindow;
/*系统弹窗*/
window['VK_SYSTEMWINDOW'] = SystemWindow;
/*canvas工具*/
window['VK_CANVAS'] = Canvas;
})(window);