# aw-infinity-slider
adaptive-width-infinity-slider<br>
Support touch event in mobile terminal.<br>
自适应宽度无缝轮播jquery插件,支持移动端手指滑动。可以配置为固定宽度轮播。

<h3>使用方法：</h3>
引入jquery或者zepto以及插件文件<br>
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

注：长时间运行有点儿内存泄漏，希望各位大神指正！
eg: There is some memory leak in it.I hope someone to modify it.

<h2>Demo: http://www.saikr.com</h2>
