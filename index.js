const axios = require('axios');
const fs = require('fs-extra');

const options = {
    baseURL: 'http://hackicims.com/api/v1/companies/',
    method: 'GET',
    port: 443,
    headers: {
        'Authorization': 'Bearer d0eea3c45201f041280db2ed59e97e7e1173ec5f2c858498314b02fe071004ffc74b7f9820e2b1fd8bac59393e78fdb22e9d43e7b85e88d68eb8757cbd44803d'
    }
};

<<<<<<< HEAD
<<<<<<< Updated upstream
=======
let report = {};
let jobReport = {};
let companyIDs = [13, 18, 20, 21, 22, 23]

>>>>>>> 6cd192d7d920db1c893b58fb4d4aeeea6b4903b6
let main = async () => {
    for (let id of companyIDs) {
        let jobs = await getJobs(id);
        jobReport[id] = (jobs);
        let people = await getAllPeople(id);
        report[people] = people;
    }
    // console.log(jobReport);
    console.log(report);


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
}
<<<<<<< HEAD
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
=======

let getAllPeople = async (companyID) => {
    options.url = `${companyID}/people`;
    let people = [];
    req = await axios.request(options).catch((e) => {console.log(e)});
    if (req) {
        for (let line in req.data) {
            console.log(line);
        }
        // console.log(req.data);
        people = req.data.id;
    }
    return people;
}

main().catch(e => {console.error(e)});
>>>>>>> 6cd192d7d920db1c893b58fb4d4aeeea6b4903b6
