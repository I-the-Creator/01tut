const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
    try {
        const response = await fetch(url, optionsObj);
        /* normally response errors wouldn't be caught automatically by catch function,
        to workaround it use 'throw Error' in case of response issue and it will be caught*/
        if(!response.ok) throw Error('Please reload the application');
    } catch (err) {
        errMsg = err.message;
    } finally {
        // whether or not we have errMsg - null(default) or some value
        return errMsg;   // all it returns is the errMsg - nothing more
    }
}

export default apiRequest;