# thebibleapp




version: 1.0

What is TheBibleApp?
------------------


Does it have a website?
------------------------
soooon as possible


Where are the requirements for the project?
-------------------------------


What tools are used?
---------------------
Javascript, NodeJS, Express for the front and service expousure. MongoDB for persistance and Google Drive's API.
kkkk

Collection 
-----------
```json
[
      {
    
              "program_id": 4,
              "description": "description",
              "url": "https://xxx.xx",
              "name": "name",
              "courses": {
                          "name": "name",
                          "code": "ISIS2103",
                          "course_id": 5764,
                          "description": "description",
                          "url":"https://xxx.xx",
                          "files": {
                                      "name": "name",
                                      "size": 588.743,
                                      "type": "pdf"
                                    },
                           "resources": {
                                          "name":"name",
                                          "description": "description",
                                          "url":"https://xxx.xx"
                                        }
                          
                        
                           }
    }
]
```


API
---------------------



##Programs

|HTTP Method   |  URI |  description |
|---|---|---|
| GET | /api/programs  | Get all the programs  |
| GET | /api/programs/:program_id | Get specific program by id  |


##Courses

|HTTP Method   |  URI |  description |
|---|---|---|
| GET | /api/programs/:program_id/courses  |  Get all the courses by program |
| GET |  /api/programs/:program_id/courses/:course_id  | Get an specific Semester by ID  |

##Files

|HTTP Method   |  URI |  description |
|---|---|---|
| GET |/api/programs/:program_id/courses/:course_id/files  |  Get all the files |
| GET |/api/programs/:program_id/courses/:course_id/files/:file_id    | Get an specific File  |
| POST  |/api/programs/:program_id/courses/:course_id/files    |  Add an specific file |
| PUT  |/api/programs/:program_id/courses/:course_id/files/file:id   |  Update an specific file by ID|
| DELETE  |/api/programs/:program_id/courses/:course_id/files/file:id   |  Delete an specific file by ID |

##Resources


|HTTP Method   |  URI |  description |
|---|---|---|
| GET |/api/programs/:program_id/courses/:course_id/resources/  |  Get all the resources |
| GET |/api/programs/:program_id/courses/:course_id/resources/:resource_id    | Get an specific resource  |
| POST  |/api/programs/:program_id/courses/:course_id/resources    |  Add an specific resource |
| PUT  |/api/programs/:program_id/courses/:course_id/resources/resource:id   |  Update an specific resource by ID|
| DELETE  |/api/programs/:program_id/courses/:course_id/resources/resource:id   |  Delete an specific resource by ID |
