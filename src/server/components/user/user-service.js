const makeUserService = function( { oauth2Client } ) {
	return {
		makeOauth2LoginUrl: () => oauth2Client.loginUrl,
		getIdFromAuthorizationCode: async function( authCode ) {
			const uid = await oauth2Client.getIdFromAuthorizationCode( authCode )
			return uid
		}
	}
}

module.exports = makeUserService