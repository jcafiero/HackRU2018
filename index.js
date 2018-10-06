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

let main = async () => {


    await fs.writeFile('report.json', JSON.stringify(report, null, 4));
}
