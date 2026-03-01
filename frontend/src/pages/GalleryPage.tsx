import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { useGetAllImages } from '../hooks/useQueries';
import { GalleryCategory } from '../backend';
import { Skeleton } from '@/components/ui/skeleton';
import { ImageIcon } from 'lucide-react';

export default function GalleryPage() {
  const { data: images, isLoading } = useGetAllImages();
  const [selectedCategory, setSelectedCategory] = useState<'all' | GalleryCategory>('all');

  const filteredImages = images?.filter((img) => 
    selectedCategory === 'all' || img.category === selectedCategory
  ) || [];

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1000000);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capturing memorable moments from our school events, campus life, and activities
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="all" className="w-full mb-8" onValueChange={(value) => setSelectedCategory(value as 'all' | GalleryCategory)}>
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <TabsTrigger value="all">All Photos</TabsTrigger>
            <TabsTrigger value={GalleryCategory.events}>Events</TabsTrigger>
            <TabsTrigger value={GalleryCategory.campus}>Campus</TabsTrigger>
            <TabsTrigger value={GalleryCategory.activities}>Activities</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <GalleryGrid images={filteredImages} isLoading={isLoading} formatDate={formatDate} />
          </TabsContent>
          <TabsContent value={GalleryCategory.events} className="mt-8">
            <GalleryGrid images={filteredImages} isLoading={isLoading} formatDate={formatDate} />
          </TabsContent>
          <TabsContent value={GalleryCategory.campus} className="mt-8">
            <GalleryGrid images={filteredImages} isLoading={isLoading} formatDate={formatDate} />
          </TabsContent>
          <TabsContent value={GalleryCategory.activities} className="mt-8">
            <GalleryGrid images={filteredImages} isLoading={isLoading} formatDate={formatDate} />
          </TabsContent>
        </Tabs>

        {/* Static Gallery Images */}
        {!isLoading && filteredImages.length === 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">School Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="overflow-hidden">
                <img
                  src="/assets/generated/cultural-event.dim_800x600.jpg"
                  alt="Cultural Event"
                  className="w-full h-64 object-cover"
                />
                <CardContent className="pt-4">
                  <h3 className="font-semibold mb-1">Annual Cultural Festival</h3>
                  <p className="text-sm text-muted-foreground">Students showcasing their talents in dance, music, and drama</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <img
                  src="/assets/generated/sports-activities.dim_800x600.jpg"
                  alt="Sports Activities"
                  className="w-full h-64 object-cover"
                />
                <CardContent className="pt-4">
                  <h3 className="font-semibold mb-1">Sports Day Celebration</h3>
                  <p className="text-sm text-muted-foreground">Annual sports meet with various athletic competitions</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <img
                  src="/assets/generated/art-classroom.dim_800x600.jpg"
                  alt="Art Classroom"
                  className="w-full h-64 object-cover"
                />
                <CardContent className="pt-4">
                  <h3 className="font-semibold mb-1">Art & Craft Workshop</h3>
                  <p className="text-sm text-muted-foreground">Students exploring their creativity through various art forms</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <img
                  src="/assets/generated/campus-overview.dim_1200x600.jpg"
                  alt="Campus Overview"
                  className="w-full h-64 object-cover"
                />
                <CardContent className="pt-4">
                  <h3 className="font-semibold mb-1">Beautiful Campus</h3>
                  <p className="text-sm text-muted-foreground">Our lush green campus spread across 15 acres</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <img
                  src="/assets/generated/school-entrance.dim_800x600.jpg"
                  alt="School Entrance"
                  className="w-full h-64 object-cover"
                />
                <CardContent className="pt-4">
                  <h3 className="font-semibold mb-1">School Entrance</h3>
                  <p className="text-sm text-muted-foreground">Welcoming entrance to Woods Academy</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <img
                  src="/assets/generated/achievement-ceremony.dim_800x600.jpg"
                  alt="Achievement Ceremony"
                  className="w-full h-64 object-cover"
                />
                <CardContent className="pt-4">
                  <h3 className="font-semibold mb-1">Award Ceremony</h3>
                  <p className="text-sm text-muted-foreground">Celebrating student achievements and excellence</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <img
                  src="/assets/generated/classroom-scene.dim_800x600.jpg"
                  alt="Classroom"
                  className="w-full h-64 object-cover"
                />
                <CardContent className="pt-4">
                  <h3 className="font-semibold mb-1">Smart Classrooms</h3>
                  <p className="text-sm text-muted-foreground">Modern classrooms equipped with latest technology</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <img
                  src="/assets/generated/science-lab.dim_800x600.jpg"
                  alt="Science Lab"
                  className="w-full h-64 object-cover"
                />
                <CardContent className="pt-4">
                  <h3 className="font-semibold mb-1">Science Laboratory</h3>
                  <p className="text-sm text-muted-foreground">State-of-the-art labs for practical learning</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <img
                  src="/assets/generated/library-interior.dim_800x600.jpg"
                  alt="Library"
                  className="w-full h-64 object-cover"
                />
                <CardContent className="pt-4">
                  <h3 className="font-semibold mb-1">School Library</h3>
                  <p className="text-sm text-muted-foreground">Extensive collection of books and digital resources</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function GalleryGrid({ 
  images, 
  isLoading, 
  formatDate 
}: { 
  images: any[]; 
  isLoading: boolean; 
  formatDate: (timestamp: bigint) => string;
}) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <Skeleton className="w-full h-64" />
            <CardContent className="pt-4">
              <Skeleton className="h-4 w-3/4 mb-2" />
              <Skeleton className="h-3 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="text-center py-16">
        <ImageIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">No images in this category yet</h3>
        <p className="text-muted-foreground">Check back soon for new photos!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image) => (
        <Card key={Number(image.id)} className="overflow-hidden hover:shadow-lg transition-shadow">
          <img
            src={image.file.getDirectURL()}
            alt={image.title}
            className="w-full h-64 object-cover"
          />
          <CardContent className="pt-4">
            <h3 className="font-semibold mb-1">{image.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">{image.description}</p>
            <p className="text-xs text-muted-foreground">{formatDate(image.uploadDate)}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
