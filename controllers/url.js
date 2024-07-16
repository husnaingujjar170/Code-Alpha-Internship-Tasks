const shortid = require("shortid");
const URL = require("../models/ur;");
async function handleGenerateNewShortURL(req,res)
{
    const sbosy = req.body;
    if(!body.url) return res.status(400).json({error : 'url is required'})
    const shortUrl = shortid();
    await URL.createObjectURL({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
    });
    return res.json({ id: shortID });
}
modules.exports = {
    handleGenerateNewShortURL,
}