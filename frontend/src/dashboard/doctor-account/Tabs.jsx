import { useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { BASE_URL, token } from "../../config";
import useGetProfile from "../../hooks/useFetchData.jsx";
import { toast } from "react-toastify";

const Tabs = ({ tab, setTab }) => {
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const {
    data: doctorData
  } = useGetProfile(`${BASE_URL}/doctors/profile/me`);

  const doctorId = doctorData._id;

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const handleDeleteAccount = async (e) => {
    e.preventDefault();

    const userConfirmed = confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (userConfirmed) {
      try {
        const res = await fetch(`${BASE_URL}/doctors/${doctorId}`, {
          method: "delete",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ doctorId }),
        });

        const result = await res.json();

        if (!res.ok) {
          throw Error(result.message);
        }

        toast.success(result.message);
        dispatch({ type: "LOGOUT" });
      } catch (err) {
        toast.error(err.message);
      }
    } else {
      console.log("Account deletion cancelled.");
    }
  };
  return (
    <div>
      <span className="lg:hidden">
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>
      <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md">
        <button
          onClick={() => setTab("overview")}
          className={`${
            tab === "overview"
              ? "bg-indigo-200 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Overview
        </button>
        <button
          onClick={() => setTab("appointments")}
          className={`${
            tab === "appointments"
              ? "bg-indigo-200 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Appointments
        </button>
        <button
          onClick={() => setTab("settings")}
          className={`${
            tab === "settings"
              ? "bg-indigo-200 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Profile
        </button>

        <div className="mt-[100px] w-full">
          <button
            onClick={handleLogout}
            className="w-full bg-[#181a1e] p-3 text-[16px] leading-7 rounded-md text-white"
          >
            Logout
          </button>
          <button className="w-full bg-red-600 p-3 mt-4 text-[16px] leading-7 rounded-md text-white" onClick={handleDeleteAccount}>
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
