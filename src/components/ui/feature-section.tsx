"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(features.length / itemsPerPage)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages)
    }, autoPlayInterval)

    return () => clearInterval(timer)
  }, [autoPlayInterval, totalPages])

  const currentFeatures = features.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )
  const currentFeature = currentPage * itemsPerPage

  return (
    <div className={cn("py-16 px-8 md:py-24 md:px-12 bg-white", className)}>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-16 text-center font-gelada text-black uppercase">
          {title}
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="order-2 md:order-1 space-y-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-10"
              >
                {currentFeatures.map((feature, index) => {
                  const globalIndex = currentPage * itemsPerPage + index
                  return (
                    <div
                      key={globalIndex}
                      className="flex items-start gap-6 md:gap-8"
                    >
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 bg-[#FFC800] border-[#FFC800] text-black shrink-0">
                        <span className="text-lg font-semibold">{globalIndex + 1}</span>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-semibold text-black">
                          {feature.title || feature.step}
                        </h3>
                        <p className="text-sm md:text-lg text-gray-600">
                          {feature.content}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            className={cn(
              "order-1 md:order-2 relative h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-lg"
            )}
          >
            <AnimatePresence mode="wait">
              {currentFeatures.map((feature, index) => {
                const globalIndex = currentPage * itemsPerPage + index
                return index === 0 && (
                  <motion.div
                    key={globalIndex}
                    className="absolute inset-0 rounded-lg overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <img
                      src={feature.image}
                      alt={feature.step}
                      className="w-full h-full object-cover transition-transform transform"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/50 to-transparent" />
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

