import React from "react";
import userImg from "../../assets/images/doctor-img01.png"

const Dashboard = () => {
    return (
        <div className="max-w-[1170px] px-5 mx-auto">
            <div className="grid md:grid-cols-3 gap-10">
                <div className="pb-[50px] px-[30px] rounded-md">
                    <div className="flex items-center justify-center">
                        <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                            <img src={userImg} alt="" className="w-full h-full rounded-full" />
                        </figure>
                    </div>

                    <div className="text-center mt-4">
                        <h3 className="text-[18px] leading-[30px] text-headingColor font-bold ">Peter Parker</h3>
                        <p className="text-textColor text-[15px] leading-6 font-medium">exmaple@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard 