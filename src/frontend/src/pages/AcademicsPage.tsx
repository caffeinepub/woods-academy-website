import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Calculator,
  Dumbbell,
  FlaskConical,
  Globe,
  Monitor,
  Music,
  Palette,
} from "lucide-react";

export default function AcademicsPage() {
  const classGroups = [
    {
      id: "nursery-kg",
      label: "Nursery – KG",
      range: "Nursery, LKG, UKG",
      description:
        "Early childhood education focused on play-based learning, language development, and foundational numeracy.",
      subjects: [
        "English",
        "Hindi",
        "Mathematics",
        "Environmental Studies",
        "Art & Craft",
        "Music & Movement",
      ],
      highlights: [
        "Play-based learning",
        "Phonics & early reading",
        "Number recognition",
        "Social skills development",
      ],
      image: "/assets/generated/classroom-scene.dim_800x600.jpg",
    },
    {
      id: "primary",
      label: "Primary (1–5)",
      range: "Class 1 to Class 5",
      description:
        "Building strong academic foundations with a balanced curriculum covering core subjects and co-curricular activities.",
      subjects: [
        "English",
        "Hindi",
        "Mathematics",
        "Science",
        "Social Studies",
        "Computer Science",
        "Art",
        "Physical Education",
      ],
      highlights: [
        "Strong literacy & numeracy",
        "Science experiments",
        "Project-based learning",
        "Regular assessments",
      ],
      image: "/assets/generated/library-interior.dim_800x600.jpg",
    },
    {
      id: "middle",
      label: "Middle (6–8)",
      range: "Class 6 to Class 8",
      description:
        "Comprehensive middle school education preparing students for higher classes with in-depth subject knowledge.",
      subjects: [
        "English",
        "Hindi",
        "Mathematics",
        "Science",
        "Social Science",
        "Computer Science",
        "Urdu",
        "Physical Education",
      ],
      highlights: [
        "Subject specialization",
        "Lab practicals",
        "Critical thinking",
        "Leadership opportunities",
      ],
      image: "/assets/generated/science-lab.dim_800x600.jpg",
    },
  ];

  const facilities = [
    {
      icon: FlaskConical,
      title: "Science Lab",
      description: "Well-equipped laboratory for hands-on science experiments",
    },
    {
      icon: Monitor,
      title: "Computer Lab",
      description:
        "Modern computer lab with internet access for digital literacy",
    },
    {
      icon: BookOpen,
      title: "Library",
      description:
        "Extensive collection of books, reference materials, and periodicals",
    },
    {
      icon: Dumbbell,
      title: "Sports Facilities",
      description:
        "Outdoor play area and sports equipment for physical education",
    },
    {
      icon: Music,
      title: "Music Room",
      description:
        "Dedicated space for music education and cultural activities",
    },
    {
      icon: Palette,
      title: "Art Room",
      description: "Creative space for art, craft, and visual arts education",
    },
  ];

  const subjects = [
    { icon: BookOpen, name: "Languages", items: ["English", "Hindi", "Urdu"] },
    {
      icon: Calculator,
      name: "Mathematics",
      items: ["Arithmetic", "Algebra (Class 6–8)", "Geometry", "Statistics"],
    },
    {
      icon: FlaskConical,
      name: "Sciences",
      items: ["General Science (1–5)", "Physics", "Chemistry", "Biology (6–8)"],
    },
    {
      icon: Globe,
      name: "Social Studies",
      items: ["History", "Geography", "Civics", "Environmental Studies"],
    },
    {
      icon: Monitor,
      name: "Technology",
      items: [
        "Computer Science",
        "Digital Literacy",
        "Basic Programming (6–8)",
      ],
    },
    {
      icon: Palette,
      name: "Arts & Activities",
      items: ["Art & Craft", "Music", "Physical Education", "Yoga"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            Academics
          </Badge>
          <h1 className="text-4xl font-bold mb-4">Academic Programs</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Comprehensive education from Nursery to Class 8, designed to build
            strong foundations and inspire a love for learning.
          </p>
        </div>
      </section>

      {/* Class Groups Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Our Classes
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore our curriculum for each stage of learning
            </p>
          </div>
          <Tabs defaultValue="nursery-kg" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {classGroups.map((group) => (
                <TabsTrigger key={group.id} value={group.id}>
                  {group.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {classGroups.map((group) => (
              <TabsContent key={group.id} value={group.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div>
                    <Badge
                      variant="outline"
                      className="text-primary border-primary mb-3"
                    >
                      {group.range}
                    </Badge>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {group.label}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {group.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">
                        Subjects Offered
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {group.subjects.map((subject) => (
                          <Badge key={subject} variant="secondary">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {group.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-center gap-2 text-muted-foreground text-sm"
                          >
                            <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <img
                      src={group.image}
                      alt={group.label}
                      className="rounded-xl shadow-md w-full object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Subjects Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Subjects We Teach
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A well-rounded curriculum covering all essential areas of learning
              from Nursery to Class 8
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <Card
                key={subject.name}
                className="border-primary/10 hover:shadow-md transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <subject.icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">{subject.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {subject.items.map((item) => (
                      <li
                        key={item}
                        className="text-muted-foreground text-sm flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Facilities
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Modern facilities to support quality learning at every level
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility) => (
              <Card
                key={facility.title}
                className="text-center hover:shadow-md transition-shadow border-primary/10"
              >
                <CardHeader>
                  <facility.icon className="h-10 w-10 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment & Evaluation */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Assessment & Evaluation
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our continuous and comprehensive evaluation system ensures every
              student's progress is tracked and supported
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center border-primary/10">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">2</div>
                <p className="font-semibold text-foreground">
                  Term Examinations
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  Mid-term and final examinations each academic year
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/10">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">CCE</div>
                <p className="font-semibold text-foreground">
                  Continuous Evaluation
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  Regular class tests, assignments, and project work
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/10">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">PTM</div>
                <p className="font-semibold text-foreground">
                  Parent-Teacher Meetings
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  Regular meetings to discuss student progress with parents
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
