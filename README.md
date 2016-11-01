# aw-infinity-slider
adaptive-width-infinity-slider<br>
Support touch event in mobile terminal.<br>
自适应宽度无缝轮播jquery插件,支持移动端手指滑动。可以配置为固定宽度轮播。

<h3>使用方法：</h3>
引入jquery或者zepto以及插件文件<br>
html代码<br>
<div class="highlight highlight-text-shell-session">
<pre>
		<div class="sk-index-slider-box" id="skSlider">
			<div class="sk-index-slider-btn-box">
				<span class="item prev" id="sliderPrev">
					<i class="common-icon-big"></i>
				</span>
				<span class="item next" id="sliderNext">
					<i class="common-icon-big"></i>
				</span>
			</div>
			<ol class="sk-index-count-box" id="sliderCount">
				<li class="js_slider_count_num item active" data-index="1"></li>
				<li class="js_slider_count_num item" data-index="2"></li>
				<li class="js_slider_count_num item" data-index="3"></li>
			</ol>
			<div class="sk-index-slider-list-box" id="sliderListBox">
				<div class="fl js_slider_item item" style="background-image:url(http://publicqn.saikr.com/5413169c869bfda404fcf9035069c6381476870746895.png);">
					<a href="javascript:;" title="阿里云数据大赛">
						<div class="item-txt-box">
							<span class="item-txt"></span>
						</div>
					</a>
				</div>
				<div class="fl js_slider_item item" style="background-image:url(http://publicqn.saikr.com/ff29824e8575e70bbc3d89bcc20c8bdb1468567293081.png)">
					<a href="javascript:;" title="山东省大学生数学建模竞赛">
						<div class="item-txt-box">
							<span class="item-txt"></span>
						</div>
					</a>
				</div>
				<div class="fl js_slider_item item" style="background-image:url(http://publicqn.saikr.com/900fdfe02dc3147486988cdb7602fa241475230762392.jpg)">
					<a href="javascript:;" title="阿里云数据大赛">
						<div class="item-txt-box">
							<span class="item-txt"></span>
						</div>
					</a>
				</div>
			</div>
		</div>
</pre>
</div>
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
