const knex = require("../db/config")

//add candidate;
exports.addCandidate = (req,res)=>{
    knex.select().from("candidate").where("email",req.body.email).then(rows=>{
        console.log(rows);
        if(rows.length == 0){
            return knex("candidate").insert(req.body).then(data=>{
                res.json({message:"success, data_inserted!", data:data})
            }).catch(err=>{
                res.json({message:unsuccessful, error:err})
            })
        }res.send({message:"candidate with unique email already exist!"})
    }).catch(err =>{
        console.log(err);
        res.json({message:"something error", error:err})
    })
};

//insert marks;
exports.addMarks = (req,res)=>{
    // console.log(req.body);
    knex.select().from("test_score").where("candidate_id", req.body.candidate_id).then(rows=>{
        // console.log(rows);
        if(rows.length == 0){
            return knex("test_score").insert(req.body).then(data=>{
                res.json({message:"success, data_inserted!", data:data})
            }).catch(err=>{
                res.json({message:unsuccessful, error:err})
            })
        };
        res.send({message:"duplicate entry!"})    
    }).catch(err =>{
        console.log(err);
        res.json({message:"something error", error:err})
    })
};

//highest scoring candidate with given_testRound;
exports.highestMark = (req,res)=>{
    const testRound = req.params.round;
    // console.log(testRound)
    knex("test_score").max(testRound,{as: 'maxMark'}).then(row =>{
        let maxMark = row[0].maxMark;
        knex.select("candidate.id","candidate.name",`test_score.${testRound} as maxScore`).from("test_score").join("candidate",{"test_score.candidate_id":"candidate.id"}).where(testRound,maxMark).then(data=>{
            res.send(data)
        }).catch(err=>{
            console.log(err)
        })
    }).catch(err =>{
        console.log(err)
    })
};

//
//average scores per round for all candidates
exports.averageMark = (req,res)=>{
    const testRound = req.params.round;
    // console.log(testRound)
    knex("test_score").avg(`${testRound} as avg`).then(row =>{
        let avg = row[0].avg;
        res.send({average_score_for_given_round:avg})
    }).catch(err =>{
        console.log(err)
    })
}