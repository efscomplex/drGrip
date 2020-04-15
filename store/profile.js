export default {
      avatar: {
            src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      },
      name:{
            firstname:"edgar ",
            lastname: "ferrer serrano",
      },
      heading: "Matemàtic, docent i programador web",
      //about: "Experienced Maths Professor with a demonstrated history of working in the secondary level of education and university. Skilled in LaTeX, JavaScript and all web dessign technologies. Strong education professional with a Master en Optica y optometria focused in Colorimetría from Universitat Politècnica de Catalunya. ",
      about: "Professor de matemàtiques experimentat amb una història demostrada del seu treball a l'educació secundària i a la universitat. Habilitat en LaTeX, JavaScript i totes les tecnologies de disseny web. Professional d’educació forta amb un màster en òptica i optometria centrat en Colorimetria de la Universitat Politècnica de Catalunya.",
      contact: {
           mobile: "688920162",
           email: "efscomplex@gmail.com",
           address: {
                 street: "C/Antonio Ricardos",
                  code: "08027",
                  city: "barcelona"},
            social:[
                  {
                        network: "linkedin",
                        link: "https://www.linkedin.com/in/edgar-ferrer-8499517b/",
                  },
            ]
     },
     experience: [
           {
                 position: "professor",
                 company: "academia guiu",
                 date: "dec. 2014 - Actualitat ",
                 description: "Docència - Matemàtiques",
           },
           {
                 position: "professor",
                 company: "Jesuites - Sarrià Sant Ignasi",
                 date: "Gener 2020 - Febrer 2020 ",
                 description: "Docència - ESO i Batx.",
           },
           {
                 position: "professor associat",
                 company: "Universitat  de barcelona",
                 date: "Octubre 2018 - Desembre 2018 ",
                 description: "Docència - Càlcul I",
           },
           {
                 position: "Investigador",
                 company: "Universitat  Politècnica de Catalunya",
                 date: "Octubre 2009 - Desembre 2014 ",
                 description: "Tecnologia del Color",
           },
           {
                 position: "Dissenyador",
                 company: "CRM - Centre de Recerca Matemàtica",
                 date: "Setembre 2006 - Febrer 2007 ",
                 description: "Disseny web i Maquetació",
           },
     ],
     education:[
           {
                  pic:{filename: "uab.png",},
                  school: "Universitat autònoma de barcelona",
                  degree: "CAP - Certificat d'Aptitud Pedagógica",
                  discipline: "matemàtiques",
                  //note: "Certificat d'Aptitud Pedagógica",
                  date: "2004 – 2005",
           },
           {
                  pic:{filename: "upc.png",},
                  school: "Universitat Politècnica de Catalunya",
                  degree: "Màster en Óptica i Optometria",
                  discipline: "Òptica",
                  note: "Especialitzat en Colorimetria",
                  date: "2009 – 20012",
           },
     ],
     languages:[
           { 
                 lang: "Català",
                  level: "100",
                  description: "Llengua materna" 
            },
           { 
                 lang: "Castellà",
                  level: "100",
                  description: "Llengua materna" 
            },
           { 
                 lang: "Anglès",
                  level: "70",
                  description: "Llengua acadèmica" 
            },
     ],
     competences:[
           {
                  sector: "Ofimàtica",
                  skills:[
                        {
                              name: "Office",
                              category: "Edició de texte i contingut",
                              level: "4"
                        },
                  ]
           },
           {
                 sector: "Frontend",
                 skills:[
                        { name:"HTML5",level: "4"},
                        { name:"JavaScript",level: "4"},
                        { name:"git",level: "2"},
                        { name:"ReactJS",level: "4"},
                        { name:"VueJS",level: "4"},
                 ]
           },
           {
                 sector: "Recerca",
                 skills:[
                        {
                              name: "Colorimetria",
                              category: "Ciència del Color"
                        },
                        {
                              name: "Speech to Text and viceversa",
                              category: "Reconeixement de veu"
                        },
                        {
                              name: "LaTex",
                              category: "Editor de texte científic",
                              level: "4"
                        },
                        { name:"Matlab",level: "4"},
                 ]
           },
           {
                 sector: "Educació",
                 skills:[
                       {
                             name: "Pedagogia",
                             category: "Innovació Tenològica i Digital"
                       },
                        {
                              name: "Docència",
                              category: "Professor de secundària i universitat"
                        },
                 ]
           }
     ]
}
