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

  constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"
    this.token = process.env.STRAPI_API_TOKEN

    // Log warning if Strapi URL is not configured
    if (!process.env.NEXT_PUBLIC_STRAPI_URL) {
      console.warn("NEXT_PUBLIC_STRAPI_URL not configured, using localhost")
    }
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
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

  // Get all news articles
  async getNews(params?: {
    page?: number
    pageSize?: number
    sort?: string
  }): Promise<StrapiResponse<StrapiItem[]>> {
    const searchParams = new URLSearchParams()

    if (params?.page) searchParams.set("pagination[page]", params.page.toString())
    if (params?.pageSize) searchParams.set("pagination[pageSize]", params.pageSize.toString())
    if (params?.sort) searchParams.set("sort", params.sort)

    const query = searchParams.toString()
    return this.request(`/news${query ? `?${query}` : ""}`)
  }

  // Get single news article
  async getNewsItem(id: number): Promise<StrapiResponse<StrapiItem>> {
    return this.request(`/news/${id}`)
  }

  // Get all programs
  async getPrograms(): Promise<StrapiResponse<StrapiItem[]>> {
    return this.request("/programs?populate=*")
  }

  // Get single program
  async getProgram(id: number): Promise<StrapiResponse<StrapiItem>> {
    return this.request(`/programs/${id}?populate=*`)
  }

  // Get site settings/configuration
  async getSiteConfig(): Promise<StrapiResponse<StrapiItem>> {
    return this.request("/site-config?populate=*")
  }

  // Submit contact form
  async submitContact(data: {
    name: string
    email: string
    message: string
  }): Promise<StrapiResponse<StrapiItem>> {
    return this.request("/contacts", {
      method: "POST",
      body: JSON.stringify({ data }),
    })
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
