import { Router } from 'express'
import { getGuitars, getGuitar, insertGuitar, updateGuitar, deleteGuitar } from '../controllers/guitars.controllers.js'

const router = Router()

router.get('/guitars', getGuitars)

router.get('/guitars/:model', getGuitar)

router.post('/guitars', insertGuitar)

router.patch('/guitars', updateGuitar)

router.delete('/guitars/:model', deleteGuitar)


export default router