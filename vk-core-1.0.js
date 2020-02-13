/**
* @Author wangcheng
* @domain 88t6.com-vwkit.com
* @email admin@vwkit.com
* @include 弹窗控件,遮罩层......
*/

/**
* 系统工具
*/
function System(){};
System.prototype = new Object();
System.prototype.resizeList = new Array();
System.prototype.addResize = function(name,callback){
	if(callback!=null){callback.call();};
	if(this.resizeList.length == 0 && window['onresize']!=null){this.resizeList[0] = {"name":"origin","callback":window['onresize']}};
	this.resizeList[this.resizeList.length] = {"name":name,"callback":callback};
	this.onresize();
};
System.prototype.delResize = function(name){
	for(var i=0;i<this.resizeList.length;i++){
		if(this.resizeList[i]['name']==name){
			this.resizeList.splice(i,1);
		};
	};
};
System.prototype.onresize = function(){
	var obj = this;
	window['onresize'] = function(){
		for(var i=0;i<obj.resizeList.length;i++){
			if(obj.resizeList[i]['callback']!=null){obj.resizeList[i]['callback'].call();};
		};
	};
};
System.prototype.addCss = function(id,css){
	var cssFile = document.getElementById(id);
	if(cssFile!=null){
		cssFile.innerHTML=cssFile.innerHTML+css;
	}else{
		cssFile = document.createElement("style");cssFile.setAttribute("id",id);
		cssFile.setAttribute("rel","stylesheet");cssFile.setAttribute("type","text/css");
		cssFile.innerHTML = css;document.head.appendChild(cssFile);
	};
};
System.prototype.getElementsByClass = function(classnames){
	var classobj= new Array();
	var classint=0;
	var tags=document.getElementsByTagName("*");
	for(var i in tags){
		if(tags[i].nodeType==1){
			var classname = tags[i].getAttribute("class");
			if(classname){
				var index = classname.indexOf(classnames);
				if((index == 0 && (index+classnames.length == classname.length)) 
					|| (index>0 && (index+classnames.length == classname.length) && classname.substring(index-1,index)==" ")
					|| (index==0 && (index+classnames.length<classname.length) && classname.substring(index+classnames.length,index+classnames.length+1)==" ")
					|| (index>0 && (index+classnames.length<classname.length) && classname.substring(index-1,index)==" " && classname.substring(index+classnames.length,index+classnames.length+1)==" ")){
					classobj[classint]=tags[i];
					classint++;
				};
			};
		};
	};
	classobj.length = classobj.length;
	return classobj;
};
System.prototype.hasClass = function(elem, cls){
	cls = cls || '';
	if (cls.replace(/\s/g, '').length == 0) return false;
	return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
};
System.prototype.addClass = function(elem, cls){
	if (!this.hasClass(elem, cls)) {
		elem.className = elem.className == '' ? cls : elem.className + ' ' + cls;
	};
};
System.prototype.removeClass = function(elem, cls){
	if (this.hasClass(elem, cls)) {
		var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' ';
		while (newClass.indexOf(' ' + cls + ' ') >= 0) {
			newClass = newClass.replace(' ' + cls + ' ', ' ');
		};
		elem.className = newClass.replace(/^\s+|\s+$/g, '');
	};
};
System.prototype.pixelToInteger = function(pixel){
	if(pixel.indexOf("px")>=0){
		pixel = pixel.substring(0,pixel.length-2);
	};
	return parseInt(pixel);
};

