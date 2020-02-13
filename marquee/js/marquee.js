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
	$(document).ready(function(e){
		$("#marquee").marquee(speed,step,margin,direction)
			.showLeftButton(src,width,height,overflow) 
			.showRightButton(src,width,height)
			.showUpButton(src,width,height,overflow)
			.showDownButton(src,width,height);
	});
</script> 
src:button pic src type(string)
width:button pic width type(int)
height:button pic height type(int)
overflow:left or up button overflow block type(true,false)
**/
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('$(1G).1L(8(n){$.1R.1D({1O:8(g,d,e,c){u a=j,b=j,f=j;j==g&&(g=z);j==e&&(e=1S);j==d&&(d=2);j==c&&(c="y");a=10;a.3({1o:"1p"});$r=a.A("r").6(0);$r.1x($r.1x()+$r.1x());$r.3({1K:"1M"});a.1N(8(){$.1C(f);b=$.q(a,b)});1P(c){1g"y":$r.3({t:"1A",K:"y",p:"-"+e+"9"});b=$.q(a,b);1c(c=0;c<b.C;c++)b.6(c).3({K:"y",p:e+"9"});$r.3({o:(7(a.s())-7($r.s()))/2+"9"});a.14(8(){b=$.q(a,b);b.6(0).1e(!0,!0);f=$.1t(e,g,d,a,b,j)});f=$.1t(e,g,d,a,b,j);1u;1g"1w":c=j;$r.3({t:"1A",K:"y",p:"-"+e+"9"});b=$.q(a,b);1c(c=0;c<b.C;c++)b.6(c).3({K:"y",p:e+"9"});c=7($.i(b.6(0).3("t")));$r.3({p:"-"+(2*e+c)+"9",o:(7(a.s())-7($r.s()))/2+"9"});a.14(8(){b=$.q(a,b);b.6(0).1e(!0,!0);f=$.1y(e,g,d,a,b,j)});f=$.1y(e,g,d,a,b,j);1u;1g"1Q":$r.3({K:"y",o:"-"+e+"9",1o:"1p"});b=$.q(a,b);1c(c=0;c<b.C;c++)b.6(c).3({K:"y",t:"z%",X:"B",o:e+"9"});a.14(8(){b=$.q(a,b);b.6(0).1e(!0,!0);f=$.1q(e,g,d,a,b,j)});f=$.1q(e,g,d,a,b,j);1u;1g"1I":c=j;$r.3({K:"y",1o:"1p"});b=$.q(a,b);1c(c=0;c<b.C;c++)b.6(c).3({K:"y",t:"z%",X:"B",o:e+"9"});c=7($.i(b.6(0).3("s")));$r.3({o:"-"+(2*e+c)+"9"});a.14(8(){b=$.q(a,b);b.6(0).1e(!0,!0);f=$.1r(e,g,d,a,b,j)});f=$.1r(e,g,d,a,b,j)}w a},1s:8(g,d,e,c){j==c&&(c=!1);u a=$(10);d=a.A("r").6(0);u b=d.A("11"),f=j,h=7($.i(b.6(0).3("s"))),k=0,l=7($.i(d.3("o"))),f=j;a.3({x:"1b"});j==g?(f=$("<v D=\'1s\'>1J</v>"),f.3({x:"O",t:"z%",s:"Y",X:"Y",N:"Q",1l:"13",12:"15",16:"17",18:"B",19:"1a",S:"U"}),f.P(8(){W(0==k){b=$.q(a,b);u c=7($.i(b.6(1).3("o")));b.6(0).M({o:"-"+h+"9"},"J",8(){b=$.1h(a,b,c);k=0})}k=1}),a.Z(f),f=7($.i(f.3("s")))):(f=$("<v D=\'1s\'><1j 1k=\'"+g+"\' ></v>"),f.3({x:"O",t:"z%",N:"Q",18:"B",S:"U"}),f.P(8(){W(0==k){b=$.q(a,b);u c=7($.i(b.6(1).3("o")));b.6(0).M({o:"-"+h+"9"},"J",8(){b=$.1h(a,b,c);k=0})}k=1}),a.Z(f),f=7(e));1==c?d.3({o:l+"9"}):d.3({o:l+f+"9"});w a},1v:8(g,d,e){u c=$(10);d=c.A("r").6(0);u a=d.A("11");e=j;u b=7($.i(a.6(0).3("s"))),f=0,h=7($.i(d.3("o"))),k=7($.i(a.6(1).3("o")));c.3({x:"1b"});j==g?(e=$("<v D=\'1v\'>1H</v>"),e.3({x:"O",t:"z%",s:"Y",X:"Y",N:"Q",1l:"13",12:"15",16:"17",1z:"B",19:"1a",S:"U"}),e.P(8(){0==f&&(a=$.q(c,a),a.6(0).M({o:2*k+b+"9"},"J",8(){a=$.1m(c,a,k);f=0}));f=1})):(e=$("<v D=\'1v\'><1j 1k=\'"+g+"\' ></v>"),e.3({x:"O",t:"z%",N:"Q",1z:"B",S:"U"}),e.P(8(){W(0==f){a=$.q(c,a);u d=7($.i(a.6(1).3("o")));a.6(0).M({o:2*d+b+"9"},"J",8(){a=$.1m(c,a,d);f=0})}f=1}));c.Z(e);d.3({o:h-(b+k)+"9"});w c},1n:8(g,d,e,c){j==c&&(c=!1);u a=$(10),b=a.A("r").6(0),f=b.A("11"),h=j,k=7($.i(f.6(0).3("t"))),l=0,m=7($.i(b.3("p"))),h=j;a.3({x:"1b"});j==g?(h=$("<v D=\'1n\'>L<V />E<V />F<V />T</v>"),h.3({x:"O",t:"Y",s:"z%",X:7(a.s())/4+"9",N:"Q",1l:"13",12:"15",16:"17",y:"B",19:"1a",S:"U"}),h.P(8(){W(0==l){f=$.q(a,f);u b=7($.i(f.6(1).3("p")));f.6(0).M({p:"-"+(k+b)+"9"},"J",8(){f=$.1f(a,f,b);l=0})}l=1}),a.Z(h),h=7($.i(h.3("t")))):(h=$("<v D=\'1n\'><1j 1k=\'"+g+"\' ></v>"),h.3({x:"O",s:"z%",N:"Q",y:"B",S:"U",18:(7(a.s())-e)/2+"9"}),h.P(8(){W(0==l){f=$.q(a,f);u b=7($.i(f.6(1).3("p")));f.6(0).M({p:"-"+(k+b)+"9"},"J",8(){f=$.1f(a,f,b);l=0})}l=1}),a.Z(h),h=7(d));1==c?b.3({p:m+"9"}):b.3({p:m+h+"9"});w a},1B:8(g,d,e){u c=$(10);d=c.A("r").6(0);u a=d.A("11"),b=j,f=7($.i(a.6(0).3("t"))),h=0,k=7($.i(d.3("p"))),l=7($.i(a.6(1).3("p")));c.3({x:"1b"});j==g?(b=$("<v D=\'1n\'>R<V />I<V />G<V />H<V />T</v>"),b.3({x:"O",t:"Y",s:"z%",X:7(c.s())/5+"9",N:"Q",1l:"13",12:"15",16:"17",1w:"B",19:"1a",S:"U"}),b.P(8(){W(0==h){a=$.q(c,a);u b=7($.i(a.6(1).3("p")));a.6(0).M({p:f+2*b+"9"},"J",8(){a=$.1i(c,a,b);h=0})}h=1})):(b=$("<v D=\'1B\'><1j 1k=\'"+g+"\' ></v>"),b.3({x:"O",s:"z%",N:"Q",1w:"B",S:"U",18:(7(c.s())-e)/2+"9"}),b.P(8(){W(0==h){a=$.q(c,a);u b=7($.i(a.6(1).3("p")));a.6(0).M({p:f+2*b+"9"},"J",8(){a=$.1i(c,a,b);h=0})}h=1}));c.Z(b);d.3({p:k-f-l+"9"});w c}});$.1D({1t:8(g,d,e,c,a,b){b=7($.i(a.6(0).3("p")));w 1d(8(){a=$.q(c,a);b<=-7($.i(a.6(0).3("t")))&&(a=$.1f(c,a,g),b=7($.i(a.6(0).3("p"))));b-=7(e);a.6(0).3({p:b+"9"})},d)},1y:8(g,d,e,c,a,b){b=7($.i(a.6(0).3("p")));w 1d(8(){a=$.q(c,a);b>=7($.i(a.6(0).3("t")))+2*g&&(a=$.1i(c,a,g),b=7($.i(a.6(0).3("p"))));b+=7(e);a.6(0).3({p:b+"9"})},d)},1q:8(g,d,e,c,a,b){b=7($.i(a.6(0).3("o")));w 1d(8(){a=$.q(c,a);b<=-7($.i(a.6(0).3("s")))&&(a=$.1h(c,a,g),b=7($.i(a.6(0).3("o"))));b-=7(e);a.6(0).3({o:b+"9"})},d)},1r:8(g,d,e,c,a,b){b=7($.i(a.6(0).3("o")));w 1d(8(){a=$.q(c,a);b>=7($.i(a.6(0).3("s")))+2*g&&(a=$.1m(c,a,g),b=7($.i(a.6(0).3("o"))));b+=7(e);a.6(0).3({o:b+"9"})},d)},1f:8(g,d,e){d.6(0).3({p:e+"9"});d.6(d.C-1).1E(d.6(0));w $.q(g,d)},1i:8(g,d,e){d.6(0).3({p:e+"9"});d.6(0).1F(d.6(d.C-1));w $.q(g,d)},1h:8(g,d,e){d.6(0).3({o:e+"9"});d.6(d.C-1).1E(d.6(0));w $.q(g,d)},1m:8(g,d,e){d.6(0).3({o:e+"9"});d.6(0).1F(d.6(d.C-1));w $.q(g,d)},1C:8(g){1T(g)},i:8(g){w g.1U(0,g.C-2)},q:8(g,d){$r=g.A("r").6(0);w $r.A("11")}})});',62,119,'|||css|||eq|parseInt|function|px|||||||||cutpixel|null|||||marginTop|marginLeft|init|ul|height|width|var|div|return|position|left|100|find|0px|length|id||||||fast|float||animate|textAlign|absolute|click|center||cursor||pointer|br|if|lineHeight|30px|append|this|li|fontSize|black|mouseout|20px|fontWeight|bold|top|color|white|relative|for|setInterval|stop|removeWithLeft|case|removeWithUp|removeWithRight|img|src|backgroundColor|removeWithDown|showLeftButton|overflow|hidden|beginWithUp|beginWithDown|showUpButton|beginWithLeft|break|showDownButton|right|html|beginWithRight|bottom|8000px|showRightButton|end|extend|after|before|document|Down|down|Up|listStyle|ready|none|mouseover|marquee|switch|up|fn|20|clearInterval|substr'.split('|'),0,{}))