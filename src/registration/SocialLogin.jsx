import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";

import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/authProvider";
import axios from "axios";



const SocialLogin = () => {
    const location = useLocation();


    const navigate = useNavigate();

    const {user, googleLogin} = useContext(AuthContext)
    console.log(user);

    // const email= user?.email
    // console.log(email);

    const handleSocialSingin = () =>{
        googleLogin()
        .then(result =>{
            const user1 = result.user
            console.log(user1)
      
            const loggeinUser = {email: user1?.email};
      
            axios.post('https://roomjet-server-side.vercel.app/jwt' , loggeinUser,{
              withCredentials: true
            })
            .then(res => {
              console.log(res.data)
              if(res.data.success){
                navigate(location.state ? location.state : '/')
                toast.success('Successfully login')
      
              }})
          
                 
          
          })
        .catch(error => console.log(error))
    }
    return (
        <div>
             <div className="divider px-4">continue with</div>
            <div className=" text-center my-6">
                <button onClick={handleSocialSingin} className=" text-5xl"> <FcGoogle></FcGoogle></button>
            </div>
        </div>
    );
};

export default SocialLogin;