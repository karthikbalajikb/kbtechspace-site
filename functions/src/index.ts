import * as functions from 'firebase-functions';
const axios = require('axios');
import { google } from 'googleapis';

import * as dotenv from 'dotenv';

dotenv.config();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// Config
const clientEmail = process.env.CLIENT_EMAIL;
const privateKey = process.env.PRIVATE_KEY;
const scopes = ['https://www.googleapis.com/auth/analytics.readonly'];

export const helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase TS!");
});

export const gaPageView = functions.https.onRequest(async (req, response) => {
    const { startDate, endDate, metrics } = req.query;

    const analytics = google.analytics('v3');
    const viewId = process.env.VIEW_ID;
    const jwt = new google.auth.JWT({
        email: clientEmail,
        key: privateKey,
        scopes,
    });

    const result = await analytics.data.ga.get({
        auth: jwt,
        ids: `ga:${viewId}`,
        'start-date': startDate.toString(),
        'end-date': endDate.toString(),
        metrics: metrics.toString(),
    });

    console.log('result :', result);
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Methods', 'GET');
    response.status(200).send({ data: result });
});

export const linkedInView = functions.https.onRequest(async (request, response) => {

    // Config
    const clientId = process.env.LINKEDIN_CLIENT_ID;
    const clientSecret = process.env.LINKEDIN_CLIENT_SECRET;

    const responseData = await axios({
        method: 'post',
        url: 'https://www.linkedin.com/oauth/v2/accessToken',
        data: {
            grant_type: 'client_credentials',
            client_id: clientId,
            client_secret: clientSecret,
        }
    });

    console.log('processedResponse >>', responseData)

    // Replace with access token for the r_liteprofile permission
    const accessToken = 'YOUR_ACCESS_TOKEN';
    const linkedInData = await axios({
        method: 'GET',
        url: 'https://api.linkedin.com/v2/me',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'cache-control': 'no-cache',
            'X-Restli-Protocol-Version': '2.0.0'
        }
    });

    console.log("linkedInData >>", linkedInData);
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Methods', 'GET');
    response.status(200).send({ data: responseData });
})