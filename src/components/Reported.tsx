import successImage from "../assets/success.gif";
import { IoCloseOutline } from "react-icons/io5";

interface ReportedProps {
  handleCloseReport: () => void;
}

const Reported: React.FC<ReportedProps> = ({ handleCloseReport }) => {
  return (
    <section
      className={` bg-white w-[90%] md:w-[60%] lg:w-[50%] mx-auto my-9 py-5 rounded-[19px] relative shadow-lg transition-opacity duration-300`}
    >
      <header className="text-[rgb(32,32,32)] text-center py-8 w-[70%] mx-auto border-b-[0.5px] border-gray-300">
        <div className="text-md md:text-lg lg:text-xl font-bold">
          Thank You for Your Report
        </div>
        <IoCloseOutline
          onClick={handleCloseReport}
          className="absolute right-5 top-4 cursor-pointer text-3xl"
        />
      </header>
      <main className="w-[90%] lg:w-[80%] mx-auto">
        <div className="text-xs md:text-sm lg:text-md mt-8 font-normal text-black text-center">
          We appreciate your feedback. Our team will review the issue and take
          appropriate action.
        </div>
        <div className="w-[180px] h-[180px] mx-auto">
          <img src={successImage} alt="" />
        </div>
      </main>
    </section>
  );
};

export default Reported;
