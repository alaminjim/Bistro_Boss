import CoverMenu from "../Menu/CoverMenu";
import img from "../../assets/contact/banner.jpg";
import SectionTitle from "../../Components/Shared/SectionTitle";
import { Clock, MapPin, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import toast from "react-hot-toast";

const ContactUs = () => {
  const [captchaInput, setCaptchaInput] = useState("");

  useEffect(() => {
    loadCaptchaEnginge(6); // 6 digit captcha
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateCaptcha(captchaInput)) {
      toast.error(" Captcha does not match!");
      return;
    }
    toast.success("Message sent successfully!");
    // Send logic here
  };

  return (
    <div>
      <CoverMenu
        img={img}
        title={"CONTACT US"}
        heading={
          "We’d love to hear from you! Whether you have a question, feedback, or need assistance, our team is here to help. Reach out to us anytime through phone, email, or our contact form. Your satisfaction is our priority — let’s connect and make your experience even better."
        }
      ></CoverMenu>
      <div>
        <SectionTitle
          title={"---Visit Us---"}
          heading={"OUR LOCATION"}
        ></SectionTitle>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center p-6 bg-white">
          {/* Phone Card */}
          <div className="w-[300px] h-[200px]  rounded-lg shadow-md  overflow-hidden">
            <div className="bg-yellow-700 text-white flex items-center justify-center h-14">
              <Phone className="w-6 h-6" />
            </div>
            <div className="bg-gray-50 p-6 text-center h-[calc(100%-56px)] shadow-inner rounded-b-lg flex flex-col justify-center">
              <h3 className="font-semibold text-lg mb-2">PHONE</h3>
              <p className="text-sm">+38 (012) 34 56 789</p>
            </div>
          </div>

          {/* Address Card */}
          <div className="w-[300px] h-[200px] rounded-lg shadow-md overflow-hidden">
            <div className="bg-yellow-700 text-white flex items-center justify-center h-14">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="bg-gray-50 p-6 text-center h-[calc(100%-56px)] shadow-inner rounded-b-lg flex flex-col justify-center">
              <h3 className="font-semibold text-lg mb-2">ADDRESS</h3>
              <p className="text-sm">+38 (012) 34 56 789</p>
            </div>
          </div>

          {/* Working Hours Card */}
          <div className="w-[300px] h-[200px]  rounded-lg shadow-md  overflow-hidden">
            <div className="bg-yellow-700 text-white flex items-center justify-center h-14">
              <Clock className="w-6 h-6" />
            </div>
            <div className="bg-gray-50 p-6 text-center h-[calc(100%-56px)] shadow-inner rounded-b-lg flex flex-col justify-center">
              <h3 className="font-semibold text-lg mb-2">WORKING HOURS</h3>
              <p className="text-sm">Mon - Fri: 08:00 - 22:00</p>
              <p className="text-sm">Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SectionTitle
          title={"---Send Us a Message---"}
          heading={"CONTACT FORM"}
        ></SectionTitle>
        <div className="bg-gray-100 my-7 min-h-screen flex items-center justify-center p-6">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl  p-8 rounded-lg shadow-md"
          >
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="w-full">
                <label className="block text-sm font-medium mb-1">Name*</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full shadow-xs rounded-md p-3"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium mb-1">Email*</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full  shadow-xs rounded-md p-3"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Phone*</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full shadow-xs  rounded-md p-3"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Message*</label>
              <textarea
                placeholder="Write your message here"
                rows="6"
                className="w-full shadow-xs rounded-md p-3"
                required
              ></textarea>
            </div>

            {/* CAPTCHA */}
            <div className="mb-4">
              <LoadCanvasTemplate />
              <input
                type="text"
                onChange={(e) => setCaptchaInput(e.target.value)}
                placeholder="Enter the text above"
                className="w-full shadow-md mt-2 p-3 rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-700 text-white px-6 py-2 rounded hover:bg-yellow-800 flex items-center gap-2"
            >
              Send Message <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
