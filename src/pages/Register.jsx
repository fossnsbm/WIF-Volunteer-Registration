import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbxg_6GfhZCTEYNU3FcUjOPFDV_jY_e_YhhDVXUhpg93fDpaFjOWJUa5w6op7yHLOgEZ/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        alert("Thank you for registering. We will get back to you soon.");
      });
  };

  const style = {
    formHeading: "text-xl font-medium",
    formCheckboxDiv: "flex flex-row gap-2",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="relative h-auto">
        <div className="flex flex-col">
          <div className="my-8 w-full flex justify-center">
            <form
              className="flex flex-col gap-4 md:w-[60%] "
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col">
                <h3 className={style.formHeading}>Name*</h3>
                <input
                  required
                  type="text"
                  placeholder="Name"
                  name="Name"
                  className="form-style w-full"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className={style.formHeading}>Batch*</h3>
                  <input
                    required
                    type="text"
                    placeholder="Batch"
                    name="Batch"
                    className="form-style w-full"
                  />{" "}
                </div>
                <div>
                  <h3 className={style.formHeading}>Degree*</h3>
                  <input
                    required
                    type="text"
                    placeholder="Degree"
                    name="Degree"
                    className="form-style w-full"
                  />{" "}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className={style.formHeading}>Phone No*</h3>
                  <input
                    required
                    type="text"
                    placeholder="Phone"
                    name="Phone"
                    className="form-style w-full"
                  />
                </div>
                <div>
                  <h3 className={style.formHeading}>Student Mail*</h3>
                  <input
                    required
                    type="email"
                    placeholder="Students Email"
                    name="StudentMail"
                    className="form-style w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <h3 className={style.formHeading}>Skils*</h3>
                  <h2 className="text-base font-medium">
                    Select all the areas that you want to do
                  </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5">
                  <div className={style.formCheckboxDiv}>
                    <input
                      type="checkbox"
                      name="Developing"
                      value="Developing"
                      id="skill"
                      className="checkbox-style"
                    />
                    <h3 className={style.formHeading}>Developing</h3>
                  </div>

                  <div className={style.formCheckboxDiv}>
                    <input
                      type="checkbox"
                      name="Designing"
                      value="Designing"
                      id="skill"
                      className="checkbox-style"
                    />
                    <h3 className={style.formHeading}>Designing</h3>
                  </div>

                  <div className={style.formCheckboxDiv}>
                    <input
                      type="checkbox"
                      name="Blogging"
                      value="Blogging"
                      id="skill"
                      className="checkbox-style"
                    />
                    <h3 className={style.formHeading}>Blogging</h3>
                  </div>

                  <div className={style.formCheckboxDiv}>
                    <input
                      type="checkbox"
                      name="VideoEditing"
                      value="VideoEditing"
                      id="skill"
                      className="checkbox-style"
                    />
                    <h3 className={style.formHeading}>Video Editing</h3>
                  </div>

                  <div className={style.formCheckboxDiv}>
                    <input
                      type="checkbox"
                      name="PublicSpeaking"
                      value="PublicSpeaking"
                      className="checkbox-style"
                    />
                    <h3 className={style.formHeading}>PublicSpeaking</h3>
                  </div>
                </div>
              </div>
              <input
                type="submit"
                value="Register"
                className="btn-primary mt-5 mb-12 md:hidden"
              />
              <div className="justify-center w-full hidden md:flex mt-5">
                <input
                  type="submit"
                  value="Register"
                  className="btn-primary mt-5 mb-12"
                />
              </div>
            </form>
          </div>

          <div className="flex w-full flex-col items-center mb-12">
            <div className="flex gap-4">
              <img src="/FOSSlogo.png" alt="FOSS logo" />
              <img
                className="h-[2.3rem] my-auto"
                src="/WIFlogo.png"
                alt="Women In FOSS logo"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Register;
