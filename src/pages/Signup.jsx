import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
// import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
  const [show, setShow] = useState(false);
  const {
    createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    signInWithGoogleFunc,
    setLoading,
    signOutFunc,
    setUser,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // password validation
    const regEx = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!regEx.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and contain both uppercase and lowercase letters."
      );
      return;
    }

    // createUserWithEmailAndPassword(auth, email, password)
    createUserWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        updateProfileFunc(displayName, photoURL)
          .then((res) => {
            console.log(res);
            setLoading(false);

            signOutFunc()
              .then(() => {
                toast.success("Sign up succesfully");
                setUser(null);
                navigate("/signin");
              })
              .catch((e) => {
                toast.error(e.message);
              });
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
    console.log("Sign up button clicked", {
      email,
      password,
      displayName,
      photoURL,
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
        navigate('/');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="card-body flex justify-center items-center">
      <h2 className="text-3xl font-bold text-center">Register here!</h2>
      <form onSubmit={handleSignup}>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Your Name"
          />
          <label className="label">Photo</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Your Photo"
          />
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
            Register
          </button>
          <p>
            Already have an account?{" "}
            <Link className="text-green-500 font-semibold" to="/signin">
              Login
            </Link>{" "}
            here
          </p>
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
        </fieldset>
      </form>
    </div>
  );
};

export default Signup;
