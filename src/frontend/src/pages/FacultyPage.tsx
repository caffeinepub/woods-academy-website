import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, GraduationCap, Users } from "lucide-react";

export default function FacultyPage() {
  const stats = [
    { label: "Qualified Teachers", value: "20+", icon: GraduationCap },
    { label: "Students", value: "400+", icon: Users },
    { label: "Classes", value: "Nursery–8", icon: BookOpen },
    { label: "Years of Excellence", value: "10+", icon: Award },
  ];

  const departments = [
    {
      name: "Languages",
      subjects: ["English", "Hindi", "Urdu"],
      description:
        "Our language faculty focuses on building strong communication skills, reading comprehension, and creative writing from an early age.",
    },
    {
      name: "Mathematics",
      subjects: ["Arithmetic", "Algebra", "Geometry"],
      description:
        "Experienced math teachers make numbers approachable and exciting, building logical thinking and problem-solving skills.",
    },
    {
      name: "Sciences",
      subjects: ["General Science", "Physics", "Chemistry", "Biology"],
      description:
        "Our science department encourages curiosity and hands-on learning through lab experiments and real-world applications.",
    },
    {
      name: "Social Studies",
      subjects: ["History", "Geography", "Civics", "EVS"],
      description:
        "We help students understand the world around them through engaging lessons in history, geography, and civic responsibility.",
    },
    {
      name: "Computer Science",
      subjects: ["Digital Literacy", "Basic Programming", "MS Office"],
      description:
        "Our computer faculty prepares students for the digital age with practical skills in technology and basic programming.",
    },
    {
      name: "Arts & Physical Education",
      subjects: ["Art & Craft", "Music", "Physical Education", "Yoga"],
      description:
        "We believe in holistic development — our arts and PE faculty nurture creativity, fitness, and teamwork.",
    },
  ];

  const values = [
    {
      icon: GraduationCap,
      title: "Qualified & Trained",
      description:
        "All 20+ teachers at Woods Academy hold relevant academic qualifications and undergo regular professional development training.",
    },
    {
      icon: Award,
      title: "Dedicated to Excellence",
      description:
        "Our faculty is committed to maintaining high teaching standards and helping every student achieve their best.",
    },
    {
      icon: BookOpen,
      title: "Student-Centered Approach",
      description:
        "Teachers at Woods Academy adopt student-centered teaching methods that cater to different learning styles and abilities.",
    },
    {
      icon: Users,
      title: "Collaborative Community",
      description:
        "Our teachers work as a team, sharing best practices and collaborating to create a positive, enriching school environment.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            Our Faculty
          </Badge>
          <h1 className="text-4xl font-bold mb-4">
            Meet Our Dedicated Faculty
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Woods Academy's 20+ qualified teachers are the heart of our school —
            passionate educators committed to nurturing every student's
            potential.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center border-primary/20">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-3xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Principal Spotlight */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Badge
              variant="outline"
              className="text-primary border-primary mb-3"
            >
              School Leadership
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-1">
              Zishanul Haque
            </h2>
            <p className="text-primary font-semibold text-lg mb-4">
              School Principal
            </p>
            <p className="text-muted-foreground mb-4">
              Principal Zishanul Haque leads Woods Academy with a vision of
              providing quality, inclusive education to every child in Rourkela.
              Since the school's founding in 2015, his leadership has been
              instrumental in building a strong academic culture and a
              supportive learning environment.
            </p>
            <p className="text-muted-foreground mb-4">
              Under his guidance, the school has grown to 400+ students with a
              team of 20+ qualified teachers, consistently delivering excellent
              academic results while nurturing the overall development of each
              student.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Visionary Leader</Badge>
              <Badge variant="secondary">Education Advocate</Badge>
              <Badge variant="secondary">10+ Years in Education</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Teaching Philosophy
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              What makes our faculty exceptional at Woods Academy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card
                key={value.title}
                className="text-center hover:shadow-md transition-shadow border-primary/10"
              >
                <CardHeader>
                  <value.icon className="h-10 w-10 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Academic Departments
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our faculty is organized into specialized departments to ensure
              focused and expert teaching
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <Card
                key={dept.name}
                className="hover:shadow-md transition-shadow border-primary/10"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-primary">
                    {dept.name}
                  </CardTitle>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {dept.subjects.map((subject) => (
                      <Badge
                        key={subject}
                        variant="secondary"
                        className="text-xs"
                      >
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {dept.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Are you a passionate educator looking to make a difference? Woods
            Academy is always looking for dedicated teachers to join our growing
            family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
