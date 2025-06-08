"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Eye, ZoomIn, Sun } from "lucide-react"
import type { Language } from "@/lib/i18n"

interface AccessibilityToggleProps {
  currentLanguage: Language
}

export function AccessibilityToggle({ currentLanguage }: AccessibilityToggleProps) {
  const [isHighContrast, setIsHighContrast] = useState(false)
  const [isLargeText, setIsLargeText] = useState(false)

  const translations = {
    kk: {
      accessibility: "Көру қабілеті нашар адамдарға арналған",
      highContrast: "Жоғары контраст",
      largeText: "Үлкен мәтін",
      resetSettings: "Параметрлерді қалпына келтіру",
    },
    ru: {
      accessibility: "Для слабовидящих",
      highContrast: "Высокий контраст",
      largeText: "Крупный текст",
      resetSettings: "Сбросить настройки",
    },
    en: {
      accessibility: "For visually impaired",
      highContrast: "High contrast",
      largeText: "Large text",
      resetSettings: "Reset settings",
    },
  }

  const t = (key: keyof typeof translations.kk) => translations[currentLanguage][key]

  useEffect(() => {
    if (isHighContrast) {
      document.documentElement.classList.add("high-contrast")
    } else {
      document.documentElement.classList.remove("high-contrast")
    }

    if (isLargeText) {
      document.documentElement.classList.add("large-text")
    } else {
      document.documentElement.classList.remove("large-text")
    }

    return () => {
      document.documentElement.classList.remove("high-contrast", "large-text")
    }
  }, [isHighContrast, isLargeText])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="text-white hover:text-orange-accent" title={t("accessibility")}>
          <Eye className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setIsHighContrast(!isHighContrast)}
          className={isHighContrast ? "bg-orange-accent/10" : ""}
        >
          <Sun className="h-4 w-4 mr-2" />
          {t("highContrast")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setIsLargeText(!isLargeText)}
          className={isLargeText ? "bg-orange-accent/10" : ""}
        >
          <ZoomIn className="h-4 w-4 mr-2" />
          {t("largeText")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setIsHighContrast(false)
            setIsLargeText(false)
          }}
        >
          {t("resetSettings")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
