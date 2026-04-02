import Link from "next/link";
import { ThemeToggle } from "@/components/common/ThemeToggle";
export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800 py-5">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">

          <h1 className="font-bold text-lg text-gray-900 dark:text-dark-100">
            Portfolio
          </h1>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">

              <ThemeToggle />

              <nav>
                <ul className="flex items-center gap-6 text-sm font-medium">
                  <li>
                    <Link className="text-gray-800 dark:text-dark-100 hover:text-black dark:hover:text-white" href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-800 dark:text-dark-100 hover:text-black dark:hover:text-white" href="/About">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-800 dark:text-dark-100 hover:text-black dark:hover:text-white" href="/projects">
                      Projects
                    </Link>
                  </li>

                  <li>
                    <Link className="text-gray-800 dark:text-dark-100 hover:text-black dark:hover:text-white" href="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>

            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
