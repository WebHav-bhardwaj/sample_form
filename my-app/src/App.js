import "./App.css";
import Navbar from "./Components/Navbar";
import Inputtext from "./Components/Inputtext";
import Inputdate from "./Components/Inputdate";

function App() {
  return (
    <>
      <Navbar />
      <div className=" my-2 container px-4 py-4 ">
        <div className="formsContainer bg-white mx-1 my-4 w-full">
          <div className="formsHeading px-5 py-3 pb-0 text-lg">
            <h2>Personal Information</h2>
          </div>
          <div className="formsQuestions justify-center shadow-md grid-rows-1 md:grid md:grid-cols-3 ">
            <Inputtext title="First Name" placeholder="eg:Jhon" type="text" />
            <Inputtext title="Middle Name" placeholder="eg:Bone" type="text" />
            <Inputtext title="Last Name" placeholder="eg:Jones" type="text" />
            <Inputdate title="Date Of Birth" />
          </div>
        </div>
        <div className="formsContainer bg-white my-4 mx-1 w-full">
          <div className="formsHeading px-5 py-3 pb-0 text-lg">
            <h2>Contact Details</h2>
          </div>
          <div className="justify-center shadow-md grid-rows-1 md:grid md:grid-cols-3 ">
            <Inputtext
              title="Email"
              placeholder="eg:Jhon@gmail.com"
              type="email"
            />
            <Inputtext
              title="Phone/Mobile Number"
              placeholder="eg:+91 99887766554"
              type="number"
            />
            <Inputtext
              title="Alternate Phone/Mobile Number"
              placeholder="eg:+91 99887766554"
              type="number"
            />
          </div>
        </div>
        <div className="formsContainer bg-white mx-1 my-4 w-full">
          <div className="formsHeading px-5 py-3 pb-0 text-lg">
            <h2>Educational Qualifications</h2>
          </div>
          <div className="justify-center shadow-md grid-rows-1 md:grid md:grid-cols-3 ">
            <span className="col-span-3">
              <span className="justify-center grid-rows-1 md:grid md:grid-cols-2 ">
                <Inputtext
                  title="College/University"
                  placeholder="MS Ramaiah Institute of Technology"
                  type="text"
                />
                <Inputtext
                  title="Degree Awarded"
                  placeholder="B.Tech"
                  type="text"
                />
              </span>
            </span>
            <Inputdate title="Start Date" />
            <Inputdate title="End Date" />
            <Inputtext
              title="Is Completed?"
              placeholder="B.Tech"
              type="checkbox"
            />
          </div>
        </div>
        <div className="formsContainer bg-white mx-1 my-4 w-full">
          <div className="formsHeading px-5 py-3 pb-0 text-lg">
            <h2>Work Experience</h2>
          </div>
          <div className="justify-center shadow-md grid-rows-1 md:grid md:grid-cols-3 ">
            <span className="col-span-3">
              <span className="justify-center grid-rows-1 md:grid md:grid-cols-2 ">
                <Inputtext
                  title="Company Name"
                  placeholder="MS Ramaiah Institute of Technology"
                  type="text"
                />
                <Inputtext
                  title="Designation"
                  placeholder="B.Tech"
                  type="text"
                />
              </span>
            </span>
            <Inputdate title="Start Date" />
            <Inputdate title="End Date" />
            <Inputtext
              title="Is Completed?"
              placeholder="B.Tech"
              type="checkbox"
            />
          </div>
        </div>
        <div className=" justify-center flex ">
        <button className=" justify-center bg-blue-500 text-2xl px-4 py-2 text-white my-6"><a href="/">Submit</a></button>
        </div>
      </div>
    </>
  );
}

export default App;
