import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";

export const updateApproved=async(req,res)=>{
    const id=req.params.id
    const {isApproved}=req.body
    try {
        await Doctor.findByIdAndUpdate(id,{
            isApproved
        })
        res.status(200).json({
            success: true,
            message: "Successfully updated"
        })
    } catch (error) {
        res.status(500).json({success: false, message: "Failed to update"})
    }
    }


export const updateDoctor = async (req, res) => {
    const id = req.params.id

    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        )

        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updatedDoctor,
        })
    } catch (err) {
        res.status(500).json({success: false, message: "Failed to update"})
    }
}

export const deleteDoctor = async (req, res) => {
    const id = req.params.id

    try {
        await Doctor.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            message: "Successfully deleted",
        })
    } catch (err) {
        res.status(500).json({success: false, message: "Failed to deleted"})
    }
}

export const getSingleDoctor= async (req, res) => {
    const id = req.params.id

    try {
        const doctor = await Doctor.findById(id).populate("reviews").select("-password")

        res.status(200).json({
            success: true,
            message: "Doctor found",
            data: doctor,
        })
    } catch (err) {
        res.status(404).json({success: false})
    }
}

export const getAllDoctor = async (req, res) => {

    try {
        let doctors
     
        doctors = await Doctor.find().select("-password") 
        
        res.status(200).json({
            success: true,
            message: "Doctors found",
            data: doctors,
        })
    } catch (err) {
        res.status(404).json({success: false})
    }
}

export const getAllDoctorApproved = async (req, res) => {
    try {
        
        const doctors=await Doctor.find({isApproved:'approved'})

        res.status(200).json({
            success: true,
            message: "Doctors found",
            data: doctors,
        })
    } catch (err) {
        return res.send(err)
    }
}

export const getDoctorProfile = async(req, res)=>{
    const doctorId = req.userId

    try {
        const doctor = await Doctor.findById(doctorId)

        if(!doctor){
            return res.status(404).json({success: false, message: "Doctor not found"})
        }

        const {password, ...rest} = doctor._doc
        const appoinments = await Booking.find({doctor: doctorId})

        res.status(200).json({success: true, message: "Profile info is getting", data: {...rest, appoinments}})
    } catch (err) {
        res.status(500).json({success: false, message: "Somthing went wrong, cannot get"})
    }
}