var memeData = [];

module.exports.getMeme = function(){

    async function fetchMeme() {
        const response = await fetch('https://api.imgflip.com/get_memes',{
            method: 'GET'
        });
        const memeItem =  await response.json();
        return memeItem;
    }
    
    fetchMeme().then(memeItem => {
        memeData = memeItem.data.memes;
    })

    return memeData;
}