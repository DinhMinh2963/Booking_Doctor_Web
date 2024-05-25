import DoctorCard from "../../components/doctors/DoctorCard";
import { doctors } from "../../assets/data/doctors";
import Testimonial from "../../components/testimonial/Testimonial";

import { BASE_URL } from "./../../config.js";
import useFetchData from "./../../hooks/useFetchData.jsx";
import Loader from "../../components/loader/Loading.jsx";
import Error from "../../components/error/Error.jsx";
import { useEffect, useState } from "react";

const Doctors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [result, setResult] = useState([]);

  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors/approved/`)


  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };


  useEffect(() => {
    const filtered = doctors.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResult(filtered);
  }, [searchQuery]);
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search doctor by name or specification"
              value={searchQuery}
              onChange={handleSearch}
            />
            {/* <button
              className="btn mt-0 rounded-[0px] rounded-r-md"
              onClick={handleSearch}
            >
              Search
            </button> */}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          {loading && <Loader />}

          {error && <Error />}

          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {result===null
                ? doctors.map((doctor) => (
                  <DoctorCard key={doctor._id} doctor={doctor} />
                  ))
                : result.map((doctor) => (
                    <DoctorCard key={doctor._id} doctor={doctor} />
                  ))}
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patient say</h2>
            <p className="text__para text-center">
              Providing top health care services, helping patients feel secure
              your health.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;
