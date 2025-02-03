import { FaEnvelope, FaPhone } from "react-icons/fa"; // Importing icons from react-icons

export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                <h1 className="text-2xl font-bold text-center text-blue-600 mb-8">
                    Contact Information
                </h1>
                <div className="space-y-2 flex items-center">
                    {/* Name Section */}
                    <div className="flex items-center space-x-4">
                        {/* <span className="text-xl font-medium text-gray-700">Name:</span> */}
                        <span className="text-xl text-gray-600">Jenine Kyle Gutierrez</span>
                    </div>

                    {/* Email Section */}
                    <div className="flex items-center space-x-4">
                        <FaEnvelope className="text-blue-600" />
                        <span className="text-xl font-medium text-gray-700">Email:</span>
                        <a
                            href="mailto:jgutierrez18@cnih.ca"
                            className="text-xl text-blue-600 hover:underline"
                        >
                            jgutierrez18@cnih.ca
                        </a>
                    </div>

                    {/* Phone Section */}
                    <div className="flex items-center space-x-4">
                        <FaPhone className="text-blue-600" />
                        <span className="text-xl font-medium text-gray-700">Phone:</span>
                        <a
                            href="tel:+17788479104"
                            className="text-xl text-blue-600 hover:underline"
                        >
                            778-847-9104
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
