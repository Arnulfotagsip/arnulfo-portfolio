import Image from "next/image";
import { MapPin , User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <div className="container mx-auto px-6 py-6 ">
    
      <div className="flex flex-col md:flex-row items-start gap-4">
        <div className="flex-shrink-0 py-6 mt-3">
          <Image
            src="/photo2.jpg"
            alt="Profile"
            width={120}
            height={100}
            className="rounded-[25px] object-cover"
          />
        </div>
        <div className="py-2">
          <h1 className="text-2xl font-bold mt-4">Arnulfo Tagsip</h1>
          <p className="flex items-center gap-1 text-sm text-gray-600 dark:text-dark-100 mt-2">
            <MapPin size={15} />
            <span>Sanmiguel Cordova Cebu</span>
          </p>
           <p className="flex items-center gap-1 text-sm text-gray-600 dark:text-dark-100 mt-2">
            <User size={15} />
            <span>Junior Developer</span>
          </p>
          <div className="inline-flex gap-2 mt-2">
            <Button className="text-sm px-4 py-2">Download Resume</Button>
            <Button className="text-sm px-4 py-2" asChild>
              <Link href="/contact">
                Send Email
              </Link>
            </Button>
          </div>
        </div>
      </div>

      
      <div className="py-2 flex flex-col md:flex-row justify-between gap-10 mt-10">
    
        <div className="mt-8 max-w-xl">
          <h1 className="text-xl font-bold mb-2">About Me</h1>
          <p className="text-sm md:text-base text-gray-600 dark:text-dark-100 leading-relaxed">
            Hi, I’m Arnulfo Tagsip. I’m passionate about learning web development and I’m eager to venture deeper into full-stack development. I’m currently focusing on Next.js as my tech stack, using React as my main library and Tailwind CSS as my styling framework. I enjoy building modern, responsive, and user-friendly websites, and I’m always exploring new tools and techniques to improve my skills. My goal is to become a confident full-stack developer, capable of creating efficient and scalable web applications from start to finish.
          </p>
        </div>

       
        <div className="mt-8 max-w-lg">
          <h1 className="text-xl font-bold mb-4">My Skills</h1>
          <div className="mb-6">
            <h2 className="text-lg font-semibold">KKK<span className="text-sm text-gray-600 dark:text-gray-300 italic mb-1">( Katulog Kaon Kalibang)</span></h2>
            <p className="text-sm text-gray-600 dark:text-dark-100 leading-relaxed mt-2">
            Ayaw mo’g dali-dali ug judge nako kay dili ni trial version akong skills, full package ni. Wamo kahibaw unsa ko ka-grind behind the scenes. Samtang kamo padung pauli, ako padung pa sa sunod nga milestone. Nagmata pa mo, natug nako kay human na ko sa akong mission. Dili ko hilig og flex, pero kung resulta na ang istoryahan, di ko magpa-ubos. Hinay ko mudagan pero diretso sa finish line. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}