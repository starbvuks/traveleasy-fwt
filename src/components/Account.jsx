import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Account = ({}) => {
  const [input, setInput] = useState("");
  // const [users, setUsers] = useState({});

  const [userState, setUserState] = useState({});
  const [from_email, setEmail] = useState();
  const [from_message, setPass] = useState();

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setUsers((values) => ({ ...values, [name]: value }));
  //   setInput(users);
  //   console.log(input);
  // };

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setUsers((values) => ({ ...values, [name]: value }));

  //   console.log(users);
  // };

  const handleChangeEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
    console.log(from_email);
  };
  const handleChangePass = (event) => {
    const value = event.target.value;
    setPass(value);
    console.log(from_message);
  };

  const handleSubmit = (event) => {
    // const payload = {
    //   from_email: users.from_email,
    //   from_pass: users.from_pass,
    // };

    // setEmail(users.from_email);
    // setPass(users.from_pass);
    // console.log(users);

    // setEmail("starbvuks@gmail.com");
    // setPass("12345678");
    // console.log(email);
    // console.log(pass);

    axios
      .post(`http://localhost/travel-easy/src/components/get.php/`, null, {
        params: {
          from_email,
          from_message,
        },
      })
      .then(function (response) {
        console.log(from_email, from_message);
        console.log(response.data);
        setInput(response.data);
        if (input !== "Error") {
          window.localStorage.setItem("token", response.data);
        }
      });
  };

  let navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate(`/`);
  };

  return (
    <div>
      {window.localStorage.token ? (
        <div>
          <div className=" text-3xl font-bold h-screen text-slate-100 p-12">
            <span className="text-green-300">{window.localStorage.token} </span>
            is already logged in
            <br></br>
            <button
              type="submit"
              onClick={logout}
              class="bg-slate-800 text-lg font-bold text-contactLight px-5 py-1 mt-5 rounded-xl"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div class=" w-full h-full center items-center text-slate-100 flex justify-between">
          <div class="ml-36 pb-24">
            <h1 class="font-bold text-3xl mb-3">Login: </h1>
            <input
              type="text"
              name="from_email"
              // onChange={(e) => setEmail(e.target.value)}
              onChange={handleChangeEmail}
              placeholder="Your Email"
              required
              class="bg-contactBack2 form-input px-3 py-1 shadow-sm mt-1 mb-4 rounded-md text-slate-800"
            />
            <input
              type="password"
              name="from_message"
              // onChange={(e) => setPass(e.target.value)}
              onChange={handleChangePass}
              placeholder="Your Password"
              required
              class="bg-contactBack2 form-input px-3 py-1 shadow-sm mt-1 mb-4 rounded-md text-slate-800"
            />
            <button
              type="submit"
              onClick={handleSubmit}
              class="bg-contactBack ring-2 ring-contactBack2 font-poppins font-semibold text-contactLight px-5 py-1 rounded-xl transition ease-in-out delay-150 hover:bg-contactBack2"
            >
              Send
            </button>

            <div>
              {input === "Error" ? (
                <span class="font-medium">Error Logging in</span>
              ) : (
                <div>
                  <span className="font-bold">{input} </span>
                  <span className="font-medium">logged in</span>
                </div>
              )}
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?cs=srgb&dl=pexels-fabian-wiktor-994605.jpg"
            alt="hm"
            class="w-2/3"
          />
        </div>
      )}
    </div>
  );
};

export default Account;
