import { Software, TeamMember, Value } from './types';

export const SOFTWARES: Software[] = [
  {
    id: 1,
    title: "Calculadora de Pegada de Carbono",
    description: "Ferramenta precisa para medir e analisar as emissões de CO2 de indivíduos e empresas.",
    icon: "Calculator"
  },
  {
    id: 2,
    title: "Monitoramento de Consumo Energético",
    description: "Sistema em tempo real para otimizar o uso de energia e reduzir desperdícios operacionais.",
    icon: "Zap"
  },
  {
    id: 3,
    title: "Simulador de Impacto Climático",
    description: "Modelagem avançada para prever as consequências de diferentes cenários climáticos.",
    icon: "CloudRain"
  },
  {
    id: 4,
    title: "Mapeamento de Áreas de Enchentes",
    description: "Análise geoespacial para identificar e mitigar riscos de inundações na região.",
    icon: "Map"
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Otávio Henrique",
    role: "Gerente de Projetos",
    image: "/otavio.jpeg"
  },
  {
    id: 2,
    name: "João Lucas",
    role: "Engenheiro de Software",
    image: "/joao.jpeg"
  },
  {
    id: 3,
    name: "Gabriela Gomes",
    role: "Engenheira de Requisitos",
    image: "/gabi.jpeg"
  },
  {
    id: 4,
    name: "Selmí Lima",
    role: "Analista de Requisitos",
    image: "/selmir.jpeg"
  },
  {
    id: 5,
    name: "Kawan Macena",
    role: "Scrum Master",
    image: "/kawan.jpeg"
  }
];

export const VALUES: Value[] = [
  {
    title: "Sustentabilidade",
    description: "Desenvolvemos soluções que respeitam os limites do nosso planeta."
  },
  {
    title: "Inovação",
    description: "Buscamos constantemente novas formas de usar a tecnologia para o bem comum."
  },
  {
    title: "Transparência",
    description: "Acreditamos em dados abertos e processos claros para gerar confiança."
  },
  {
    title: "Impacto",
    description: "Nosso sucesso é medido pela diferença positiva que fazemos no clima."
  }
];
