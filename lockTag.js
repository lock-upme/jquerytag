/**
 * 标签
 *
 * @author lock
 */
(function($) {
	$.fn.lockTag = function(options) {	
		var defaults = {
				tag : null, //默认标签,用于表单修改标签,以逗号分割
				limit : 10 //默认可以添加10个标签
		};
		var opts = $.extend(defaults, options);
		var obj= $(this);
		
		//添加
		var add = function(e) {
			obj.delegate('input', 'keypress', function(e) {
				var that = $(this);
				that.next().hide();
				
		        if (e.keyCode == 13) {		        
			        if (that.val() == '') { return false; }		        
		        	if (obj.find('.ui-tag').length == opts.limit) { that.val(''); return false; }	
		        	that.css('width', '60px').parent().before('<span class="ui-tag">#'+that.val()+'</span>');
		        	that.val('');
		        }		        
			});
		};
		
		//赋予Input焦点
		var inputFocus = function() {
			obj.delegate('.ui-iptwrap','click', function() {
				obj.find('input').focus();
			});		
		};
		
		//input失去焦点的时候,信息提示
		var tipsShow = function() {
			obj.delegate('input', 'blur',function() {
				var that = $(this);
				if (obj.find('.ui-tag').length == 0) {
					that.next().show();
				}
			});			
		};
		
		//退格键删除标签
		var removeBackspace = function() {
			obj.delegate('input', 'keydown', function(e) {				
		        if (e.keyCode == 8) {
		        	var that = $(this);
		        	if ($.trim(that.val()) == '') {
		        		that.parent().prev().remove();
		        	}
		        }
			});
		};
		
		//鼠标点击删除标签
		var removeMouse = function() {
			obj.delegate('.ui-tag', 'click', function(e){
				$(this).remove();
				if (obj.find('.ui-tag').length == 0) { obj.find('label').show(); }
			})
		};		
		
		//初始化
		var init = function() {			
			//初始化标签HTML
			var html = '';
			html += '<div class="ui-tags">';
			html += '<div class="ui-iptwrap">';
			html += '<input maxlength="20" /><label>添加相关标签，用回车分隔、退格/点击删除</label>';
			html += '</div>';
			html += '</div>';
			obj.html(html);
			
			if (opts.tag) {
				obj.find('input').css('width', '60px');
				var tagarr = opts.tag.split(',');
				$.each(tagarr, function(i, tag){
					obj.find('.ui-tags').prepend('<span class="ui-tag">#'+tag+'</span>');
				})
				obj.find('label').hide();
			}
			
			add();
			tipsShow();
			inputFocus();
			removeMouse();
			removeBackspace();
		};
		
		init();		
	};
})(jQuery);