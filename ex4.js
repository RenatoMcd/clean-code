function initApp() {
    try {
        connectDatabase();
    } catch(error) {
        showErrorMessage(error.message);
    }     
}

function connectDatabase() {
    const isConnectionSuccessful = database.connect();
    if (!isConnectionSuccessful) {
        throw new Error('Failed to connect to database!')
    }
}


function determineSupportAgent(ticket) {
    const requestType = ticket.requestType;
    return (requestType === 'unknown') ? findStandardAgent() : findAgentByRequestType(requestType);
}
    
function isValid(email, password) {
    const isEmailValid = email.includes('@');
    const isPasswordValid = password.length >= 7;
    return (isEmailValid && isPasswordValid) ? true : (console.error('Invalid input!'), false);
}