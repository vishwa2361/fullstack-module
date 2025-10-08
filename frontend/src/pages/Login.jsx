import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/profile");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-blue-300">
      <div className="bg-white bg-opacity-40 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Welcome Back 👋</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input type="email" name="email" placeholder="Email Address"
            onChange={handleChange} required
            className="w-full p-3 rounded-full border border-gray-300 focus:outline-none" />
          <input type="password" name="password" placeholder="Password"
            onChange={handleChange} required
            className="w-full p-3 rounded-full border border-gray-300 focus:outline-none" />
          <button type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold">
            Log In
          </button>
        </form>
        <p className="mt-4 text-gray-700">
          Don’t have an account?{" "}
          <Link to="/register" className="text-indigo-600 font-semibold">Register</Link>
        </p>
      </div>
    </div>
  );
}
