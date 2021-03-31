=> api url with payload or request informations are in  " .rest " file.


Also here it is;

// for home-page;
GET http://localhost:2050/

---------------------------------------------------------
//for inserting a candidate into database
####
POST http://localhost:2050/apis/addCandidate
Content-Type: application/json

{
    "name":"Meena Sonwani",
    "email":"meena@gmail.com"
}

----------------------------------------------------------
//for Assigning score to a candidate based on the test
####
POST http://localhost:2050/apis/addMarks
Content-Type: application/json

{
    "candidate_id":4,
    "marks@firstRound":5,
    "marks@secondRound":8,
    "marks@thirdRound":9
}

-------------------------------------------------
//Api-url for geting highest scoring candidate per round
#####
GET http://localhost:2050/apis/marks@firstRound/getHighest
# GET http://localhost:2050/apis/marks@secondRound/getHighest
# GET http://localhost:2050/apis/marks@thirdRound/getHighest

-----------------------------------------------------

//Api-url  for average scores per round for all candidates
######
# GET http://localhost:2050/apis/marks@firstRound/getAverage
GET http://localhost:2050/apis/marks@secondRound/getAverage
# GET http://localhost:2050/apis/marks@thirdRound/getAverage




