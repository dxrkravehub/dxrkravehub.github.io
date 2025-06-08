interface StrapiResponse<T> {
  data: T
  meta: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

interface StrapiItem {
  id: number
  attributes: Record<string, any>
  createdAt: string
  updatedAt: string
}

class StrapiAPI {
  private baseURL: string
  private token?: string
  private isAvailable: boolean

  constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"
    this.token = process.env.STRAPI_API_TOKEN
    this.isAvailable = !!process.env.NEXT_PUBLIC_STRAPI_URL

    // Log warning if Strapi URL is not configured
    if (!process.env.NEXT_PUBLIC_STRAPI_URL) {
      console.warn("NEXT_PUBLIC_STRAPI_URL not configured, using mock data")
    }
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    if (!this.isAvailable) {
      throw new Error("Strapi is not configured")
    }

    const url = `${this.baseURL}/api${endpoint}`

    const config: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        ...(this.token && { Authorization: `Bearer ${this.token}` }),
        ...options.headers,
      },
      ...options,
    }

    try {
      const response = await fetch(url, config)

      if (!response.ok) {
        throw new Error(`Strapi API error: ${response.status} ${response.statusText}`)
      }

      return response.json()
    } catch (error) {
      console.error("Strapi API request failed:", error)
      throw error
    }
  }

  // Mock data for when Strapi is not available
  private getMockNews(): StrapiResponse<StrapiItem[]> {
    return {
      data: [
        {
          id: 1,
          attributes: {
            title: "New Partnership with Global Universities",
            excerpt: "ENIC announces strategic partnerships with leading universities across five continents.",
            publishedAt: "2024-12-15T00:00:00.000Z",
            category: "Partnerships",
            slug: "new-partnership-global-universities",
          },
          createdAt: "2024-12-15T00:00:00.000Z",
          updatedAt: "2024-12-15T00:00:00.000Z",
        },
        {
          id: 2,
          attributes: {
            title: "Research Grant Program Launch",
            excerpt: "Announcing $2M in research grants for innovative higher education projects.",
            publishedAt: "2024-12-10T00:00:00.000Z",
            category: "Research",
            slug: "research-grant-program-launch",
          },
          createdAt: "2024-12-10T00:00:00.000Z",
          updatedAt: "2024-12-10T00:00:00.000Z",
        },
        {
          id: 3,
          attributes: {
            title: "Annual Conference 2025",
            excerpt: "Save the date for our annual Higher Education Excellence Conference.",
            publishedAt: "2024-12-05T00:00:00.000Z",
            category: "Events",
            slug: "annual-conference-2025",
          },
          createdAt: "2024-12-05T00:00:00.000Z",
          updatedAt: "2024-12-05T00:00:00.000Z",
        },
      ],
      meta: {
        pagination: {
          page: 1,
          pageSize: 3,
          pageCount: 1,
          total: 3,
        },
      },
    }
  }

  // Get all news articles
  async getNews(params?: {
    page?: number
    pageSize?: number
    sort?: string
  }): Promise<StrapiResponse<StrapiItem[]>> {
    if (!this.isAvailable) {
      // Return mock data when Strapi is not available
      return this.getMockNews()
    }

    const searchParams = new URLSearchParams()

    if (params?.page) searchParams.set("pagination[page]", params.page.toString())
    if (params?.pageSize) searchParams.set("pagination[pageSize]", params.pageSize.toString())
    if (params?.sort) searchParams.set("sort", params.sort)

    const query = searchParams.toString()
    return this.request(`/news${query ? `?${query}` : ""}`)
  }

  // Get single news article
  async getNewsItem(id: number): Promise<StrapiResponse<StrapiItem>> {
    if (!this.isAvailable) {
      const mockNews = this.getMockNews()
      const item = mockNews.data.find((item) => item.id === id)
      if (!item) {
        throw new Error("News item not found")
      }
      return { data: item, meta: {} }
    }

    return this.request(`/news/${id}`)
  }

  // Get all programs
  async getPrograms(): Promise<StrapiResponse<StrapiItem[]>> {
    if (!this.isAvailable) {
      return {
        data: [],
        meta: { pagination: { page: 1, pageSize: 0, pageCount: 0, total: 0 } },
      }
    }

    return this.request("/programs?populate=*")
  }

  // Get single program
  async getProgram(id: number): Promise<StrapiResponse<StrapiItem>> {
    if (!this.isAvailable) {
      throw new Error("Programs not available without Strapi")
    }

    return this.request(`/programs/${id}?populate=*`)
  }

  // Get site settings/configuration
  async getSiteConfig(): Promise<StrapiResponse<StrapiItem>> {
    if (!this.isAvailable) {
      return {
        data: {
          id: 1,
          attributes: {
            siteName: "ENIC",
            tagline: "Educational Network Information Centre",
            heroTitle: "National Center for Higher Education Development",
            heroDescription: "Empowering institutions, educators, and students through innovation.",
            contactEmail: "info@enic.kz",
            contactPhone: "+7 (7172) 123-456",
            address: "Nur-Sultan, Mangilik El Ave 8, 010000",
          },
          createdAt: "2024-12-15T00:00:00.000Z",
          updatedAt: "2024-12-15T00:00:00.000Z",
        },
        meta: {},
      }
    }

    return this.request("/site-config?populate=*")
  }

  // Submit contact form
  async submitContact(data: {
    name: string
    email: string
    message: string
  }): Promise<StrapiResponse<StrapiItem>> {
    if (!this.isAvailable) {
      // Simulate successful submission
      console.log("Contact form submitted (mock):", data)
      return {
        data: {
          id: Date.now(),
          attributes: { ...data, status: "new" },
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        meta: {},
      }
    }

    return this.request("/contacts", {
      method: "POST",
      body: JSON.stringify({ data }),
    })
  }

  // Check if Strapi is available
  isConfigured(): boolean {
    return this.isAvailable
  }
}

export const strapiAPI = new StrapiAPI()

// Helper function to get image URL from Strapi
export function getStrapiImageURL(image: any): string {
  if (!image) return "/placeholder.svg?height=400&width=600"

  const { url } = image.data?.attributes || image.attributes || {}
  if (!url) return "/placeholder.svg?height=400&width=600"

  // If URL is relative, prepend Strapi base URL
  if (url.startsWith("/")) {
    return `${process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"}${url}`
  }

  return url
}

// Helper function to format Strapi date
export function formatStrapiDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
