import fetch from 'node-fetch'



async function getRequest(req, res){
    const method = "GET"
    const targetWebsite = req.query.target

    if(!targetWebsite){
        return res.status(400).json({
            error: "Target website URL is required"
        })
    }

    try{
        const response = await fetch(targetWebsite)
        if(response.status >= 200 && response.status < 299){
            
            res.status(200).json({
                state: true
            })
        } else {
            res.status(200).json({
                state: false
            })
        }
    }catch(err){
        res.status(200).json({
            state: false
        })
    }
}

export default getRequest