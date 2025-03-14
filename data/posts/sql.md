---
title: "aql basics."
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