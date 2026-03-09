type MessageSchema = {
  common: {
    selectCategories: string
    selectGenres: string
    apply: string
    all: string
    selectCategoriesFirst: string
    nextEpisode: string
  }
  genres: {
    action: string
    adventure: string
    advice: string
    architecture: string
    comedy: string
    comingOfAge: string
    cooking: string
    culture: string
    drama: string
    education: string
    entertainment: string
    environment: string
    fairyTale: string
    fantasy: string
    health: string
    history: string
    horror: string
    krimi: string
    knowledge: string
    komodie: string
    medicalFiction: string
    music: string
    mystery: string
    nature: string
    nutrition: string
    economy: string
    politics: string
    romance: string
    royals: string
    satire: string
    scienceFiction: string
    sex: string
    society: string
    stars: string
    thriller: string
    travel: string
    trueCrime: string
    sports: string
  }
  category: {
    documentary: string
    movies: string
    report: string
    series: string
  }
  faq: {
    title: string
    description: string
    openFaq: string
    q1: string
    a1: string
    q2: string
    a2: string
    q3: string
    a3: string
  }
}

export type { MessageSchema }
