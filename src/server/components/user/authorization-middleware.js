const authorizationMiddleware = ( req, res, next ) => {
	if ( req.session.uid ) {
		return next()
	}
	return res.status( 401 )
		.set( 'WWW-Authenticate', 'Bearer' )
		.send( 'Unauthorised' )
}

module.exports = authorizationMiddleware