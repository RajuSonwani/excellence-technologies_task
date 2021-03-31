const express = require("express");
const knex = require("../db/config")
const router = express.Router();
const {addCandidate, addMarks, highestMark, averageMark} = require("../services/candidate")

//add candidate;
router.post("/addCandidate", addCandidate);

//insert marks;
router.post("/addMarks", addMarks);

//highest scoring candidate with given_testRound( marks@firstRound|| marks@secondRound|| marks@thirdRound);
router.get("/:round/getHighest", highestMark)

//average scores per round for all candidates
router.get("/:round/getAverage", averageMark)





module.exports = router;