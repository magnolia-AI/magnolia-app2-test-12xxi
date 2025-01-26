'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Check, Sparkles } from 'lucide-react'
import Link from 'next/link'
export default function GetStarted() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header */}
      <div className="border-b bg-background/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back Home
            </Button>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">Need Help?</Button>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-[800px] mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Let&apos;s Get Started
              <Sparkles className="inline-block ml-2 h-8 w-8 text-primary" />
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose the perfect plan to begin your journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <CardHeader>
                <CardTitle>Basic Plan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold">$9<span className="text-lg text-muted-foreground">/month</span></div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Essential features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Basic support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Up to 5 projects</span>
                  </li>
                </ul>
                <Button className="w-full mt-4">
                  Select Basic Plan
                </Button>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden border-primary">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <CardHeader>
                <CardTitle>Pro Plan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold">$29<span className="text-lg text-muted-foreground">/month</span></div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>All Basic features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Unlimited projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Advanced analytics</span>
                  </li>
                </ul>
                <Button className="w-full mt-4">
                  Select Pro Plan
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="bg-secondary/50 rounded-lg p-6 mt-8">
            <h3 className="font-semibold mb-2">Not sure which plan to choose?</h3>
            <p className="text-muted-foreground">
              Our team is here to help you make the best choice for your needs. 
              Contact us for a personalized recommendation.
            </p>
            <Button variant="link" className="mt-2 p-0">
              Contact Support →
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Your Beautiful Creation. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm">
                Privacy
              </Button>
              <Button variant="ghost" size="sm">
                Terms
              </Button>
              <Button variant="ghost" size="sm">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}