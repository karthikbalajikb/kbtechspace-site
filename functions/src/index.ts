import * as functions from 'firebase-functions';
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
    // const { startDate, endDate, metrics } = req.body;

    const analytics = google.analytics('v3');
    const viewId = process.env.VIEW_ID;
    const jwt = new google.auth.JWT({
        email: clientEmail,
        key: privateKey,
        scopes,
    });
    // console.log('request>>', request.body)
    // const { startDate, endDate, metrics } = request.body;
    // console.log('body: ', startDate, endDate, metrics);
    const result = await analytics.data.ga.get({
        auth: jwt,
        ids: `ga:${viewId}`,
        'start-date': req.query.startDate.toString(),
        'end-date': req.query.endDate.toString(),
        metrics: req.query.metrics.toString(),
    });

    console.log('result :', result);
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Methods', 'GET');
    response.status(200).send({ data: result });
});
