import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import Link from "next/link"

// This would be replaced with actual Strapi data
const mockNews = [
  {
    id: 1,
    title: "New Partnership with Global Universities",
    excerpt:
      "NCHED announces strategic partnerships with leading universities across five continents to enhance global education collaboration.",
    publishedAt: "2024-12-15",
    category: "Partnerships",
    slug: "new-partnership-global-universities",
  },
  {
    id: 2,
    title: "Research Grant Program Launch",
    excerpt:
      "Announcing $2M in research grants for innovative higher education projects focusing on digital transformation and student success.",
    publishedAt: "2024-12-10",
    category: "Research",
    slug: "research-grant-program-launch",
  },
  {
    id: 3,
    title: "Annual Conference 2025",
    excerpt:
      "Save the date for our annual Higher Education Excellence Conference, featuring keynote speakers and innovative workshops.",
    publishedAt: "2024-12-05",
    category: "Events",
    slug: "annual-conference-2025",
  },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-deep-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">News & Updates</h1>
          <p className="text-xl text-light-blue max-w-3xl mx-auto">
            Stay informed about our latest initiatives, research findings, and program updates.
          </p>
        </div>
      </header>

      {/* News Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockNews.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </div>
                    <Badge variant="secondary" className="bg-orange-accent/10 text-orange-accent">
                      {article.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-deep-blue">
                    <Link href={`/news/${article.slug}`} className="hover:text-orange-accent transition-colors">
                      {article.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Link href={`/news/${article.slug}`} className="text-orange-accent hover:text-orange-600 font-medium">
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
