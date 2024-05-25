import express from "express"
import { updateDoctor, deleteDoctor, getSingleDoctor, getAllDoctor, getDoctorProfile, updateApproved, getAllDoctorApproved } from "../controllers/doctorController.js"
import { authenticate, restrict } from "../auth/verifyToken.js"
import reviewRouter from "./review.js"

const router = express.Router()

//nested route
router.use("/:doctorId/reviews", reviewRouter)

router.get("/approved", getAllDoctorApproved)
router.get("/:id", getSingleDoctor)
router.get("/", getAllDoctor)
router.put("/:id", updateDoctor)
router.put("/approved/:id", updateApproved)
router.delete("/:id", authenticate, restrict(["doctor"]), deleteDoctor)

router.get("/profile/me", authenticate, restrict(["doctor"]), getDoctorProfile)

export default router