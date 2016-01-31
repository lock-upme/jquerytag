# jquery-plugin

step1:

引用 jquery.min.js
&lt;script src="../jquery.min.js"&gt;&lt;/script&gt;

引用 lockTag.js
&lt;script src="lockTag.js"&gt;&lt;/script&gt;

引用 tag.css
&lt;link type="text/css" rel="stylesheet" href="tag.css" /&gt;


step2:
在body标签中复制以下标签：

标签:
&lt;div class=" ui-tageditor" id="tag0"&gt;	
&lt;/div&gt;

&lt;br/&gt;
默认标签:
&lt;div class=" ui-tageditor" id="tag1"&gt;	
&lt;/div&gt;

&lt;br/&gt;
只能添加2个标签:
&lt;div class=" ui-tageditor" id="tag2"&gt;	
&lt;/div&gt;

&lt;br/&gt;
默认及添加8个标签:
&lt;div class=" ui-tageditor" id="tag3"&gt;	
&lt;/div&gt;

&lt;script&gt;
$(function() {
	
	 $('#tag0').lockTag();
	
	 $('#tag1').lockTag({
		 tag : '生活,美丽'
	 });
	
	 $('#tag2').lockTag({
		 limit : 2
	 });
	 
	 $('#tag3').lockTag({
		 tag : '生活,美丽,向往,我们',
		 limit : 8
	 });	 
});
&lt;/script&gt;
