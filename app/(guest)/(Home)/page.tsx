import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto px-6 py-12 mt-10">
      <div className="flex flex-col md:flex-row items-center gap-10">
        
    
        <div className="flex flex-col">
          <p className="text-lg lg:text-2xl font-semibold leading-relaxed text-muted-foreground">
            I’m an IT student passionate about building efficient code and developing real-world solutions that make an impact.
          </p>

          
          <div className="flex gap-4 mt-6">
            <Button asChild>
              <Link href="/About">About Me</Link>
            </Button>
            <Button asChild>
              <Link href="/projects">View My Works</Link>
            </Button>
          </div>
        </div>
    
        <div className="flex justify-start">
          <Image
            src="/photo1.jpg"
            alt="Profile"
            width={600}
            height={500}
            className="rounded-[25px]"
          />
        </div>
        
      </div>
    </main>
  );
}