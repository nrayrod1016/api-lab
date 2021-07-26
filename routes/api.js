import { Router } from 'express'
import * as nbaPlayersCtrl from '../controllers/nbaPlayers.js'

const router = Router()

export {
  router
}



router.get('/nbaplayers', nbaPlayersCtrl.index) // retrieves all nba playwers
router.get('/nbaplayers/:id', nbaPlayersCtrl.show)// retrieves a single players
router.post('/nbaplayers', nbaPlayersCtrl.create) // adds a player
router.put('/nbaplayers/:id', nbaPlayersCtrl.update) // updates a player
router.delete('/nbaplayers/:id', nbaPlayersCtrl.delete) // delete a player 