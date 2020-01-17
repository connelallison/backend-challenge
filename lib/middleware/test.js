const axios = require('axios');


// GET /role - positive
axios({
    method: 'get',
    url: 'http://localhost:7500/api/account/role'
})
    .then((response) => {
        console.log(response.status === 200);
    }, (error) => {
        console.log(error.response.status === 200);
    });

// GET /role - negative - extraneous parameter
axios({
    method: 'get',
    url: 'http://localhost:7500/api/account/role',
    data: {
        "test": "test"
    }
})
    .then((response) => {
        console.log(response.status === 400);
    }, (error) => {
        console.log(error.response.status === 400);
    });

// PUT /profile - positive 
axios({
    method: 'put',
    url: 'http://localhost:7500/api/account/profile',
    data: {
        "name": "Test",
        "job_title": "Test",
        "photo_url": "Test"
    }
})
    .then((response) => {
        console.log(response.status === 200);
    }, (error) => {
        console.log(error.response.status === 200);
    });


// PUT /profile - negative - extraneous parameter 
axios({
    method: 'put',
    url: 'http://localhost:7500/api/account/profile',
    data: {
        "nameTEST": "Test",
        "job_title": "Test",
        "photo_url": "Test"
    }
})
    .then((response) => {
        console.log(response.status === 400);
    }, (error) => {
        console.log(error.response.status === 400);
    });

// PUT /profile - negative - incorrect type 
axios({
    method: 'put',
    url: 'http://localhost:7500/api/account/profile',
    data: {
        "name": 2,
        "job_title": "Test",
        "photo_url": "Test"
    }
})
    .then((response) => {
        console.log(response.status === 400);
    }, (error) => {
        console.log(error.response.status === 400);
    });

// DELETE /member - positive
axios({
    method: 'delete',
    url: 'http://localhost:7500/api/v2/account/member',
    data: {
        "account_id": 9001
    }
})
    .then((response) => {
        console.log(response.status === 200);
    }, (error) => {
        console.log(error.response.status === 200);
    });

// DELETE /member - negative - missing required parameter
axios({
    method: 'delete',
    url: 'http://localhost:7500/api/v2/account/member',
    data: {

    }
})
    .then((response) => {
        console.log(response.status === 400);
    }, (error) => {
        console.log(error.response.status === 400);
    });

// DELETE /member - negative - extraneous parameter
axios({
    method: 'delete',
    url: 'http://localhost:7500/api/v2/account/member',
    data: {
        "account_id": 9001, 
        "test": "test"
    }
})
    .then((response) => {
        console.log(response.status === 400);
    }, (error) => {
        console.log(error.response.status === 400);
    });

// DELETE /member - negative - incorrect type
axios({
    method: 'delete',
    url: 'http://localhost:7500/api/v2/account/member',
    data: {
        "account_id": "9001"
    }
})
    .then((response) => {
        console.log(response.status === 400);
    }, (error) => {
        console.log(error.response.status === 400);
    });

// GET /search - positive
axios({
    method: 'get',
    url: 'http://localhost:7500/api/v2/account/search?page=0&location[]=&min_salary=35000&keyword[]=11+-+50&keyword[]=51+-+200&keyword[]=201+-+500&job_title[]=Back+End&job_title[]=Full+Stack'
})
    .then((response) => {
        console.log(response.status === 200);
    }, (error) => {
        console.log(error.response.status === 200);
    });

// GET /search - negative - extraneous parameter
axios({
    method: 'get',
    url: 'http://localhost:7500/api/v2/account/search?page=0&location[]=&min_salary=35000&TEST[]=11+-+50&keyword[]=51+-+200&keyword[]=201+-+500&job_title[]=Back+End&job_title[]=Full+Stack'
})
    .then((response) => {
        console.log(response.status === 400);
    }, (error) => {
        console.log(error.response.status === 400);
    });

// GET /search - negative - incorrect type
axios({
    method: 'get',
    url: 'http://localhost:7500/api/v2/account/search?page=0&location[]=&min_salary=lots&keyword[]=11+-+50&keyword[]=51+-+200&keyword[]=201+-+500&job_title[]=Back+End&job_title[]=Full+Stack'
})
    .then((response) => {
        console.log(response.status === 400);
    }, (error) => {
        console.log(error.response.status === 400);
    });
