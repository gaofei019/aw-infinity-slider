# aw-infinity-slider
adaptive-width-infinity-slider<br>
Support touch event in mobile terminal.<br>
自适应宽度无缝轮播jquery,zepto插件,支持移动端手指滑动。可以配置为固定宽度轮播。

<h3>使用方法：</h3>
引入jquery或者zepto<br>(使用zepto时，需要按照zepto的要求修改插件的写法)</b>以及插件文件<br>
html代码在html页面中<br>
JS代码<br>
<div class="highlight highlight-text-shell-session">
<pre>
	$(function(){
        var $skSlider=$('#skSlider');
        $skSlider.slider();//执行轮播
    });
</pre>
</div>
配置成固定宽度轮播（宽度通过CSS控制）<br>
Dispose slider of fixed width which is controled by css;

<div class="highlight highlight-text-shell-session">
<pre>
	$(function(){
        var $skSlider=$('#skSlider');
        $skSlider.slider({
			screenwidth:false
		});//执行轮播
    });
</pre>
</div>
配置自动播放及间隔时间<br>
Dispose auto play and time interval
<div class="highlight highlight-text-shell-session">
<pre>
	$(function(){
        var $skSlider=$('#skSlider');
        $skSlider.slider({
			auto:true, //默认不自动播放
			time:5000 //单位:ms =>默认10000ms
		});//执行轮播
    });
</pre>
</div>

注：长时间运行有点儿内存泄漏，希望各位大神指正！
eg: There is some memory leak in it.I hope someone to modify it.

<h2>Demo: http://www.saikr.com</h2>
