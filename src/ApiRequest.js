const ApiRequest = async(url = "", urlOptions = null) => {

    try {
        
        const response = await fetch(url, urlOptions);
        if(!response.ok) throw Error("Url error!");
        return null;

    } catch (error) {
        return error.message
    } 

}

export default ApiRequest;