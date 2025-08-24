"use client";
import React from "react";

import Galaxy from "../modules/Home/components/galaxy";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../modules/shared/shadcn/components/ui/card";
import {
  LogIn,
  Rocket,
} from "lucide-react";
import { Button } from "../modules/shared/shadcn/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SplashCursor from "../modules/Home/components/splash-cursor";

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="absolute inset-0 z-0">
        <Galaxy
          mouseRepulsion={false}
          mouseInteraction={true}
          speed={0.2}
          rotationSpeed={0.05}
        />
        <SplashCursor />
      </div>
      <div className="relative z-10">
        {/* Header avec toggle de thème */}
        <header className="flex justify-between items-center py-2">
          <div className="flex items-center gap-2 container mx-auto">
            <Image
              draggable={false}
              src="/logo/nasa.svg"
              alt="Nasa Logo"
              width={100}
              height={100}
            />
          </div>
          <div className="flex items-center mx-auto">
            <Image
              draggable={false}
              src="/logo/nasa-axiom-logo.svg"
              alt="Nasa Mission Axiom Logo"
              width={100}
              height={100}
            />
          </div>
        </header>
        {/* Contenu principal */}
        <main className="container mx-auto">
          <Card className="bg-gradient-to-br from-muted/60 via-background to-muted/10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="container mx-auto px-4 py-6 max-w-6xl h-full flex flex-col"
            >
              {/* Header */}
              <motion.div variants={itemVariants} className="text-center mb-6">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  <span className="wave-text">NASA</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  National Aeronotics and Space Administration
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div variants={itemVariants} className="mb-6">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-xl font-bold flex items-center justify-center gap-2">
                      <Rocket className="w-5 h-5" />
                      Notre Mission
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-center text-muted-foreground text-base leading-relaxed">
                      Explorer l&apos;inconnu dans l&apos;air et l&apos;espace,
                      d&apos;innover au profit de l&apos;humanité et
                      d&apos;inspirer le monde par la découverte
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Gallery */}
              <motion.div variants={itemVariants} className="mb-6">
                <div>
                  <h2 className="text-lg font-bold text-center mb-3">
                    La conquête de l&apos;espace commence ici
                  </h2>
                  <div className="grid grid-cols-3 gap-3">
                    <Image
                      className="border-0 shadow-md hover:shadow-lg transition-shadow"
                      src="/placeholder.svg"
                      alt="NASA Space Image"
                      width={1080}
                      height={560}
                    />
                    <Image
                      className="border-0 shadow-md hover:shadow-lg transition-shadow"
                      src="/photo/nasa-photo-1.png"
                      alt="NASA Space Image"
                      width={1080}
                      height={560}
                    />
                    <Image
                      className="border-0 shadow-md hover:shadow-lg transition-shadow"
                      src="/placeholder.svg"
                      alt="NASA Space Image"
                      width={1080}
                      height={560}
                    />
                  </div>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div variants={itemVariants} className="text-center">
                <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 to-secondary/10">
                  <CardContent className="">
                    <Link href="/dashboard">
                      <Button size="lg" className="gap-2">
                        <LogIn className="w-4 h-4" />
                        Connexion
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </Card>
        </main>

        {/* Footer */}
        <footer className="text-center py-8 text-muted-foreground">
          <p>&copy; 2025 NASA-Baylife. Tous droits réservés.</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
