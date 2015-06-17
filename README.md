# Pollr

##Restapi:

###Session Management

 - /authenticate -> implemented
	 - POST
	 - parameters: username, password
		 - example: `{"username"="brudi"&"password"="***"}`
	 - returns
		 - success: `{"id":"1","user_name":"brudi","password":"***","real_name":"dave"}`
		 - error: `{"auth":"false"}`
 - /isLoggedIn -> implemented
	 - GET
	 - returns
		 - success: `{"auth":"true"}'`
		 - error: `{"auth":"false"}`
 - /logout -> implemented
	 - POST
	 - returns
		 - success: `{"isLoggedOut":"true"}`
		 - error: `{"isLoggedOut":"false"}`

### Poll Management
 - /polls -> implemented
	 - GET
	 - returns
		 - success: `[{"id":"1","title":"Mittag","User_id":"1"},{"id":"2","title":"Code","User_id":"2"}]`
		 - error: `{"auth":"false"}`
 - /pollStat -> implemented
	 - GET
	 - parameter: pollId
		 - example: `http://localhost/_PollrRestApiV2/pollr/pollStat?pollId=1`
	 - returns
		 - success: `[[{"id":"1","name":"mac","Poll_id":"1","voters":2},{"id":"2","name":"kantine","Poll_id":"1","voters":0}],{"numberOfPossibleVoters":2}]`
		 - error: `{"auth":"false"}`
 - /pollOptions -> implemented
	 - GET
	 - parameter: pollId
		 - example: `http://localhost/_PollrRestApiV2/pollr/pollOptions?pollId=1`
	 - returns
		 - success: `[{"id":"1","name":"mac","Poll_id":"1"},{"id":"2","name":"kantine","Poll_id":"1"}]`
		 - error: `{"auth":"false"}`
 - /pollOption -> unnecessary?
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