/**
* 遮罩层
*/
function Mask(){}
Mask.prototype = new System();
Mask.prototype.scrollTop = null;
Mask.prototype.showMask = function(){
	this.hideMask();
	if(document.getElementById("maskLayer")==null){
		var mask = document.createElement("div");mask.setAttribute("id","maskLayer");
		if(document.getElementById("system").innerHTML.indexOf("#maskLayer")<0){
			this.addCss("system","#maskLayer{background:black;position:fixed;top:0px;left:0px;z-index:1000000000;filter:alpha(opacity=80);opacity:0.8;}");
		};
		this.scrollTop = parseInt(document.body.scrollTop);
		document.body.style.height=document.documentElement.clientHeight+"px";
		document.getElementsByTagName("html")[0].style.overflow="hidden";
		document.body.style.overflow="hidden";
		document.body.appendChild(mask);this.addResize("mask",this.resizeMask);
	};
};
Mask.prototype.hideMask = function(){
	var mask = document.getElementById("maskLayer");
	if(mask!=null){
		var showArray = this.getElementsByClass("usemask");
		if(showArray.length<=0){
			mask.remove();this.delResize("maskLayer");
			document.getElementsByTagName("html")[0].style.overflow="";
			document.body.style.overflow="";
			document.body.style.height="";
			if(this.scrollTop!=null){
				document.body.scrollTop = this.scrollTop;
				this.scrollTop = null;
			};
		};
	};
};
Mask.prototype.resizeMask = function(){
	var mask = document.getElementById("maskLayer");
	if(mask!=null){
		mask.style.width=document.documentElement.clientWidth+"px";
		mask.style.height=(document.documentElement.clientHeight+100)+"px";
	};
};

/**
* 重写alert弹窗
*/
function Alert(){};
Alert.prototype = new Mask();
Alert.prototype.init = function(css,title,btnName,isAllowExecDown){
	var obj = this;
	obj.isAllowExecDown = isAllowExecDown?isAllowExecDown:false;
	this.addCss("system","#alert{position:fixed;z-index:2147483647;}");
	this.addCss("system","#alert .close{position:absolute;cursor:pointer;}");
	this.addCss("system","#alert .event{cursor:pointer;}");
	this.addCss("system","#alert .content .text{word-break:break-all;}");
	obj.addCss("system",css);
	window['alert'] = function(content,callback){
		obj.open(title,btnName,content,callback);
		if(!isAllowExecDown){
			throw "WARNING Alert AutoStop JS CONTINUE,Please Use CallBack!";
		};
	};
};
Alert.prototype.open = function(title,btnName,content,callback){
	var obj = this;
	obj.destory();
	var alertMain = document.createElement("div");
	alertMain.setAttribute("id","alert");alertMain.setAttribute("class","usemask");
	if(title!=null){
		var alertTitle = document.createElement("div");alertTitle.setAttribute("class","title");
		alertTitle.innerHTML = title;
		alertMain.appendChild(alertTitle);
	};
	var alertContent = document.createElement("div");alertContent.setAttribute("class","content");
	var alertText = document.createElement("div");alertText.setAttribute("class","text");
	alertText.innerHTML = content;
	alertContent.appendChild(alertText);alertMain.appendChild(alertContent);
	if(btnName!=null){
		var alertEvent = document.createElement("div");alertEvent.setAttribute("class","event");
		alertEvent.innerHTML = btnName;
		alertEvent.onclick = function(){
			if(callback!=null){callback.call();};
			obj.destory();
		};
		alertMain.appendChild(alertEvent);
	};
	var alertClose = document.createElement("div");alertClose.setAttribute("class","close");
	var alertSpan = document.createElement("span");alertSpan.innerHTML="×";alertClose.appendChild(alertSpan);
	alertClose.onclick=function(){
		obj.destory();
	};
	alertMain.appendChild(alertClose);
	this.showMask();document.body.appendChild(alertMain);this.addResize("alert",this.resizeAlert);
};
Alert.prototype.resizeAlert = function(){
	var alert = document.getElementById("alert");
	if(alert!=null){
		var top = (document.documentElement.clientHeight-alert.offsetHeight)/2;
		var left = (document.documentElement.clientWidth-alert.offsetWidth)/2;
		alert.style.top=(top>0?top:0)+"px";
		alert.style.left=(left>0?left:0)+"px";
	};
};
Alert.prototype.destory = function(){
	var alert = document.getElementById("alert");
	if(alert!=null){alert.remove();this.hideMask();this.delResize("alert");};
};

