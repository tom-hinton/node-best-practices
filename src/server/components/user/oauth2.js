const { google } = require( 'googleapis' )

const makeOauth2Client = function() {
	const client = new google.auth.OAuth2(
		process.env.GOOGLE_CLIENT_ID,
		process.env.GOOGLE_CLIENT_SECRET,
		process.env.GOOGLE_REDIRECT_URL
	)
	const loginUrl = client.generateAuthUrl( {
		scope: [ 'openid', 'email' ]
	} )

	return {
		client,
		loginUrl,
		getIdFromAuthorizationCode: async function( authCode ) {
			const uid = await client.getToken( authCode )
				.then( ( tokens ) => client.setCredentials( tokens ) )
				.then( () => client.verifyIdToken( {
					idToken: client.credentials.tokens.id_token,
					audience: process.env.GOOGLE_CLIENT_ID
				} ) )
				.then( ( ticket ) => {
					const payload = ticket.getPayload()
					const uid = payload[ 'sub' ]
					console.log( uid )
					return uid
				} )
				.catch( ( e ) => {
					console.log( e )
					return null
				} )
			return uid
		}
	}
}

module.exports = makeOauth2Client