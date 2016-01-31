# jquery-plugin
# 标签添加，按下回车键自动匹配添加；
# 标签删除，可以按退格键进行删除或者直接鼠标点击删除
# 标签添加自动换行
# 默认最多可以添加 10 个标签，可自行设定值 limit 值来更改
# 默认标签，使用参数为 tag，值用逗号进行分割

# step1:

引用 jquery.min.js
&lt;script src="../jquery.min.js"&gt;&lt;/script&gt;

引用 lockTag.js
&lt;script src="lockTag.js"&gt;&lt;/script&gt;

引用 tag.css
&lt;link type="text/css" rel="stylesheet" href="tag.css" /&gt;


# step2:
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
