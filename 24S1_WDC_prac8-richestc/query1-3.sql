SELECT c.first_name, c.last_name, r.rental_date FROM rental r
JOIN customer c ON r.customer_id = c.customer_id
WHERE r.return_date IS NULL
ORDER BY r.rental_date
LIMIT 1;
