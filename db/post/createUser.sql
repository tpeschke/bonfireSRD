insert into usersAuth (username, auth0)
values ($1, $2)
RETURNING *;