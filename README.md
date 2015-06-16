# Pollr

##Restapi:

###Session Management

 - /authenticate
	 - POST
	 - username, password
	 - returns successStatus(boolean), userData
 - /isLoggedIn
	 - GET
	 - returns sessionStatus
 - /logout
	 - POST
	 - returns successStatus(boolean)

### Poll Management
 - /polls
	 - GET
	 - returns all available polls
 - /pollStat
	 - GET
	 - pollId
	 - returns stat for specific poll
 - /pollOptions
	 - GET
	 - pollId
	 - returns available options for specific poll
 - /pollOption
	 - POST
	 - answerId
 - /poll
	 - POST
	 - pollData
	 - returns pollId
 - /pollOption
	 - POST
	 - pollId, optionData
	 - returns optionId
 - /pollOption
	 - DELETE
	 - optionId
