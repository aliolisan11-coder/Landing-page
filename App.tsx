"use client";

import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Progress } from "./components/ui/progress";
import { Badge } from "./components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./components/ui/tabs";
import {
  Menu,
  X,
  ArrowRight,
  Users,
  Zap,
  Shield,
  BarChart3,
  Trophy,
  MapPin,
  MessageSquare,
  Download,
  Star,
  Check,
  Linkedin,
  Facebook,
  Instagram,
  QrCode,
  Award,
  Heart,
  Target,
  Lightbulb,
  TrendingUp,
  Eye,
  MousePointer,
  Smartphone,
  Clock,
  Gift,
  PlayCircle,
  Sparkles,
  Rocket,
  DollarSign,
  Users2,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function EventConnectLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPoints, setCurrentPoints] = useState(0);
  const [selectedAction, setSelectedAction] = useState("");
  const [animatedStats, setAnimatedStats] = useState([
    0, 0, 0, 0,
  ]);

  // Animação das estatísticas
  useEffect(() => {
    const targets = [1600000, 94000, 4.71, 320000];
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setAnimatedStats(
        targets.map((target) =>
          Math.floor(target * easeOutQuart),
        ),
      );

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedStats(targets);
      }
    }, increment);

    return () => clearInterval(timer);
  }, []);

  // Três pilares fundamentais
  const pillars = [
    {
      icon: Zap,
      title: "Facilidade",
      description:
        "Login simplificado via QR, Google, LinkedIn ou reconhecimento facial",
      details: "Onboarding em segundos, sem barreiras de uso",
    },
    {
      icon: Heart,
      title: "Utilidade Imediata",
      description:
        "Benefício no primeiro contato: troca de contatos instantânea",
      details:
        "Acesso a informações exclusivas e agendamentos simplificados",
    },
    {
      icon: Users,
      title: "Engajamento Social",
      description:
        "Feed de interações, gamificação e ranking de networking",
      details: "Ambiente digital atrativo de uso natural",
    },
  ];

  // Diferenciais principais
  const features = [
    {
      icon: Target,
      title: "Leve e Intuitivo",
      description:
        "Onboarding em segundos (QR/Google/LinkedIn) para máxima conversão.",
    },
    {
      icon: Heart,
      title: "Engajamento Humano",
      description:
        "Feed social, badges, desafios e ranking que amplificam conexões reais.",
    },
    {
      icon: BarChart3,
      title: "Métricas Acionáveis",
      description:
        "Leads por expositor, interações por push e decisões em tempo real.",
    },
    {
      icon: Eye,
      title: "White-label Opcional",
      description:
        "Identidade visual do evento e ativações personalizadas de patrocinador.",
    },
  ];

  // Ações gamificadas interativas
  const gamificationActions = [
    {
      action: "Compartilhar o evento",
      points: 100,
      icon: Users2,
      description: "Marcando evento e aplicativo",
    },
    {
      action: "Check-in em stands estratégicos",
      points: 50,
      icon: Target,
      description: "Visitar estandes patrocinados",
    },
    {
      action: "Participação em palestras",
      points: 20,
      icon: Users,
      description: "Presença confirmada",
    },
    {
      action: "Pergunta aceita em palestra",
      points: 15,
      icon: MessageSquare,
      description: "Interação com palestrante",
    },
    {
      action: "Networking (troca de contatos)",
      points: 10,
      icon: QrCode,
      description: "Via QR Code",
    },
    {
      action: "Interação no feed",
      points: 5,
      icon: Heart,
      description: "Curtir/comentar/postar",
    },
  ];

  const handleActionClick = (action, points) => {
    setSelectedAction(action);
    setCurrentPoints((prev) => prev + points);
  };

  // Funcionalidades
  const functionalities = [
    {
      icon: QrCode,
      title: "QR Code para Networking",
      description:
        "Troque contatos instantaneamente com leitor QR integrado.",
    },
    {
      icon: MapPin,
      title: "Mapa Interativo",
      description:
        "Navegação intuitiva entre salas, estandes e áreas do evento.",
    },
    {
      icon: MessageSquare,
      title: "Q&A e Enquetes Ao Vivo",
      description:
        "Interação direta com palestrantes e votações em tempo real.",
    },
    {
      icon: Download,
      title: "Modo Offline",
      description:
        "Acesso a agenda, contatos e informações mesmo sem internet.",
    },
  ];

  // Planos de preços
  const plans = [
    {
      name: "Basic",
      price: "Sob consulta",
      period: "por evento",
      description:
        "Ideal para eventos menores ou primeira experiência",
      features: [
        "Agenda digital",
        "Feed social",
        "Notificações push",
        "Captura básica de leads",
        "Até 500 participantes",
        "Suporte por e-mail",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "Sob consulta",
      period: "por evento",
      description: "Para eventos que buscam maior engajamento",
      features: [
        "Tudo do Basic +",
        "Gamificação completa",
        "Q&A e enquetes ao vivo",
        "Relatórios avançados",
        "White-label parcial",
        "Até 2000 participantes",
        "Suporte prioritário",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "Sob consulta",
      period: "por evento",
      description:
        "Solução completa para grandes eventos corporativos",
      features: [
        "Tudo do Pro +",
        "Mapa interativo",
        "White-label total",
        "Integrações (CRM, bilhetagem)",
        "Dashboards para expositores",
        "Participantes ilimitados",
        "Gerente dedicado",
      ],
      popular: false,
    },
  ];

  // Depoimentos
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Diretor de Eventos",
      company: "TechConference BR",
      content:
        "O engajamento aumentou 47% com a gamificação. Os participantes adoraram competir no ranking e os expositores receberam 3x mais leads qualificados.",
      rating: 5,
    },
    {
      name: "Marina Oliveira",
      role: "Coordenadora",
      company: "Feira Nacional de Negócios",
      content:
        "As métricas em tempo real nos permitiram tomar decisões rápidas durante o evento. Redirecionamos o público para áreas menos movimentadas com push notifications direcionados.",
      rating: 5,
    },
    {
      name: "Ricardo Martins",
      role: "Head de Marketing",
      company: "Startup Summit",
      content:
        "O white-label foi fundamental para manter nossa identidade. O app não parecia um produto terceirizado, mas sim uma extensão natural da nossa experiência.",
      rating: 5,
    },
  ];

  // Cases de sucesso com gamificação
  const successCases = [
    {
      metric:
        animatedStats[0] > 999999
          ? `+${(animatedStats[0] / 1000000).toFixed(1)}M`
          : `+${Math.floor(animatedStats[0] / 1000)}K`,
      description: "Downloads em app gamificado similar",
      icon: Download,
    },
    {
      metric: `${Math.floor(animatedStats[1] / 1000)}K`,
      description: "Downloads no último mês",
      icon: TrendingUp,
    },
    {
      metric: `${animatedStats[2].toFixed(2)}/5`,
      description: "Avaliação média baseada em 51K reviews",
      icon: Star,
    },
    {
      metric: `${Math.floor(animatedStats[3] / 1000)}K`,
      description: "Visitas no site no último mês",
      icon: Eye,
    },
  ];

  // Benefícios por stakeholder
  const stakeholderBenefits = [
    {
      title: "Organizadores",
      icon: Users,
      color: "blue",
      benefits: [
        "Controle de fluxo em tempo real",
        "Monetização extra com desafios patrocinados",
        "Métricas claras de engajamento",
        "Redução de custos operacionais",
      ],
    },
    {
      title: "Expositores",
      icon: Target,
      color: "green",
      benefits: [
        "3x mais leads qualificados",
        "Relatórios de leads em tempo real",
        "Dashboards premium de engajamento",
        "Integrações com CRM",
      ],
    },
    {
      title: "Patrocinadores",
      icon: DollarSign,
      color: "purple",
      benefits: [
        "Visibilidade de marca no app",
        "Push notifications patrocinados",
        "Relatórios de exposição",
        "Ativações personalizadas",
      ],
    },
  ];

  // Métricas de sucesso inicial
  const successMetrics = [
    {
      metric: "% de Download",
      description: "Participantes que baixam/entram no app",
      target: "85%+",
      icon: Smartphone,
    },
    {
      metric: "Leads Gerados",
      description: "Contatos capturados por expositores",
      target: "10x mais",
      icon: Users2,
    },
    {
      metric: "Engajamento",
      description: "Taxa de interações no feed",
      target: "47%+",
      icon: Heart,
    },
    {
      metric: "NPS Organizadores",
      description: "Feedback dos organizadores",
      target: "9.2/10",
      icon: Star,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">
                  EventConnect
                </h1>
              </div>
            </div>

            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#pillars"
                  className="text-gray-700 transition-colors hover:text-blue-600"
                >
                  Como Funciona
                </a>
                <a
                  href="#gamification"
                  className="text-gray-700 transition-colors hover:text-blue-600"
                >
                  Gamificação
                </a>
                <a
                  href="#benefits"
                  className="text-gray-700 transition-colors hover:text-blue-600"
                >
                  Benefícios
                </a>
                <a
                  href="#pilot"
                  className="text-gray-700 transition-colors hover:text-blue-600"
                >
                  Piloto Gratuito
                </a>
              </div>
            </nav>

            <div className="hidden md:block">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                <Gift className="mr-2 h-4 w-4" />
                Piloto Gratuito
              </Button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? (
                  <X size={24} />
                ) : (
                  <Menu size={24} />
                )}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden">
              <div className="space-y-1 border-t border-gray-200 px-2 pb-3 pt-2 sm:px-3">
                <a
                  href="#pillars"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  Como Funciona
                </a>
                <a
                  href="#gamification"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  Gamificação
                </a>
                <a
                  href="#benefits"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  Benefícios
                </a>
                <a
                  href="#pilot"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  Piloto Gratuito
                </a>
                <div className="px-3 py-2">
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                    <Gift className="mr-2 h-4 w-4" />
                    Piloto Gratuito
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white opacity-70"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 h-20 w-20 rounded-full bg-blue-400 opacity-20 animate-pulse"></div>
          <div className="absolute top-32 right-20 h-16 w-16 rounded-full bg-purple-400 opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 h-12 w-12 rounded-full bg-blue-300 opacity-20 animate-pulse delay-2000"></div>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
              <Sparkles className="mr-2 h-4 w-4" />
              Piloto Gratuito Disponível - Valide Hoje Mesmo
            </Badge>

            <h1 className="mb-6 text-4xl font-black leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              <span className="block mb-2">
                Eventos são sobre
              </span>
              <span className="text-blue-600">
                conexões humanas.
              </span>
              <span className="block mt-2 text-3xl sm:text-4xl lg:text-5xl">
                Nós as amplificamos.
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-600">
              Não estamos vendendo tecnologia.{" "}
              <strong>
                Estamos entregando experiências humanas
                ampliadas pela inovação.
              </strong>
              Mais engajamento, mais networking e até 10x mais
              leads com o app oficial do seu evento.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-blue-600 px-8 py-3 text-white hover:bg-blue-700 shadow-lg"
              >
                <Gift className="mr-2 h-5 w-5" />
                Começar Piloto Gratuito
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 bg-transparent px-8 py-3 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Ver Demo Interativa
              </Button>
            </div>

            <div className="mt-12">
              <p className="mb-6 text-sm text-gray-500">
                <strong>
                  Entrada no mercado via pilotos gratuitos
                </strong>{" "}
                - Coletando cases e dados que validam a solução
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
                <div className="text-lg font-semibold text-gray-700 flex items-center">
                  <Target className="mr-2 h-5 w-5" />
                  Feiras B2B
                </div>
                <div className="text-lg font-semibold text-gray-700 flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Congressos
                </div>
                <div className="text-lg font-semibold text-gray-700 flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Corporativos
                </div>
                <div className="text-lg font-semibold text-gray-700 flex items-center">
                  <Heart className="mr-2 h-5 w-5" />
                  Festivais
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas Animadas */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Resultados Comprovados em Gamificação
            </h2>
            <p className="text-gray-600">
              Dados reais de apps similares que implementaram
              gamificação
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {successCases.map((caseItem, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg bg-white/80 backdrop-blur transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 cursor-pointer group"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-500 transition-colors duration-300">
                      <caseItem.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {caseItem.metric}
                  </div>
                  <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {caseItem.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Três Pilares Fundamentais */}
      <section id="pillars" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-gray-900 sm:text-4xl">
              Os 3 Pilares do Sucesso
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Para que o público use o app de forma espontânea,
              garantimos três elementos essenciais que criam um
              ambiente digital atrativo de uso natural.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-16">
            {pillars.map((pillar, index) => (
              <Card
                key={index}
                className="border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 bg-gradient-to-br from-white to-blue-50"
              >
                <CardHeader className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 ring-4 ring-blue-50">
                      <pillar.icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-blue-900">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="mb-4 font-medium text-gray-900">
                    {pillar.description}
                  </p>
                  <p className="text-sm text-gray-600">
                    {pillar.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-16 text-center">
            <h3 className="mb-8 text-2xl font-bold text-gray-900">
              Diferenciais Estratégicos
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-gray-200 transition-shadow hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gamificação Interativa */}
      <section
        id="gamification"
        className="bg-gradient-to-br from-purple-50 via-blue-50 to-white py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-gray-900 sm:text-4xl">
              Gamificação que Gera Resultados
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              <strong>Objetivo psicológico:</strong>{" "}
              Competitividade saudável que desperta a vontade de
              vencer, oferece recompensa imediata e torna o app
              parte essencial da experiência.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                <Trophy className="inline mr-3 h-8 w-8 text-yellow-500" />
                Simulador de Pontos Interativo
              </h3>

              <Card className="mb-6 bg-white border-2 border-blue-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Seus Pontos</CardTitle>
                      <CardDescription>
                        Clique nas ações abaixo para simular
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-600">
                        {currentPoints}
                      </div>
                      <div className="text-sm text-gray-500">
                        pontos totais
                      </div>
                    </div>
                  </div>
                </CardHeader>
                {selectedAction && (
                  <CardContent>
                    <div className="text-sm text-green-600 font-medium">
                      ✅ {selectedAction}
                    </div>
                  </CardContent>
                )}
              </Card>

              <div className="space-y-3">
                {gamificationActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full p-4 h-auto justify-start text-left hover:bg-blue-50 hover:border-blue-300 transition-all"
                    onClick={() =>
                      handleActionClick(
                        action.action,
                        action.points,
                      )
                    }
                  >
                    <div className="flex items-center w-full">
                      <div className="flex-shrink-0 mr-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                          <action.icon className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <p className="font-medium text-gray-900">
                          {action.action}
                        </p>
                        <p className="text-sm text-gray-600">
                          {action.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant="secondary"
                          className="bg-blue-100 text-blue-800"
                        >
                          +{action.points} pts
                        </Badge>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>

              <Card className="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Gift className="h-6 w-6 text-orange-500 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">
                        Premiação Estratégica
                      </p>
                      <p className="text-sm text-gray-600">
                        1º, 2º e 3º lugar recebem brindes
                        exclusivos, ingressos para próxima
                        edição ou produtos dos patrocinadores
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                <Target className="inline mr-3 h-8 w-8 text-green-500" />
                Benefícios Estratégicos
              </h3>

              <div className="space-y-6">
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <MousePointer className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-900">
                          Controle de Fluxo Inteligente
                        </p>
                        <p className="text-gray-600">
                          Direcione visitantes para áreas
                          estratégicas com pontuação ajustável
                          em tempo real
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <DollarSign className="h-6 w-6 text-purple-600" />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-900">
                          Monetização Extra
                        </p>
                        <p className="text-gray-600">
                          Empresas pagam para inserir desafios
                          ligados aos seus stands
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <BarChart3 className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-900">
                          Métricas Acionáveis
                        </p>
                        <p className="text-gray-600">
                          Dados de engajamento individual e
                          coletivo para decisões rápidas
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 bg-orange-50">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <Sparkles className="h-6 w-6 text-orange-600" />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-900">
                          Buzz Pós-Evento
                        </p>
                        <p className="text-gray-600">
                          Premiação no final fortalece a
                          lembrança da marca e gera
                          compartilhamentos
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
                <h4 className="font-bold mb-2">
                  Resultado Comprovado
                </h4>
                <p className="text-blue-100 mb-4">
                  "O engajamento aumentou 47% com a gamificação.
                  Os participantes adoraram competir no
                  ranking."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Carlos Silva</p>
                    <p className="text-blue-200 text-sm">
                      TechConference BR
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios por Stakeholder */}
      <section id="benefits" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-gray-900 sm:text-4xl">
              Benefícios para Todos os Envolvidos
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Nossa plataforma conecta participantes,
              expositores e organizadores em tempo real, criando
              valor para todos os stakeholders do evento.
            </p>
          </div>

          <Tabs defaultValue="organizadores" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger
                value="organizadores"
                className="flex items-center"
              >
                <Users className="mr-2 h-4 w-4" />
                Organizadores
              </TabsTrigger>
              <TabsTrigger
                value="expositores"
                className="flex items-center"
              >
                <Target className="mr-2 h-4 w-4" />
                Expositores
              </TabsTrigger>
              <TabsTrigger
                value="patrocinadores"
                className="flex items-center"
              >
                <DollarSign className="mr-2 h-4 w-4" />
                Patrocinadores
              </TabsTrigger>
            </TabsList>

            {stakeholderBenefits.map((stakeholder, index) => (
              <TabsContent
                key={index}
                value={stakeholder.title.toLowerCase()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Card
                      className={`border-${stakeholder.color}-200 bg-${stakeholder.color}-50`}
                    >
                      <CardHeader>
                        <div className="flex items-center">
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-lg bg-${stakeholder.color}-100 mr-4`}
                          >
                            <stakeholder.icon
                              className={`h-6 w-6 text-${stakeholder.color}-600`}
                            />
                          </div>
                          <div>
                            <CardTitle className="text-2xl">
                              Para {stakeholder.title}
                            </CardTitle>
                            <CardDescription>
                              Benefícios específicos e
                              mensuráveis
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {stakeholder.benefits.map(
                            (benefit, benefitIndex) => (
                              <li
                                key={benefitIndex}
                                className="flex items-start"
                              >
                                <Check
                                  className={`mr-3 h-5 w-5 flex-shrink-0 text-${stakeholder.color}-600 mt-0.5`}
                                />
                                <span className="text-gray-700">
                                  {benefit}
                                </span>
                              </li>
                            ),
                          )}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-4">
                    {stakeholder.title === "Organizadores" && (
                      <>
                        <Card>
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="font-semibold">
                                Redução de Custos Operacionais
                              </h4>
                              <Badge className="bg-green-100 text-green-800">
                                -30%
                              </Badge>
                            </div>
                            <Progress
                              value={70}
                              className="mb-2"
                            />
                            <p className="text-sm text-gray-600">
                              Automatização de processos manuais
                            </p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="font-semibold">
                                Aumento no Engajamento
                              </h4>
                              <Badge className="bg-blue-100 text-blue-800">
                                +47%
                              </Badge>
                            </div>
                            <Progress
                              value={85}
                              className="mb-2"
                            />
                            <p className="text-sm text-gray-600">
                              Participação ativa no evento
                            </p>
                          </CardContent>
                        </Card>
                      </>
                    )}

                    {stakeholder.title === "Expositores" && (
                      <>
                        <Card>
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="font-semibold">
                                Geração de Leads
                              </h4>
                              <Badge className="bg-green-100 text-green-800">
                                10x mais
                              </Badge>
                            </div>
                            <Progress
                              value={90}
                              className="mb-2"
                            />
                            <p className="text-sm text-gray-600">
                              Leads qualificados com dados
                              completos
                            </p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="font-semibold">
                                Tempo de Permanência
                              </h4>
                              <Badge className="bg-purple-100 text-purple-800">
                                +65%
                              </Badge>
                            </div>
                            <Progress
                              value={75}
                              className="mb-2"
                            />
                            <p className="text-sm text-gray-600">
                              Visitantes permanecem mais tempo
                              no stand
                            </p>
                          </CardContent>
                        </Card>
                      </>
                    )}

                    {stakeholder.title === "Patrocinadores" && (
                      <>
                        <Card>
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="font-semibold">
                                Visibilidade de Marca
                              </h4>
                              <Badge className="bg-blue-100 text-blue-800">
                                +200%
                              </Badge>
                            </div>
                            <Progress
                              value={95}
                              className="mb-2"
                            />
                            <p className="text-sm text-gray-600">
                              Exposição contínua durante todo o
                              evento
                            </p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="font-semibold">
                                ROI Mensurável
                              </h4>
                              <Badge className="bg-green-100 text-green-800">
                                +150%
                              </Badge>
                            </div>
                            <Progress
                              value={80}
                              className="mb-2"
                            />
                            <p className="text-sm text-gray-600">
                              Relatórios detalhados de
                              performance
                            </p>
                          </CardContent>
                        </Card>
                      </>
                    )}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-16">
            <h3 className="mb-8 text-2xl font-bold text-gray-900 text-center">
              Funcionalidades Completas
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {functionalities.map((func, index) => (
                <Card
                  key={index}
                  className="border-gray-200 transition-shadow hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                      <func.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {func.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed text-gray-600">
                      {func.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Piloto Gratuito */}
      <section
        id="pilot"
        className="bg-gradient-to-r from-green-50 to-blue-50 py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
              <Gift className="mr-2 h-4 w-4" />
              Estratégia de Entrada no Mercado
            </Badge>
            <h2 className="mb-4 text-3xl font-black text-gray-900 sm:text-4xl">
              Piloto Gratuito para Validação
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Nossa entrada no mercado é via{" "}
              <strong>pilotos gratuitos</strong>, coletando
              cases e dados que validem a solução e fortaleçam
              sua escalabilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-12">
            <Card className="border-green-200 bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Rocket className="mr-3 h-8 w-8 text-green-600" />
                  Por que Piloto Gratuito?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="mr-3 h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-medium">
                        Validação Real
                      </p>
                      <p className="text-sm text-gray-600">
                        Coletar dados reais de uso e feedback
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-medium">
                        Cases de Sucesso
                      </p>
                      <p className="text-sm text-gray-600">
                        Construir portfólio com resultados
                        mensuráveis
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-medium">
                        Refinamento do Produto
                      </p>
                      <p className="text-sm text-gray-600">
                        Ajustar funcionalidades baseado no uso
                        real
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-medium">
                        Relacionamento
                      </p>
                      <p className="text-sm text-gray-600">
                        Estabelecer confiança com organizadores
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <BarChart3 className="mr-3 h-8 w-8 text-blue-600" />
                  Métricas de Sucesso
                </CardTitle>
                <CardDescription>
                  O que vamos medir desde o primeiro evento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {successMetrics.map((metric, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center">
                        <metric.icon className="h-5 w-5 text-blue-600 mr-3" />
                        <div>
                          <p className="font-medium text-sm">
                            {metric.metric}
                          </p>
                          <p className="text-xs text-gray-600">
                            {metric.description}
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">
                        {metric.target}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="mb-8 text-2xl font-bold text-gray-900">
              O que nossos pilotos já comprovaram
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-gray-200 bg-white shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex">
                    {[...Array(testimonial.rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ),
                    )}
                  </div>
                  <blockquote className="mb-4 italic leading-relaxed text-gray-700">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planos de Preços */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-gray-900 sm:text-4xl">
              Planos Flexíveis para Seu Evento
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Escolha a solução ideal para o tamanho e
              complexidade do seu evento
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-gray-200 ${plan.popular ? "scale-105 shadow-lg ring-2 ring-blue-600" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
                    <span className="rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                      Mais Popular
                    </span>
                  </div>
                )}

                <CardHeader className="pb-8 text-center">
                  <CardTitle className="text-2xl font-bold">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-black text-blue-600">
                      {plan.price}
                    </span>
                    <span className="text-gray-600">
                      {plan.period}
                    </span>
                  </div>
                  <CardDescription className="mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="mb-8 space-y-3">
                    {plan.features.map(
                      (feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center"
                        >
                          <Check className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                          <span className="text-gray-700">
                            {feature}
                          </span>
                        </li>
                      ),
                    )}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    Solicitar Cotação
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comunidades Digitais Duradouras */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black sm:text-4xl">
              Criando Comunidades que Transcendem o Evento
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-blue-100">
              <strong>O objetivo é claro:</strong> criar
              comunidades digitais ativas antes, durante e
              depois do evento, estendendo sua relevância e
              impacto para além do físico.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-16">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center">
                  <Clock className="h-8 w-8 text-blue-300 mr-3" />
                  <CardTitle>Antes do Evento</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-blue-100">
                  <li>• Networking antecipado</li>
                  <li>• Agenda personalizada</li>
                  <li>• Expectativas e discussões</li>
                  <li>• Match de interesses</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-purple-300 mr-3" />
                  <CardTitle>Durante o Evento</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-blue-100">
                  <li>• Interação em tempo real</li>
                  <li>• Gamificação ativa</li>
                  <li>• Troca de contatos facilitada</li>
                  <li>• Feed social dinâmico</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center">
                  <Heart className="h-8 w-8 text-pink-300 mr-3" />
                  <CardTitle>Depois do Evento</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-blue-100">
                  <li>• Continuidade das conexões</li>
                  <li>• Acesso a conteúdos exclusivos</li>
                  <li>• Preparação para próxima edição</li>
                  <li>• Comunidade ativa permanente</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <blockquote className="text-2xl italic mb-8 text-blue-100">
              "Eventos são sobre conexões. Nosso app não
              substitui isso, ele amplia. Ele ajuda quem é
              tímido a se conectar, ajuda quem expõe a se
              destacar e ajuda o organizador a mostrar que está
              anos à frente da concorrência."
            </blockquote>
            <p className="text-lg text-blue-200 mb-8">
              Em outras palavras, não estamos vendendo
              tecnologia.
              <strong>
                {" "}
                Estamos entregando experiências humanas
                ampliadas pela inovação.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-black text-white sm:text-4xl">
              Pronto para Revolucionar Seu Próximo Evento?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
              Comece com um <strong>piloto gratuito</strong> e
              comprove os resultados. Sem compromisso, sem
              custos, apenas resultados mensuráveis.
            </p>

            <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-4 sm:flex-row mb-8">
              <Input
                type="email"
                placeholder="Seu e-mail corporativo"
                className="flex-1 border-gray-300 bg-white text-gray-900"
              />
              <Button className="bg-white px-6 text-blue-600 hover:bg-gray-100">
                <Gift className="mr-2 h-4 w-4" />
                Piloto Gratuito
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-blue-200 text-sm">
              <div className="flex items-center justify-center">
                <Check className="mr-2 h-4 w-4" />
                Sem compromisso
              </div>
              <div className="flex items-center justify-center">
                <Check className="mr-2 h-4 w-4" />
                Implementação gratuita
              </div>
              <div className="flex items-center justify-center">
                <Check className="mr-2 h-4 w-4" />
                Suporte completo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="col-span-1 md:col-span-2">
              <h3 className="mb-4 text-2xl font-bold text-blue-600">
                EventConnect
              </h3>
              <p className="mb-4 max-w-md text-gray-600">
                Transformando eventos em experiências digitais
                completas. Conectando pessoas, gerando dados
                valiosos e criando comunidades que perduram além
                do evento físico.
              </p>
              <div className="mb-4">
                <Badge className="bg-blue-100 text-blue-800 mr-2">
                  Piloto Gratuito Disponível
                </Badge>
                <Badge className="bg-green-100 text-green-800">
                  Cases Comprovados
                </Badge>
              </div>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-500 transition-colors hover:text-blue-600"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-500 transition-colors hover:text-blue-600"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-500 transition-colors hover:text-blue-600"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-gray-900">
                Soluções
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors hover:text-blue-600"
                  >
                    Para Organizadores
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors hover:text-blue-600"
                  >
                    Para Expositores
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors hover:text-blue-600"
                  >
                    Para Patrocinadores
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors hover:text-blue-600"
                  >
                    Cases de Sucesso
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-gray-900">
                Recursos
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors hover:text-blue-600"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors hover:text-blue-600"
                  >
                    Centro de Ajuda
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors hover:text-blue-600"
                  >
                    Webinars
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors hover:text-blue-600"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-200 pt-8 sm:flex-row">
            <p className="text-sm text-gray-600">
              © 2025 EventConnect. Todos os direitos
              reservados.
            </p>
            <div className="mt-4 flex space-x-6 sm:mt-0">
              <a
                href="#"
                className="text-sm text-gray-600 transition-colors hover:text-blue-600"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 transition-colors hover:text-blue-600"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}