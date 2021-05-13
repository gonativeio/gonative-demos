"use strict";

const functions = require("firebase-functions");

exports.getToken = functions.https.onRequest((request, response) => {
  const AccessToken = require('twilio').jwt.AccessToken;
  const VideoGrant = AccessToken.VideoGrant;

  // Used when generating any kind of tokens
  // To set up environmental variables, see http://twil.io/secure
  const twilioAccountSid = 'ACxxxxxxxxxx';
  const twilioApiKey = 'SKxxxxxxxxxx';
  const twilioApiSecret = 'xxxxxxxxxxxx';

  var identity = request.query.identity || 'default';
  var roomName = request.query.roomName || 'default';

  // Create Video Grant
  const videoGrant = new VideoGrant({
    room: roomName
  });

  // Create an access token which we will sign and return to the client,
  // containing the grant we just created
  const token = new AccessToken(
    twilioAccountSid,
    twilioApiKey,
    twilioApiSecret,
    { 
      identity: identity,
      ttl: 3600
    }
  );
  token.addGrant(videoGrant);

  // Serialize the token to a JWT string
  console.log(token.toJwt());
  return response.jsonp({
    token: token.toJwt(),
    identity: identity,
    room: roomName
  });
});
