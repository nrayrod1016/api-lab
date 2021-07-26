import { nbaPlayer } from '../models/nbaPlayer.js'


export { 
    index, 
    show,
    create, 
    update,
    deleteNbaPlayer

}



// other method shown in lesson 
// function index(req, res) { 
//     nbaPlayer.find({}, function(err, nbaPlayers) { 
//         res.status(200).json(nbaPlayers)
//     })
// }

function index(req, res) { 
    nbaPlayers.find({})
    .then(puppies => { 
        res.status(200).json(nbaPlayers)
    })
    .catch(err => { 
        res.json(err)
    }) 
}

function show(req, res) { 
    nbaPlayers.findById(req.params.id) 
    .then(nbaPlayers => { 
        res.json(nbaPlayer)
    })
}

function create(req, res) { 
    nbaPlayer.findByIdAndDelete(req.params.id)
    .then(nbaPlayer => { 
        res.json(nbaPlayer)
    })


}

function update(req, res) { 
    nbaPlayer.create(req.body)
    .then(nbaPlayer => { 
        res.json(nbaPlayer)
    })

}

function deleteNbaPlayer(req, res) { 
    nbaPlayer.findByIdAndDelete(req.params.id)
    .then(nbaPlayer => { 
        res.json(nbaP,ayer)
    })

}