/**使用说明
* alert插件初始化说明:
* (new Alert()).init(css,title,btnName,isAllowExecDown);
* 例如:(new Alert()).init(css,"提示","确定",true);
* loading插件初始化说明:
* (new Loading()).init(image,width,height);
* 例如:(new Loading()).init("http://localhost/study_js/loading.gif",100,100);
* popupWindow插件初始化说明:
* (new PopupWindow()).init();
*
* alert插件使用说明
* alert(content,callback);content为内容,callback为回调方法(可选)
* loading插件使用说明
* openLoading()打开loading,closeLoading()关闭loading
* popupWindow插件使用说明
* 开启:var flag = popup({
*	"html":document.getElementById("mk01").innerHTML,
*	"width":"300px",
*	"height":"300px",
*	"params":{},//key:className,value:初始化值
*	"events":{"close":function(){console.log(1);popdown(flag);}} //key:className,value:回调函数
* },isMove(true为可移动，false为不可移动，默认为可移动));返回弹窗的ID
* 关闭:popdown(windowId);
* 例如:popdown("window_462535938257652");
*/

(function(){
	var alertCss="#alert{width:90%;font-size:18px;}";
	alertCss+="#alert .title{width:100%;height:40px;line-height:40px;background-color:#fff;text-align:center;border-radius:5px 5px 0 0;}";
	alertCss+="#alert .content{width:100%;min-height:100px;line-height:20px;background-color:white;}";
	alertCss+="#alert .content .text{padding:10px;}";
	alertCss+="#alert .event{font-size:16px;text-align:center;width:100%;height:40px;line-height:40px;background-color:#fff;color:#ff9300;border-top:1px solid #d2d3d5;border-radius:0 0 5px 5px;}";
	alertCss+="#alert .close{top:10px;right:10px;width:20px;height:20px;}";
	alertCss+="#alert .close span{color:#ccc;font-weight:bold;display:block}";
	(new Alert()).init(alertCss,"系统提示","确定",true);
	(new Loading()).init("http://files.88t6.com/images/loading.gif",100,100);
	(new PopupWindow()).init();
}());