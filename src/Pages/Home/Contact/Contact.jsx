import { MdOutlineAlternateEmail } from "react-icons/md";
import contactLogo from "../../../assets/ContactLogo/hand_shak.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Typography } from "@material-tailwind/react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3cfpvq9", "template_h27p3tt", form.current, {
        publicKey: "8Z5EcXULoLUIlAjvY",
      })
      .then(
        () => {
          toast.success("Thanks for your feedback", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        },

        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div id="contact" className="max-w-7xl mx-auto my-12">
      <div className="flex justify-center ">
        <h1 className=" text-2xl lg:text-3xl text-white gradient px-8 rounded-sm py-2 font-semibold">
          Contact
        </h1>
      </div>

      <div className="flex flex-row-reverse gap-52 ">
        <div className="flex-1">
          <img src={contactLogo} className="w-72 pt-12" />
          <div className="space-y-6 pt-8">
            <h3 className="flex flex-row gap-2 items-center text-xl text-white font-poppins">
              <MdOutlineAlternateEmail className="bg-gray-600 text-white p-1 text-xl rounded-full" />
              mamudmdemon@gmail.com
            </h3>
            <h3 className="flex flex-row gap-2 items-center text-xl text-white font-poppins">
              <FaPhone className="bg-gray-600 text-white p-1 text-xl rounded-full" />
              01636-279878
            </h3>
            <h3 className="flex flex-row gap-2 items-center text-xl text-white font-poppins">
              <FaLocationDot className="bg-gray-600 text-white p-1 text-xl rounded-full" />
              Narsingdi, Dhaka, Bangladesh
            </h3>
          </div>
          <div className="flex gap-4 text-white mt-6 ml-24">
            <Typography
              as="a"
              href="https://www.facebook.com/profile.php?id=100030602152520" target="_blank"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <svg
                className="h-8 w-8 hover:text-[#FFB641]"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
            <Typography
              as="a"
              href="https://x.com/umayermdemon"
              target="_blank"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <svg
                className="h-8 w-8 hover:text-[#FFB641]"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Typography>
            <Typography
              as="a"
              href="https://github.com/umayermdemon"
              target="_blank"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <svg
                className="h-8 w-8 hover:text-[#FFB641]"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
          </div>
        </div>

        <div className="bg-[#1a1443] p-8 rounded-xl mt-12 flex-1">
          <h2 className="text-4xl font-bold font-poppins">
            Let’s work together!
          </h2>
          <div>
            <form ref={form} onSubmit={sendEmail} className="w-[550px] ">
              <div className="flex flex-col gap-2 pt-8">
                <label className="text-xl font-poppins font-semibold text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="bg-white rounded-xl h-10 text-black pl-4"
                />
              </div>
              <div className="flex flex-col gap-2 pt-4">
                <label className="text-xl font-poppins font-semibold text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="bg-white rounded-xl h-10 text-black pl-4"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label className="text-xl font-poppins font-semibold text-white">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  className="bg-white rounded-xl text-black pl-2 pt-1 h-40"
                />
              </div>

              <div className="pt-4 flex justify-center">
                <input
                  type="submit"
                  value="Send Message"
                  className="hover:bg-[#06002C] border-white animate__pulse hover:text-[#FFB641] btn btn-outline hover:border-[#FFB641] font-bold text-[#FFB641]"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


