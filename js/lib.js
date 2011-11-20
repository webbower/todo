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
		};
	}
})();

(function($) {
	"use strict";
	
	window.Todo = (window.Todo || {});
	
	$.extend(window.Todo, {
		form: null,
		list: null,
		
		templates: {
			task: '<li id="task-{0}"><button type="button" class="ir">Completed</button> {1}</li>'
		},
		
		init: function() {
			// log("TODO INIT");
			this.form = $('#add-form');
			this.list = $('#tasks');
			
			var
				self = this,
				tapEvent = Modernizr.touch ? 'touchstart' : 'click'
			;
			
			this.form
				.on('submit', function(ev) {
					ev.preventDefault();
					// log("ADDING");  // TODO: Remove for Production

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
					// log("COMPLETING");  // TODO: Remove for Production

					self.completeTask($(this).closest('li'));
				})
			;
			
			// Reload stored tasks
			var
				taskCount = localStorage.length,
				i = taskCount,
				id
			;
			if(taskCount) {
				while(i--) {
					id = localStorage.key(i);
					this.list.prepend(this.templates.task.format(id.split('-')[1], localStorage.getItem(id)));
				}
			}
			
			// window.onstorage = function(ev) {
			// 	console.log(ev, ev.key, ev.newValue);
			// };
			// window.addEventListener('storage', function(ev) {
			// 	console.log(ev, ev.key, ev.newValue);
			// }, false);
			// $(window).on('storage', function(ev) {
			// 	alert("foo");
			// 	console.log(ev.key, ev.newValue);
			// });
		},
		
		addTask: function(todo) {
			if(!!todo) {
				var
					id = (new Date()).getTime()
				;
				localStorage.setItem("task-{0}".format(id), todo);
				this.list.append(this.templates.task.format(id, todo));
			}
		},
		
		completeTask: function(taskEl) {
			if(!!taskEl) {
				taskEl = (!!taskEl.jquery ? taskEl : $(taskEl));
				var
					id = taskEl[0].id
				;
				
				taskEl.fadeOut(400, function() {
					localStorage.removeItem(id);
					$(this).remove();
				});
			}
		}
	});
})(jQuery);