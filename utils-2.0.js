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

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('(6(10,57){6 1b(){};1b.8=1i 58();1b.8.h=6(1t,1s){7(!1s||1s==d){1s=q};7(!(1s 34 1y)){1s=[1s]};7(!(1t 34 1y)){1t=1t.1F(/( )+/g,\' \').1F(/^( )+/,\'\').1F(/( )+$/,\'\').5f(\' \')};4 3n=1t.5g();4 37=1i 1y();O(4 i=0;i<1s.D;i++){4 1r=1s[i].5d(\'*\');O(4 j=0;j<1r.D;j++){4 3k=1r[j];4 9=3k.49("9");9=9!=d?9:"";4 M=3k.M;M=M!=d?(M.1F(/( )+/g,\'.\')):"";4 2q=3k.2q;4 2p="#"+9+"."+M+"%"+2q;4 a=/\\#[0-3o-3q-3A]+/g.3D(3n);a=a!=d?a[0]:"";4 b=/\\.[0-3o-3q-3A]+/g.3D(3n);b=b!=d?b[0]:"";4 c=/\\%[0-3o-3q-3A]+/g.3D("%"+3n);c=c!=d?c[0].3M():"";7(2p.1L(a)>=0&&(2p.1L(b+\'.\')>=0||2p.1L(b+\'%\')>=0)&&2p.1L(c)>=0){37.3z(1r[j])}}};7(1t.D>0){19 3.h(1t,37)}N{19 37}};1b.8.B=6(2D,Z){4 W=3.h("#"+2D)[0];7(W){7(\'2z\'1p W){W.2z.3x=(W.2z.3x+Z)}N{W.S=W.S+Z}}N{W=q.F("u");W.1j("9",2D);W.1j("5E","5G");W.1j("2c","15/Z");7(\'2z\'1p W){W.2z.3x=Z}N{W.S=Z};3.h(\'5q\')[0].G(W)}};1b.8.L=6(1k,12){7(!3.3w(1k,12)){1k.M=1k.M==\'\'?12:1k.M+\' \'+12}};1b.8.5p=6(1k,12){7(3.3w(1k,12)){4 2v=\' \'+1k.M.1F(/[\\t\\r\\n]/g,\'\')+\' \';5t(2v.1L(\' \'+12+\' \')>=0){2v=2v.1F(\' \'+12+\' \',\' \')};1k.M=2v.1F(/^\\s+|\\s+$/g,\'\')}};1b.8.3w=6(1k,12){12=12||\'\';7(12.1F(/\\s/g,\'\').D==0){19 2T};19 1i 5k(\' \'+12+\' \').5i(\' \'+1k.M+\' \')};1b.8.T=6(I,2c,1n){7(\'48\'1p I){I.48(2c,6(k){1n.1A(I,k)})}N{I.5l("5u"+2c,6(k){1n.1A(I,k)})}};1b.8.1C=6(I){7(I){I.5D.5C(I)}};1b.8.1o=6(){19{\'f\':q.39.5B,\'e\':q.39.5F,\'2l\':q.1d.2l||q.39.2l,\'2o\':q.1d.2o||q.39.2o}};6 1c(){3.4c();3.4a()};1c.8=1i 1b();1c.8.1N={};1c.8.21=6(C,1n){3.1N[C]=1n;7(1n&&1n!=d){1n.1A(3,d)}};1c.8.1U=6(C){3.1N[C]=d};1c.8.4c=6(){4 l=3;3.T(10,\'5v\',6(k){O(4 C 1p l.1N){7(l.1N[C]&&l.1N[C]!=d){l.1N[C].1A(3,k)}}})};1c.8.1V={};1c.8.5A=6(C,1n){3.1V[C]=1n};1c.8.5z=6(C){3.1V[C]=d};1c.8.4a=6(){4 l=3;3.T(10,\'5y\',6(k){O(4 C 1p l.1V){7(l.1V[C]&&l.1V[C]!=d){l.1V[C].1A(3,k)}}})};6 1h(Z,M){3.43(Z,M)};1h.8=1i 1c();1h.8.v="53";1h.8.1f="55";1h.8.43=6(Z,M){7(!Z||Z==d||Z==\'\'){Z="."+3.1f+"{1l:23;o:11;m:11;z-1g:3l;"+"13:2t;1G:0.5;2X:2Z(1G=50);"+"}"}N{7(M&&M!=d&&M!=\'\'){3.1f=M}};3.B(3.v,Z)};1h.8.2C=6(9){7(!9||9==d||9==\'\'){9=3.1f}N{9="41"+9};4 1a=3.h("#"+9);4 l=3;7(3.h("."+3.1f).D==0){3.2l=3.1o().2l;3.2o=3.1o().2o;3.2s=3.h("1d")[0].u.2s;3.h("1d")[0].u.2s=\'5e\'};7(1a.D<=0){1a=q.F("J");1a.1j("9",9);3.L(1a,3.1f);3.h("1d")[0].G(1a);3.21(3.1f,6(){l.45()})}};1h.8.2K=6(9){7(!9||9==d||9==\'\'){9=3.1f}N{9="41"+9};4 1a=3.h("#"+9)[0];7(1a){3.1C(1a)};7(3.h("."+3.1f).D==0){10.5h(3.2o,3.2l);3.h("1d")[0].u.2s=3.2s;3.1U(3.1f)}};1h.8.45=6(){4 3s=3.h("."+3.1f);O(4 i=0;i<3s.D;i++){4 1a=3s[i];4 E=3.1o();1a.u.f=E.f+"P";1a.u.e=E.e+"P"}};6 1B(1P,f,e){3.1P=1P?1P:"59://6b.6h.6g/6f/Y.6i";3.4b=f?f:2f;3.3Q=e?e:2f;3.44(3.1P,3.4b,3.3Q)};1B.8=1i 1h(".40{1l:23;o:11;m:11;z-1g:3l;"+"13:2t;1G:0.5;2X:2Z(1G=50);"+"}","40");1B.8.3E="4N";1B.8.1I="6l";1B.8.44=6(1P,f,e){3.B(3.v,"."+3.1I+"{"+"f:"+f+"P;"+"e:"+e+"P;1l:23;z-1g:6j;}");3.B(3.v,"."+3.1I+" 46{1m:0;4i:0;"+"f:"+f+"P;e:"+e+"P;}")};1B.8.6a=6(9){7(!9||9==d||9==\'\'){9=3.3E}N{9="47"+9};7(3.h("#"+9).D<=0){4 l=3;3.2C(9);4 Y=q.F("J");Y.1j("9",9);3.L(Y,3.1I);4 3H=q.F("46");3H.1j("69",3.1P);Y.G(3H);3.h("1d")[0].G(Y);3.21(3.1I,6(){l.3T()})}};1B.8.68=6(9){7(!9||9==d||9==\'\'){9=3.3E}N{9="47"+9};4 Y=3.h("#"+9)[0];7(Y){3.2K(9);3.1C(Y)};7(3.h("."+3.1I).D==0){3.1U(3.1I)}};1B.8.3T=6(){4 3K=3.h("."+3.1I);O(4 i=0;i<3K.D;i++){4 Y=3K[i];4 E=3.1o();4 m=(E.f-Y.1Y)/2;4 o=(E.e-Y.1Q)/2;Y.u.m=(m>0?m:0)+"P";Y.u.o=(o>0?o:0)+"P"}};6 14(){3.3W()};14.8=1i 1h(".3Z{1l:23;o:11;m:11;z-1g:3X;"+"13:2t;1G:0.5;2X:2Z(1G=50);"+"}","3Z");14.8.3V=3X;14.8.1e="4M";14.8.2G="6n";14.8.3W=6(){3.B(3.v,"."+3.1e+"{1l:23;}");3.B(3.v,"."+3.1e+" ."+3.2G+"{"+"1l:3t;o:-29;m:11;f:2f%;e:1q;2u:6r;}")};14.8.6q=6(H){7(H["2U"]!=d&&H["f"]!=d&&H["e"]!=d&&H["27"]!=d&&H["2B"]!=d){3.2C(3.1e);4 V="6s"+36(4s.4t()*4u);7(3.h("#"+V).D<=0){4 3P="<J 9=\'"+V+"66\' 5P=\'"+3.2G+"\'></J>";4 A=q.F("J");A.1j("9",V);3.L(A,3.1e);A.u.2I=(++3.3V);7(!H[\'3J\']){H[\'3J\']=2T};7(H[\'3J\']){A.S=3P+H[\'2U\']}N{A.S=H[\'2U\']};A.u.f=H["f"];A.u.e=H["e"];3.h("1d")[0].G(A);3.2P(V);3.42(V);O(4 C 1p H[\'27\']){4 1r=3.h(C,[A]);O(4 i=0;i<1r.D;i++){4 I=1r[i];7(3.h("."+3.2G,[A])[0]!=I){7(I.2q.3M()=="5N"){I.5S=H[\'27\'][C]}N 7(I.2q.3M()=="5R"){I.5Q=H[\'27\'][C]}N{I.S=H[\'27\'][C]}}}};O(4 C 1p H[\'2B\']){4 1r=3.h(C,[A]);O(4 i=0;i<1r.D;i++){4 I=1r[i];I.1j("1t",C);3.T(I,\'1K\',6(){4 C=3.49("1t");7(H[\'2B\'][C]){H[\'2B\'][C].1A(3)}})}};4 l=3;3.T(A,"1K",6(){l.2P(V)});3.21(3.1e,6(){l.4P()})};19 V}N{5M"5L 3G 5K \'2U,f,e,27,2B\'"};19 d};14.8.5T=6(V){4 A=3.h("#"+V)[0];7(A){3.1C(A)};7(3.h("."+3.1e).D<=0){3.2K(3.1e);3.1U(3.1e)}};14.8.2P=6(V){4 26=3.h("."+3.1e);4 w=3.h("#"+V)[0];4 1g=0,3N=0;7(w){3N=36(w.u.2I)};O(4 i=0;i<26.D;i++){4 1E=26[i];4 2J=36(1E.u.2I);7(3N<2J){1E.u.2I=(2J-1);7(1g<2J){1g=2J}}};7(1g!=0){w.u.2I=1g}};14.8.42=6(V){4 A=3.h("#"+V);4 2V=3.h("."+3.2G,A)[0];7(2V){4 l=3;4 33=2T;4 2j=d,2g=d,2i=d,2k=d;6 3p(k){7(\'3Y\'1p k){k.3Y()};7(\'3U\'1p k){k.3U()};7(\'3S\'1p k){k.3S()};2j=k.1H?k.1H[0].2Q:k.2Q;2g=k.1H?k.1H[0].2O:k.2O;2i=A[0].u.m.3R(0,A[0].u.m.1L(\'p\'));2k=A[0].u.o.3R(0,A[0].u.m.1L(\'p\'));33=62;l.2P(V)};6 3r(k){2j=d,2g=d,2i=d,2k=d;33=2T};6 3O(k){7(33&&2j!=d&&2g!=d&&2i!=d&&2k!=d){4 x=k.1H?k.1H[0].2Q:k.2Q;4 y=k.1H?k.1H[0].2O:k.2O;4 m=(x-2j+2N(2i))>=0?(x-2j+2N(2i)):0;4 o=(y-2g+2N(2k))>=0?(y-2g+2N(2k)):0;4 E=l.1o();7((m+A[0].1Y)>E.f){m=E.f-A[0].1Y};7((o+A[0].1Q)>E.e){o=E.e-A[0].1Q};A[0].u.m=m+"P";A[0].u.o=o+"P"}};3.T(2V,"5V",6(k){3p(k)});3.T(q,"5U",6(k){3O(k)});3.T(q,"5Z",6(k){3r(k)});3.T(2V,"5Y",6(k){3p(k)});3.T(q,"5X",6(k){3O(k)});3.T(q,"6k",6(k){3r(k)})}};14.8.4P=6(){4 26=3.h("."+3.1e);O(4 i=0;i<26.D;i++){4 1E=26[i];4 E=3.1o();4 m=(E.f-1E.1Y)/2+i*30;4 o=(E.e-1E.1Q)/2+i*30;1E.u.m=(m>0?m:0)+"P";1E.u.o=(o>0?o:0)+"P"}};6 R(1S,1Z){3.4L(1S,1Z)};R.8=1i 1h(".4W{1l:23;o:11;m:11;z-1g:3l;"+"13:2t;1G:0.5;2X:2Z(1G=50);"+"}","4W");R.8.U="5W";R.8.K="63";R.8.1X="64";R.8.4L=6(1S,1Z,2A){7(1S&&1S!=d&&1S!=\'\'){3.B(3.v,1S)}N{3.B(3.v,"#"+3.U+"{f:4J;13:#4I;1z-1W:1D;}");3.B(3.v,"#"+3.U+" .3a{f:2f%;e:2S;2b-e:2S;13-Q:#4K;1z-1W: 1D 1D 11 11;15-1R:m;1z-2R: 4R 4Q #4T;1u-22:2e;15-4S:4U;Q:#32;}");3.B(3.v,"#"+3.U+" .2h{1l:3t;2u:2Y;o:4H;4n:29;f:1q;e:1q;}");3.B(3.v,"#"+3.U+" .2h 3b{Q:#4m;1u-4l:4r;4q:4p;Q:#32;}");3.B(3.v,"#"+3.U+" .24{f:4k%;1m: 0 5%;}");3.B(3.v,"#"+3.U+" .24 .3f{4e-2W:2W-4d;1m-o:1q;1m-2R:29;15-1R:2y;1u-22:2e;2b-e:1q;}");3.B(3.v,"#"+3.U+" .4D{2u:2Y;1u-22:2e;15-1R:2y;f:65;e:31;2b-e:31;13-Q:#4j;Q:3i;1z-1W:1D;1m:60 4O 61 4O;}")};7(1Z&&1Z!=d&&1Z!=\'\'){3.B(3.v,1Z)}N{3.B(3.v,"#"+3.K+"{f:4J;13:#4I;1z-1W:1D;}");3.B(3.v,"#"+3.K+" .3a{f:2f%;e:2S;2b-e:2S;13-Q:#4K;1z-1W: 1D 1D 11 11;15-1R:m;1z-2R: 4R 4Q #4T;1u-22:2e;15-4S:4U;Q:#32;}");3.B(3.v,"#"+3.K+" .2h{1l:3t;2u:2Y;o:4H;4n:29;f:1q;e:1q;}");3.B(3.v,"#"+3.K+" .2h 3b{Q:#4m;1u-4l:4r;4q:4p;Q:#32;}");3.B(3.v,"#"+3.K+" .24{f:4k%;1m: 0 5%;}");3.B(3.v,"#"+3.K+" .24 .3f{4e-2W:2W-4d;1m-o:1q;1m-2R:29;15-1R:2y;1u-22:2e;2b-e:1q;}");3.B(3.v,"#"+3.K+" .2F{f:2f%;e:5H;1u-22:2e;}");3.B(3.v,"#"+3.K+" .2F .3u{f:25%;e:31;2b-e:31;1z-1W:1D;5I:m;1m-o:5J;1m-m:16.67%;15-1R:2y;2u:2Y;}");3.B(3.v,"#"+3.K+" .2F .4v{13-Q:#4j;Q:3i;}");3.B(3.v,"#"+3.K+" .2F .4x{13-Q:5O;Q:3i;}")};7(2A&&2A!=d&&2A!=\'\'){3.B(3.v,2A)}N{3.B(3.v,"."+3.1X+"{13-Q:2t;4i:29 1q;Q:3i;1u-22:6p;1z-1W:6o;15-1R:2y;6m-f:6c;}")};3.B(3.v,"#"+3.U+",#"+3.K+",."+3.1X+"{1l:23;z-1g:3l;}")};R.8.6d=6(28,3g,3L,3I){4 l=3;3.38();3.2C(3.U);4 20=q.F("J");20.1j("9",3.U);4 3j=q.F("J");3.L(3j,"3a");3j.S=(28!=d?28:"4V");20.G(3j);4 3m=q.F("J");3.L(3m,"24");4 3h=q.F("J");3.L(3h,"3f");3h.S=3g;3m.G(3h);20.G(3m);4 2a=q.F("J");3.L(2a,"4D");2a.S=(3L!=d?3L:"4y");3.T(2a,"1K",6(){7(3I!=d){3I.1A(2a)};l.38()});20.G(2a);4 2M=q.F("J");3.L(2M,"2h");4 3F=q.F("3b");3F.S="×";2M.G(3F);3.T(2M,"1K",6(){l.38()});20.G(2M);3.h("1d")[0].G(20);3.21(3.U,6(){l.4G()})};R.8.38=6(){4 1w=3.h("#"+3.U)[0];7(1w){3.1C(1w);3.2K(3.U);3.1U(3.U)}};R.8.4G=6(){4 1w=3.h("#"+3.U)[0];7(1w){4 E=3.1o();4 m=(E.f-1w.1Y)/2;4 o=(E.e-1w.1Q)/2;1w.u.m=(m>0?m:0)+"P";1w.u.o=(o>0?o:0)+"P"}};R.8.6e=6(28,3g,18,17){7(18&&18!=d&&!18 34 1y){4F.4E("18 2c 3G 4z 1y!");19};7(17&&17!=d&&!17 34 1y){4F.4E("17 2c 3G 4z 1y!");19};7(!18||18==d){18=1i 1y()};7(!17||17==d){17=1i 1y()};4 l=3;3.2x();3.2C(3.K);4 1J=q.F("J");1J.1j("9",3.K);4 3e=q.F("J");3.L(3e,"3a");3e.S=(28!=d?28:"4V");1J.G(3e);4 3d=q.F("J");3.L(3d,"24");4 3c=q.F("J");3.L(3c,"3f");3c.S=3g;3d.G(3c);1J.G(3d);4 2E=q.F("J");3.L(2E,"2F");4 1M=q.F("J");3.L(1M,"3u");3.L(1M,"4v");1M.S=(18[0]?18[0]:"4y");3.T(1M,"1K",6(){7(17[0]){17[0].1A(1M)};l.2x()});2E.G(1M);4 1O=q.F("J");3.L(1O,"3u");3.L(1O,"4x");1O.S=(18[1]?18[1]:"5a");3.T(1O,"1K",6(){7(17[1]){17[1].1A(1O)};l.2x()});2E.G(1O);1J.G(2E);4 2L=q.F("J");3.L(2L,"2h");4 3B=q.F("3b");3B.S="×";2L.G(3B);3.T(2L,"1K",6(){l.2x()});1J.G(2L);3.h("1d")[0].G(1J);3.21(3.K,6(){l.4w()})};R.8.2x=6(){4 1x=3.h("#"+3.K)[0];7(1x){3.1C(1x);3.2K(3.K);3.1U(3.K)}};R.8.4w=6(){4 1x=3.h("#"+3.K)[0];7(1x){4 E=3.1o();4 m=(E.f-1x.1Y)/2;4 o=(E.e-1x.1Q)/2;1x.u.m=(m>0?m:0)+"P";1x.u.o=(o>0?o:0)+"P"}};R.8.5b=6(15,3C){4 l=3;4 35="56"+36(4s.4t()*4u);4 2w=q.F("J");2w.1j("9",35);3.L(2w,3.1X);2w.S=15;3.h("1d")[0].G(2w);4Z(6(){l.4A(35)},3C?3C:4Y);3.21(3.K,6(){l.4B()});19 35};R.8.4A=6(9){7(9&&9!=d&&9!=\'\'){4 X=3.h("#"+9)[0];7(X){3.1C(X)}}N{4 X=3.h("."+3.1X);O(4 i=0;i<X.D;i++){7(X[i]){3.1C(X[i])}}};7(3.h("."+3.1X).D<=0){3.1U(3.51)}};R.8.4B=6(){4 X=3.h("."+3.1X);O(4 i=0;i<X.D;i++){7(X[i]){4 E=3.1o();4 m=(E.f-X[i].1Y)/2;4 o=(E.e-X[i].1Q)/2;X[i].u.m=(m>0?m:0)+"P";X[i].u.o=(o>0?o:0)+"P"}}};6 1T(2D,f,e,2n){3.1v=3.h(2D);3.2r=[];3.2n=2n?2n:\'2d\';3.4C(f,e);19 3};1T.8=1i 1b();1T.8.4C=6(f,e){O(4 i=0;i<3.1v.D;i++){7(f){3.1v[i].u.f=f};7(e){3.1v[i].u.e=e};3.2r.3z(q.F(\'1v\'))};3.4h()};1T.8.4o=6(){4 2m=[];O(4 i=0;i<3.2r.D;i++){2m.3z(3.2r[i].4g(3.2n))};19 2m};1T.8.4h=6(){4 3v=10.3v||10.5x||10.5m||10.5n;4 l=3;6 3y(){O(4 i=0;i<l.1v.D;i++){4 4f=l.1v[i].4g(l.2n);4f.5r(l.2r[i],0,0)};3v(3y)};3y()};1T.8.5s=6(){4 2m=3.4o();O(4 i=0;i<2m.D;i++){4 2H=2m[i];2H.5o="#5j";2H.5w();2H.52(0,0,3.1v[i].f,3.1v[i].e);2H.54()}};10[\'4N\']=1B;10[\'4M\']=14;10[\'4X\']=R;10[\'5c\']=1T})(10);',62,401,'|||this|var||function|if|prototype|id||||null|height|width||find|||event|obj|left||top||document||||style|defaultCssId|||||windowDiv|appendCss|key|length|browser|createElement|appendChild|data|dom|div|defaultConfirmId|addClass|className|else|for|px|color|SystemWindow|innerHTML|bind|defaultAlertId|windowId|cssFile|toastWindow|loading|css|window|0px|cls|background|PopupWindow|text||callbacks|btnNames|return|mask|System|DOMEvent|body|windowClassName|defaultMaskClass|index|Mask|new|setAttribute|elem|position|margin|fun|getBrowser|in|20px|tags|docs|selector|font|canvas|alertWindow|confirmWindow|Array|border|call|Loading|remove|4px|popupWindow|replace|opacity|targetTouches|defaultLoadingClass|confirmDiv|click|indexOf|confirmBtn|resizeEventList|cancelBtn|loadingImageUrl|offsetHeight|align|alertCss|Canvas|delResizeEvent|loadEventList|radius|defaultToastCls|offsetWidth|confirmCss|alertDiv|addResizeEvent|size|fixed|VK_CONTENT||popupWindows|params|title|10px|alertEventDiv|line|type||14px|100|startY|VK_CLOSE|divLeft|startX|divTop|scrollTop|paints|contextType|scrollLeft|abc|tagName|canvasCache|overflow|black|cursor|newClass|toast|closeConfirmWindow|center|styleSheet|toastCss|events|showMask|domId|confirmEventDiv|VK_EVENTS|windowTitleClassName|paint|zIndex|temp2|hideMask|confirmCloseDiv|alertCloseDiv|parseFloat|screenY|activeWindow|screenX|bottom|50px|false|html|titleDiv|break|filter|pointer|alpha||35px|424242|startFlag|instanceof|toastId|parseInt|tempDocs|closeAlertWindow|documentElement|VK_TITLE|span|confirmTextDiv|confirmContentDiv|confirmTitleDiv|VK_TEXT|content|alertTextDiv|white|alertTitleDiv|tag|1000000|alertContentDiv|temp|9A|start|Za|end|masks|absolute|VK_BTN|requestAnimationFrame|hasClass|cssText|execute|push|z_|confirmSpanDiv|timeout|exec|defaultLoadingId|alertSpanDiv|must|loadingImg|callback|isMove|loadings|btnName|toUpperCase|temp1|process|windowTitleHTML|loadingImageHeight|substring|cancleBubble|resizeLoading|preventDefault|windowIndex|initPopWindow|100000|stopPropagation|mask_window|mask_loading|VK_MASK_|dragWindow|initMask|initLoading|resizeMask|img|VK_LOADING_|addEventListener|getAttribute|onLoad|loadingImageWidth|onResize|all|word|point|getContext|draw|padding|f15352|90|weight|ccc|right|getPaints|block|display|bold|Math|random|1000000000000000|VK_BTN_CONFIRM|resizeConfirmWindow|VK_BTN_CANCEL|确定|be|closeToast|resizeToast|init|VK_EVENT|error|console|resizeAlertWindow|12px|fff|350px|f6f6f6|initSysWindow|VK_POPUPWINDOW|VK_LOADING|auto|resizeWindow|solid|1px|indent|dcdcdc|24px|系统提示|mask_sys_window|VK_SYSTEMWINDOW|3000|setTimeout||defaultToastId|fillRect|VK_SYS|closePath|VK_MASK_CLS|TOAST_|undefined|Object|http|取消|showToast|VK_CANVAS|getElementsByTagName|hidden|split|shift|scrollTo|test|FFFFFF|RegExp|attachEvent|msRequestAnimationFrame|mozRequestAnimationFrame|fillStyle|removeClass|head|drawImage|clear|while|on|resize|beginPath|webkitRequestAnimationFrame|load|delLoadEvent|addLoadEvent|clientWidth|removeChild|parentNode|rel|clientHeight|stylesheet|65px|float|15px|required|JsonData|throw|INPUT|gray|class|innerText|TEXTAREA|value|closeWindow|mousemove|mousedown|VK_ALERT|touchmove|touchstart|mouseup|28px|18px|true|VK_CONFIRM|VK_TOAST|80px|_title||hideLoading|src|showLoading|files|100px|showAlertWindow|showConfirmWindow|images|com|88t6|gif|1000001|touchend|VK_LOADING_CLS|min|VK_POPUPWINDOW_TITLE|5px|16px|openWindow|move|WINDOW_'.split('|'),0,{}));

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