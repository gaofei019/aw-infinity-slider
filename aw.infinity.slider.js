$.fn.extend({
    slider: function (obj){
        this.each(function (){
            var oDiv=$(this),
                aBtn=oDiv.find('#sliderCount .js_slider_count_num'),
                oUl=oDiv.find('#sliderListBox'),
                now=0,
                oBtnPrev=oDiv.find('#sliderPrev'),
                oBtnNext=oDiv.find('#sliderNext'),
                oBtnPrevDom = oBtnPrev[0],
                oBtnNextDom = oBtnNext[0],
                oUlHtml = oUl[0].innerHTML,
                oUlHtmlDouble = oUlHtml+oUlHtml,
                aLi,
                oUlWidth,
                W,
                index,
                len,
                timer,
                aBtnIndex,
                disPlaceMent,
                left = 0,
                speed,
                cssData='',
                cssTxt='',
                disX,
                downX,
                arr = ['-webkit-','-moz-','-ms-','-o-',''],
                i,
                arrLen = arr.length,
                arrHtml = [],
                strHtml = '',
                unitHtml = '',
                //winWidth = window.screen.width,
                $win = $(window),
                winWidth = $win.width(),
                isStandardBrowser = $.support.opacity,//检测是否是IE9及以上版本和其他标准浏览器
                resizeTimer = null;

            
            //oUl.html(oUlHtmlDouble);
            oUl[0].innerHTML = oUlHtmlDouble;
            aLi=oDiv.find('#sliderListBox .js_slider_item');
            if(!obj ||(obj && obj.screenwidth==true)){
            	aLi.css('width',winWidth);
	    }
            oUlWidth = aLi.size()*aLi.width()+'px';
            
            oUl.css('width', oUlWidth);
            
            W=oUl.width()/2;
            if(!obj || (obj && obj.screenwidth==true)){
	            $win.off('resize').on('resize',function() {
	                var $t=$(this);
	                if (resizeTimer) {
	                    clearTimeout(resizeTimer)
	                }
	                //在一定的时间之内，只执行一次resize事件函数
	                resizeTimer = setTimeout(function(){
	                    winWidth = $t.width();
	                    aLi.css('width',winWidth);
	                    oUlWidth = aLi.size()*aLi.width()+'px';
	                    oUl.css('width', oUlWidth);
	                    W=oUl.width()/2;
	                    if(aBtn){//浏览器窗口变化后，触发滚动事件回到第一页，重新计算位移
	                        aBtn.eq(0).mouseenter();
	                    }
	                }, 400);
	            });
            }
            function aBtnMouse(){
                aBtn.off('mouseenter').on('mouseenter',function (){
                    index=$(this).index();
                    len = aBtn.length;
                    
                    if(index==0 && now%5==4)
                    {
                        now++;
                    }
                    else
                    {
                        now=parseInt(now/len)*len+index;
                    }

                    tab();
                });
            };
            if(aBtn){

                aBtnMouse();
                
            }
            function prevTab(){
                now--;
                
                tab();
            };
            function nextTab(){
                now++;
                
                tab();
            };
            oBtnPrevDom.onclick=null;
            oBtnNextDom.onclick=null;
            oBtnPrevDom.onclick=prevTab;
            oBtnNextDom.onclick=nextTab;

            //timer=setInterval(oBtnNextDom.onclick, 10000);
            timer = setInterval(function(){
                oBtnNextDom.onclick=null;
                oBtnNextDom.onclick=nextTab;
                oBtnNextDom.onclick();
            },10000);

            oDiv.off("mouseenter mouseleave").on({
                mouseenter:function(){
                    clearInterval(timer);
                },
                mouseleave:function(){
                    //timer=setInterval(oBtnNextDom.onclick, 10000);
                    timer = setInterval(function(){
                        oBtnNextDom.onclick=null;
                        oBtnNextDom.onclick=nextTab;
                        oBtnNextDom.onclick();
                    },10000);
                }
            });
            
            function tab()
            {
                //document.title=now;
                aBtnIndex = 0;
                disPlaceMent = (-now*aLi.width()); //位移
                
                aBtn.removeClass('active');
                
                if(now>0)
                {
                    aBtnIndex = now%aBtn.size();
                    aBtn.eq(aBtnIndex).addClass('active');
                }
                else
                {
                    aBtnIndex = (now%aBtn.size()+aBtn.size())%aBtn.size();
                    aBtn.eq(aBtnIndex).addClass('active');
                }
                startMove(oUl[0], disPlaceMent);
            }
            
            //var left=0;
            function setTransform(data){//设置transform样式方法
                for(i=0;i<arrLen;i++){
                    unitHtml = arr[i]+'transform:'+data;
                    arrHtml.push(unitHtml);
                }
                //strHtml = arrHtml.join(';')+';width:'+oUlWidth;
                strHtml = arrHtml.join(';');
                return strHtml;
            };
            function startMove(obj, iTarget)
            {
                clearInterval(obj.timer);
                obj.timer=setInterval(function (){
                    speed=(iTarget-left)/8;
                    speed=speed>0?Math.ceil(speed):Math.floor(speed);
                    
                    if(left==iTarget)
                    {
                        clearInterval(obj.timer);
                    }
                    else
                    {
                        left+=speed;
                        
                        if(left<0)
                        {
                            if(isStandardBrowser){//标准浏览器
                                cssData = 'translateX('+left%W+'px)';
                                cssTxt = 'width:'+oUlWidth+';'+ setTransform(cssData);
                                obj.style.cssText=cssTxt;
                            }else{
                                obj.style.left=left%W+'px';
                                obj.style.width = oUlWidth;
                            }
                            
                        }
                        else
                        {
                            
                            if(isStandardBrowser){//标准浏览器
                                cssData = 'translateX('+(left%W-W)%W+'px)';
                                cssTxt = 'width:'+oUlWidth+';'+ setTransform(cssData);
                                obj.style.cssText=cssTxt;
                            }else{
                                obj.style.left=(left%W-W)%W+'px';
                                obj.style.width = oUlWidth;
                            }
                            
                        }
                    }
                }, 30);
            };
            function controlMove(ev){//控制轮播方法
                clearInterval(oUl[0].timer);
                disX=ev.targetTouches[0].pageX-left;
                downX=ev.targetTouches[0].pageX;
        
                function fnMove(ev){
                    left=ev.targetTouches[0].pageX-disX;
                    if(left<0){
                        cssData = 'translateX('+left%W+'px)';
                        oUl[0].style.cssText=setTransform(cssData);
                    }else{
                        cssData = 'translateX('+(left%W-W)%W+'px)'
                        oUl[0].style.cssText=setTransform(cssData);
                    }
                    ev.preventDefault();//去掉手机的默认触摸事件，防止页面变形或滚动条滚动
                };
        
                function fnEnd(ev){
                    oUl[0].removeEventListener('touchmove',fnMove,false);//解除touchmove事件绑定，回复手机默认事件
                    oUl[0].removeEventListener('touchend',fnEnd,false);
                    
                    if(Math.abs(ev.changedTouches[0].pageX-downX)>10){
                        if(downX>ev.changedTouches[0].pageX){
                            now++; 
                            tab();
                        }else{
                            now--;
                            tab();
                        }
                    }else{
                        disPlaceMent = (-now*aLi.width()); //位移
                        startMove(oUl[0],disPlaceMent);
                    }   
                };

                oUl[0].removeEventListener('touchmove',fnMove,false);
                oUl[0].removeEventListener('touchend',fnEnd,false);

                oUl[0].addEventListener('touchmove',fnMove,false);
                
                oUl[0].addEventListener('touchend',fnEnd,false);
            };
            if(isStandardBrowser){//如果是标准浏览器

                //解绑触摸事件
                oUl[0].removeEventListener('touchstart',controlMove,false);
                //加触摸事件
                oUl[0].addEventListener('touchstart',controlMove,false);
            }
        });
    }
});