const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
    try {
        const res = await fetch(url, optionsObj);
        console.log(res);
        if (!res.ok) throw Error('Please reload the app');
    } catch (err) {
        errMsg = err.errMsg;
    } finally {
        return errMsg;
    }
}

export default apiRequest;