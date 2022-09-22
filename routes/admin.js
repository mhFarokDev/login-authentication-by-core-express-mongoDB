const express = require('express');
const { getAllAdmin, getSingleAdmin, deleteAdmin, addAdmin, updateAdmin } = require('../controller/admin');
const { adminLogin } = require('../controller/authController.js');
const router = express.Router()

// router.route('/').get(getAllAdmin).post(addAdmin)
// router.route('/:id').get(getSingleAdmin).delete(deleteAdmin).put(updateAdmin).patch(updateAdmin)

router.get('/', getAllAdmin)
router.get('/:id', getSingleAdmin)
router.post('/', addAdmin)
router.delete('/:id', deleteAdmin)
router.put('/:id', updateAdmin)
router.patch('/:id', updateAdmin)


router.post('/login', adminLogin)







module.exports = router;