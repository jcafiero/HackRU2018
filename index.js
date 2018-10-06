const axios = require('axios');
const fs = require('fs-extra');

const options = {
    baseURL: 'http://hackicims.com/api/v1/companies/',
    method: 'GET',
    port: 443,
    auth: {
        username: 'jcafiero',
        password: 'B3happy!'
    }
};

<<<<<<< Updated upstream
let main = async () => {


    await fs.writeFile('report.json', JSON.stringify(report, null, 4));
}
=======
let report = {};
let jobReport = {};
let companyIDs = [13]

let main = async () => {
    for (let id of companyIDs) {
        let jobs = await getJobs(id);
        jobReport[id] = (jobs);
        // let persons = await getAllPeople(id);
        // report['people'] = persons;
    }
    console.log(jobReport);
    await getPersonSkills(13, 2049);


    await fs.writeFile('report.json', JSON.stringify(jobReport, null, 4));
}

let getJobs = async (companyID) => {
    options.url = `${companyID}/jobs`;
    let jobsList = [];
    req = await axios.request(options).catch((e) => {console.log(e)});
    if (req) {
        jobsList = req.data;
    }
    return { jobsList };
};

let getPersonSkills = async (companyID, personID) => {
    let skills = [];
    options.url = `${companyID}/people/${personID}`;
    req = await axios.request(options).catch((e) => {console.log(e)});
    if (req) {
        education = req.data.education;
        for (let school of education) {
            skills.push(school.major);
        }
        skills = req.data.skills;
        for (let skill of skills) {
            if (skill.name) {
                skills.push(skill.name);
            }
        }
    }
    return skills;
}

// let getAllPeople = async (companyID) => {
//     options.url = `${companyID}/people`;
//     let people = [];
//     req = await axios.request(options).catch((e) => {console.log(e)});
//     console.log(req);
//     if (req) {
//         // console.log(req.data);
//         people = req.data.id;
//     }
//     return people;
// }

main().catch(e => {console.error(e)});
>>>>>>> Stashed changes
