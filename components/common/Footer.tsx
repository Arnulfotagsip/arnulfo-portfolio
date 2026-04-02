export default function Footer() {
  return (
    <footer className="bg-gray-500 text-white mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">

        <div className="text-left">
          <h1 className="font-bold text-lg mb-2">Contact Me</h1>
          <ul className=" flex flex-col gap-1">
            <li>Gmail: Tagsiparnulfo26@gmail.com </li>
            <li>Github: <a href="https://github.com/Arnulfotagsip">Arnulfo Tagsip</a></li>
          </ul>
        </div>
        <div className="text-center">
          <h1 className="font-bold text-lg mb-2">Projects</h1>
          <ul className=" flex flex-col gap-1">
            <li>Community Connect</li>
            <li>Garbage Monitoring</li>
          </ul>
        </div>


        <div className="text-center items-end">
          <h1 className="font-bold text-lg mb-2">Quick Links</h1>
          <ul className=" flex flex-col gap-1">
            <li><a href="/About" className="hover:underline">About Me</a></li>
            <li><a href="/blog" className="hover:underline"> My Blogs</a></li>
            <li><a href="/contact" className="hover:underline">Contact Me</a></li>
            <li><a href="/projects" className="hover:underline">My Works</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
