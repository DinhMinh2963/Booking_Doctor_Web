import { useContext, useState } from "react";

import { authContext } from "../../context/authContext";

import { MyBookings } from "./MyBookings";
import { Profile } from "./Profile";
import { Records } from "./Records";

import useGetProfile from "../../hooks/useFetchData.jsx";
import { BASE_URL } from "../../config";

import Loading from "../../components/loader/Loading.jsx";
import Error from "../../components/error/Error.jsx";

const MyAccount = () => {
  const { dispatch } = useContext(authContext);
  const [tab, setTab] = useState("bookings");

  const { user, role, token } = useContext(authContext);

  const {
    data: userData,
    loading,
    error,
  } = useGetProfile(`${BASE_URL}/users/profile/me`);

  console.log(userData);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loading />}

        {error && !loading && <Error errMessage={error}/>}

        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-10">
            <div className="pb-[50px] px-[30px] rounded-md">
              <div className="flex items-center justify-center">
                <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                  <img
                    src={userData.photo}
                    alt=""
                    className="w-full h-full rounded-full"
                  />
                </figure>
              </div>

              <div className="text-center mt-4">
                <h3 className="text-[18px] leading-[30px] text-headingColor font-bold ">
                  {userData.name}
                </h3>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  {userData.email}
                </p>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  Blood Type:
                  <span className="ml-2 text-headingColor text-[22px] leading-8">
                    {userData.bloodType}
                  </span>
                </p>
              </div>

              <div className="mt-[50px] md:mt-[100px]">
                <button
                  onClick={handleLogout}
                  className="w-full bg-[#181a1e] p-3 text-[16px] leading-7 rounded-md text-white"
                >
                  Logout
                </button>
                <button className="w-full bg-red-600 p-3 mt-4 text-[16px] leading-7 rounded-md text-white">
                  Delete Account
                </button>
              </div>
            </div>
            
            {role === "patient" ? (<div className="md:col-span-2 md:px-[30px]">
              <div>
                <button
                  onClick={() => setTab("bookings")}
                  className={`${
                    tab === "bookings" &&
                    "bg-primaryColor text-white font-normal"
                  }p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-10 border border-solid border-primaryColor`}
                >
                  My Bookings
                </button>

                <button
                  onClick={() => setTab("settings")}
                  className={`${
                    tab === "settings" &&
                    "bg-primaryColor text-white font-normal"
                  }p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-10 border border-solid border-primaryColor`}
                >
                  Profile Setting
                </button>

                <button
                  onClick={() => setTab("records")}
                  className={`${
                    tab === "records" &&
                    "bg-primaryColor text-white font-normal"
                  }p-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-10 border border-solid border-primaryColor`}
                >
                  Medical Record
                </button>
              </div>

              {tab === "bookings" && <MyBookings />}
              {tab === "settings" && <Profile user={userData}/>}
              {tab === "records" && <Records />}
            </div>) : ''}
            
          </div>
        )}
      </div>
    </section>
  );
};

export default MyAccount;