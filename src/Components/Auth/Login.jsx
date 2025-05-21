import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
    // Add your login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-950">
      <div className="bg-[#1C1C1C] p-8 rounded-2xl shadow-md w-full max-w-md border border-emerald-500 ">
        
        <form onSubmit={handleSubmit} className="space-y-4 p-7">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
                
              type="email"
              id="email"
              className="mt-1 w-full px-10 py-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500  border-emerald-500 placeholder-green-50 "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full px-10 py-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500  border-emerald-500 placeholder-green-50 "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-full transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
