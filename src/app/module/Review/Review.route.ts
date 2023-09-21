import express from  "express"
import ReviewController from "./Review.controller";
const ReviewRouter = express.Router();

ReviewRouter.post('/create',ReviewController.createReviewController)
ReviewRouter.get("/all",ReviewController.getAllReviewController)
ReviewRouter.get("/:id",ReviewController.getSingleReviewByTourIdController)



export default ReviewRouter;