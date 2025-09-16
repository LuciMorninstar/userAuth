
import { useState} from "react";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";
import { login} from "../../utils/user";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../utils/Store.js";







const Login = () => {

  


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const navigate = useNavigate();


//zustand
// const user = useUserStore((state)=>state.user);
const loginUser = useUserStore((state)=>state.login); //Name can be anything since there was already a login imported so loginUser used 








  

  const LoginSubmit = async(e)=>{
    e.preventDefault();
    setLoading(true);

    const data = {
      
      email, 
      password
    }

    try {
      const response = await login(data);
      const result = response.data;
     
    
       toast.success(response.data.message);
       console.log("token",result.token)
         setData(result.data);
        //  localStorage.setItem("token", result.token); 
          //saving token in localstorage so that api interceptors can add Bearer to it `Bearer ${token}'
         console.log("user", result.data)  //user object
        //  localStorage.setItem("user", JSON.stringify (result.data));

         loginUser(result.data,result.token) //zustand store(Since login takes userData and token as a parameter)
         
         navigate("/");





      
    } catch (error) {
      console.log("Error occured while logging", error);
      toast.error("Error occured while logging");
    
      
    }
    finally{
      setLoading(false);
    }


   

  }

  return (

     <section className="w-full flex flex-col justify-center gap-10 items-center px-8 py-8 ">

      
      <div>
        <h1 className="bg-gradient-to-r text-6xl from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Login
        </h1>

      </div>

      <form onSubmit={LoginSubmit}>
        <div className="flex flex-col gap-2 shadow-lg shadow-gray-400  px-12 py-8 rounded-md ">
          

         
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
            <span className="text-lg">Login</span>
           
            {loading && (
              <AiOutlineLoading3Quarters className="animate-spin text-white" />
            )}
          </button>

          
          <div className = "w-full mt-2 text-center">
            <span className = "">Don't have an account? <Link to = "/register" className = "text-blue-500 hover:text-blue-800">Register</Link></span>
          </div>
        </div>
      </form>
    </section>

 
  
  )
}

export default Login