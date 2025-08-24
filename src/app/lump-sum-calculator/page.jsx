import Header from "./Header";
import Calculator from "./Calculator";
import AboutLumpsumCalc from "./AboutLumpsum";

export default function LumpSumCalculator() {
    return (
        <div className="overflow-x-hidden pt-32">
            <Header />
            <div className="border-b border-gray-600 w-full"/>
            <Calculator />
            <div className="border-b border-gray-600 w-full"/>
            <AboutLumpsumCalc />
            

        </div>
    )
}
