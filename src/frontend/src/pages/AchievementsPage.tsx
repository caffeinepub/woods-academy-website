import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Award,
  BookOpen,
  Dumbbell,
  Medal,
  Music,
  Star,
  Trophy,
  Users,
} from "lucide-react";

export default function AchievementsPage() {
  const stats = [
    {
      label: "Years of Excellence",
      value: "10+",
      icon: Star,
      description: "Since 2015",
    },
    { label: "Students", value: "400+", icon: Users, description: "Enrolled" },
    {
      label: "Qualified Teachers",
      value: "20+",
      icon: BookOpen,
      description: "Dedicated educators",
    },
    {
      label: "Classes",
      value: "Nursery–8",
      icon: Award,
      description: "Comprehensive range",
    },
  ];

  const academicAchievements = [
    {
      title: "Consistent Academic Results",
      description:
        "Woods Academy students consistently achieve excellent results in annual examinations, with many students scoring distinction grades.",
      year: "2023–24",
      category: "Academic",
    },
    {
      title: "100% Pass Rate",
      description:
        "Our school has maintained a 100% pass rate across all classes, reflecting the dedication of our 20+ qualified teachers.",
      year: "2022–23",
      category: "Academic",
    },
    {
      title: "Top Performers in District",
      description:
        "Several of our Class 8 students have been recognized among the top performers in the district-level assessments.",
      year: "2023–24",
      category: "Academic",
    },
  ];

  const sportsAchievements = [
    {
      title: "Inter-School Sports Meet",
      description:
        "Our students participated in the inter-school sports meet and brought home medals in athletics and team sports.",
      year: "2023",
      category: "Sports",
    },
    {
      title: "Football Tournament",
      description:
        "Woods Academy's football team reached the semi-finals of the district-level inter-school football tournament.",
      year: "2023",
      category: "Sports",
    },
    {
      title: "Athletics Champions",
      description:
        "Our students excelled in track and field events, winning multiple medals at the zonal sports competition.",
      year: "2022",
      category: "Sports",
    },
  ];

  const culturalAchievements = [
    {
      title: "Annual Cultural Fest",
      description:
        "Our annual cultural festival showcases the diverse talents of our 400+ students through dance, music, drama, and art.",
      year: "2023",
      category: "Cultural",
    },
    {
      title: "Drawing Competition",
      description:
        "Students from Woods Academy won prizes at the district-level drawing and painting competition organized by the education department.",
      year: "2023",
      category: "Cultural",
    },
    {
      title: "Science Exhibition",
      description:
        "Our students presented innovative science projects at the school science exhibition, demonstrating creativity and scientific thinking.",
      year: "2022",
      category: "Cultural",
    },
  ];

  const _allAchievements = [
    ...academicAchievements.map((a) => ({
      ...a,
      icon: BookOpen,
      color: "text-blue-600",
    })),
    ...sportsAchievements.map((a) => ({
      ...a,
      icon: Dumbbell,
      color: "text-green-600",
    })),
    ...culturalAchievements.map((a) => ({
      ...a,
      icon: Music,
      color: "text-purple-600",
    })),
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            Achievements
          </Badge>
          <h1 className="text-4xl font-bold mb-4">Our Achievements</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            A decade of excellence — celebrating the academic, sports, and
            cultural accomplishments of Woods Academy students since 2015.
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
                  <p className="text-sm font-semibold text-foreground mt-1">
                    {stat.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Highlights of Excellence
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From classrooms to sports fields and cultural stages — our
              students shine everywhere
            </p>
          </div>

          {/* Academic Achievements */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">
                Academic Excellence
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {academicAchievements.map((achievement) => (
                <Card
                  key={achievement.title}
                  className="hover:shadow-md transition-shadow border-primary/10"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge variant="secondary">{achievement.category}</Badge>
                      <Badge
                        variant="outline"
                        className="text-primary border-primary text-xs"
                      >
                        {achievement.year}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg mt-2">
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sports Achievements */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Dumbbell className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">
                Sports Achievements
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sportsAchievements.map((achievement) => (
                <Card
                  key={achievement.title}
                  className="hover:shadow-md transition-shadow border-primary/10"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge variant="secondary">{achievement.category}</Badge>
                      <Badge
                        variant="outline"
                        className="text-primary border-primary text-xs"
                      >
                        {achievement.year}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg mt-2">
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Cultural Achievements */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Music className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">
                Cultural Achievements
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {culturalAchievements.map((achievement) => (
                <Card
                  key={achievement.title}
                  className="hover:shadow-md transition-shadow border-primary/10"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge variant="secondary">{achievement.category}</Badge>
                      <Badge
                        variant="outline"
                        className="text-primary border-primary text-xs"
                      >
                        {achievement.year}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg mt-2">
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trophy Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <Trophy className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            A Decade of Pride
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-6">
            Since our founding in <strong>2015</strong>, Woods Academy has built
            a proud tradition of excellence. Our students, guided by{" "}
            <strong>20+ qualified teachers</strong> under the leadership of
            Principal <strong>Zishanul Haque</strong>, continue to make the
            school and their families proud.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              🏆 Academic Excellence
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              ⚽ Sports Champions
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              🎨 Cultural Stars
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              📚 Holistic Development
            </Badge>
          </div>
        </div>
      </section>

      {/* Image Gallery Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Moments of Glory
            </h2>
            <p className="text-muted-foreground text-lg">
              Capturing the achievements and milestones of our students
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="/assets/generated/achievement-ceremony.dim_800x600.jpg"
              alt="Achievement Ceremony"
              className="rounded-xl shadow-md w-full object-cover h-48"
            />
            <img
              src="/assets/generated/sports-activities.dim_800x600.jpg"
              alt="Sports Activities"
              className="rounded-xl shadow-md w-full object-cover h-48"
            />
            <img
              src="/assets/generated/cultural-event.dim_800x600.jpg"
              alt="Cultural Event"
              className="rounded-xl shadow-md w-full object-cover h-48"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
