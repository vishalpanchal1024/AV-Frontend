import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useFormik } from "formik";
import { LoginValidation } from "../../Validation/Auth.validation";
import { NavLink } from "react-router-dom";

function ForgetPassword() {
  const [showPassword, setShowPassword] = useState(false);

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: { email: "" },
      validationSchema: LoginValidation,
      onSubmit: async (value) => {
        try {
          // Example: handle login
          // const res = await signIn(value).unwrap();
          // toast.success(res.message || "Something went wrong");
          // if (res.user.emailVerification) {
          //   navigate("/");
          // } else {
          //   navigate("/verify-otp");
          // }
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

      {/* Right Section - Login Form */}
      <div className="w-1/2 bg-white p-12 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Forget Password
            </h2>
            <p className="text-gray-600 text-lg">
              Welcome back! Please enter your details
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email or Username
                </label>

                <input
                  type="email"
                  id="email"
                  className="block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </div>
                )}
              </div>
              {/* 
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
              </div> */}
            </div>

            {/* <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-5 w-5 text-blue-600 border-gray-300 rounded-md focus:ring-blue-500 cursor-pointer"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm text-gray-700 cursor-pointer"
                >
                  Stay logged in
                </label>
              </div>
              <NavLink
                to="#"
                className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200"
              >
                Forgot Password?
              </NavLink>
            </div> */}

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-md text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Send Mail
            </button>

            <p className="text-center text-base text-gray-600">
              Don't have an account?{" "}
              <NavLink
                to="/register"
                className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200"
              >
                Register Now
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
