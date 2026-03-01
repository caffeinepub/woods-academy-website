import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Users, Award, Star, GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useGetAllNews } from "@/hooks/useQueries";

export default function HomePage() {
  const { data: newsItems } = useGetAllNews();

  const stats = [
    { label: "Years of Excellence", value: "10+", icon: Star, description: "Established 2015" },
    { label: "Students Enrolled", value: "400+", icon: Users, description: "Growing every year" },
    { label: "Qualified Teachers", value: "20+", icon: GraduationCap, description: "Dedicated educators" },
    { label: "Classes Offered", value: "Nursery–8", icon: BookOpen, description: "Comprehensive curriculum" },
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Quality Curriculum",
      description: "Comprehensive education from Nursery to Class 8, designed to build strong foundations and inspire lifelong learning.",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Our 20+ qualified and experienced teachers are dedicated to nurturing every student's potential.",
    },
    {
      icon: Award,
      title: "Holistic Development",
      description: "Beyond academics, we focus on sports, arts, and character development for well-rounded growth.",
    },
    {
      icon: Star,
      title: "Proven Excellence",
      description: "Since 2015, Woods Academy has been a trusted name in quality education in Rourkela.",
    },
  ];

  const recentNews = newsItems?.slice(0, 3) ?? [];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/school-building-hero.dim_1200x600.jpg"
            alt="Woods Academy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4 text-primary font-semibold">
            Established 2015 · Rourkela, Odisha
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to<br />
            <span className="text-accent-green">Woods Academy</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Nurturing young minds from Nursery to Class 8 with quality education, dedicated teachers, and a passion for excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/admissions">
                Apply for Admission <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center border-primary/20 hover:shadow-md transition-shadow">
                <CardContent className="pt-6 pb-4">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm font-semibold text-foreground mt-1">{stat.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-3 text-primary border-primary">Welcome</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                A Decade of Quality Education in Rourkela
              </h2>
              <p className="text-muted-foreground mb-4">
                Since our founding in <strong>2015</strong>, Woods Academy has been committed to providing quality education to the children of Rourkela. Located at <strong>Seraj Bhawan, Bhatti Road, Rourkela, Odisha – 769001</strong>, we offer classes from Nursery to Class 8.
              </p>
              <p className="text-muted-foreground mb-6">
                Under the leadership of Principal <strong>Zishanul Haque</strong>, our team of <strong>20+ qualified teachers</strong> works tirelessly to ensure every one of our <strong>400+ students</strong> receives the attention and guidance they deserve.
              </p>
              <Button asChild>
                <Link to="/about">
                  Discover Our Story <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/classroom-scene.dim_800x600.jpg"
                alt="Classroom at Woods Academy"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-xl p-4 shadow-lg">
                <p className="text-2xl font-bold">10+</p>
                <p className="text-sm opacity-90">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Woods Academy?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide a nurturing environment where every child can thrive academically and personally.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center hover:shadow-md transition-shadow border-primary/10">
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      {recentNews.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Latest News</h2>
                <p className="text-muted-foreground mt-1">Stay updated with what's happening at Woods Academy</p>
              </div>
              <Button variant="outline" asChild>
                <Link to="/news">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentNews.map((item) => (
                <Card key={item.id.toString()} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">News</Badge>
                    <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm line-clamp-3">{item.content}</p>
                    <p className="text-xs text-muted-foreground mt-3">
                      {new Date(Number(item.publicationDate) / 1_000_000).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Woods Academy?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Admissions open for Nursery to Class 8. Give your child the gift of quality education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/admissions">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Quick Info */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <MapPin className="h-6 w-6 text-primary" />
              <p className="font-semibold text-foreground">Address</p>
              <p className="text-muted-foreground text-sm">Seraj Bhawan, Bhatti Road<br />Rourkela, Odisha, India – 769001</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone className="h-6 w-6 text-primary" />
              <p className="font-semibold text-foreground">Phone</p>
              <p className="text-muted-foreground text-sm">+91 98765 43210</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="h-6 w-6 text-primary" />
              <p className="font-semibold text-foreground">Email</p>
              <p className="text-muted-foreground text-sm">info@woodsacademy.edu.in</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
