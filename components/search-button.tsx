"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import type { Language } from "@/lib/i18n"

interface SearchButtonProps {
  currentLanguage: Language
}

export function SearchButton({ currentLanguage }: SearchButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const translations = {
    kk: {
      search: "Іздеу",
      searchPlaceholder: "Іздеу сұрауын енгізіңіз...",
      searchTitle: "Сайт бойынша іздеу",
    },
    ru: {
      search: "Поиск",
      searchPlaceholder: "Введите поисковый запрос...",
      searchTitle: "Поиск по сайту",
    },
    en: {
      search: "Search",
      searchPlaceholder: "Enter search query...",
      searchTitle: "Search the site",
    },
  }

  const t = (key: keyof typeof translations.kk) => translations[currentLanguage][key]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would implement the actual search functionality
    console.log("Searching for:", searchQuery)
    // For now, we'll just close the dialog
    setIsOpen(false)
  }

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="text-white hover:text-orange-accent"
        onClick={() => setIsOpen(true)}
        title={t("search")}
      >
        <Search className="h-4 w-4" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t("searchTitle")}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("searchPlaceholder")}
              className="flex-1"
              autoFocus
            />
            <Button type="submit">
              <Search className="h-4 w-4 mr-2" />
              {t("search")}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
