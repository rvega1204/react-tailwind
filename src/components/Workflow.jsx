// Importing necessary components and assets
import { CheckCircle2 } from "lucide-react"; // Icon to represent checklist items visually
import codeImg from "../assets/code.jpg"; // Image representing coding
import { checklistItems } from "../constants"; // Array of items for the checklist section

// Workflow component
const Workflow = () => {
    return (
        <div className="mt-20">
            {/* Section Title */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
                Accelerate your
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                    {" "}
                    coding Workflow.
                </span>
            </h2>

            {/* Section Content */}
            <div className="flex flex-wrap justify-center">
                {/* Image Section */}
                <div className="p-2 w-full lg:w-1/2">
                    <img src={codeImg} alt="Code" />
                </div>

                {/* Checklist Section */}
                <div className="pt-12 w-full lg:w-1/2">
                    {checklistItems.map((item, index) => (
                        <div className="flex mb-12" key={index}>
                            {/* Icon Wrapper */}
                            <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                <CheckCircle2 />
                            </div>

                            {/* Item Details */}
                            <div>
                                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                                <p className="text-md text-neutral-500">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Workflow; // Exporting the Workflow component as default