const express=require('express')

const userController=require('../controller/userlogic')

const router=express.Router()

router.get('/getUsers', userController.getUserDetails)

router.post('/postUser', userController.postUserDetails)

// router.post()

// router.put()

router.delete('/deleteUser/:id', userController.deleteUser)

module.exports = router