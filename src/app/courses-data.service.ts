import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesDataService {
  public inorganic_11 = ["Periodicity and Classification of Elements",
    "Chemical Bonding and its Molecular Structure",
    "Hydrogen",
    "The s-Block Elements",
    "The p-Block Elements - Boron & Carbon Family"
  ];
  public organic_11 = ["General Organic Chemistry – Some Basic Principles and Techniques, IUPAC Nomenclature",
    "Isomerism",
    "GOC I ",
    "GOC II",
    "Hydrocarbon",
    "Environmental Chemistry"
  ];
  public physical_11 = ["Some Basics of Chemistry - Mole Concept",
    "Structure of Atom",
    "States of Matter",
    "Thermodynamics",
    "Chemical Equilibrium",
    "Ionic Equilibrium",
    "Redox Reactions"
  ];
  public inorganic_12 = ["The p-Block Elements",
    "The d-and f-block Elements",
    "Coordination Compounds",
    "General Principles and Processes of Isolation of Elements"
  ];
  public organic_12 = ["Haloalkanes and Haloarenes",
    "Alcohols, Phenols, and Ethers",
    "Aldehydes, Ketones and Carboxylic acids",
    "Amines",
    "Biomolecules",
    "Polymer",
    "Chemistry in Everyday Life"
  ];
  public physical_12 = ["Solid State",
    "Solutions",
    "Electrochemistry",
    "Chemical Kinetics",
    "Surface chemistry"
  ];
  public inorganic_mix = ["Periodicity and Classification of Elements",
    "Chemical Bonding and its Molecular Structure",
    "Hydrogen",
    "The s-Block Elements",
    "The p-Block Elements - Boron & Carbon Family",
    "The p-Block Elements",
    "The d-and f-block Elements",
    "Coordination Compounds",
    "General Principles and Processes of Isolation of Elements"
  ];
  public organic_mix = ["General Organic Chemistry – Some Basic Principles and Techniques. IUPAC Nomenclature",
    "Isomerism",
    "GOC I",
    "GOC II",
    "Hydrocarbon",
    "Environmental Chemistry",
    "Haloalkanes and Haloarenes",
    "Alcohols, Phenols, and Ethers",
    "Aldehydes, Ketones and Carboxylic acids",
    "Amines",
    "Biomolecules",
    "Polymer",
    "Chemistry in Everyday Life"
  ];
  public physical_mix = ["Some Basics Concepts of Chemistry - Mole Concept",
    "Structure of Atom",
    "States of Matter",
    "Thermodynamics",
    "Chemical Equilibrium",
    "Ionic Equilibrium",
    "Redox Reactions",
    "Solid State",
    "Solutions",
    "Electrochemistry",
    "Chemical Kinetics",
    "Surface chemistry"
  ];

  constructor() { }

  getCourses() {
    return [
      {
        "id": "1",
        "title": "Chemistry Course for Neet Droppers (NEET-21)",
        "img": "assets/images/courses/droppers.jpeg",
        "teacher": "Dr. Slok Sir",
        "class": "class 11 and 12",
        "price": "10,000",
        "cutPrice": "30,000",
        "physicalSyllabus": this.physical_mix,
        "organicSyllabus": this.organic_mix,
        "inorganicSyllabus": this.inorganic_mix,
      },
      {
        "id": "2",
        "title": "Chemistry Course for Class 11 (NEET-22)",
        "img": "assets/images/courses/11th.jpeg",
        "teacher": "Dr. Slok Sir",
        "class": "class 11",
        "price": "12,000",
        "cutPrice": "25,000",
        "physicalSyllabus": this.physical_11,
        "organicSyllabus": this.organic_11,
        "inorganicSyllabus": this.inorganic_11,
      },
      {
        "id": "3",
        "title": "Chemistry Course for Class 12 (NEET-21)",
        "img": "assets/images/courses/12th.jpeg",
        "teacher": "Dr. Slok Sir",
        "class": "class 12",
        "price": "12,000",
        "cutPrice": "25,000",
        "physicalSyllabus": this.physical_12,
        "organicSyllabus": this.organic_12,
        "inorganicSyllabus": this.inorganic_12,
      },
      {
        "id": "4",
        "title": "Chemistry Course for Freshers (NEET-22)",
        "img": "assets/images/courses/freshers.jpeg",
        "teacher": "Dr. Slok Sir",
        "class": "class 11 and 12",
        "price": "12,000",
        "cutPrice": "35,000",
        "physicalSyllabus": this.physical_mix,
        "organicSyllabus": this.organic_mix,
        "inorganicSyllabus": this.inorganic_mix,
      },
    ]
  }
}
