"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";
import Button from "./Button";

const RegisterSection = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isAlert, setIsAlert] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [myName, setMyName] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const [course, setCourse] = useState<string>("");
  const [how, setHow] = useState<string>("");

  const validateForm = (): { [key: string]: string } => {
    const errors: { [key: string]: string } = {};

    if (!myName.trim()) {
      errors.myName = "Your name is required";
    }
    if (!contact.trim()) {
      errors.contact = "Contact is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      errors.email = "Invalid email address";
    }

    if (day === "--choose") {
      errors.day = "Please select a mode";
    }

    if (course === "--choose") {
      errors.course = "Please select your path";
    }

    if (how === "--choose") {
      errors.how = "Please select how you heard about us";
    }

    return errors;
  };

  const isValidEmail = (email: string): boolean => {
    // Your email validation logic (if needed)
    return true;
  };

  const handleDayChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setDay(e.target.value);
  };

  const handleCourseChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setCourse(e.target.value);
  };

  const handleHowChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setHow(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const form = {
      myName,
      contact,
      email,
      day,
      course,
      how,
    };

    // Handle form submission
    console.log(form);
    setLoading(true);
    const response: Response = await fetch("/api/submit", {
      method: "POST" as const, // Ensures method is "POST"
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const content = await response.json();

    console.log(content);
    // alert(content.data.tableRange);
    setErrors({});
    setMyName("");
    setCourse("");
    setContact("");
    setEmail("");
    setDay("");
    setHow("");

    if (content) {
      setLoading(false);
      setIsAlert(true);
    }
  };

  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        {/* <Image src="/camp.svg" alt="camp" width={50} height={50} /> */}
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Register for a course Now
          </h2>
          <div className="regular-16 text-gray-30 xl:max-w-[520px] pt-6 md:pt-0">
            <div className="">
              <form onSubmit={handleSubmit} className="form w-full relative">
                <div className="flex flex-col gap-3 mb-8">
                  <label
                    htmlFor="myName"
                    className="text-2xl md:text-3xl font-medium"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="myName"
                    value={myName}
                    onChange={(e) => setMyName(e.target.value)}
                    placeholder="(first, last)"
                    className="pt-4 pb-3 border-b-2 border-gray-300 outline-none"
                    // required
                  />
                  {errors.myName && (
                    <p className="text-red-500">{errors.myName}</p>
                  )}
                </div>
                <div className="flex flex-col gap-3 mb-8">
                  <label
                    htmlFor="email"
                    className="text-2xl md:text-3xl font-medium"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="pt-4 pb-3 border-b-2 border-gray-300 outline-none"
                    // required
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email}</p>
                  )}
                </div>
                <div className="flex flex-col gap-3 mb-8">
                  <label
                    htmlFor="contact"
                    className="text-2xl md:text-3xl font-medium"
                  >
                    Contact(WhatsApp to be precise)?
                  </label>
                  <input
                    type="contact"
                    name="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Contact/Phone Number"
                    className="pt-4 pb-3 border-b-2 border-gray-300 outline-none"
                    // required
                  />
                  {errors.contact && (
                    <p className="text-red-500">{errors.contact}</p>
                  )}
                </div>
                <div className="flex flex-col gap-3 mb-8">
                  <label
                    htmlFor="select"
                    className="text-2xl md:text-3xl font-medium"
                  >
                    Which mode do you prefer?
                  </label>
                  <select
                    name="day"
                    value={day}
                    onChange={handleDayChange}
                    className="pt-4 pb-3 border-b-2 border-gray-300 outline-none"
                    // required
                  >
                    <option defaultChecked value="--choose">
                      --choose(physical or online)
                    </option>
                    <option value="Physical">Physical</option>
                    {/* <option value="Day Two" name="Day Two">
                          Online(coming soon...)
                        </option>
                        <option value="Both Days" name="Both Days">
                          Both Days
                        </option> 
                    */}
                  </select>
                  {errors.day && <p className="text-red-500">{errors.day}</p>}
                </div>
                <div className="flex flex-col gap-3 mb-10">
                  <label
                    htmlFor="course"
                    className="text-2xl md:text-3xl font-medium"
                  >
                    Course of interest?
                  </label>
                  <select
                    name="course"
                    value={course}
                    onChange={handleCourseChange}
                    className="pt-4 pb-3 border-b-2 border-gray-300 outline-none"
                    // required
                  >
                    <option
                      defaultChecked
                      value="--choose"
                      className="text-[#e9e9e9]"
                    >
                      --choose
                    </option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Frontend Development">
                      Frontend Development
                    </option>
                    <option value="Backend Development">
                      Backend Development
                    </option>
                    <option value="UI / UX Design">UI / UX Design</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Don't Know Yet">Don&apos;t Know Yet</option>
                  </select>
                  {errors.course && (
                    <p className="text-red-500">{errors.course}</p>
                  )}
                </div>
                <div className="flex flex-col gap-3 mb-10">
                  <label
                    htmlFor="how"
                    className="text-2xl md:text-3xl font-medium"
                  >
                    How did you hear about us?
                  </label>
                  <select
                    name="how"
                    value={how}
                    onChange={handleHowChange}
                    className="pt-4 pb-3 border-b-2 border-gray-300 outline-none"
                    // required
                  >
                    <option
                      defaultChecked
                      value="--choose"
                      className="text-[#e9e9e9]"
                    >
                      --choose
                    </option>
                    <option value="A friend">A friend</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Twitter">Twitter</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Banner">Banners</option>
                    <option value="Others">Others</option>
                  </select>
                  {errors.how && <p className="text-red-500">{errors.how}</p>}
                </div>
                <div>
                  {isAlert && <p>Form submitted successfully</p>}
                  <button
                    type="submit"
                    className="flexCenter bg-green-50 text-white py-3 rounded-full border w-full bold-16 whitespace-nowrap cursor-pointer"
                  >
                    {!loading ? (
                      // <Button
                      //   type="submit"
                      //   title="Submit"
                      //   //   icon="/apple.svg"
                      //   variant="btn_green"
                      //   full
                      // />
                      <label>Submit</label>
                    ) : (
                      // <Button
                      //   type="submit"
                      //   title="Loading..."
                      //   //   icon="/apple.svg"
                      //   variant="btn_dark_green_outline"
                      //   full
                      // />
                      <label>Loading</label>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flexCenter max-container relative w-full">
        <Image 
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Wonorejo Pasuruan</h4>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default RegisterSection;
