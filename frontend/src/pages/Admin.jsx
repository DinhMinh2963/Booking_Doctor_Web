import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { authContext } from "../context/authContext";

const Admin = () => {
  const { token } = useContext(authContext);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/doctors")
      .then((res) => {
        setDoctors(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  var approved;
  const hanldeApproved = async (id, e) => {
    try {
      axios
        .get(`http://localhost:5000/api/v1/doctors/${id}`)
        .then((res) => {
          approved = res.data.data.isApproved;
          console.log(approved);
          if (approved === "pending") {
            approved = "approved";
          } else {
            approved = "pending";
          }
          axios
            .put(`http://localhost:5000/api/v1/doctors/approved/${id}`, {
              isApproved: approved,
            })
            .then((res) => toast.success("Approved"));
          location.reload();
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <table class="table-fixed w-full mt-4">
        <thead className="bg-gray-200 shadow-lg ">
          <tr>
            <th className="py-2">NO.</th>
            <th>NAME</th>
            <th>ROLE</th>
            <th>EMAIL</th>
            <th>STATUS</th>
            <th>APPROVED</th>
          </tr>
        </thead>
        <tbody className=" text-center">
          {doctors.map((doctor, index) => (
            <tr className={`${index % 2 === 0 ? "bg-gray-50" : ""}`}>
              <td className="py-7 text-center font-semibold">{index + 1}</td>
              <td className="text-left">{doctor.name}</td>
              <td>{doctor.role}</td>
              <td>{doctor.email}</td>
              <td>{doctor.isApproved}</td>
              <td>
                <button
                  className={`btn items-center justify-center  ${
                    doctor.isApproved === "pending"
                      ? "bg-blue-500"
                      : "bg-red-500"
                  }`}
                  onClick={() => {
                    hanldeApproved(doctor._id);
                  }}
                >
                  {doctor.isApproved === "pending" ? "approved" : "pending"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Admin;
