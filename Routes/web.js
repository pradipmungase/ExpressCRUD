import express from 'express';
import homeController from '../Controllers/homeController.js';
const router = express.Router();

router.get('/',homeController.getAllStudent);
router.post('/',homeController.createStudent);
router.get('/editStudent/:id',homeController.editStudent);
router.post('/updateStudent',homeController.updateStudent);
router.get('/deleteStudent/:id',homeController.deleteStudent);

export default router;