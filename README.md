# Pollr

##Restapi:

###Session Management

 - /authenticate -> implemented
	 - POST
	 - username, password
	 - returns successStatus(boolean), userData
 - /isLoggedIn -> implemented
	 - GET
	 - returns sessionStatus
 - /logout -> implemented
	 - POST
	 - returns successStatus(boolean)

### Poll Management
 - /polls -> implemented
	 - GET
	 - returns all available polls
 - /pollStat -> implemented
	 - GET
	 - pollId
	 - returns stat for specific poll
 - /pollOptions -> implemented
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
