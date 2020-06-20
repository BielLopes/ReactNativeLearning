const express = require('express');
const routes = express.Router();

const multer = require('multer');
const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);

const SessionControler = require('./controllers/SessionController');
const SpotControler = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');
const ApprovalController = require('./controllers/ApprovalController');
const RejectionController = require('./controllers/RejectionCOntroller');

routes.post('/sessions', SessionControler.store);

routes.post('/spots', upload.single('tumbnail'), SpotControler.store);
routes.get('/spots', upload.single('tumbnail'), SpotControler.index);

routes.get('/dashborads', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);
routes.post('/bookings/:booking_id/approvals', ApprovalController.store );
routes.post('/bookings/:booking_id/rejections', RejectionController.store);

module.exports = routes;