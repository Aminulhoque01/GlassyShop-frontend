
import { useState, useRef } from "react";
import toast from "react-hot-toast";

const Verify=()=> {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    const finalOtp = otp.join("");
    console.log("OTP:", finalOtp);
    toast.success(`Your OTP is: ${finalOtp}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm text-center">
        <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>
        <p className="text-gray-600 mb-6">Enter the 6-digit code sent to you</p>

        <div className="flex justify-between mb-6">
          {otp.map((value, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none"
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full btn-org text-white py-3 rounded-xl font-semibold org-btn transition"
        >
          Verify
        </button>
      </div>
    </div>
  );
}


export default Verify;