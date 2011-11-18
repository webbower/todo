(function() {
	window.log = window.console.log || function() {};
})();

(function() {
	"use strict";
	
	if(!String.prototype.format) {
		String.prototype.format = function() {
			var
				s = this,
				i = arguments.length
			;
			
			while(i--)
				s = s.replace(new RegExp('\\{' + i + '\\}', 'gi'), arguments[i]);
			
			return s;
		}
	}
})();

(function($) {
	"use strict";
	
	window.Todo = (window.Todo || {});
	
	$.extend(window.Todo, {
		form: null,
		list: null,
		
		templates: {
			task: '<li id="todo-{0}"><button type="button">Completed</button> {1}</li>'
		},
		
		init: function() {
			log("TODO INIT");
			this.form = $('#add-form');
			this.list = $('#tasks');
			
			var
				self = this,
				tapEvent = Modernizr.touch ? 'touchstart' : 'click'
			;
			
			this.form
				.on('submit', function(ev) {
					ev.preventDefault();
					log("ADDING");  // TODO: Remove for Production

					var
						field = self.form.find('input[type=text]'),
						todo = field.val()
					;
			
					if(!!todo) {
						self.addTask(todo);
						field.val('');
					}
				})
			;
			
			this.list
				.on(tapEvent, 'li button', function(ev) {
					log("COMPLETING");  // TODO: Remove for Production

					self.completeTask($(this).closest('li'));
				})
			;
		},
		
		addTask: function(todo) {
			if(!!todo)
				this.list.append(this.templates.task.format((new Date()).getTime(), todo));
		},
		
		completeTask: function(taskEl) {
			if(!!taskEl) {
				taskEl = (!!taskEl.jquery ? taskEl : $(taskEl));
				
				taskEl.fadeOut(400, function() {
					$(this).remove();
				});
			}
		}
	});
})(jQuery);