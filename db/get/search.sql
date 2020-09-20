select linkid, body, chapter from srdbasic
where (UPPER(body) like UPPER('%'|| $1 ||'%'))
limit 50