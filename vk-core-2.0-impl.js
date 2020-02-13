/** 插件二次封装(对外使用)
*	method:
*		openLoading(id)--打开Loading
*			--id选填(不一样的ID可弹出多个)
*		closeLoading(id)--关闭Loading
*			--id选填(通过ID关闭,打开没填ID,关闭也可以不填)
*		popup(data)--打开弹窗
*			--data数据格式{html:'',width:'',height:'',params:{},events:{},isMove:false}
*			--return id
*		popdown(id)--关闭弹窗
*			--通过Id关闭弹窗
*		alert(content,callback)--打开alert弹窗
*			--content内容,callback按钮回调函数
*		confirm(content,btnNames,callbacks)--打开confirm弹窗
*			--content内容,btnNames按钮名称数组,callbacks按钮回调函数数组
*		toast(content,timeout)--打开弹窗
*			--content内容,timeout弹窗关闭时间
*		canvas_utils(domId,width,height)--创建canvas对象
*			--domId对象ID,width宽度,height高度
*	Example:
*		openLoading();closeLoading();
*		var flag = popup({
*			html:'<div id="abc" style="background-color:Red;width:100%;height:100%;"></div>',
*			width:'300px',
*			height:'300px',
*			params:{'#abc':'点我关闭'},
*			events:{'div':function(){popdown(flag)}},
*			isMove:false //选填
*		});
*		alert("我是alert内容",function(){console.log("确定按钮被点击")});
*		confirm("我是confirm",["确定","取消"],[function(){console.log('确定');},function(){console.log('取消');}]);
*		---canvas example开始
*		var cv = canvas_utils("#canvas","100px","100px");
*		var point = cv.getPaints()[0];
*		point.fillStyle='#FF0000';
*		point.fillRect(0,0,80,100);
*		---canvas example结束
*/
(function(window){
	var loading = new VK_LOADING();
	window['openLoading'] = function(id){
		loading.showLoading(id);
	};
	window['closeLoading'] = function(id){
		loading.hideLoading(id);
	};
	var popWindow = new VK_POPUPWINDOW();
	window['popup'] = function(data){
		return popWindow.openWindow(data);
	};
	window['popdown'] = function(id){
		popWindow.closeWindow(id);
	};
	var alertCss = "#VK_ALERT{width:300px;font-size:18px;}";
	alertCss += "#VK_ALERT .VK_TITLE{width:100%;height:40px;line-height:40px;background-color:#fff;text-align:center;border-radius:5px 5px 0 0;}";
	alertCss += "#VK_ALERT .VK_CLOSE{position:absolute;cursor:pointer;top:10px;right:10px;width:20px;height:20px;}";
	alertCss += "#VK_ALERT .VK_CLOSE span{color:#ccc;font-weight:bold;display:block;}";
	alertCss += "#VK_ALERT .VK_EVENT{cursor:pointer;font-size:16px;text-align:center;width:100%;height:40px;line-height:40px;background-color:#fff;color:#ff9300;border-top:1px solid #d2d3d5;border-radius:0 0 5px 5px;}";
	alertCss += "#VK_ALERT .VK_CONTENT{width:100%;min-height:100px;line-height:20px;background-color:white;}";
	alertCss += "#VK_ALERT .VK_CONTENT .VK_TEXT{word-break:break-all;padding:10px;}";
	var sysWindow = new VK_SYSTEMWINDOW(alertCss);
	window['alert'] = function(content,callback){
		sysWindow.showAlertWindow("系统提示",content,"确定",callback);
	};
	window['confirm'] = function(content,btnNames,callbacks){
		sysWindow.showConfirmWindow(null,content,btnNames,callbacks);
	};
	window['toast'] = function(text,timeout){
		return sysWindow.showToast(text,timeout);
	};
	window['canvas_utils'] = function(domId,width,height){
		return new VK_CANVAS(domId,width,height,'2d');
	};
})(window);