// Importing necessary components and assets
import { CheckCircle2 } from "lucide-react"; // Icon for feature highlights
import { pricingOptions } from "../constants/index"; // Pricing data and features list

// Pricing component
const Pricing = () => {
    return (
        <div className="mt-20">
            {/* Section Title */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
                Pricing
            </h2>

            {/* Pricing Options */}
            <div className="flex flex-wrap">
                {pricingOptions.map((option, index) => (
                    <div className="w-full sm:w-1/2 lg:w-1/3 p-2" key={index}>
                        <div className="p-10 border border-neutral-700 rounded-xl">
                            {/* Plan Title */}
                            <p className="text-4xl mb-8">
                                {option.title}
                                {option.title === "Pro" && (
                                    <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                                        (Most Popular)
                                    </span>
                                )}
                            </p>

                            {/* Plan Price */}
                            <p className="mb-8">
                                <span className="text-5xl mt-5 mr-2">
                                    {option.price}
                                </span>
                                <span className="text-neutral-400 tracking-tight">
                                    /Month
                                </span>
                            </p>

                            {/* Features List */}
                            <ul>
                                {option.features.map((feature, index) => (
                                    <li className="mt-8 flex items-center" key={index}>
                                        <CheckCircle2 /> {/* Feature Icon */}
                                        <span className="ml-2">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Subscription Button */}
                            <a
                                href="#"
                                className="inline-flex justify-center text-center items-center w-full h-12 p-5 mt-20 tracking-tight text-xl
                                border border-orange-900 hover:bg-orange-900 rounded-lg transition duration-200"
                            >
                                Subscribe
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing; // Exporting the Pricing component as default