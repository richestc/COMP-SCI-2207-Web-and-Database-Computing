SELECT a.address FROM address a
INNER JOIN store s ON s.address_id = a.address_id
INNER JOIN inventory i ON i.store_id = s.store_id
INNER JOIN film f ON f.film_id = i.film_id
WHERE f.title = 'TWISTED PIRATES'
LIMIT 1;