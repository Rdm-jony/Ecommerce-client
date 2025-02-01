import React, { useState } from 'react';
import ChangePass from './ChangePass';
import EditProfile from './EditProfile';

const MyAccount = () => {
    const [active,setActive]=useState(0)
    return (
        <div class=" mx-auto bg-white p-8 rounded-lg shadow-lg ">
            <h2 class="text-2xl font-semibold text-center mb-6">Contact Form</h2>
            <div role="tablist" className="tabs tabs-bordered mb-10">
                <a role="tab" onClick={()=>setActive(0)} className={active==0?'tab tab-active text-primary text-xl':'tab'}>Edit Profile</a>
                <a role="tab" onClick={()=>setActive(1)} className={active==1?'tab tab-active  text-primary text-xl':'tab'}>Change Password</a>
            </div>
            {
                active==0 && <EditProfile></EditProfile>
            }
            {
                active==1 && <ChangePass></ChangePass>
            }
        </div>
    );
};

export default MyAccount;