/**
* 新增loading方法
*/
function Loading(){};
Loading.prototype = new Mask();
Loading.prototype.init = function(image,width,height){
	var obj = this;
	this.addCss("system","#loading{position:fixed;z-index:1000000000;}");
	window["openLoading"] = function(){
		obj.open(image,width,height);
	};
	window["closeLoading"] = function(){
		obj.destory();
	};
};
Loading.prototype.open = function(image,width,height){
	var obj = this;
	obj.destory();
	var loadingMain = document.createElement("div");
	loadingMain.setAttribute("id","loading");loadingMain.setAttribute("class","usemask");
	var imageEle = document.createElement("img");
	imageEle.setAttribute("src",image);
	imageEle.setAttribute("width",width);
	imageEle.setAttribute("height",height);
	loadingMain.appendChild(imageEle);
	this.showMask();document.body.appendChild(loadingMain);
	this.addResize("loading",this.resizeLoading);
};
Loading.prototype.resizeLoading = function(){
	var loading = document.getElementById("loading");
	if(loading!=null){
		var top = (document.documentElement.clientHeight-loading.offsetHeight)/2;
		var left = (document.documentElement.clientWidth-loading.offsetWidth)/2;
		loading.style.top=(top>0?top:0)+"px";
		loading.style.left=(left>0?left:0)+"px";
	};
};
Loading.prototype.destory = function(){
	var loading = document.getElementById("loading");
	if(loading!=null){loading.remove();this.hideMask();this.delResize("loading");};
};

/**
* 新增自定义内容的弹窗
*/
var PopupWindow = function(){};
PopupWindow.prototype = new Mask();
PopupWindow.prototype.index = 1000000000;
PopupWindow.prototype.init = function(){
	var obj = this;
	this.addCss("system",".popupWindow{position:fixed;}");
	this.addCss("system",".popupWindow .popupTitle{position:absolute;top:-15px;left:0px;width:100%;height:30px;}");
	window["popup"] = function(data,isMove){
		if(data["html"]!=null && data["width"]!=null && data["height"]!=null && data["params"]!=null && data["events"]!=null){
			return obj.open(data,isMove==false?false:true);
		}else{
			throw "JsonData must required 'html,width,height,params,events'";
		};
		return null;
	};
	window["popdown"] = function(id){
		obj.destory(id);
	};
};
PopupWindow.prototype.open = function(data,isMove){
	this.showMask();
	var obj = this;
	var windowId = "window_"+parseInt(Math.random()*1000000000000000);
	if(document.getElementById(windowId)==null){
		var windowDiv = document.createElement("div");
		windowDiv.setAttribute("id",windowId);windowDiv.setAttribute("class","usemask popupWindow");
		windowDiv.innerHTML = "<div id='"+windowId+"_title' class='popupTitle'></div>"+data["html"];
		windowDiv.style.zIndex = (++this.index);
		windowDiv.style.width = data["width"];windowDiv.style.height = data["height"];
		document.body.appendChild(windowDiv);
		var top = (document.documentElement.clientHeight-windowDiv.offsetHeight+(this.index-1000000001)*30)/2;
		var left = (document.documentElement.clientWidth-windowDiv.offsetWidth+(this.index-1000000001)*30)/2;
		windowDiv.style.top=(top>0?top:0)+"px";windowDiv.style.left=(left>0?left:0)+"px";
		this.addResize(windowId,function(){obj.resizePopupWindow(windowId);});
		var popupWindows = this.getElementsByClass("popupWindow");
		for(var i=0;i<popupWindows.length;i++){
			this.removeClass(popupWindows[i],"hover");
		};
		this.addClass(popupWindows[popupWindows.length-1],"hover");
		var x = null;var y = null;
		if(!isMove){document.getElementById(windowId+"_title").style.display="none";};
		document.getElementById(windowId).addEventListener("touchstart",function(event){
			x = null;y = null;
			var popupWindows = obj.getElementsByClass("popupWindow");
			for(var i=0;i<popupWindows.length;i++){
				obj.removeClass(popupWindows[i],"hover");
				if(parseInt(popupWindows[i].style.zIndex)>parseInt(this.style.zIndex)){
					popupWindows[i].style.zIndex = parseInt(popupWindows[i].style.zIndex)-1;
				};
			};
			this.style.zIndex = obj.index;
			obj.addClass(this,"hover");
		});
		document.getElementById(windowId+"_title").addEventListener("touchmove",function(event){
			if(x!=null && y!=null){
				var left = (event.targetTouches[0].clientX-x);
				var top = (event.targetTouches[0].clientY-y);
				this.parentNode.style.left = obj.pixelToInteger(this.parentNode.style.left)+left+"px";
				this.parentNode.style.top = obj.pixelToInteger(this.parentNode.style.top)+top+"px";
			};
			x = event.targetTouches[0].clientX;y = event.targetTouches[0].clientY;
		});
		document.getElementById(windowId).addEventListener("mousedown",function(event){
			x = null;y = null;
			var popupWindows = obj.getElementsByClass("popupWindow");
			for(var i=0;i<popupWindows.length;i++){
				obj.removeClass(popupWindows[i],"hover");
				if(parseInt(popupWindows[i].style.zIndex)>parseInt(this.style.zIndex)){
					popupWindows[i].style.zIndex = parseInt(popupWindows[i].style.zIndex)-1;
				};
			};
			this.style.zIndex = obj.index;
			obj.addClass(this,"hover");
		});
		var clickFlag = null;
		document.getElementById(windowId+"_title").addEventListener("mousedown",function(event){
			clickFlag = this;
		});
		document.addEventListener("mouseup",function(event){
			clickFlag = null;
		});
		document.addEventListener("mousemove",function(event){
			if(clickFlag!=null){ 
				if(x!=null && y!=null){
					var left = (event.clientX-x);
					var top = (event.clientY-y);
					clickFlag.parentNode.style.left = obj.pixelToInteger(clickFlag.parentNode.style.left)+left+"px";
					clickFlag.parentNode.style.top = obj.pixelToInteger(clickFlag.parentNode.style.top)+top+"px";
				};
				x = event.clientX;y = event.clientY;
			}
		});
		for(var key in data['params']){
			if(windowDiv.getElementsByClassName(key).length>0){
				for(var i=0;i<windowDiv.getElementsByClassName(key).length;i++){
					var dom = windowDiv.getElementsByClassName(key)[i];
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
			if(windowDiv.getElementsByClassName(key).length>0){
				for(var i=0;i<windowDiv.getElementsByClassName(key).length;i++){
					var dom = windowDiv.getElementsByClassName(key)[i];
					dom.setAttribute("_id",key);
					dom.addEventListener("click",function(){
						data['events'][this.getAttribute("_id")].call();
					});
				};
			};
		};
		return windowId;
	}else{
		return null;
	};
};
PopupWindow.prototype.resizePopupWindow = function(windowId){
	var popupWindow = document.getElementById(windowId);
	if(popupWindow!=null && this.hasClass(popupWindow,"hover")){
		var top = (document.documentElement.clientHeight-popupWindow.offsetHeight)/2;
		var left = (document.documentElement.clientWidth-popupWindow.offsetWidth)/2;
		popupWindow.style.top=(top>0?top:0)+"px";
		popupWindow.style.left=(left>0?left:0)+"px";
	};
};
PopupWindow.prototype.destory = function(windowId){
	if(document.getElementById(windowId)!=null){
		document.getElementById(windowId).remove();this.hideMask();this.delResize(windowId);
		if(document.body.getElementsByClassName("popupWindow").length<=0){
			this.index=1000000000;
		};
	};
};