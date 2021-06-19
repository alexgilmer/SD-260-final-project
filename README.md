## notes
`<TitleList>` refactoring complete.  The code looks much cleaner, now.  
Coincidentally, cleaning up the `<TitleList>` code also served to clean up the watch-list code.  
There *is* a slight change in functionality, and I wasn't sure if I should work around it, or keep it: The My-Watch-List page no longer immediately removes titles if the user de-lists them.  The title now stays on the page until a refresh.  This could allow users to recover from accidentally clicking to de-list a title.  