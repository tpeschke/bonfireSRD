select * from srdbookmarks bm
join (select * from srdadvanced
union
select * from srdbasic) as searchTable on searchTable.linkid = bm.bookmarkcode
where userid = $1