// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const characters = [
  {
    name: "Miguel Angel Felix Gallardo",
    cartel: "Guadalajara Cartel",
    description: "The leader of the Guadalajara Cartel and founder of the modern Mexican drug trade. Refered to as the Rockefeller of marijuana before moving on to cocaine-business",
  },
  {
    name: "Kiki Camerana",
    cartel: "DEA",
    description: "a DEA agent who garners valuable intel about Félix's organization",
  },
  {
    name: "Rafael 'Rafa' Caro Quintero",
    cartel: "Guadalajara Cartel",
    description: "Felix's partner",
  },
  {
    name: "Amado Carrillo Fuentes",
    cartel: "Juarez Cartel",
    description: "Once Felix's partner, who now runs the Juarez Cartel. Real talented smugler for old organization that Felix built",
  },
  {
    name: "Joaquin 'ElChapo' Guzman",
    cartel: "Sinaloa Cartel",
    description: "Hard working smugler who runs the Sinaloan Cartel. Enjoys building tunnels and is not too fond of the Tijuana Cartel",
  },
  {
    name: "Walt Breslin",
    cartel: "DEA",
    description: "Narrator of the story. After the death of DEA agent Kiki Camerana, Breslin decides to go down to Mexico and avenge his fellow agent.",
  },
  {
    name: "Benjamin Arellano Felix",
    cartel: "Tijuana Cartel",
    description: "He and his brother, Ramon, and sister, Enedina, ran the Tijuana cartel together. Hungry for power and ambitious workers they viewed Felix and his operation as demeaning",
  },
  {
    name: "Helmer 'Pacho' Herrera",
    cartel: "Cali Cartel",
    description: "Pacho has strong ties with the mexican drug cartel and is close with Amado Carillo Fuentes. His cartel is at war with Pablo Escobar cartel, Medellin cartel, and having the best routes to America for their product is of huge importance to him and his partners",
  }
]

export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body
    characters.push(data)
    res.status(201).json({ success: true, data: characters }) //201 = Created
  } else if (req.method === 'PUT') {
    res.status(405).end() //405 = Not allowed
  } else {
    res.status(200).json({ success: true, data: characters }) //200 = Ok
  }
}