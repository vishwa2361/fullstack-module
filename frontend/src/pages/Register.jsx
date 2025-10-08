import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      alert("Registered successfully!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-purple-200 to-indigo-300 px-4">
      <div className="w-full max-w-lg bg-white/30 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl p-10 text-center transform transition-all hover:scale-[1.02]">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Create Account ✨</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full p-4 rounded-full border border-gray-300 bg-white/60 focus:ring-2 focus:ring-indigo-400 focus:outline-none text-gray-800 placeholder-gray-500"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full p-4 rounded-full border border-gray-300 bg-white/60 focus:ring-2 focus:ring-indigo-400 focus:outline-none text-gray-800 placeholder-gray-500"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-4 rounded-full border border-gray-300 bg-white/60 focus:ring-2 focus:ring-indigo-400 focus:outline-none text-gray-800 placeholder-gray-500"
          />

          <button
            type="submit"
            className="w-full py-4 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold text-lg shadow-lg hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-8 text-gray-700 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
