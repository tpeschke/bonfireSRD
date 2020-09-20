select linkid, body, chapter from srdadvanced
where (UPPER(body) like UPPER('%'|| $1 ||'%'))
limit 50