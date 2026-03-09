import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitAdmissionEnquiry } from "@/hooks/useQueries";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  FileText,
  Mail,
  Phone,
  Users,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    preferredClass: "",
    message: "",
  });

  const submitEnquiry = useSubmitAdmissionEnquiry();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.preferredClass) {
      toast.error("Please select a preferred class.");
      return;
    }
    try {
      await submitEnquiry.mutateAsync(formData);
      toast.success("Admission enquiry submitted! We'll contact you soon.");
      setFormData({
        studentName: "",
        parentName: "",
        email: "",
        phone: "",
        preferredClass: "",
        message: "",
      });
    } catch {
      toast.error("Failed to submit enquiry. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const steps = [
    {
      icon: FileText,
      title: "Submit Enquiry",
      description:
        "Fill out the admission enquiry form below with your child's details.",
    },
    {
      icon: Phone,
      title: "Receive Call",
      description:
        "Our admissions team will contact you within 24–48 hours to discuss further.",
    },
    {
      icon: Calendar,
      title: "School Visit",
      description:
        "Visit the school for an interaction session and campus tour.",
    },
    {
      icon: CheckCircle,
      title: "Confirmation",
      description:
        "Complete the admission formalities and confirm your child's seat.",
    },
  ];

  const classOptions = [
    "Nursery",
    "LKG",
    "UKG",
    "Class 1",
    "Class 2",
    "Class 3",
    "Class 4",
    "Class 5",
    "Class 6",
    "Class 7",
    "Class 8",
  ];

  const requirements = [
    "Birth certificate of the student",
    "Previous school's Transfer Certificate (TC) – for Class 2 and above",
    "Previous year's report card",
    "Passport-size photographs (4 copies)",
    "Aadhaar card of student and parent/guardian",
    "Residential proof (electricity bill / rent agreement)",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            Admissions Open
          </Badge>
          <h1 className="text-4xl font-bold mb-4">
            Admissions at Woods Academy
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join our growing family of 400+ students. Admissions open for
            Nursery to Class 8 for the upcoming academic year.
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Admission Process
            </h2>
            <p className="text-muted-foreground text-lg">
              Simple steps to secure your child's future at Woods Academy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <Card className="text-center border-primary/10 hover:shadow-md transition-shadow h-full">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge
                      variant="outline"
                      className="text-primary border-primary mb-2"
                    >
                      Step {index + 1}
                    </Badge>
                    <h3 className="font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 z-10">
                    <ArrowRight className="h-6 w-6 text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form + Requirements */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Requirements */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">
                    Documents Required
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {requirements.map((req) => (
                      <li
                        key={req}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">
                    Classes Available
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">
                    We offer admissions for the following classes:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {classOptions.map((cls) => (
                      <Badge key={cls} variant="secondary" className="text-xs">
                        {cls}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">
                    Contact Admissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">
                      +91 98765 43210
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">
                      admissions@woodsacademy.edu.in
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Principal: Zishanul Haque
                      <br />
                      Seraj Bhawan, Bhatti Road
                      <br />
                      Rourkela, Odisha – 769001
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enquiry Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">
                    Admission Enquiry Form
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="studentName">Student's Name *</Label>
                        <Input
                          id="studentName"
                          name="studentName"
                          value={formData.studentName}
                          onChange={handleChange}
                          placeholder="Enter student's full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="parentName">
                          Parent/Guardian Name *
                        </Label>
                        <Input
                          id="parentName"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleChange}
                          placeholder="Enter parent's full name"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter email address"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter phone number"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredClass">Preferred Class *</Label>
                      <Select
                        value={formData.preferredClass}
                        onValueChange={(value) =>
                          setFormData((prev) => ({
                            ...prev,
                            preferredClass: value,
                          }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a class" />
                        </SelectTrigger>
                        <SelectContent>
                          {classOptions.map((cls) => (
                            <SelectItem key={cls} value={cls}>
                              {cls}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Any specific requirements or questions..."
                        rows={4}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={submitEnquiry.isPending}
                    >
                      {submitEnquiry.isPending ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                          Submitting...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4" />
                          Submit Enquiry
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
