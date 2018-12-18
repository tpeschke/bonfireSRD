select chapname, chapnum from srdchapters 
where (UPPER(html) like UPPER('%'|| $1 ||'%'))