export type Institucion = {
  siglas?: string;
  nombre: string;
};

export type Tramite = {
  label: string,
  instituciones?: Institucion[];
  categoria?: string;
};

export type Servicio = {
  cardLabel: string;
  title: string;
  descripcion: string;
  icon: string;
  href: string;
  tramites: Tramite[];
  bgImg: string;
};

const servicios: Servicio[] = [
  {
    cardLabel: "Jurídico Fiscal y Administrativo",
    title: "Servicios Jurídicos En Materia Fiscal y Administrativa",
    descripcion:
      "Asesoría profesional para resolver obligaciones ante autoridades, evitando complicaciones y asegurando resultados claros.",
    icon: "mdi:legal", 
    href: "juridico-fiscal-administrativo",
    tramites: [
      {
        label:
          "Créditos fiscales del IMSS e INFONAVIT derivados de obligaciones patronales",
      },
      { label: "Pensiones ISSSTE" },
      {
        label: "Multas administrativas ",
        instituciones: [
          { siglas: "PROFECO", nombre: "Procuraduría Federal del Consumidor"},
          { siglas: "CONAGUA", nombre: "Comision Nacional del Agua" },
          {
            siglas: "STPS",
            nombre: "Secretaria del Trabajo y Previsión Social",
          },
        ],
      },
      {
        label: "Boletas de infracción",
        instituciones: [
          {
            siglas: "SICT",
            nombre:
              "Secretaría de Infraestructura, comunicaciones y Transportes",
          },
          { nombre: "Guardia Nacional" },
        ],
      },
      {
        label:
          "Créditos fiscales y multas del SAT o Fianzas Puebla, en términos del Código Fiscal de la Federación",
      },
      {
        label:
          "Defensa de actos administrativos en generl, conforme a la Ley Federal de Procedimiento Administrativo",
      },
    ],
    bgImg: "/derecho-fiscal-bg.jpg"
  },
  {
    cardLabel: "Servicios Notariales",
    title: "Servicios Juridicos Notariales",
    descripcion:
      "Gestión experta para regularizar escrituras y agilizar tus trámites notariales pendientes.",
    icon: "mdi:book",
    href: "notariales",
    tramites: [
      { label: "Procedimientos de queja notarial" },
      { label: "Regularización de escrituras y documentos no protocolizados" },
      { label: "Gestiones ante Catastro y dependencias municipales" },
      {
        label: "Busqueda de inmuebles, inscripciones y gravámenes",
        categoria: "registral",
      },
      {
        label: "Certificados de libertad de gravámen",
        categoria: "registral",
      },
      {
        label: "Cancelaciones o anotaciones marginales",
        categoria: "registral",
      },
      {
        label: "Recursos administrativos registrales",
        categoria: "registral",
      },
      { label: "Cotización y revisión de escrituras antes de su firma" },
      {
        label:
          "Elaboración y revisión de contratos (compraventa, donación, cesión de derechos",
      },
      {
        label:
          "Gestión de poderes notariales, testamentos y cancelaciones de hipoteca",
      },
    ],
    bgImg: "/notary-bg.jpg"
  },
  {
    cardLabel: "Civil, Familiar y Amparo",
    title: "Servicios jurídicos en materia civil, familiar, registral y amparo",
    descripcion:
      "Protección legal integral en asuntos familiares, registrales, ejidales y juicios de amparo.",
    icon: "mdi:shield",
    href: "civil-familiar-amparo",
    tramites: [
      { label: "Contratos civiles" },
      { label: "Desocupación y recuperación de inmuebles" },
      { label: "Rectificación de medidas y colindancias" },
      { label: "Reclamaciones por daño moral" },
      { label: "Juicios de alimentos y pensiones" },
      { label: "Divorcios" },
      { label: "Guardia y custodia de menores" },
      { label: "Sucesiones y adjudicación de bienes" },
      { label: "Trámites ante el Registro Civil" },
      {
        label:
          "Gestiones ante el Registro Público de la Propiedad y del Comercio",
      },
      {
        label: "Juicios de amparo en materia civil, familiar y administrativa",
      },
      { label: "Regularización de ejidos y derechos agrarios" },
    ],
    bgImg: "/fam-law-bg.jpg"
  },
];

export default servicios;
