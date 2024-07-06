import { MdOutlineAlternateEmail } from "react-icons/md";
import contactLogo from "../../../assets/ContactLogo/hand_shak.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";

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

      <div className="flex  items-center gap-24 justify-between">
        <div>
          <img src={contactLogo} className="w-64" />
          <div>
            <h3 className="flex flex-row gap-1 items-center text-xl font-poppins">
              <MdOutlineAlternateEmail className="bg-gray-600 text-white p-1 text-xl rounded-full" />
              mamudmdemon@gmail.com
            </h3>
          </div>
        </div>

        <div className="bg-[#1a1443] p-8 rounded-xl mt-12">
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
