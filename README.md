# thebibleapp


Frontend: https://github.com/miarevalo10/thebiblefront
Backend: https://thebibleapp.herokuapp.com/api

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
| POST | /api/programs  | Post a program  |
| GET | /api/programs/:program_id | Get specific program by id  |
| DELETE | /api/programs/:program_id | Delete specific program by id  |


##Courses

|HTTP Method   |  URI |  description |
|---|---|---|
| GET | /api/programs/:program_id/courses  |  Get all the courses by program |
| POST | /api/programs/:program_id/courses  |  Post course by program |
| GET |  /api/programs/:program_id/courses/:course_id  | Get an specific course by ID  |
| DELETE |  /api/programs/:program_id/courses/:course_id  | Delete an specific course by ID  |

##Files

|HTTP Method   |  URI |  description |
|---|---|---|
| GET |/api/programs/:program_id/courses/:course_id/files  |  Get all the files |
| POST  |/api/upload    |  Add an specific file |

##Resources


|HTTP Method   |  URI |  description |
|---|---|---|
| GET |/api/programs/:program_id/courses/:course_id/resources/  |  Get all the resources |
| POST |/api/programs/:program_id/courses/:course_id/resources/    | Get an specific resource  |
