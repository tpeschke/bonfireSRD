select * from (
	select Upper(conviction) as conviction from srdconvictions
	Union
	select Upper(title) as conviction from cvtraits where title is not null and title != 'TBD' and title != 'Test Descriti') t
group by conviction
order by random()
limit 1