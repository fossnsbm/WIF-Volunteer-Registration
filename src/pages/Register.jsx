import React from "react";

function Register() {
  return (
    <div>
      <div className="container ms-32 mt-12">
        {/* <span className="font-bold text-7xl md:text-8xl lg:text-left lg:text-[7rem]">
          <div>Let's be the</div>
          <div>
            best <span className="text-[#26B2B7]">Volunteers.</span>
          </div>
        </span> */}
        <div class="grid grid-cols-3 gap-4 font-bold text-7xl md:text-8xl lg:text-[7rem]">
          <div class="col-span-2">
            <div>Let's be the</div>
            best <span className="text-[#26B2B7]">Volunteers.</span>
          </div>
          <div class="text-right text-lg pt-14">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.Lorem
            ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
            Aliquam in hendrerit urna. Pellentesque sit amet sapien.Lorem ipsum
            dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam
            in hendrerit urna. Pellentesque sit amet sapien.
          </div>
        </div>
        <form className="mt-11 mx-60 justify-center">
          <div className="space-y-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="full-name"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Full Name*
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="full-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="batch"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Batch*
                </label>
                <div className="mt-2">
                  <select
                    id="batch"
                    name="batch"
                    className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option>Please Select</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="degree"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Degree
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="degree"
                    id="degree"
                    autoComplete="degree"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="contact-number"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Contact Number*
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="contact-number"
                    id="contact-number"
                    autoComplete="contact-number"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="student-mail"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Student Mail*
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="student-mail"
                    id="student-mail"
                    autoComplete="student-mail"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-lg font-medium leading-6 text-gray-900">
                Skills*
              </label>
              <label className="text-sm font-medium leading-6 text-gray-900">
                Select all the areas that you want to do
              </label>
            </div>
            <div className="flex flex-row">
              <div class="basis-1/4 relative flex gap-x-3">
                <input
                  id="developing"
                  name="developing"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <div className="text-lg leading-6">
                  <label
                    htmlFor="developing"
                    className="font-medium text-gray-900"
                  >
                    Developing
                  </label>
                </div>
              </div>
              <div class="basis-1/4 relative flex gap-x-3">
                <input
                  id="designing"
                  name="designing"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <div className="text-lg leading-6">
                  <label
                    htmlFor="designing"
                    className="font-medium text-gray-900"
                  >
                    Designing
                  </label>
                </div>
              </div>
              <div class="basis-1/4 relative flex gap-x-3">
                <input
                  id="blogging"
                  name="blogging"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <div className="text-lg leading-6">
                  <label
                    htmlFor="blogging"
                    className="font-medium text-gray-900"
                  >
                    Blogging
                  </label>
                </div>
              </div>
              <div class="basis-1/4 relative flex gap-x-3">
                <input
                  id="video-editing"
                  name="video-editing"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <div className="text-lg leading-6">
                  <label
                    htmlFor="video-editing"
                    className="font-medium text-gray-900"
                  >
                    Video Editing
                  </label>
                </div>
              </div>
              <div class="basis-1/4 relative flex gap-x-3">
                <input
                  id="public-speaking"
                  name="public-speaking"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <div className="text-lg leading-6">
                  <label
                    htmlFor="public-speaking"
                    className="font-medium text-gray-900"
                  >
                    Public Speaking
                  </label>
                </div>
              </div>
            </div>
            <div>
              <button className="ms-96 btn-primary mt-5">Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
