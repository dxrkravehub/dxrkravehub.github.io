"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  BookOpen,
  Award,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Target,
  Lightbulb,
  Globe,
  Facebook,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { LanguageSwitcher } from "@/components/language-switcher"
import { AccessibilityToggle } from "@/components/accessibility-toggle"
import { SearchButton } from "@/components/search-button"
import { NewsSection } from "@/components/news-section"
import { type Language, defaultLanguage, getTranslation } from "@/lib/i18n"

export default function HomePage() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(defaultLanguage)

  const t = (key: string) => getTranslation(currentLanguage, key)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-deep-blue text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image src="/images/enic-logo.png" alt="ENIC Logo" width={40} height={40} className="h-10 w-10" />
              <div>
                <h1 className="text-xl font-bold">ENIC</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-6">
                <Link href="#about" className="hover:text-orange-accent transition-colors">
                  {t("about")}
                </Link>
                <Link href="#programs" className="hover:text-orange-accent transition-colors">
                  {t("programs")}
                </Link>
                <Link href="#news" className="hover:text-orange-accent transition-colors">
                  {t("news")}
                </Link>
                <Link href="#contact" className="hover:text-orange-accent transition-colors">
                  {t("contact")}
                </Link>
              </nav>
              <SearchButton currentLanguage={currentLanguage} />
              <AccessibilityToggle currentLanguage={currentLanguage} />
              <LanguageSwitcher currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t("heroTitle")}</h1>
          <p className="text-xl mb-8 text-light-blue max-w-3xl mx-auto">{t("heroSubtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-accent hover:bg-orange-600 text-white">
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-deep-blue">
              <BookOpen className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-deep-blue mb-2">500+</div>
              <div className="text-gray-600">{t("partnerInstitutions")}</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-orange-accent mb-2">50,000+</div>
              <div className="text-gray-600">{t("studentsImpacted")}</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-light-blue mb-2">200+</div>
              <div className="text-gray-600">{t("researchProjects")}</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-deep-blue mb-2">25</div>
              <div className="text-gray-600">{t("yearsExcellence")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-blue mb-4">{t("aboutTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("aboutSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-orange-accent">
              <CardHeader>
                <Target className="h-8 w-8 text-orange-accent mb-2" />
                <CardTitle className="text-deep-blue">{t("ourMission")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t("missionText")}</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-light-blue">
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-light-blue mb-2" />
                <CardTitle className="text-deep-blue">{t("ourVision")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t("visionText")}</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-deep-blue">
              <CardHeader>
                <Globe className="h-8 w-8 text-deep-blue mb-2" />
                <CardTitle className="text-deep-blue">{t("ourImpact")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t("impactText")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-blue mb-4">{t("programsTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("programsSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-orange-accent mb-2" />
                <CardTitle className="text-deep-blue">{t("facultyDevelopment")}</CardTitle>
                <CardDescription>{t("facultyDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{t("facultyText")}</p>
                <Badge variant="secondary" className="bg-orange-accent/10 text-orange-accent">
                  {t("professionalGrowth")}
                </Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-light-blue mb-2" />
                <CardTitle className="text-deep-blue">{t("institutionalCapacity")}</CardTitle>
                <CardDescription>{t("capacityDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{t("capacityText")}</p>
                <Badge variant="secondary" className="bg-light-blue/10 text-light-blue">
                  {t("organizationalDevelopment")}
                </Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-8 w-8 text-deep-blue mb-2" />
                <CardTitle className="text-deep-blue">{t("qualityAssurance")}</CardTitle>
                <CardDescription>{t("qualityDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{t("qualityText")}</p>
                <Badge variant="secondary" className="bg-deep-blue/10 text-deep-blue">
                  {t("excellenceStandards")}
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-blue mb-4">{t("newsTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("newsSubtitle")}</p>
          </div>

          <NewsSection currentLanguage={currentLanguage} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-deep-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t("contactTitle")}</h2>
            <p className="text-xl text-light-blue max-w-3xl mx-auto">{t("contactSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">{t("contactInfo")}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-orange-accent" />
                  <span>
                    {currentLanguage === "kk" && "Нұр-Сұлтан қ., Мәңгілік Ел даңғылы 8, 010000"}
                    {currentLanguage === "ru" && "г. Нур-Султан, пр. Мәңгілік Ел 8, 010000"}
                    {currentLanguage === "en" && "Nur-Sultan, Mangilik El Ave 8, 010000"}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-accent" />
                  <span>+7 (7172) 123-456</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-accent" />
                  <span>info@enic.kz</span>
                </div>

                {/* Social Links */}
                <div className="pt-6">
                  <h4 className="text-lg font-semibold mb-4">
                    {currentLanguage === "kk" && "Бізді қадағалаңыз"}
                    {currentLanguage === "ru" && "Следите за нами"}
                    {currentLanguage === "en" && "Follow Us"}
                  </h4>
                  <div className="flex space-x-4">
                    <Link
                      href="https://facebook.com/enic.kz"
                      target="_blank"
                      className="flex items-center space-x-2 text-light-blue hover:text-orange-accent transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://egov.kz"
                      target="_blank"
                      className="flex items-center space-x-2 text-light-blue hover:text-orange-accent transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">{t("sendMessage")}</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder={t("yourName")}
                    className="w-full p-3 rounded-md bg-white/20 border border-white/30 placeholder-white/70 text-white"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={t("yourEmail")}
                    className="w-full p-3 rounded-md bg-white/20 border border-white/30 placeholder-white/70 text-white"
                  />
                </div>
                <div>
                  <textarea
                    placeholder={t("yourMessage")}
                    rows={4}
                    className="w-full p-3 rounded-md bg-white/20 border border-white/30 placeholder-white/70 text-white resize-none"
                  ></textarea>
                </div>
                <Button className="w-full bg-orange-accent hover:bg-orange-600 text-white">
                  <Mail className="h-4 w-4 mr-2" />
                  {t("sendButton")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/images/enic-logo.png" alt="ENIC Logo" width={24} height={24} className="h-6 w-6" />
                <span className="font-bold">ENIC</span>
              </div>
              <p className="text-gray-400">{t("footerDesc")}</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t("programs")}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-accent">
                    {t("facultyDevelopment")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-accent">
                    {t("institutionalCapacity")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-accent">
                    {t("qualityAssurance")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t("resources")}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-accent">
                    {t("research")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-accent">
                    {t("publications")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-accent">
                    {t("bestPractices")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t("connect")}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-accent">
                    {t("newsletter")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-accent">
                    {t("events")}
                  </Link>
                </li>
                <li>
                  <Link href="https://facebook.com/enic.kz" target="_blank" className="hover:text-orange-accent">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="https://egov.kz" target="_blank" className="hover:text-orange-accent">
                    egov.kz
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
