# Simple browser-based Todo app

Download the files, drop the index.html onto your browser, create a todo list. At the moment, the list will only last until you refresh the page. There is no persistance built-in quite yet.

This will probably never evolve past a single list interface so please don't ask. The Roadmap below outlines my ultimate plans for this. It's just something stupid, simple, and allows me to play with new JS APIs.

It comes with a simple config.ru to use with Rack server if you feel like hosting it on your local network. I use it for that purpose to test on my mobile devices.

## Roadmap

1. Add better styling
2. Add persistence with local storage (and if I feel like supporting the oldies, fallback on cookies)
3. Add the ability to edit the tasks
4. Download a custom Modernizr build or replace with my own test(s)
5. Add cache.manifest?