import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

const Signin = () => {
  // const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const {
    signInWithEmailAndPasswordFunc,
    signInWithGoogleFunc,
    setLoading,
    user,
    setUser,
  } = useContext(AuthContext);
  // Private Route
  const location = useLocation();
  const from = location.state || "/";
  const navigate = useNavigate();

  if (user) {
    navigate("/");
    return;
  }



  //   const emailRef = useRef(null);
  // Sign in
  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // signInWithEmailAndPassword(auth, email, password)
    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        // console.log(res.user);
        setLoading(false);
        setUser(res.user);
        toast.success("Logged in succesfully");
        navigate(from);
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };
  // Google sign in
  const handleGoogleSignin = () => {
    // signInWithPopup(auth, googleProvider)
    signInWithGoogleFunc()
      .then((res) => {
        console.log(res.user);
        setLoading(false);
        setUser(res.user);
        toast.success("Logged in succesfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  // Sign out
  // const handleSignout = () => {
  //   // signOut(auth)
  //   signOutFunc()
  //     .then(() => {
  //       toast.success("Sign out succesfully");
  //       setUser(null);
  //     })
  //     .catch((e) => {
  //       toast.error(e.message);
  //     });
  // };
  // Forgot Password
  //   const handleForgetPassword = () => {
  //     const email = emailRef?.current?.value;
  //     // sendPasswordResetEmail(auth, email)
  //     sendPasswordResetEmailFunc(email)
  //       .then((res) => {
  //         setLoading(false);
  //         console.log(res);
  //         toast.success("Password reset email sent your Gmail");
  //       })
  //       .catch((error) => {
  //         toast.error(error.message);
  //       });
  //   };
  // console.log(user);
  return (
    <div className="card-body flex justify-center items-center">
      <div>
        <h2 className="text-3xl font-bold text-center">Log in Here!</h2>
        <form onSubmit={handleSignin}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <div className="relative">
              <label className="label">Password</label>
              <input
                type={show ? "text" : "password"}
                name="password"
                className="input"
                placeholder="Password"
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute top-8 right-3 z-10 cursor-pointer"
              >
                {show ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Log in
            </button>
            {/* Log in with google */}
            <button
              onClick={handleGoogleSignin}
              type="button"
              className="btn bg-white text-black w-full border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            <p>
              Don't have an account?{" "}
              <Link className="text-green-500 font-semibold" to="/signup">
                Register
              </Link>{" "}
              here
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Signin;
