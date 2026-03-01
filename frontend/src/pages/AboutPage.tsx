import { Award, Users, BookOpen, Target, Heart, Star, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  const stats = [
    { label: "Established", value: "2015", icon: Star },
    { label: "Students", value: "400+", icon: Users },
    { label: "Qualified Teachers", value: "20+", icon: GraduationCap },
    { label: "Classes", value: "Nursery–8", icon: BookOpen },
  ];

  const values = [
    {
      icon: Target,
      title: "Academic Excellence",
      description: "We maintain high academic standards with a curriculum designed to challenge and inspire students from Nursery to Class 8.",
    },
    {
      icon: Heart,
      title: "Holistic Development",
      description: "Beyond academics, we nurture creativity, sportsmanship, and character to develop well-rounded individuals.",
    },
    {
      icon: Users,
      title: "Community & Belonging",
      description: "We foster a warm, inclusive environment where every student feels valued, supported, and motivated to succeed.",
    },
    {
      icon: Award,
      title: "Quality Education",
      description: "Our 20+ qualified teachers bring dedication and expertise to deliver quality education that prepares students for the future.",
    },
  ];

  const milestones = [
    { year: "2015", event: "Woods Academy founded with a vision to provide quality education in Rourkela" },
    { year: "2016", event: "First batch of students completes the academic year with outstanding results" },
    { year: "2017", event: "Expansion of facilities and introduction of computer education" },
    { year: "2018", event: "Launch of sports and cultural programs to promote holistic development" },
    { year: "2019", event: "Reached 200+ students milestone; new classrooms added" },
    { year: "2020", event: "Adapted to online learning during challenging times, ensuring continuity of education" },
    { year: "2021", event: "Resumed in-person classes with enhanced safety measures" },
    { year: "2022", event: "Expanded to 400+ students; strengthened faculty with 20+ qualified teachers" },
    { year: "2023", event: "Introduced enrichment programs in arts, music, and STEM activities" },
    { year: "2024", event: "Continued commitment to excellence with upgraded learning resources" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/assets/generated/campus-overview.dim_1200x600.jpg"
            alt="Campus"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge variant="secondary" className="mb-4">About Us</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Woods Academy</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Dedicated to nurturing young minds and building a strong foundation for lifelong learning since 2015.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Our Story</Badge>
              <h2 className="text-3xl font-bold text-primary mb-6">A Decade of Excellence</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Woods Academy was founded in 2015 with a clear mission: to provide quality education that nurtures every child's potential in a supportive and inspiring environment.
                </p>
                <p>
                  Located in the heart of Rourkela, Odisha, our school has grown from a small institution to a thriving community of over 400 students and 20+ qualified teachers, all united by a shared commitment to excellence.
                </p>
                <p>
                  From Nursery to Class 8, we offer a comprehensive curriculum that balances academic rigor with creative exploration, sports, and character development — preparing students not just for exams, but for life.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/school-entrance.dim_800x600.jpg"
                alt="Woods Academy School"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4">Leadership</Badge>
              <h2 className="text-3xl font-bold text-primary">Principal's Message</h2>
            </div>
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 flex flex-col items-center gap-3">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/30">
                      <span className="text-primary font-bold text-2xl">ZH</span>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-foreground text-lg">Zishanul Haque</p>
                      <p className="text-sm text-muted-foreground">Principal</p>
                      <p className="text-sm text-muted-foreground">Woods Academy</p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-muted-foreground italic text-lg leading-relaxed border-l-4 border-primary pl-6">
                      "At Woods Academy, we believe every child is unique and deserves an education that brings out their best. Our dedicated team of teachers works tirelessly to create a nurturing environment where curiosity is encouraged, creativity is celebrated, and every student is empowered to reach their full potential. Together, we are building the leaders of tomorrow."
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Values</Badge>
            <h2 className="text-3xl font-bold text-primary">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center hover:shadow-md transition-shadow">
                <CardHeader>
                  <value.icon className="h-10 w-10 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Journey</Badge>
            <h2 className="text-3xl font-bold text-primary">Milestones & Achievements</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-16 text-right">
                    <span className="text-primary font-bold text-sm">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary mt-0.5" />
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-primary/20 mt-1 min-h-[2rem]" />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="text-muted-foreground text-sm">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
