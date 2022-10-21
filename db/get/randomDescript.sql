select * from (
	select Upper(description) as description from srddescriptions
	Union
	select Upper(title) as description from cvdescriptions c where title is not null and title != 'TBD' and title != 'Test Descriti') t
group by description
order by random()
limit 1