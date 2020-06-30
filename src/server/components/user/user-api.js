const { createController } = require( 'awilix-express' )
const bodyParser = require( 'body-parser' )

const makeUserApi = function( { userService } ) {
	return {
		getOauth2LoginUrl: ( req, res ) => res.send( userService.makeOauth2LoginUrl() ),
		getIdFromAuthorizationCode: async function( req, res ) {
			const authCode = req.query.code
			const uid = await userService.getIdFromAuthorizationCode( authCode )
			if ( uid == null ) {
				return res.status( 400 ).send( 'Login unsuccessful' )
			}
			req.session.uid = uid
			return res.send( 'Login successful' )
		}
	}
}

module.exports = createController( makeUserApi )
	.prefix( '/api/auth' )
	.get( '/oauth2loginurl', 'getOauth2LoginUrl' )
	.before( bodyParser.urlencoded( { extended: true } ) )
	.get( '/oauth2callback', 'getIdFromAuthorizationCode' )