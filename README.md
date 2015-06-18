# Pollr

##Restapi:

###Session Management

 - /authenticate
	 - POST
	 - parameters: username, password
		 - example: `{"username"="brudi","password"="***"}`
	 - returns
		 - success: `{"id":"1","user_name":"brudi","password":"***","real_name":"dave"}`
		 - error: `{"auth":"false"}`
 - /isLoggedIn
	 - GET
	 - returns
		 - success: `{"auth":"true"}'`
		 - error: `{"auth":"false"}`
 - /logout
	 - POST
	 - returns
		 - success: `{"isLoggedOut":"true"}`
		 - error: `{"isLoggedOut":"false"}`

### Poll Management
 - /polls
	 - GET
	 - returns
		 - success: `[[{"id":"1","title":"Mittag","User_id":"1"},{"voted":true}],[{"id":"2","title":"Code","User_id":"2"},{"voted":true}],[{"id":"3","title":"parrat?","User_id":"1"},{"voted":false}],`
		 - error: `{"auth":"false"}`
 - /pollStat
	 - GET
	 - parameter: pollId
		 - example: `http://localhost/_PollrRestApiV2/pollr/pollStat?pollId=1`
	 - returns
		 - success: `[[{"id":"1","name":"mac","Poll_id":"1","voters":2},{"id":"2","name":"kantine","Poll_id":"1","voters":0}],{"numberOfPossibleVoters":2}]`
		 - error: `{"auth":"false"}`
 - /pollOptions
	 - GET
	 - parameter: pollId
		 - example: `http://localhost/_PollrRestApiV2/pollr/pollOptions?pollId=1`
	 - returns
		 - success: `[{"id":"1","name":"mac","Poll_id":"1"},{"id":"2","name":"kantine","Poll_id":"1"}]`
		 - error: `{"auth":"false"}`
 - /poll
	 - POST
	 - parameter: title, userId
		 - example: `{"title"="poll Title","userId"="1"}`
	 - returns
		 - success: `{"status":"OK","data":{"id":"19","title":"test","User_id":"1"}}`
		 - error: 
			 - unauthenticated: `{"auth":"false"}`
			 - error by insertion: `{"status":"ERROR","messages":{"messageObject"}}`
 - /pollOption
	 - POST
	 - parameter: name, pollId
		 - example: `{"name"="mac","pollId"="1"}`
	 - returns
		 - success: `{"status":"OK","data":{"id":"6","name":"test","Poll_id":"19"}}`
		 - error:
		 	- unauthenticated: `{"auth":"false"}`
			- error by insertion: `{"status":"ERROR","messages":{"messageObject"}}`
 - /vote
	 - POST
	 - parameter: userId, answerId
		 - example: `{"userId"="1","answerId"="6"}`
	 - returns:
		 - success: `{"status":"OK","data":{"Answer_id":"6","User_id":"1"}}`
		 - error:
		 	- unauthenticated: `{"auth":"false"}`
			- error by insertion: `{"status":"ERROR","messages":{"messageObject"}}`
 - /hasUserAllreadyVoted
	 - POST
	 - parameter: userId, pollId: 
		 - example: `{"userId"="1","pollId"="2"}`
	 - returns
		 - success: `{"voted":"true"}` or `{"voted":"false"}`
		 - error: 
			 - unauthenticated: `{"auth":"false"}`
 - /pollOption -> not implemented
	 - DELETE
	 - optionId
