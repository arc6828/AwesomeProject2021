function generateCode(){
    let result           = "";
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    let length = 9;
    for ( let i = 0; i < length; i++ ) {
        let index = Math.floor(Math.random() *  charactersLength);
        result += characters.charAt(index);
    }
    console.log(result)

    return result;
};