# Schema Information

**users**

column name | data type | details
------------|-----------|--------
id | integer | not null, primary key
username | string | not null, indexed, unique
password_digest | string | not null
session_token | string | not null
email | string | not null, indexed
team_id | integer | not null, foreign key, indexed


**teams**

column name | data type | details
------------|-----------|--------
id | integer | not null, indexed, primary key
name | string |


**projects**

column name | data type | details
------------|-----------|--------
id | integer | not null, indexed, primary key
title | string | not null
description | string |
author_id | integer| foreign key, not null, indexed
team_id | integer | foreign key, not null, indexed

**todos**

column name | data type | details
------------|-----------|--------
id | integer | not null, indexed, primary key
title | string | not null
description | string |
done | boolean | default: false
due_date | datetime
author_id | integer | not null, foreign key, indexed
todoer_id | integer | not null, foreign key, indexed
project_id | integer | not null, foreign key, indexed


**comments**

column name | data type | details
------------|-----------|--------
id | integer | not null, indexed, primary key
body | text |
author_id | integer | not null, foreign key, indexed
team_id | integer | foreign key, not null, indexed
commentable_id | integer | foreign key, not null, indexed
commentable_type | string |







////////////////////////////////////////////////////////////
// I may have to leave the projects feature a later upgrade.

**events**

column name | data type | details
------------|-----------|--------
id | integer | not null, indexed, primary key
title | string | not null
description | string |
event_date | datetime | not null, indexed
author_id | integer | not null, foreign key, indexed



**project_memberships**

column name | data type | details
------------|-----------|--------
id | integer | not null, indexed, primary key
member_id | integer | not null, indexed, foreign key
project_id | integer | not null, indexed, foreign key
