---
name: 'unused_indexes'
title:  "Cleaning unused indexes in MySql"
date:   2020-02-10 13:08:42 +0530
categories: MySql
description: |
  How we found out and cleared unused indexes in out production db.
---

Recently, I was asked to improve the performance of write and delete queries. 
So, the first thing I did was to find and remove the unused indexes. 

**Important points to consider:**
- Index stats are in-memory: they reset every time the sql server is restarted.
- You'll need admin privileges to run the following queries

Query to find out the unused indexes, table and size:
```sql
SELECT table_name 'Table Name', index_name 'Index Name',
round(stat_value*@@innodb_page_size/1024/1024, 2) 'Size in MB'
FROM mysql.innodb_index_stats
WHERE stat_name = 'size' AND index_name != 'PRIMARY'
AND index_name in (select index_name from sys.schema_unused_indexes);
```

Finding out the total number of unused indexes and their size per table:

```sql
select unused.table_name 'Table Name', unused.index_count 'Unused Index Count', unused.size_in_mb 'Unused Index Size',
allindex.index_count 'Total Index Count', allindex.size_in_mb 'Total Index Size', 
unused.size_in_mb/allindex.size_in_mb*100 'Percent of Unused Size' from

(SELECT table_name, count(index_name) index_count,
round(sum(stat_value)*@@innodb_page_size/1024/1024, 2) size_in_mb
FROM mysql.innodb_index_stats
WHERE stat_name = 'size' AND index_name != 'PRIMARY'
```
Innodb stats for 60 days were considered before finalising the list of indexes to be removed.

**Index fragmentation** was something else that was looked at, but our indexes were 
cleaner than I imagined so rebuilding of indexes was not pursued. However, it is something
that one can look at to improve the read query performance.








