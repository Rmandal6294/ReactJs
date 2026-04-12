import { useState } from "react";

const LoginPage = ({switchToSingIn, onLogin}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmitHandle = e =>{
        e.preventDefault();
        const data = JSON.parse(localStorage.getItem(email))
        if (data == null){
            alert("No Data Found! At First Register You")
            return
        }

        if (password == data.password){
            onLogin(email)
            return
        }

        setEmail("")
        setPassword("")
        alert("Password not match")
    }

  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
      <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back
        </h2>
        <p className="text-center text-gray-200 mb-8">Login to your account</p>

        <form className="space-y-5" onSubmit={(e)=>{
            onSubmitHandle(e)
        }}>
          <div>
            <label className="block text-gray-200 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-1">Password</label>
            <input
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-200">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-pink-500" />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 transition duration-300 text-white py-2 rounded-lg font-semibold"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-white/30"></div>
          <span className="px-3 text-gray-200 text-sm">OR</span>
          <div className="flex-grow h-px bg-white/30"></div>
        </div>

        <p className="text-center text-gray-200 mt-6 text-sm">
          Don't have an account?
          <a href="#" className="text-pink-300 hover:underline"
          onClick={switchToSingIn}>
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
