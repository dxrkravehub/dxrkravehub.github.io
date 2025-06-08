"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import { strapiAPI } from "@/lib/strapi"
import type { Language } from "@/lib/i18n"

interface NewsItem {
  id: number
  title: string
  excerpt: string
  publishedAt: string
  category: string
  slug: string
}

interface NewsSectionProps {
  currentLanguage: Language
}

export function NewsSection({ currentLanguage }: NewsSectionProps) {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Mock news data with translations
  const mockNewsData = {
    kk: [
      {
        id: 1,
        title: "Жаһандық университеттермен жаңа серіктестік",
        excerpt:
          "ENIC жаһандық білім беру ынтымақтастығын дамыту үшін бес континенттегі жетекші университеттермен стратегиялық серіктестік туралы хабарлайды.",
        publishedAt: "2024-12-15T00:00:00.000Z",
        category: "Серіктестік",
        slug: "new-partnership-global-universities",
      },
      {
        id: 2,
        title: "Зерттеу гранттары бағдарламасының іске қосылуы",
        excerpt:
          "Цифрлық трансформация мен студенттердің табысына бағытталған инновациялық жоғары білім жобаларына 2 млн долларлық зерттеу гранттарын жариялау.",
        publishedAt: "2024-12-10T00:00:00.000Z",
        category: "Зерттеу",
        slug: "research-grant-program-launch",
      },
      {
        id: 3,
        title: "2025 жылғы жылдық конференция",
        excerpt:
          "Негізгі баяндамашылар мен инновациялық семинарларды қамтитын жоғары білім беру үздіктігі жөніндегі жылдық конференциямыздың күнін сақтаңыз.",
        publishedAt: "2024-12-05T00:00:00.000Z",
        category: "Іс-шаралар",
        slug: "annual-conference-2025",
      },
    ],
    ru: [
      {
        id: 1,
        title: "Новое партнерство с глобальными университетами",
        excerpt:
          "ENIC объявляет о стратегических партнерствах с ведущими университетами пяти континентов для развития глобального образовательного сотрудничества.",
        publishedAt: "2024-12-15T00:00:00.000Z",
        category: "Партнерство",
        slug: "new-partnership-global-universities",
      },
      {
        id: 2,
        title: "Запуск программы исследовательских грантов",
        excerpt:
          "Объявление о 2 млн долларов исследовательских грантов для инновационных проектов высшего образования, сосредоточенных на цифровой трансформации и успехе студентов.",
        publishedAt: "2024-12-10T00:00:00.000Z",
        category: "Исследования",
        slug: "research-grant-program-launch",
      },
      {
        id: 3,
        title: "Ежегодная конференция 2025",
        excerpt:
          "Сохраните дату нашей ежегодной конференции по совершенству высшего образования с ключевыми докладчиками и инновационными семинарами.",
        publishedAt: "2024-12-05T00:00:00.000Z",
        category: "События",
        slug: "annual-conference-2025",
      },
    ],
    en: [
      {
        id: 1,
        title: "New Partnership with Global Universities",
        excerpt:
          "ENIC announces strategic partnerships with leading universities across five continents to enhance global education collaboration.",
        publishedAt: "2024-12-15T00:00:00.000Z",
        category: "Partnerships",
        slug: "new-partnership-global-universities",
      },
      {
        id: 2,
        title: "Research Grant Program Launch",
        excerpt:
          "Announcing $2M in research grants for innovative higher education projects focusing on digital transformation and student success.",
        publishedAt: "2024-12-10T00:00:00.000Z",
        category: "Research",
        slug: "research-grant-program-launch",
      },
      {
        id: 3,
        title: "Annual Conference 2025",
        excerpt:
          "Save the date for our annual Higher Education Excellence Conference, featuring keynote speakers and innovative workshops.",
        publishedAt: "2024-12-05T00:00:00.000Z",
        category: "Events",
        slug: "annual-conference-2025",
      },
    ],
  }

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true)

        if (strapiAPI.isConfigured()) {
          // Try to fetch from Strapi
          const response = await strapiAPI.getNews({ pageSize: 3, sort: "publishedAt:desc" })
          const newsItems = response.data.map((item) => ({
            id: item.id,
            title: item.attributes.title,
            excerpt: item.attributes.excerpt,
            publishedAt: item.attributes.publishedAt,
            category: item.attributes.category,
            slug: item.attributes.slug,
          }))
          setNews(newsItems)
        } else {
          // Use mock data based on current language
          setNews(mockNewsData[currentLanguage])
        }
      } catch (err) {
        console.error("Failed to fetch news:", err)
        // Fallback to mock data
        setNews(mockNewsData[currentLanguage])
        setError("Using local data")
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [currentLanguage])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader>
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            </CardHeader>
            <CardContent>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
              <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {news.map((article, index) => (
        <Card key={article.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <Calendar className="h-4 w-4" />
              {new Date(article.publishedAt).toLocaleDateString()}
            </div>
            <CardTitle className="text-deep-blue">{article.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">{article.excerpt}</p>
            <Button
              variant="outline"
              size="sm"
              className={`${
                index === 0
                  ? "text-orange-accent border-orange-accent hover:bg-orange-accent hover:text-white"
                  : index === 1
                    ? "text-light-blue border-light-blue hover:bg-light-blue hover:text-white"
                    : "text-deep-blue border-deep-blue hover:bg-deep-blue hover:text-white"
              }`}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
