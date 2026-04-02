import { FaTwitter, FaGithub } from "react-icons/fa";
export default function Contact() {
    return (

        <div className="justify-center">
            <h1 className="text-4xl p-10 font-bold text-center">
                Let&apos;s get in touch
            </h1>
            <div className="flex gap-10 justify-center">
                <div className="w-full max-w-md flex flex-col gap-6">
                    <div className="border-1 border-gray-300 rounded-lg w-100 p-6">
                        <h1 className="text-4xl font-bold">Twitter</h1>
                        <p className="hover:text-blue-500 text-lg">
                           Arnulfo Tagsip <FaTwitter />
                        </p>
                    </div>
                    <div className="border-1 border-gray-300 rounded-lg w-100 p-6">
                        <h1 className="text-4xl font-bold">Github</h1>
                        <p className="hover:text-blue-500 text-lg">
                           Arnulfo <FaGithub/>
                        </p>
                    </div>
                    <div className="flex justify-center gap-15">
                            <a href="https://github.com/Arnulfotagsip" target="_blank" rel="noopener noreferrer "  className="text-4xl">
                              <FaGithub  />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"  className="text-4xl text-sky-500">
                              <FaTwitter />
                            </a>
                          </div>
                </div>

                <div className="border-1 border-gray-300 rounded-lg p-6">
                    <div className="flex gap-4">
                        <div className="flex flex-col mb-4 w-1/2">
                            <h2>First Name</h2>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                            />
                        </div>

                        <div className="flex flex-col w-1/2">
                            <h2 >Last Name</h2>
                            <input 
                                type="text"
                                placeholder="Your Last Name"
                                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                            />
                        </div>
                    </div>
                    <h2 >Your Email</h2>
                    <input type="email" placeholder="Your Email" className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full" />
                    <h2 >Your Message</h2>
                    <textarea placeholder="Your Message" className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full h-32"></textarea>
                    <button className="h-10 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600">Submit</button>
                </div>
            </div>
        </div>

    )
}