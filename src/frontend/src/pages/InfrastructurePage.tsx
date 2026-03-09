import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  Building2,
  Bus,
  Computer,
  FlaskConical,
  Shield,
  Trophy,
} from "lucide-react";

export default function InfrastructurePage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Infrastructure & Facilities
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            State-of-the-art facilities designed to provide the best learning
            environment
          </p>
        </div>

        {/* Campus Overview */}
        <section className="mb-16">
          <div className="relative h-96 rounded-lg overflow-hidden mb-8">
            <img
              src="/assets/generated/campus-overview.dim_1200x600.jpg"
              alt="Woods Academy Campus Overview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h2 className="text-3xl font-bold mb-2">Our Campus</h2>
                <p className="text-lg">
                  Spread across 15 acres of lush green landscape
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Grid */}
        <section className="space-y-12">
          {/* Classrooms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Building2 className="h-7 w-7 text-primary" />
                Smart Classrooms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Our classrooms are designed to create an optimal learning
                    environment with modern amenities and technology
                    integration. Each classroom is spacious, well-ventilated,
                    and equipped with ergonomic furniture suitable for different
                    age groups.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Interactive smart boards and digital projectors in every
                        classroom
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Air-conditioned rooms with proper lighting and acoustics
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Age-appropriate furniture and learning resources
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Display boards for student work and educational
                        materials
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Wi-Fi connectivity for digital learning resources
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <img
                    src="/assets/generated/classroom-scene.dim_800x600.jpg"
                    alt="Classroom"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Science Labs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <FlaskConical className="h-7 w-7 text-accent-green" />
                Science Laboratories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <img
                    src="/assets/generated/science-lab.dim_800x600.jpg"
                    alt="Science Lab"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="md:col-span-2 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Our state-of-the-art science laboratories provide students
                    with hands-on experience in Physics, Chemistry, and Biology.
                    Each lab is equipped with modern apparatus and safety
                    equipment to ensure safe and effective practical learning.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Physics Lab</h4>
                      <p className="text-sm text-muted-foreground">
                        Advanced equipment for mechanics, optics, electricity,
                        and modern physics experiments
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Chemistry Lab</h4>
                      <p className="text-sm text-muted-foreground">
                        Well-equipped with chemicals, glassware, and safety
                        equipment for practical experiments
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Biology Lab</h4>
                      <p className="text-sm text-muted-foreground">
                        Microscopes, specimens, models, and charts for life
                        science studies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Computer Lab */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Computer className="h-7 w-7 text-primary" />
                Computer Laboratory
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Our computer labs are equipped with the latest hardware and
                    software to provide students with comprehensive digital
                    literacy and programming skills. Students learn coding, web
                    development, and various software applications.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        100+ high-performance computers with latest processors
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Licensed software for programming, design, and
                        productivity
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        High-speed internet connectivity throughout the lab
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Separate labs for junior and senior students</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Robotics and AI learning kits for advanced students
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <img
                    src="/assets/generated/computer-lab.dim_800x600.jpg"
                    alt="Computer Lab"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Library */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <BookOpen className="h-7 w-7 text-accent-green" />
                Library & Resource Center
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <img
                    src="/assets/generated/library-interior.dim_800x600.jpg"
                    alt="Library"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="md:col-span-2 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Our extensive library houses over 15,000 books, journals,
                    magazines, and digital resources. The library provides a
                    quiet and conducive environment for reading, research, and
                    self-study.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-green mt-1">•</span>
                      <span>
                        15,000+ books covering all subjects and age groups
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-green mt-1">•</span>
                      <span>
                        Digital library with e-books and online resources
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-green mt-1">•</span>
                      <span>
                        Newspapers, magazines, and reference materials
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-green mt-1">•</span>
                      <span>Comfortable reading areas and study spaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-green mt-1">•</span>
                      <span>Automated library management system</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sports Facilities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Trophy className="h-7 w-7 text-primary" />
                Sports Complex
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Our comprehensive sports complex includes facilities for
                    various indoor and outdoor sports, promoting physical
                    fitness and sportsmanship among students.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">
                        Outdoor Facilities:
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Football and cricket grounds</li>
                        <li>• Basketball and volleyball courts</li>
                        <li>• 400m athletic track</li>
                        <li>• Tennis courts</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Indoor Facilities:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Badminton courts</li>
                        <li>• Table tennis hall</li>
                        <li>• Chess and carrom rooms</li>
                        <li>• Gymnasium with modern equipment</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="/assets/generated/sports-facilities.dim_800x600.jpg"
                    alt="Sports Facilities"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transport */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Bus className="h-7 w-7 text-accent-green" />
                Transportation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <img
                    src="/assets/generated/school-transport.dim_800x600.jpg"
                    alt="School Transport"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="md:col-span-2 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    We provide safe and reliable transportation services
                    covering all major areas of the city. Our fleet of buses is
                    equipped with GPS tracking and safety features.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-green mt-1">•</span>
                      <span>
                        40+ buses covering extensive routes across the city
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-green mt-1">•</span>
                      <span>
                        GPS tracking system for real-time bus location
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-green mt-1">•</span>
                      <span>
                        Trained drivers and female attendants on every bus
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-green mt-1">•</span>
                      <span>
                        First aid kits and fire extinguishers in all vehicles
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-green mt-1">•</span>
                      <span>Regular maintenance and safety inspections</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Safety & Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Shield className="h-7 w-7 text-primary" />
                Safety & Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The safety and security of our students is our top priority. We
                have implemented comprehensive security measures throughout the
                campus.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>24/7 CCTV surveillance across the campus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Trained security personnel at all entry points</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Visitor management system with ID verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Fire safety equipment and regular drills</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Medical room with qualified nurse on duty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Emergency response protocols and training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Student pick-up and drop-off procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Regular safety audits and improvements</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
