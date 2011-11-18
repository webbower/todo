# Simple browser-based Todo app

Download the files, drop the index.html onto your browser, create a todo list. Supports persistance through page refresh, but because it uses localStorage, I think that means you have to serve it up from the exact same location each time otherwise the stored tasks won't be properly associated.

This will probably never evolve past a single list interface so please don't ask. The Roadmap below outlines my ultimate plans for this. It's just something stupid, simple, and allows me to play with new JS APIs.

It comes with a simple config.ru to use with Rack server if you feel like hosting it on your local network. I use it for that purpose to test on my mobile devices.

## Roadmap

1. Add better styling
1. Add the ability to edit the tasks
1. Download a custom Modernizr build or replace with my own test(s)
1. Add cache.manifest?