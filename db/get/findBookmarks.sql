select srdbookmarks.id, bookmarkcode, body from srdbookmarks 
join srdbasic on srdbasic.linkid = srdbookmarks.bookmarkcode
where userid = $1