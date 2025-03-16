---
title: "sql basics."
date: "2025-03-09"
status: "seedling"
---

**SELECT, FROM, LIMIT**

```sql
SELECT *
SELECT <column1>, <column2>
FROM <table>
LIMIT <number>

SELECT DISTINCT *
```

select distinct only returns unique values.

**WHERE**

```sql
FROM <table>
WHERE <clause>
```

a clause is a boolean expression. the command will return a row if the boolean expression returns true for that row.

```sql
WHERE <column> LIKE '%<string>'
WHERE <column> LIKE '_<string>'
```

% will match to anything before the string, eg %roy will match troy and deroy but not troye. 

_ will match a single letter before, eg. _roy will match troy but not deroy.

**AGGREGATION**

aggregation is combining multiples pieces of data into one whole; we take multiple rows of data and combine them into one number. a good example is counting a total.

```sql
SELECT COUNT(<column>) FROM <table>
SELECT COUNT(*) FROM <table>

SELECT COUNT(*) FROM <table> WHERE <column>=<value>
SELECT
    COUNT(CASE WHEN <clause> THEN 1F
        ELSE NULL END),
    COUNT(CASE WHEN <clause> THEN 1
        ELSE NULL END)
FROM <row>;
```

count returns the number of non-null rows. the COUNT WHERE statement is more performant than the CASE WHEN statement because in the COUNT WHERE statement, the list is filtered down before it counts.

```sql
SELECT MIN(<column>) FROM <table>;
SELECT MAX(<column>) FROM <table>;
SELECT AVG(<column>) FROM <table>;

SELECT AVG(LENGTH(<column>)) FROM <table>;
```

```sql
SELECT 
	(COUNT(CASE WHEN last_statement 
	LIKE '%innocent%' THEN 1 ELSE NULL END)
	* 1.0)
	/ COUNT(*)
FROM executions
```

this kind of maths works best with CASE WHEN commands (because WHERE commands have to be applied to the whole statement, as does FROM).

**GROUPING**

```sql
SELECT
  last_statement IS NOT NULL AS has_last_statement,
  county,
  COUNT(*)
FROM executions
GROUP BY county, has_last_statement
```

**NESTING**

```sql
SELECT first_name, last_name
FROM executions
WHERE LENGTH(last_statement) =
    (
		SELECT MAX(LENGTH(last_statement))
		FROM executions
	)
```

**JOINS**

```sql
SELECT
  last_ex_date AS start,
  ex_date AS end,
  ex_date - last_ex_date AS day_difference
FROM executions
JOIN previous
  ON executions.ex_number = previous.ex_number
ORDER BY day_difference DESC
LIMIT 10
```

this sort of join basically pads out the FROM statement so that it is not just from executions, but executions joined on previous where ex_number = ex_number. you just have to put a statement there that is either true or false and if it is true, the row is returned with that extra data from previous.

inner joins drop rows if they do not match. a left join only drops rows from the right table, a right join only drops rows from the left table, and an outer join keeps them all.

```sql

SELECT
  last_ex_date AS start,
  ex_date AS end,
  JULIANDAY(ex_date) - JULIANDAY(last_ex_date)
    AS day_difference
FROM executions
JOIN (
  SELECT
	  ex_number + 1 AS ex_number,
	  ex_date AS last_ex_date
  FROM executions
  WHERE ex_number < 553
) previous
  ON executions.ex_number = previous.ex_number
ORDER BY day_difference DESC
LIMIT 10
```

you can make your own new table to put in the JOIN clause, as above.

**ORDER BY**

```sql
SELECT NAME 
FROM STUDENTS 
WHERE MARKS > 75
ORDER BY 
    SUBSTRING(NAME, LENGTH(NAME) - 2, 3),
    ID ASC
```

you can put whatever statement you like in ORDER BY and you can also have secondary etc. orders by just putting them next. substrings also work easily here, you just put the thing you want the substring of, the start position, and then how many letters from there.