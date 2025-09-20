import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Check, X, ArrowRight, Star, Zap, Building, Crown } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "$99",
      period: "per month",
      description: "Perfect for small restaurants and cafes getting started with digital ordering",
      features: [
        "Up to 50 orders per day",
        "Basic menu management",
        "QR code ordering",
        "Payment processing",
        "Email support",
        "Basic analytics",
        "1 location",
        "Standard customization",
      ],
      notIncluded: ["Kitchen display system", "Advanced analytics", "Multi-location support", "Priority support"],
      popular: false,
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      icon: Building,
      price: "$249",
      period: "per month",
      description: "Ideal for growing restaurants that need advanced features and better insights",
      features: [
        "Up to 200 orders per day",
        "Advanced menu management",
        "QR code ordering",
        "Payment processing",
        "Kitchen display system",
        "Advanced analytics",
        "Inventory integration",
        "Priority email support",
        "Up to 3 locations",
        "Custom branding",
        "Staff management tools",
        "Customer loyalty program",
      ],
      notIncluded: ["White-label solution", "API access", "Dedicated account manager"],
      popular: true,
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "Custom",
      period: "pricing",
      description: "For restaurant chains and large operations requiring maximum flexibility and support",
      features: [
        "Unlimited orders",
        "Full menu management suite",
        "Multi-channel ordering",
        "Advanced payment options",
        "Kitchen display system",
        "Real-time analytics & reporting",
        "Full inventory management",
        "24/7 phone & email support",
        "Unlimited locations",
        "White-label solution",
        "Custom integrations",
        "API access",
        "Dedicated account manager",
        "Custom training & onboarding",
        "SLA guarantee",
      ],
      notIncluded: [],
      popular: false,
      cta: "Contact Sales",
    },
  ]

  const faqs = [
    {
      question: "Is there a setup fee?",
      answer: "No, there are no setup fees for any of our plans. We'll help you get started at no additional cost.",
    },
    {
      question: "Can I change plans anytime?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, ACH transfers, and can arrange custom payment terms for Enterprise customers.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes, we offer a 14-day free trial for Starter and Professional plans. Enterprise customers can request a custom demo.",
    },
    {
      question: "Do you offer training and support?",
      answer:
        "All plans include comprehensive onboarding. Professional plans get priority support, and Enterprise customers receive dedicated account management.",
    },
    {
      question: "Can I integrate with my existing POS system?",
      answer:
        "Yes, Mesob integrates with most popular POS systems. Our team will help ensure seamless integration during setup.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">
            Simple, Transparent Pricing
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Choose the Perfect Plan for Your <span className="text-primary">Restaurant</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Start with a 14-day free trial. No setup fees, no hidden costs. Scale as your business grows with flexible
            pricing options.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-primary" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-primary" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon
              return (
                <Card
                  key={plan.name}
                  className={`relative border-border ${plan.popular ? "ring-2 ring-primary shadow-lg scale-105" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground mt-4 text-pretty">{plan.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"} size="lg" asChild>
                      <Link href="/contact">
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">What's included:</h4>
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}

                      {plan.notIncluded.length > 0 && (
                        <>
                          <h4 className="font-semibold text-foreground mt-6">Not included:</h4>
                          {plan.notIncluded.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-3">
                              <X className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Compare All Features</h2>
            <p className="text-xl text-muted-foreground text-pretty">See exactly what's included in each plan</p>
          </div>

          <div className="bg-background rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Features</th>
                    <th className="text-center py-4 px-6 font-semibold text-foreground">Starter</th>
                    <th className="text-center py-4 px-6 font-semibold text-foreground">Professional</th>
                    <th className="text-center py-4 px-6 font-semibold text-foreground">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { feature: "Orders per day", starter: "50", professional: "200", enterprise: "Unlimited" },
                    { feature: "Locations", starter: "1", professional: "3", enterprise: "Unlimited" },
                    { feature: "QR Code Ordering", starter: true, professional: true, enterprise: true },
                    { feature: "Payment Processing", starter: true, professional: true, enterprise: true },
                    { feature: "Kitchen Display System", starter: false, professional: true, enterprise: true },
                    { feature: "Advanced Analytics", starter: false, professional: true, enterprise: true },
                    { feature: "Inventory Integration", starter: false, professional: true, enterprise: true },
                    { feature: "Custom Branding", starter: false, professional: true, enterprise: true },
                    { feature: "API Access", starter: false, professional: false, enterprise: true },
                    { feature: "White-label Solution", starter: false, professional: false, enterprise: true },
                    { feature: "24/7 Support", starter: false, professional: false, enterprise: true },
                    { feature: "Dedicated Account Manager", starter: false, professional: false, enterprise: true },
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-muted/50">
                      <td className="py-4 px-6 font-medium text-foreground">{row.feature}</td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.starter === "boolean" ? (
                          row.starter ? (
                            <Check className="h-4 w-4 text-primary mx-auto" />
                          ) : (
                            <X className="h-4 w-4 text-muted-foreground mx-auto" />
                          )
                        ) : (
                          <span className="text-muted-foreground">{row.starter}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.professional === "boolean" ? (
                          row.professional ? (
                            <Check className="h-4 w-4 text-primary mx-auto" />
                          ) : (
                            <X className="h-4 w-4 text-muted-foreground mx-auto" />
                          )
                        ) : (
                          <span className="text-muted-foreground">{row.professional}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.enterprise === "boolean" ? (
                          row.enterprise ? (
                            <Check className="h-4 w-4 text-primary mx-auto" />
                          ) : (
                            <X className="h-4 w-4 text-muted-foreground mx-auto" />
                          )
                        ) : (
                          <span className="text-muted-foreground">{row.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-pretty opacity-90">
            Join hundreds of restaurants already using Mesob to enhance their customer experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
