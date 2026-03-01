import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Music, Palette, Users, Globe, Lightbulb } from 'lucide-react';

export default function ActivitiesPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Co-Curricular Activities</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nurturing talents beyond academics through diverse activities and programs
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Woods Academy, we believe in holistic development. Our comprehensive co-curricular program 
                ensures that students develop their talents, discover new interests, and build essential life skills 
                through sports, arts, cultural activities, and various clubs. These activities complement academic 
                learning and help students become well-rounded individuals.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Activities Grid */}
        <section className="space-y-12">
          {/* Sports */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Trophy className="h-7 w-7 text-primary" />
                Sports & Athletics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Our sports program promotes physical fitness, teamwork, and sportsmanship. Students participate 
                    in various sports activities and represent the school in inter-school competitions.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Outdoor Sports:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Cricket and Football</li>
                        <li>• Basketball and Volleyball</li>
                        <li>• Athletics and Track Events</li>
                        <li>• Tennis and Badminton</li>
                        <li>• Kabaddi and Kho-Kho</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Indoor Sports:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Table Tennis</li>
                        <li>• Chess and Carrom</li>
                        <li>• Yoga and Aerobics</li>
                        <li>• Martial Arts (Karate, Taekwondo)</li>
                        <li>• Gymnastics</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="/assets/generated/sports-activities.dim_800x600.jpg"
                    alt="Sports Activities"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cultural Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Users className="h-7 w-7 text-accent-green" />
                Cultural Events & Celebrations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <img
                    src="/assets/generated/cultural-event.dim_800x600.jpg"
                    alt="Cultural Event"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="md:col-span-2 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    We celebrate various cultural events and festivals throughout the year, providing students with 
                    opportunities to showcase their talents and learn about diverse cultures and traditions.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-green mt-1">•</span>
                      <span><strong>Annual Day:</strong> Grand celebration showcasing student performances in dance, drama, and music</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-green mt-1">•</span>
                      <span><strong>Cultural Festivals:</strong> Celebrations of Diwali, Christmas, Eid, and other festivals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-green mt-1">•</span>
                      <span><strong>Independence Day & Republic Day:</strong> Patriotic celebrations with flag hoisting and cultural programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-green mt-1">•</span>
                      <span><strong>Talent Shows:</strong> Platforms for students to display their unique talents</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Art & Music */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Palette className="h-7 w-7 text-primary" />
                Art & Music
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Our art and music programs nurture creativity and artistic expression. Students learn various 
                    art forms and musical instruments under the guidance of experienced instructors.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Visual Arts:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Drawing and Painting</li>
                        <li>• Sculpture and Clay Modeling</li>
                        <li>• Craft and Origami</li>
                        <li>• Digital Art and Design</li>
                        <li>• Photography</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Music & Dance:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Vocal Music (Classical & Western)</li>
                        <li>• Instrumental Music (Guitar, Keyboard, Drums)</li>
                        <li>• Classical Dance (Bharatanatyam, Kathak)</li>
                        <li>• Contemporary Dance</li>
                        <li>• School Choir and Band</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="/assets/generated/art-classroom.dim_800x600.jpg"
                    alt="Art Classroom"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Competitions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Music className="h-7 w-7 text-accent-green" />
                Competitions & Contests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We encourage students to participate in various competitions to develop confidence, competitive 
                spirit, and excellence in their areas of interest.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Academic Competitions:</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Science Olympiad</li>
                    <li>• Mathematics Olympiad</li>
                    <li>• Quiz Competitions</li>
                    <li>• Debate and Elocution</li>
                    <li>• Essay Writing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Creative Competitions:</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Art and Craft Exhibitions</li>
                    <li>• Music and Dance Competitions</li>
                    <li>• Drama and Theatre</li>
                    <li>• Photography Contests</li>
                    <li>• Creative Writing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Sports Competitions:</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Inter-House Sports Meet</li>
                    <li>• Inter-School Tournaments</li>
                    <li>• District and State Level Events</li>
                    <li>• Athletics Championships</li>
                    <li>• Chess Tournaments</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Clubs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Lightbulb className="h-7 w-7 text-primary" />
                Clubs & Special Interest Groups
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our clubs provide students with opportunities to explore their interests, develop new skills, 
                and collaborate with like-minded peers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">Science Club</h4>
                    <p className="text-sm text-muted-foreground">
                      Experiments, projects, and science exhibitions for curious minds
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">Robotics Club</h4>
                    <p className="text-sm text-muted-foreground">
                      Building and programming robots, participating in robotics competitions
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">Literary Club</h4>
                    <p className="text-sm text-muted-foreground">
                      Reading, writing, poetry, and publishing school magazine
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">Eco Club</h4>
                    <p className="text-sm text-muted-foreground">
                      Environmental awareness, gardening, and sustainability projects
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">Drama Club</h4>
                    <p className="text-sm text-muted-foreground">
                      Theatre productions, street plays, and acting workshops
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">Community Service</h4>
                    <p className="text-sm text-muted-foreground">
                      Social service activities, charity drives, and community outreach
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Development Programs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Globe className="h-7 w-7 text-accent-green" />
                Personality Development Programs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We offer various programs focused on developing essential life skills, leadership qualities, 
                and overall personality development.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green mt-1">•</span>
                    <span><strong>Leadership Training:</strong> Student council, prefects, and leadership workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green mt-1">•</span>
                    <span><strong>Public Speaking:</strong> Debate, elocution, and presentation skills training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green mt-1">•</span>
                    <span><strong>Life Skills:</strong> Time management, decision making, and problem-solving</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green mt-1">•</span>
                    <span><strong>Career Guidance:</strong> Counseling sessions and career exploration programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green mt-1">•</span>
                    <span><strong>Value Education:</strong> Moral values, ethics, and character building</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green mt-1">•</span>
                    <span><strong>Field Trips:</strong> Educational excursions and industrial visits</span>
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
