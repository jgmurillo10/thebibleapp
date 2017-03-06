# thebibleapp

##Deploy URL's
Frontend: https://thebiblefront.herokuapp.com <br>
Backend: https://thebibleapp.herokuapp.com/api

##GitHub URL's
Frontend: https://github.com/miarevalo10/thebiblefront <br>
Backend: https://github.com/jgmurillo10/thebibleapp

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

## Synopsis

At the top of the file there should be a short introduction and/ or overview that explains **what** the project is. This description should match descriptions added for package managers (Gemspec, package.json, etc.)

## Motivation

A short description of the motivation behind the creation and maintenance of the project. This should explain **why** the project exists.

## Installation

Windows:

```sh
git clone https://github.com/jgmurillo10/thebibleapp
cd thebibleapp
npm install
npm start
cd ../
git clone http://github.com/miarevalo10/thebiblefront
cd thebiblefront
npm install
npm start
```
runs at port 8080



## Tools
<br>
JavaScript<br>
NodeJS <br>
Express<br>
Amazon S3<br>
MongoDB<br>

## npm Packages
<br>
aws-sdk<br>
body-parser<br>
cookie-parser<br>
debug<br>
express<br>
mongodb<br>
mongoose<br>
morgan<br>
nodemon<br>


## MongoDB Reference

### Programs' collection
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
### Courses' collection
### Files' collection
### Resources' collection

## API Reference



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

## Contributors



## License

MIT License

Copyright (c) 2017 Juan Guillermo Murillo Castillo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
