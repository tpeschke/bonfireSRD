declare @tablename varchar(50)
set @tablename = $1
exec('select * from ' + @tablename)