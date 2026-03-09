import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Eye,
  EyeOff,
  GraduationCap,
  LogOut,
  MessageSquare,
  Users,
} from "lucide-react";
import { useState } from "react";
import { useGetAllContacts, useGetAllEnquiries } from "../hooks/useQueries";

const ADMIN_PASSWORD = "WoodsAdmin2024";
const SESSION_KEY = "woods_admin_auth";

function formatTimestamp(ts: bigint): string {
  return new Date(Number(ts) / 1_000_000).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "true");
      onLogin();
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  return (
    <div className="admin-login-bg min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary mb-4 shadow-lg">
            <GraduationCap className="w-9 h-9 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground font-display">
            Woods Academy
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">Admin Portal</p>
        </div>

        <Card className="shadow-xl border-border/60">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg text-center">Sign In</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="admin-password">Password</Label>
                <div className="relative">
                  <Input
                    id="admin-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    placeholder="Enter admin password"
                    className="pr-10"
                    data-ocid="admin.input"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {error && (
                  <p
                    className="text-sm text-destructive"
                    data-ocid="admin.error_state"
                  >
                    {error}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={!password}
                data-ocid="admin.submit_button"
              >
                Sign In to Dashboard
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-muted-foreground mt-6">
          © {new Date().getFullYear()} Woods Academy. Admin access only.
        </p>
      </div>
    </div>
  );
}

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const { data: contacts = [], isLoading: loadingContacts } =
    useGetAllContacts();
  const { data: enquiries = [], isLoading: loadingEnquiries } =
    useGetAllEnquiries();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-foreground font-display text-base leading-tight">
                Admin Dashboard
              </h1>
              <p className="text-xs text-muted-foreground">Woods Academy</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onLogout}
            className="gap-2"
            data-ocid="admin.button"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="bg-primary/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 max-w-md">
            <div className="flex items-center gap-3 bg-card rounded-xl p-3 border border-border shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {contacts.length}
                </p>
                <p className="text-xs text-muted-foreground">Messages</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-card rounded-xl p-3 border border-border shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-accent-green/10 flex items-center justify-center">
                <Users
                  className="w-5 h-5"
                  style={{ color: "oklch(var(--accent-green))" }}
                />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {enquiries.length}
                </p>
                <p className="text-xs text-muted-foreground">Enquiries</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Tabs defaultValue="contacts" className="space-y-4">
          <TabsList className="bg-muted border border-border">
            <TabsTrigger
              value="contacts"
              className="gap-2"
              data-ocid="admin.tab"
            >
              <MessageSquare className="w-4 h-4" />
              Contact Messages
              <Badge variant="secondary" className="ml-1 text-xs">
                {contacts.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger
              value="enquiries"
              className="gap-2"
              data-ocid="admin.tab"
            >
              <Users className="w-4 h-4" />
              Admission Enquiries
              <Badge variant="secondary" className="ml-1 text-xs">
                {enquiries.length}
              </Badge>
            </TabsTrigger>
          </TabsList>

          {/* Contact Messages Tab */}
          <TabsContent value="contacts" data-ocid="admin.panel">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">
                  Contact Form Submissions
                </CardTitle>
              </CardHeader>
              <CardContent>
                {loadingContacts ? (
                  <div
                    className="py-12 text-center"
                    data-ocid="admin.loading_state"
                  >
                    <div className="inline-block w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin mb-3" />
                    <p className="text-muted-foreground text-sm">
                      Loading messages...
                    </p>
                  </div>
                ) : contacts.length === 0 ? (
                  <div
                    className="py-12 text-center"
                    data-ocid="admin.empty_state"
                  >
                    <MessageSquare className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
                    <p className="text-foreground font-medium">
                      No messages yet
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Contact form submissions will appear here.
                    </p>
                  </div>
                ) : (
                  <div
                    className="rounded-lg border border-border overflow-hidden"
                    data-ocid="admin.table"
                  >
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-muted/50">
                            <TableHead className="font-semibold">
                              Name
                            </TableHead>
                            <TableHead className="font-semibold">
                              Email
                            </TableHead>
                            <TableHead className="font-semibold">
                              Subject
                            </TableHead>
                            <TableHead className="font-semibold">
                              Message
                            </TableHead>
                            <TableHead className="font-semibold">
                              Date
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {contacts.map((c, i) => (
                            <TableRow
                              key={String(c.id)}
                              data-ocid={`admin.row.${i + 1}`}
                            >
                              <TableCell className="font-medium">
                                {c.name}
                              </TableCell>
                              <TableCell className="text-muted-foreground">
                                {c.email}
                              </TableCell>
                              <TableCell>{c.subject}</TableCell>
                              <TableCell className="max-w-xs">
                                <p
                                  className="truncate text-sm text-muted-foreground"
                                  title={c.message}
                                >
                                  {c.message}
                                </p>
                              </TableCell>
                              <TableCell className="text-sm text-muted-foreground whitespace-nowrap">
                                {formatTimestamp(c.timestamp)}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Admission Enquiries Tab */}
          <TabsContent value="enquiries" data-ocid="admin.panel">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">
                  Admission Enquiry Submissions
                </CardTitle>
              </CardHeader>
              <CardContent>
                {loadingEnquiries ? (
                  <div
                    className="py-12 text-center"
                    data-ocid="admin.loading_state"
                  >
                    <div className="inline-block w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin mb-3" />
                    <p className="text-muted-foreground text-sm">
                      Loading enquiries...
                    </p>
                  </div>
                ) : enquiries.length === 0 ? (
                  <div
                    className="py-12 text-center"
                    data-ocid="admin.empty_state"
                  >
                    <Users className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
                    <p className="text-foreground font-medium">
                      No enquiries yet
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Admission enquiry submissions will appear here.
                    </p>
                  </div>
                ) : (
                  <div
                    className="rounded-lg border border-border overflow-hidden"
                    data-ocid="admin.table"
                  >
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-muted/50">
                            <TableHead className="font-semibold">
                              Student Name
                            </TableHead>
                            <TableHead className="font-semibold">
                              Parent Name
                            </TableHead>
                            <TableHead className="font-semibold">
                              Email
                            </TableHead>
                            <TableHead className="font-semibold">
                              Phone
                            </TableHead>
                            <TableHead className="font-semibold">
                              Class
                            </TableHead>
                            <TableHead className="font-semibold">
                              Message
                            </TableHead>
                            <TableHead className="font-semibold">
                              Date
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {enquiries.map((e, i) => (
                            <TableRow
                              key={String(e.id)}
                              data-ocid={`admin.row.${i + 1}`}
                            >
                              <TableCell className="font-medium">
                                {e.studentName}
                              </TableCell>
                              <TableCell>{e.parentName}</TableCell>
                              <TableCell className="text-muted-foreground">
                                {e.email}
                              </TableCell>
                              <TableCell>{e.phone}</TableCell>
                              <TableCell>
                                <Badge variant="outline" className="text-xs">
                                  {e.preferredClass}
                                </Badge>
                              </TableCell>
                              <TableCell className="max-w-xs">
                                <p
                                  className="truncate text-sm text-muted-foreground"
                                  title={e.message}
                                >
                                  {e.message}
                                </p>
                              </TableCell>
                              <TableCell className="text-sm text-muted-foreground whitespace-nowrap">
                                {formatTimestamp(e.timestamp)}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => sessionStorage.getItem(SESSION_KEY) === "true",
  );

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return <Dashboard onLogout={handleLogout} />;
}
