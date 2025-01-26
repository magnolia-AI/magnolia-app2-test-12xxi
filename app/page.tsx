'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Star, Heart, Sparkles } from 'lucide-react'
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-[800px] mx-auto text-center space-y-8">
          <Badge variant="secondary" className="mb-4">
            ✨ Welcome to Something Beautiful
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight lg:text-6xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-3 duration-1000">
            Create Magical Experiences
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-[600px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Discover a world of endless possibilities where imagination meets reality.
            Let&apos;s build something extraordinary together.
          </p>
          <div className="mt-12 flex gap-4 justify-center animate-in fade-in slide-in-from-bottom-5 duration-1000">
            <Button size="lg" className="px-8 group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                Magical Features
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Experience the magic of modern design with our cutting-edge features.
              </p>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                Stellar Performance
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Lightning-fast performance that keeps your experience smooth and delightful.
              </p>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                Made with Love
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Crafted with attention to detail and care for the best user experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-[800px] mx-auto text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-12 rounded-2xl backdrop-blur-sm">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-[600px] mx-auto">
            Join us in creating something extraordinary. Your next amazing project begins here.
          </p>
          <Button size="lg" className="px-8">
            Begin Now
          </Button>
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