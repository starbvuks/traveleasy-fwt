import { useState } from "react";
import axios from "axios";

const Contact = () => {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [file, setFile] = useState("");

  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);

    axios
      .post("http://localhost/travel-easy/src/components/connect.php/", inputs)
      .then(function (response) {
        console.log(inputs);
        alert(response.data);
      });
  };

  // const handleSubmit = () => {
  //   const url = "http://localhost:80/connect.php/";

  //   let formData = new FormData();
  //   formData.append("from_name", name);
  //   formData.append("from_age", age);
  //   formData.append("from_email", email);
  //   formData.append("from_message", message);
  //   formData.append("from_file", file);

  //   axios
  //     .post(url, formData)
  //     .then((res) => alert(res.data))
  //     .catch((err) => alert(err));
  // };

  return (
    <div class="flex items-center justify-center self-center p-36 bg-firebg bg-no-repeat bg-cover bg-center bg-fixed">
      <form class="text-slate-100 w-1/3 bg-slate-900 opacity-95 p-12 rounded-3xl">
        <span className="text-3xl font-bold">Register: </span>
        <div class="flex justify-between mt-8">
          <div>
            <label class="text-md font-poppins font-medium mr-4 py-1">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              placeholder="your name"
              // onChange={(e) => console.log(e.target)}
              onChange={handleChange}
              class="bg-contactBack2 form-input rounded-lg px-3 py-1 font-spartan text-slate-900"
            />
          </div>
          <div>
            <label class="text-md font-poppins font-medium py-1 mr-4">
              Age
            </label>
            <input
              type="number"
              name="from_age"
              // onChange={(e) => setAge(e.target.text)}
              onChange={handleChange}
              placeholder="age"
              maxlength="99"
              class="bg-contactBack2 form-input rounded-lg w-24 px-3 py-1 font-spartan text-slate-900"
            />
          </div>
        </div>

        <div class="flex flex-col mt-5">
          <label class="text-md font-poppins font-medium text-contactLight py-1 ">
            Email
          </label>
          <input
            type="email"
            name="from_email"
            // onChange={(e) => setEmail(e.target.text)}
            onChange={handleChange}
            placeholder="you@example.com"
            class="bg-contactBack2 form-input mt-1 px-3 py-1 shadow-sm sm:text-sm rounded-md font-spartan text-gray-800"
          />
        </div>

        <div class="flex flex-col mt-5">
          <label class="text-md font-poppins font-medium text-contactLight py-1">
            Password
          </label>
          <input
            name="from_message"
            type="password"
            rows="3"
            // onChange={(e) => setMessage(e.target.text)}
            onChange={handleChange}
            placeholder="secure password"
            className="bg-contactBack2 form-input px-3 py-1 shadow-sm mt-1 rounded-md font-spartan text-gray-800"
          />
        </div>

        <label for="myfile">ID Verification:</label>
        <input
          type="file"
          id="myfile"
          name="from_file"
          // onChange={(e) => setFile(e.target.text)}
          onChange={handleChange}
          className="bg-contactBack2 form-input px-3 py-1 shadow-sm mt-5 rounded-md font-spartan text-gray-100"
        />

        <div class="flex justify-between mt-6">
          <button
            type="submit"
            onClick={handleSubmit}
            class="bg-contactBack ring-2 ring-contactBack2 font-poppins font-semibold text-contactLight px-5 py-2 rounded-xl transition ease-in-out delay-150 hover:bg-contactBack2"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
