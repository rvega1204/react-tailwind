// Importing necessary data
import { testimonials } from "../constants"; // Array of testimonial data

// Testimonial component
const Testimonial = () => {
    return (
        <div className="mt-20 tracking-wide">
            {/* Section Title */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10">
                What people are saying
            </h2>

            {/* Testimonial Cards */}
            <div className="flex flex-wrap justify-center">
                {testimonials.map((testimonial, index) => (
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2" key={index}>
                        <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
                            {/* Testimonial Text */}
                            <p>{testimonial.text}</p>

                            {/* User Info */}
                            <div className="flex mt-8 items-start">
                                {/* User Avatar */}
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.user}
                                    className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                                />
                                {/* User Name and Company */}
                                <div>
                                    <h6>{testimonial.user}</h6>
                                    <span className="text-sm font-normal italic text-neutral-600">
                                        {testimonial.company}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial; // Exporting the Testimonial component as default