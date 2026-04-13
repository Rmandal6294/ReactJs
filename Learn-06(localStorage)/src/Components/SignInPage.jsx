import { useState } from "react";


const SignInPage = ({switchToLogIn}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    const onSubmitHandler = e =>{
        e.preventDefault();

        if (password !== confirm){
            alert("Password And Confirm Password Doesn't Match ! Please write the same password")
            return;
        }

        const data = {name: name, email: email, password: password}
        localStorage.setItem(email, JSON.stringify(data))
        setName("")
        setEmail("")
        setPassword("")
        setConfirm("")
        alert("✅ Account Created Successfully.")
    }

  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
      <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Create Account
        </h2>
        <p className="text-center text-gray-200 mb-6">Sign up to get started</p>

        <form className="space-y-4" onSubmit={(e)=>{
            onSubmitHandler(e)
        }}>
          <div>
            <label className="block text-gray-200 mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-1">Email</label>
            <input
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-1">Password</label>
            <input
              value={password}
              required
              onChange={(e)=>setPassword(e.target.value)}
              type="password"
              placeholder="Create password"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-1">Confirm Password</label>
            <input
              value={confirm}
              required
              onChange={(e)=>setConfirm(e.target.value)}
              type="password"
              placeholder="Confirm password"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-200">
            <input type="checkbox" className="accent-pink-500" />
            <span>
              I agree to the{" "}
              <a href="#" className="underline">
                Terms & Conditions
              </a>
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 transition duration-300 text-white py-2 rounded-lg font-semibold"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-white/30"></div>
          <span className="px-3 text-gray-200 text-sm">OR</span>
          <div className="flex-grow h-px bg-white/30"></div>
        </div>

        <p className="text-center text-gray-200 mt-6 text-sm">
          Already have an account?
          <a href="#" className="text-pink-300 hover:underline"
          onClick={switchToLogIn}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
