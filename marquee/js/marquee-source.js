/** Marquee Example **/
/** Author WANGCHENG **/
/** QQ 365092422 **/
/** CO. Vwkit **/
/**
<div id="marquee">
	<ul>
		<li></li>
		<li></li>
	</ul>
</div>
<script type="text/javascript">
	$(document).ready(function(e){
		$("#marquee").marquee(speed,step,margin,direction);
	});
</script>
speed:move speed type(int)
step:move step type(int)
margin:which block margin-left type(int)
direction:move direction type(string) left,right,up,down
**/
/** Extenp Example **/
/**
<script type="text/javascript">
	$("#marquee").marquee(speed,step,margin,direction)
		.showLeftButton(src,width,height,overflow) 
		.showRightButton(src,width,height)
		.showUpButton(src,width,height,overflow)
		.showDownButton(src,width,height)
</script> 
src:button pic src type(string)
width:button pic width type(int)
height:button pic height type(int)
overflow:left or up button overflow block type(true,false)
**/
$(document).ready(function(e) {
    $.fn.extend({
		marquee:function($speed,$step,$margin,$direction){
			var $this = null;
			var $li = null;
			var $margin0 = null;
			var $marquee_flag = null;
			if($speed == null) $speed = 100;
			if($margin == null) $margin = 20;
			if($step == null) $step = 2;
			if($direction == null) $direction = "left";
			$this = this;
			$this.css({overflow:"hidden"});
			$ul = $this.find("ul").eq(0);
			$ul.html($ul.html()+$ul.html());
			$ul.css({listStyle:"none"});
			$this.mouseover(function(){
				$.end($marquee_flag);
				$li = $.init($this,$li);
			});
			switch($direction){
				case "left":{
					$ul.css({width:"8000px",float:"left",marginLeft:"-"+$margin+"px"});
					$li = $.init($this,$li);
					for(var i=0;i<$li.length;i++){
						$li.eq(i).css({float:"left",marginLeft:$margin+"px"})
					}
					$ul.css({marginTop:(parseInt($this.height())-parseInt($ul.height()))/2+"px"});
					$this.mouseout(function(){
						$li = $.init($this,$li);
						$li.eq(0).stop(true,true);
						$marquee_flag = $.beginWithLeft($margin,$speed,$step,$this,$li,$margin0);
						$this['interval_flag'] = $marquee_flag;
					});
					$marquee_flag = $.beginWithLeft($margin,$speed,$step,$this,$li,$margin0);
					break;
				}
				case "right":{
					var $liWidth = null;
					$ul.css({width:"8000px",float:"left",marginLeft:"-"+$margin+"px"});
					$li = $.init($this,$li);
					for(var i=0;i<$li.length;i++){
						$li.eq(i).css({float:"left",marginLeft:$margin+"px"})
					}
					$liWidth = parseInt($.cutpixel($li.eq(0).css("width")));
					$ul.css({marginLeft:"-"+($margin*2+$liWidth)+"px",
						marginTop:(parseInt($this.height())-parseInt($ul.height()))/2+"px"});
					$this.mouseout(function(){
						$li = $.init($this,$li);
						$li.eq(0).stop(true,true);
						$marquee_flag = $.beginWithRight($margin,$speed,$step,$this,$li,$margin0);
						$this['interval_flag'] = $marquee_flag;
					});
					$marquee_flag = $.beginWithRight($margin,$speed,$step,$this,$li,$margin0);
					break;
				}
				case "up":{
					$ul.css({float:"left",marginTop:"-"+$margin+"px",overflow:"hidden"});
					$li = $.init($this,$li);
					for(var i=0;i<$li.length;i++){
						$li.eq(i).css({float:"left",width:"100%",lineHeight:"0px",marginTop:$margin+"px"})
					}
					$this.mouseout(function(){
						$li = $.init($this,$li);
						$li.eq(0).stop(true,true);
						$marquee_flag = $.beginWithUp($margin,$speed,$step,$this,$li,$margin0);
						$this['interval_flag'] = $marquee_flag;
					});
					$marquee_flag = $.beginWithUp($margin,$speed,$step,$this,$li,$margin0);
					break;
				}
				case "down":{
					var $liHeight = null;
					$ul.css({float:"left",overflow:"hidden"});
					$li = $.init($this,$li);
					for(var i=0;i<$li.length;i++){
						$li.eq(i).css({float:"left",width:"100%",lineHeight:"0px",marginTop:$margin+"px"})
					}
					$liHeight = parseInt($.cutpixel($li.eq(0).css("height")));
					$ul.css({marginTop:"-"+($margin*2+$liHeight)+"px"});
					$this.mouseout(function(){
						$li = $.init($this,$li);
						$li.eq(0).stop(true,true);
						$marquee_flag = $.beginWithDown($margin,$speed,$step,$this,$li,$margin0);
						$this['interval_flag'] = $marquee_flag;
					});
					$marquee_flag = $.beginWithDown($margin,$speed,$step,$this,$li,$margin0);
					break;
				}
			}
			$this['interval_flag'] = $marquee_flag;
			$this['stop'] = function(){$.stop($this);};
			return $this;
		},
		showUpButton:function($src,$width,$height,$overflow){
			if($overflow == null) $overflow = false;
			var $this = $(this);
			var $ul = $this.find("ul").eq(0);
			var $li = $ul.find("li");
			var $showUpButton = null;
			var $initLiHeight = parseInt($.cutpixel($li.eq(0).css("height")));
			var flag = 0;//判断是否多次点击
			var $ulMargin = parseInt($.cutpixel($ul.css("marginTop")));
			var $margin = parseInt($.cutpixel($li.eq(1).css("marginTop")));
			var $buttonHeight = null;
			$this.css({position:"relative"});
			if($src == null){
				$showUpButton = $("<div id='showUpButton'>Up</div>");
				$showUpButton.css({position:"absolute",width:"100%",height:"30px",lineHeight:"30px",
					textAlign:"center",backgroundColor:"black",fontSize:"20px",fontWeight:"bold",
					top:"0px",color:"white",cursor:"pointer"});
				$showUpButton.click(function(){
					if(flag == 0){
						$li = $.init($this,$li);
						$margin = parseInt($.cutpixel($li.eq(1).css("marginTop")));
						$li.eq(0).animate({marginTop:($margin*2+$initLiHeight)+"px"},"fast",function(){
							$li = $.removeWithDown($this,$li,$margin);
							flag = 0;
						});
					}
					flag = 1;
				});
				$this.append($showUpButton);
				$buttonHeight = parseInt($.cutpixel($showUpButton.css("height")));
			}else{
				$showUpButton = $("<div id='showUpButton'><img src='"+ $src +"' ></div>");
				$showUpButton.css({position:"absolute",width:"100%",textAlign:"center",top:"0px",cursor:"pointer"});
				$showUpButton.click(function(){
					if(flag == 0){
						$li = $.init($this,$li);
						$margin = parseInt($.cutpixel($li.eq(1).css("marginTop")));
						$li.eq(0).animate({marginTop:($margin*2+$initLiHeight)+"px"},"fast",function(){
							$li = $.removeWithDown($this,$li,$margin);
							flag = 0;
						});
					}
					flag = 1;
				});
				$this.append($showUpButton);
				$buttonHeight = parseInt($height);
			}
			if($overflow == true){
				$ul.css({marginTop:$ulMargin+"px"});
			}else{
				$ul.css({marginTop:($ulMargin+$buttonHeight)+"px"});
			}
			return $this;
		},
		showDownButton:function($src,$width,$height){
			var $this = $(this);
			var $ul = $this.find("ul").eq(0);
			var $li = $ul.find("li");
			var $showDownButton = null;
			var $initLiHeight = parseInt($.cutpixel($li.eq(0).css("height")));
			var flag = 0;//判断是否多次点击
			var $ulMargin = parseInt($.cutpixel($ul.css("marginTop")));
			var $margin = parseInt($.cutpixel($li.eq(1).css("marginTop")));
			$this.css({position:"relative"});
			if($src == null){
				$showDownButton = $("<div id='showDownButton'>Down</div>");
				$showDownButton.css({position:"absolute",width:"100%",height:"30px",lineHeight:"30px",
					textAlign:"center",backgroundColor:"black",fontSize:"20px",fontWeight:"bold",
					bottom:"0px",color:"white",cursor:"pointer"});
				$showDownButton.click(function(){
					if(flag == 0){
						$li = $.init($this,$li);
						$margin = parseInt($.cutpixel($li.eq(1).css("marginTop")));
						$li.eq(0).animate({marginTop:"-"+$initLiHeight+"px"},"fast",function(){
							$li = $.removeWithUp($this,$li,$margin);
							flag = 0;
						});
					}
					flag = 1;
				});
				$this.append($showDownButton);
			}else{
				$showDownButton = $("<div id='showDownButton'><img src='"+ $src +"' ></div>");
				$showDownButton.css({position:"absolute",width:"100%",textAlign:"center",bottom:"0px",cursor:"pointer"});
				$showDownButton.click(function(){
					if(flag == 0){
						$li = $.init($this,$li);
						$margin = parseInt($.cutpixel($li.eq(1).css("marginTop")));
						$li.eq(0).animate({marginTop:"-"+$initLiHeight+"px"},"fast",function(){
							$li = $.removeWithUp($this,$li,$margin);
							flag = 0;
						});
					}
					flag = 1;
				});
				$this.append($showDownButton);
			}
			$ul.css({marginTop:($ulMargin-($initLiHeight+$margin))+"px"});
			return $this;
		},
		showLeftButton:function($src,$width,$height,$overflow){
			if($overflow == null) $overflow = false;
			var $this = $(this);
			var $ul = $this.find("ul").eq(0);
			var $li = $ul.find("li");
			var $showLeftButton = null;
			var $initLiWidth = parseInt($.cutpixel($li.eq(0).css("width")));
			var flag = 0;//判断是否多次点击
			var $ulMargin = parseInt($.cutpixel($ul.css("marginLeft")));
			var $margin = parseInt($.cutpixel($li.eq(1).css("marginLeft")));
			var $buttonWidth = null;
			$this.css({position:"relative"});
			if($src == null){
				$showLeftButton = $("<div id='showLeftButton'>L<br />E<br />F<br />T</div>");
				$showLeftButton.css({position:"absolute",width:"30px",height:"100%",lineHeight:parseInt($this.height())/4+"px",
					textAlign:"center",backgroundColor:"black",fontSize:"20px",fontWeight:"bold",
					left:"0px",color:"white",cursor:"pointer"});
				$showLeftButton.click(function(){
					if(flag == 0){
						$li = $.init($this,$li);
						$margin = parseInt($.cutpixel($li.eq(1).css("marginLeft")));
						$li.eq(0).animate({marginLeft:($initLiWidth+$margin*2)+"px"},"fast",function(){
							$li = $.removeWithRight($this,$li,$margin);
							flag = 0;
						});
					}
					flag = 1;
				});
				$this.append($showLeftButton);
				$buttonWidth = parseInt($.cutpixel($showLeftButton.css("width")));
			}else{
				$showLeftButton = $("<div id='showLeftButton'><img src='"+ $src +"' ></div>");
				$showLeftButton.css({position:"absolute",height:"100%",textAlign:"center",left:"0px",cursor:"pointer",
					top:(parseInt($this.height())-$height)/2+"px"});
				$showLeftButton.click(function(){
					if(flag == 0){
						$li = $.init($this,$li);
						$margin = parseInt($.cutpixel($li.eq(1).css("marginLeft")));
						$li.eq(0).animate({marginLeft:($initLiWidth+$margin*2)+"px"},"fast",function(){
							$li = $.removeWithRight($this,$li,$margin);
							flag = 0;
						});
					}
					flag = 1;
				});
				$this.append($showLeftButton);
				$buttonWidth = parseInt($width);
			}
			if($overflow == true){
				$ul.css({marginLeft:$ulMargin+"px"});
			}else{
				$ul.css({marginLeft:($ulMargin+$buttonWidth)+"px"});
			}
			return $this;
		},
		showRightButton:function($src,$width,$height){
			var $this = $(this);
			var $ul = $this.find("ul").eq(0);
			var $li = $ul.find("li");
			var $showRightButton = null;
			var $initLiWidth = parseInt($.cutpixel($li.eq(0).css("width")));
			var flag = 0;//判断是否多次点击
			var $ulMargin = parseInt($.cutpixel($ul.css("marginLeft")));
			var $margin = parseInt($.cutpixel($li.eq(1).css("marginLeft")));
			$this.css({position:"relative"});
			if($src == null){
				$showRightButton = $("<div id='showLeftButton'>R<br />I<br />G<br />H<br />T</div>");
				$showRightButton.css({position:"absolute",width:"30px",height:"100%",
					lineHeight:parseInt($this.height())/5+"px",textAlign:"center",backgroundColor:"black",
					fontSize:"20px",fontWeight:"bold",right:"0px",color:"white",cursor:"pointer"});
				$showRightButton.click(function(){
					if(flag == 0){
						$li = $.init($this,$li);
						$margin = parseInt($.cutpixel($li.eq(1).css("marginLeft")));
						$li.eq(0).animate({marginLeft:"-"+($initLiWidth+$margin)+"px"},"fast",function(){
							$li = $.removeWithLeft($this,$li,$margin);
							flag = 0;
						});
					}
					flag = 1;
				});
				$this.append($showRightButton);
			}else{
				$showRightButton = $("<div id='showRightButton'><img src='"+ $src +"' ></div>");
				$showRightButton.css({position:"absolute",height:"100%",textAlign:"center",right:"0px",cursor:"pointer",
					top:(parseInt($this.height())-$height)/2+"px"});
				$showRightButton.click(function(){
					if(flag == 0){
						$li = $.init($this,$li);
						$margin = parseInt($.cutpixel($li.eq(1).css("marginLeft")));
						$li.eq(0).animate({marginLeft:"-"+($initLiWidth+$margin)+"px"},"fast",function(){
							$li = $.removeWithLeft($this,$li,$margin);
							flag = 0;
						});
					}
					flag = 1;
				});
				$this.append($showRightButton);
			}
			$ul.css({marginLeft:($ulMargin-$initLiWidth-$margin)+"px"});
			return $this;
		}
	});
	$.extend({
		beginWithLeft:function($margin,$speed,$step,$this,$li,$margin0){
			$margin0 = parseInt($.cutpixel($li.eq(0).css("marginLeft")));
			var $marquee_flag = setInterval(function(){
				$li = $.init($this,$li);
				if($margin0<=-(parseInt($.cutpixel($li.eq(0).css("width"))))){
					$li = $.removeWithLeft($this,$li,$margin);
					$margin0 = parseInt($.cutpixel($li.eq(0).css("marginLeft")));
				}
				$margin0-=parseInt($step);
				$li.eq(0).css({marginLeft:$margin0+"px"});
			},$speed);
			return $marquee_flag;
		},
		beginWithRight:function($margin,$speed,$step,$this,$li,$margin0){
			$margin0 = parseInt($.cutpixel($li.eq(0).css("marginLeft")));
			var $marquee_flag = setInterval(function(){
				$li = $.init($this,$li);
				if($margin0>=(parseInt($.cutpixel($li.eq(0).css("width")))+$margin*2)){
					$li = $.removeWithRight($this,$li,$margin);
					$margin0 = parseInt($.cutpixel($li.eq(0).css("marginLeft")));
				}
				$margin0+=parseInt($step);
				$li.eq(0).css({marginLeft:$margin0+"px"});
			},$speed);
			return $marquee_flag;
		},
		beginWithUp:function($margin,$speed,$step,$this,$li,$margin0){
			$margin0 = parseInt($.cutpixel($li.eq(0).css("marginTop")));
			var $marquee_flag = setInterval(function(){
				$li = $.init($this,$li);
				if($margin0<=-(parseInt($.cutpixel($li.eq(0).css("height"))))){
					$li = $.removeWithUp($this,$li,$margin);
					$margin0 = parseInt($.cutpixel($li.eq(0).css("marginTop")));
				}
				$margin0-=parseInt($step);
				$li.eq(0).css({marginTop:$margin0+"px"});
			},$speed);
			return $marquee_flag;
		},
		beginWithDown:function($margin,$speed,$step,$this,$li,$margin0){
			$margin0 = parseInt($.cutpixel($li.eq(0).css("marginTop")));
			var $marquee_flag = setInterval(function(){
				$li = $.init($this,$li);
				if($margin0>=(parseInt($.cutpixel($li.eq(0).css("height")))+$margin*2)){
					$li = $.removeWithDown($this,$li,$margin);
					$margin0 = parseInt($.cutpixel($li.eq(0).css("marginTop")));
				}
				$margin0+=parseInt($step);
				$li.eq(0).css({marginTop:$margin0+"px"});
			},$speed);
			return $marquee_flag;
		},
		removeWithLeft:function($this,$li,$margin){
			$li.eq(0).css({marginLeft:$margin+"px"});
			$li.eq($li.length-1).after($li.eq(0));
			return $.init($this,$li);
		},
		removeWithRight:function($this,$li,$margin){
			$li.eq(0).css({marginLeft:$margin+"px"});
			$li.eq(0).before($li.eq($li.length-1));
			return $.init($this,$li);
		},
		removeWithUp:function($this,$li,$margin){
			$li.eq(0).css({marginTop:$margin+"px"});
			$li.eq($li.length-1).after($li.eq(0));
			return $.init($this,$li);
		},
		removeWithDown:function($this,$li,$margin){
			$li.eq(0).css({marginTop:$margin+"px"});
			$li.eq(0).before($li.eq($li.length-1));
			return $.init($this,$li);
		},
		end:function($marquee_flag){
			clearInterval($marquee_flag);
		},
		cutpixel:function($pixel){
			$pixel = $pixel.substr(0,$pixel.length-2);
			return $pixel;
		},
		init:function($this,$li){
			$ul = $this.find("ul").eq(0);
			$li = $ul.find("li");
			return $li;
		},
		stop:function($this){
			try{
				$this.unbind("mouseover");
				$this.unbind("mouseout");
				$.end($this['interval_flag']);
			}catch(e){console.log(e);};
		}
	});
});