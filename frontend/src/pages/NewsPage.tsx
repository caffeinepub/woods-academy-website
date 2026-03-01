import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useGetAllNews } from '../hooks/useQueries';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar, Bell, Megaphone, AlertCircle } from 'lucide-react';

export default function NewsPage() {
  const { data: news, isLoading } = useGetAllNews();

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1000000);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">News & Announcements</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest news, events, and important announcements
          </p>
        </div>

        {/* Latest News from Backend */}
        {isLoading ? (
          <div className="space-y-6 mb-16">
            {[...Array(3)].map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : news && news.length > 0 ? (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Latest Updates</h2>
            <div className="space-y-6">
              {news.map((item) => (
                <Card key={Number(item.id)} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(item.publicationDate)}</span>
                        </div>
                      </div>
                      <Badge variant="default">New</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ) : null}

        {/* Static Announcements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Bell className="h-8 w-8 text-primary" />
            Important Notices
          </h2>
          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">Admission Open for Academic Year 2025-26</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">Posted on January 15, 2025</p>
                  </div>
                  <Badge variant="destructive">Important</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Admissions are now open for all classes from Nursery to Class 12. Parents can visit the school 
                  office or fill out the online enquiry form. Limited seats available. Early registration is encouraged.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent-green">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">Parent-Teacher Meeting Schedule</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">Posted on January 20, 2025</p>
                  </div>
                  <Badge>Notice</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Parent-Teacher meetings will be held on February 5-6, 2025. Parents are requested to meet their 
                  ward's class teacher to discuss academic progress. Appointment slots can be booked through the 
                  school office.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">Annual Sports Day - February 15, 2025</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">Posted on January 18, 2025</p>
                  </div>
                  <Badge variant="secondary">Event</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our Annual Sports Day will be held on February 15, 2025, at the school sports complex. All students 
                  are required to participate. Parents are cordially invited to attend and encourage their children.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Calendar className="h-8 w-8 text-accent-green" />
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">Science Exhibition</h3>
                    <p className="text-sm text-muted-foreground mb-2">February 10, 2025</p>
                    <p className="text-sm text-muted-foreground">
                      Students will showcase their innovative science projects and experiments
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent-green/10 p-3 rounded-lg">
                    <Calendar className="h-6 w-6 text-accent-green" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">Annual Day Celebration</h3>
                    <p className="text-sm text-muted-foreground mb-2">March 20, 2025</p>
                    <p className="text-sm text-muted-foreground">
                      Grand celebration featuring cultural performances, awards, and achievements
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">Inter-House Competition</h3>
                    <p className="text-sm text-muted-foreground mb-2">February 25, 2025</p>
                    <p className="text-sm text-muted-foreground">
                      Various competitions including debate, quiz, and cultural activities
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent-green/10 p-3 rounded-lg">
                    <Calendar className="h-6 w-6 text-accent-green" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">Career Counseling Session</h3>
                    <p className="text-sm text-muted-foreground mb-2">March 5, 2025</p>
                    <p className="text-sm text-muted-foreground">
                      Expert guidance for Class 10 and 12 students on career options
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Holiday Announcements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Megaphone className="h-8 w-8 text-primary" />
            Holiday Calendar
          </h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <h4 className="font-semibold">Republic Day</h4>
                    <p className="text-sm text-muted-foreground">National Holiday</p>
                  </div>
                  <Badge variant="outline">January 26, 2025</Badge>
                </div>
                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <h4 className="font-semibold">Mid-Term Break</h4>
                    <p className="text-sm text-muted-foreground">School Closed</p>
                  </div>
                  <Badge variant="outline">February 17-21, 2025</Badge>
                </div>
                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <h4 className="font-semibold">Holi Celebration</h4>
                    <p className="text-sm text-muted-foreground">Festival Holiday</p>
                  </div>
                  <Badge variant="outline">March 14, 2025</Badge>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <h4 className="font-semibold">Annual Examinations</h4>
                    <p className="text-sm text-muted-foreground">Classes 1-12</p>
                  </div>
                  <Badge variant="outline">March 1-15, 2025</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Exam Updates */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <AlertCircle className="h-8 w-8 text-accent-green" />
            Examination Updates
          </h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <AlertCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">First Term Examination Results</h4>
                    <p className="text-sm text-muted-foreground">
                      Results for the first term examinations have been published. Parents can collect report cards 
                      from the school office or access them through the parent portal.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-accent-green/10 p-2 rounded-full mt-1">
                    <AlertCircle className="h-4 w-4 text-accent-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Annual Examination Schedule</h4>
                    <p className="text-sm text-muted-foreground">
                      The annual examination schedule for all classes will be announced by February 10, 2025. 
                      Students are advised to start their preparation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <AlertCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Board Exam Preparation Classes</h4>
                    <p className="text-sm text-muted-foreground">
                      Special preparation classes for Class 10 and 12 board examinations will commence from 
                      February 1, 2025. Attendance is mandatory.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
