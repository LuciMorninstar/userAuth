
import { useState} from "react";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";
import { register } from "../../utils/user";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";







const Register = () => {

  

    const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const navigate = useNavigate();








  

  const RegisterSubmit = async(e)=>{
    e.preventDefault();
    setLoading(true);

    const data = {
      userName,
      email, 
      password
    }

    try {
      const response = await register(data);
      const result = response.data;
     
      setData(result.data);
       toast.success(response.data.message);
       console.log(result.data);
       navigate("/login");




      
    } catch (error) {
      console.log("Error occured while registering", error);
      toast.error("Error occured while registering");
    
      
    }
    finally{
      setLoading(false);
    }


   

  }

  return (

     <section className="w-full flex flex-col justify-center gap-10 items-center px-8 py-8 ">

      
      <div>
        <h1 className="bg-gradient-to-r text-6xl from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Register
        </h1>

      </div>

      <form onSubmit={RegisterSubmit}>
        <div className="flex flex-col gap-2 shadow-lg shadow-gray-400  px-12 py-8 rounded-md ">
          

          <div className="flex flex-col gap-1">
            <label className="text-md text-[20px] " htmlFor="userName">
              User Name
            </label>
            <input
              className="border border-purple-300 px-4 py-2 placeholder:text-gray-500"
              type="text"
              name="userName"
              id="userName"
              placeholder="Type your UserName"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              required
            />
          </div>
         
          <div className="flex flex-col gap-1">
            <label className="text-md text-[20px] " htmlFor="email">
              Email
            </label>
            <input
              className="border border-purple-300 px-4 py-2 placeholder:text-gray-500"
              type="email"
              name="email"
              id="email"
              placeholder="Type your Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>

           <div className="flex flex-col gap-1">
            <label className="text-md text-[20px] " htmlFor="password">
              Password
            </label>
            <input
              className="border border-purple-300 px-4 py-2 placeholder:text-gray-500"
              type="password"
              name="password"
              id="password"
              placeholder="Type your Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>


         

          <button
            type="submit"
            className="px-5 py-3 mt-2 bg-blue-500 rounded-md flex flex-row justify-center items-center text-white gap-3 hover:text-blue-300 ease-in-out duration-300 cursor-pointer "
          >
            <span className="text-lg">Register</span>
           
            {loading && (
              <AiOutlineLoading3Quarters className="animate-spin text-white" />
            )}
          </button>

          
          <div className = "w-full mt-2 text-center">
            <span className = "">Already a User? <Link to = "/login" className = "text-blue-500 hover:text-blue-800">Login</Link></span>
          </div>
        </div>
      </form>
    </section>

 
  
  )
}

export default Register