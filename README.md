# thebibleapp




version: 1.0

What is well-col?
------------------
well-col is an application build using NodeJS to allow OilCol S.A (fake company) to recieve data and store it from 
its sensors located at its multiple wells in Colombia.

Does it have a website?
------------------------
https://wells-col.herokuapp.com/


Where are the requirements for the project?
-------------------------------
https://sistemasacademico.uniandes.edu.co/~isis2503/dokuwiki/doku.php?id=proyectos:201620

What tools are used?
---------------------
Javascript, NodeJS, Express for the front and service expousure. PosgreSQL for persistance and JWT for authentication.

API
---------------------



##Programs

|HTTP Method   |  URI |  description |
|---|---|---|
| GET |  |   |
| GET |   |   |
| POST  |   |   |
| PUT  |   |   |
| DELETE  |   |   |

##Semesters

|HTTP Method   |  URI |  description |
|---|---|---|
| GET | /api/regions  |  Get all the regions |
| GET | /api/regions/:region_id  | Get an specific Region by ID  |
| POST  | /api/region  |  Add a Region |
| PUT  | /api/region/:region_id  | Update a Region  |
| DELETE  |  /api/regions/:region_id |  Delete a Region by ID |


##Courses

|HTTP Method   |  URI |  description |
|---|---|---|
| GET | /api/fields  | Get all the Fields  |
| GET | /api/fields/:field_id  | Get a Field by ID  |
| POST  | /api/fields  |  Add a Field |
| PUT  | /api/fields/:field_id  |  Update a Field |
| DELETE  |  /api/fields/:field_id |  Delete a Field by ID |

|HTTP Method   |  URI |  description |
|---|---|---|
| GET | /api/regions/:region_id/fields  | Get all the Fields of an specific Region |
| GET | /api/regions/:region_id/fields/:field_id  | Get a Field by ID of an specific Region |
| POST  | /api/regions/:region_id/fields  |  Add a Field of an specific Region |
| PUT  | /api/regions/:region_id/fields/:field_id  |  Update a Field of an specific Region |
| DELETE  |  /api/regions/:region_id/fields/:field_id |  Delete a Field by ID of an specific Region|

##Files

|HTTP Method   |  URI |  description |
|---|---|---|
| GET |/api/wells  |  Get all the Wells |
| GET |/api/wells/:well_id   | Get an specific Well  |
| POST  |/api/wells   |  Add an specific Well |
| PUT  |/api/wells/:well_id   |  Update an specific Well by ID|
| DELETE  |/api/wells/:well_id   |  Delete an specific Well by ID |

|HTTP Method   |  URI |  description |
|---|---|---|
| GET |api/fields/:field_id/wells/|  Get all the wells of an specific Field |
| GET |api/fields/:field_id/wells/:well_id | Get an specific Well by well_id of an specific Field |
| POST  |api/fields/:field_id/wells/   |  Add an specific Well of an specific Field |
| PUT  |/api/fields/:field_id/wells/:well_id   | Update an specific Well of an specific Field  |
| DELETE  |api/fields/:field_id/wells/:well_id   |  Delete an specific Well of an specific Field |

##Resources

|HTTP Method   |  URI |  description |
|---|---|---|
| GET |  /api/fields/:field_id/wells/:well_id/sensors | Gets all the sensors of an specific well in an specific field  |
| GET |  /api/fields/:field_id/wells/:well_id/sensors/:sensor_id |Gets a particular sensor of an specific well in an specific field   |
| POST  | /api/fields/:field_id/wells/:well_id/sensors  | Adds a sensor to an specific well in an specific field  |
| PUT  |  /api/fields/:field_id/wells/:well_id/sensors/:sensor_id | Updates an specific sensor of an specific well in an specific field  |
| DELETE  | /api/fields/:field_id/wells/:well_id/sensors/:sensor_id | Deletes a sensor of an specific well in an specific field  |
