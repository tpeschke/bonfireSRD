select * from srdbookmarks bm
join (select * from srdadvanced adv
union
select * from srdbasic basic) as basic on basic.linkid = bm.bookmarkcode
where userid = $1