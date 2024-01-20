const { google } = require('google-auth-library/build/src');
const readline = require('readline-sync');
const fs = require('fs');
const { promisify } = require('util');

async function getRefreshToken() {
  const oAuth2Client = new google.auth.OAuth2();

  const getAccessToken = promisify(oAuth2Client.getToken.bind(oAuth2Client));

  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/gmail.send'],
  });

  console.log('Authorize this app by visiting this URL:', authUrl);
  const code = readline.question('Enter the code from that page here: ');

  try {
    const { tokens } = await getAccessToken({ code });
    fs.writeFileSync('refresh-token.json', JSON.stringify(tokens.refresh_token));
    console.log('Refresh token saved to refresh-token.json');
  } catch (error) {
    console.error('Error getting access token:', error.message);
  }
}

getRefreshToken();
