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


let report = {};
let jobReport = {};
let subjects = {
    "Math": ["Mathematics", "Engineering", "Accounting", "Architecture", "Aerospace Engineering",
        "Civil Engineering", "Biomedical Engineering", "Finance & Economics",
        "Marketing", "Mechanical Engineering"],
    "Science": ["Photosynthesis", "Engineering", "Animals", "Alchemy", "Urban Planning",
        "Neurosurgery", "Architecture", "Social Science", "Astronomy", "Pre - Veterinary Medicine",
        "Environmental Science", "Marine Science", "Botany", "Chemistry"],
    "Programming": ["NodeJS", "Python", "ReactJS", "Graphics", "Full-stack", "Industrial Technology",
        "Erlang", "APIs", "Hackathons", "Computer Science"],
    "Spanish":["Foreign languages",],
    "Art":["Painting", "Dance", "Graphics", "Singing", "Education", "Music", "Apparel/Textile Design"],
    "English":["Literary theory", "Copywriting", "Education", "Talking", "English"]
};
// let companyIDs = [13, 18, 20, 21, 22, 23]

let companyIDs = [13]

let main = async () => {
    for (let company of companyIDs) {
        let jobs = await getJobs(company);
        jobReport[company] = (jobs);
        console.log(getSuccessApplications(company))

        //call getAllPeopleInCompany
        let people = await getAllPeopleInCompany(company);
        for (let person of people) {
            let skills = await getPersonSkills(company, person);
            //console.log(skills);
            report[person] = skills;
        }

    }
    await getPersonSkills(13, 2049);
    //console.log(report);

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
        
        for (let skill of req.data.skills) {
            if (skill.name) {
                skills.push(skill.name);
            }
        }
    }
    return skills;
}

let getAllPeopleInCompany = async (companyID) => {
    options.url = `${companyID}/people`;
    let people = [];
    req = await axios.request(options).catch((e) => {console.log(e)});
    
    if (req) {
        for(d in req.data){
            //console.log(req.data[d].id);
            people.push(req.data[d].id);
        }
    }
    return people;
}

let getSuccessApplications = async (companyID) => {
    options.url = `${companyID}/applications`;
    let applications = [];
    req = await axios.request(options).catch((e) => {console.log(e)});

    if(req){
        for(app in req.data){
            if(req.data[app].status == "OFFER_ACCEPTED" || req.data[app].status == "OFFER_REJECTED" || req.data[app].status == "OFFER_EXTENDED"){
                console.log("success");
                applications.push(req.data[app]);
            }
        }
    }
    console.log(applications);
    return applications;
}

match = () => {
    let matchedObj = {};

    //take app id when offer
    //take person id of that match and match the company
    //this adds positive attributes to the position

    return matchedObj;
}

main().catch(e => {console.error(e)});
