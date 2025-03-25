import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useFormik } from "formik";
import { RegisterValidation } from "../../Validation/Auth.validation";
import { NavLink, useNavigate } from "react-router-dom";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: { fullname: "", email: "", password: "" },
      validationSchema: RegisterValidation,
      onSubmit: async (value) => {
        try {
          // Example: handle registration
          // const res = await register(value).unwrap();
          // toast.success(res.message || "Registration successful");
          // navigate("/dashboard");
        } catch (error) {
          // toast.error(error.data.message);
        }
      },
    });

  return (
    <div className="min-h-screen w-full flex">
      {/* Left Section */}
      <div className="w-1/2 p-12 flex flex-col justify-center relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-7xl font-bold text-white mb-6 leading-tight">
            Welcome
            <br />
            back!
          </h1>
          <p className="text-gray-200 text-xl font-light">
            Experience the future of communication with
            <br />
            our advanced AI voice assistance
          </p>
        </div>
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-110"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1682686581362-796145f0e123?q=80&w=2940&auto=format&fit=crop")',
            filter: "brightness(0.5)",
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 mix-blend-overlay" />
      </div>

      {/* Right Section - Registration Form */}
      <div className="w-1/2 bg-white p-12 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Register</h2>
            <p className="text-gray-600 text-lg">
              Create your account to get started
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={values.fullname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                />
                {errors.fullname && touched.fullname && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.fullname}
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                />
                {errors.email && touched.email && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="••••••••"
                  />
                  {errors.password && touched.password && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.password}
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center transition-opacity duration-200 hover:opacity-70"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-md text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Register
            </button>

            <p className="text-center text-base text-gray-600">
              Already have an account?{" "}
              <NavLink
                to="/log-in"
                className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200"
              >
                Log in
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
