frontend -> button -> does thing (sends a message)

backend-> does thing (has a function that gets the message) 
       -> server does thing WITH the message (read/edit/save/delete)
       -> server sends back something "ok" or "error" or a document

frontend -> does thing (gets the response) 
         -> does something with the response (console logging, saving it in a variable, etc)
         -> give user feedback (react will update the screen for you, when you change the state)
