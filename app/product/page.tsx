import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  BarChart3,
  Users,
  Shield,
  CheckCircle,
  Star,
  Play,
  ArrowRight,
  Zap,
  Globe,
  Settings,
  Rocket,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Product Portfolio
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Innovative Solutions for <span className="text-primary">Modern Businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              Discover our growing suite of software solutions designed to transform industries. Starting with our
              flagship restaurant platform, we're building the future of digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Current Products */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Our Products</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Cutting-edge solutions that drive real business results
            </p>
          </div>

          {/* Mesob - Featured Product */}
          <div className="mb-20">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 lg:p-12">
                  <div>
                    <Badge variant="secondary" className="mb-4">
                      🚀 Flagship Product
                    </Badge>
                    <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
                      Mesob <span className="text-primary">Restaurant Platform</span>
                    </h3>
                    <p className="text-xl text-muted-foreground mb-8 text-pretty">
                      Our flagship self-ordering platform that transforms restaurant operations. Trusted by 500+
                      restaurants worldwide to enhance customer experience and boost revenue.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                      <Button size="lg" asChild>
                        <Link href="#mesob-details">
                          Explore Mesob
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" className="group bg-transparent">
                        <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                        Watch Demo
                      </Button>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">500+</div>
                        <div className="text-sm text-muted-foreground">Restaurants</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-secondary">1M+</div>
                        <div className="text-sm text-muted-foreground">Orders</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">98%</div>
                        <div className="text-sm text-muted-foreground">Satisfaction</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src="/mesob-app-showcase-multiple-screens.jpg"
                      alt="Mesob App Showcase"
                      width={600}
                      height={500}
                      className="rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coming Soon Products */}
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 text-balance">Coming Soon</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We're expanding our product portfolio to serve more industries with innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="bg-background">
                  Coming 2025
                </Badge>
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Retail Solutions</CardTitle>
                <CardDescription>
                  Advanced point-of-sale and inventory management system for retail businesses
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="bg-background">
                  Coming 2025
                </Badge>
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Event Management</CardTitle>
                <CardDescription>
                  Comprehensive platform for event planning, ticketing, and attendee management
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="bg-background">
                  Coming 2025
                </Badge>
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Business Analytics</CardTitle>
                <CardDescription>
                  AI-powered analytics platform providing deep insights across multiple business verticals
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Mesob Product Details */}
      <section id="mesob-details" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Mesob: Complete Restaurant Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Explore the comprehensive features that make Mesob the preferred choice for modern restaurants
            </p>
          </div>

          <Tabs defaultValue="customer" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="customer">Customer Experience</TabsTrigger>
              <TabsTrigger value="operations">Operations</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="customer" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Seamless Customer Journey</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground">QR Code Ordering</h4>
                        <p className="text-muted-foreground">Customers scan and order instantly from their phones</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground">Visual Menu</h4>
                        <p className="text-muted-foreground">High-quality images and detailed descriptions</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground">Customization Options</h4>
                        <p className="text-muted-foreground">Easy modifications and special requests</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground">Multiple Payment Methods</h4>
                        <p className="text-muted-foreground">Credit cards, digital wallets, and more</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Image
                    src="/customer-using-mesob-app-at-restaurant-table.jpg"
                    alt="Customer using Mesob app"
                    width={500}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="operations" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Image
                    src="/restaurant-kitchen-with-digital-order-management.jpg"
                    alt="Kitchen operations with Mesob"
                    width={500}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Streamlined Operations</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-secondary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground">Kitchen Display System</h4>
                        <p className="text-muted-foreground">Real-time order management and preparation tracking</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-secondary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground">Inventory Integration</h4>
                        <p className="text-muted-foreground">Automatic stock updates and low-inventory alerts</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-secondary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground">Staff Management</h4>
                        <p className="text-muted-foreground">Role-based access and performance tracking</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-secondary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground">Multi-Location Support</h4>
                        <p className="text-muted-foreground">Centralized management for restaurant chains</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Data-Driven Insights</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground">Real-Time Dashboard</h4>
                        <p className="text-muted-foreground">Live sales, orders, and performance metrics</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground">Customer Analytics</h4>
                        <p className="text-muted-foreground">Behavior patterns and preference insights</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground">Menu Performance</h4>
                        <p className="text-muted-foreground">Best-selling items and optimization recommendations</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground">Financial Reports</h4>
                        <p className="text-muted-foreground">Comprehensive revenue and cost analysis</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Image
                    src="/restaurant-analytics-dashboard-on-tablet.jpg"
                    alt="Analytics dashboard"
                    width={500}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Why Restaurants Choose Mesob
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>40% Faster Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Reduce wait times dramatically with instant ordering and streamlined kitchen operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>25% Revenue Increase</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Boost sales with upselling features, reduced order errors, and improved table turnover.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>98% Customer Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Delight customers with personalized experiences and seamless ordering processes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Bank-level encryption and PCI compliance ensure customer data is always protected.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Multi-Language Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Serve diverse customers with support for multiple languages and currencies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>Easy Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Seamlessly integrate with existing POS systems and restaurant management tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <CardTitle className="text-lg">Game Changer for Our Business</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "Mesob has transformed our restaurant operations. We've seen a 35% increase in orders and our
                  customers love the convenience. The setup was incredibly easy."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-white">SM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Sarah Martinez</p>
                    <p className="text-sm text-muted-foreground">Owner, Bella Vista Restaurant</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <CardTitle className="text-lg">Exceptional Support Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "The Mesob team provided outstanding support during our implementation. The analytics dashboard gives
                  us insights we never had before. Highly recommended!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-white">DL</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">David Lee</p>
                    <p className="text-sm text-muted-foreground">Manager, Urban Eats Chain</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <CardTitle className="text-lg">Perfect for Busy Restaurants</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "During peak hours, Mesob keeps everything running smoothly. Our staff can focus on food quality while
                  the system handles orders efficiently. It's been a lifesaver."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-white">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Maria Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Chef, Downtown Bistro</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-pretty opacity-90">
            Discover how our solutions can transform your business. Start with Mesob or learn about our upcoming
            products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Contact Sales
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
