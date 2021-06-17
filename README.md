## notes
There's a lot of 'spaghetti code' here.  It will need refactoring, for sure.  This submission is just the first, a basic proof of completion.  Further submissions will refine the design.  

## Intended refactors: 
* Right now, `<TitleList>` elements perform API calls, but in truth they shouldn't.  There are places on the other pages where I should use this element, but can't because of the API call information I placed in it. 
  * I guess I really should listen to Chris when he says to use `Promise.all` lol. 
* The Watch List code is a mess.  It works, but it will almost *certainly* need some cleanup.  