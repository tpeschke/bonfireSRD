insert into usersAuth (email, auth0)
values ($1, $2)
RETURNING *;