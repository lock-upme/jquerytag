# jquery-plugin

step1:

引用 jquery.min.js
<script src="../jquery.min.js"></script>

引用 lockTag.js
<script src="lockTag.js"></script>

引用 tag.css
<link type="text/css" rel="stylesheet" href="tag.css" />


step2:
在body标签中复制以下标签：

标签:
<div class=" ui-tageditor" id="tag0">	
</div>

<br/>
默认标签:
<div class=" ui-tageditor" id="tag1">	
</div>

<br/>
只能添加2个标签:
<div class=" ui-tageditor" id="tag2">	
</div>

<br/>
默认及添加8个标签:
<div class=" ui-tageditor" id="tag3">	
</div>

<script>
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
</script>
