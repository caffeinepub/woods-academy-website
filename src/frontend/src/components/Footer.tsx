import { Link } from "@tanstack/react-router";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appId = encodeURIComponent(window.location.hostname || "woods-academy");

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/image.png"
                alt="Woods Academy Logo"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Woods Academy</h3>
                <p className="text-sm opacity-80">Established 2015</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4 max-w-sm">
              Nurturing young minds from Nursery to Class 8 with quality
              education, dedicated teachers, and a passion for excellence since
              2015.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm opacity-80">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>
                  Seraj Bhawan, Bhatti Road, Rourkela, Odisha, India – 769001
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+91 9861698249</span>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <Mail className="h-4 w-4 shrink-0" />
                <span>infowoodsacademy@gmail.com</span>
              </div>
            </div>
            <div className="mt-3 text-sm opacity-80">
              <span className="font-semibold">Principal:</span> Zishanul Haque
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link to="/" className="hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:opacity-100 transition-opacity"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/academics"
                  className="hover:opacity-100 transition-opacity"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  to="/faculty"
                  className="hover:opacity-100 transition-opacity"
                >
                  Faculty
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions"
                  className="hover:opacity-100 transition-opacity"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:opacity-100 transition-opacity"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="hover:opacity-100 transition-opacity"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:opacity-100 transition-opacity"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* School Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">School Info</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="flex justify-between">
                <span>Established</span>
                <span className="font-semibold">2015</span>
              </li>
              <li className="flex justify-between">
                <span>Classes</span>
                <span className="font-semibold">Nursery–8</span>
              </li>
              <li className="flex justify-between">
                <span>Students</span>
                <span className="font-semibold">400+</span>
              </li>
              <li className="flex justify-between">
                <span>Teachers</span>
                <span className="font-semibold">20+</span>
              </li>
              <li className="flex justify-between">
                <span>Principal</span>
                <span className="font-semibold">Z. Haque</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
          <p>© {currentYear} Woods Academy. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with{" "}
            <Heart className="h-4 w-4 fill-current text-red-400 mx-1" /> using{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-100 transition-opacity ml-1"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
