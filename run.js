/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

v=1
for(var i=0;i<document.getElementsByTagName("a").length;i++)
{
s=document.getElementsByTagName("a")[i].href
  if( s.search("stock") != -1 && s.search("-") ==-1 )
	window.open(s)
}