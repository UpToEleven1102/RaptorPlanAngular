import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClassService {
    classList = [
        {
            id: 1,
            subject: 'MATH',
            code: 'MATH181',
            credit: 4,
            title: 'Calculus I',
            attribute: ['math_foundation']
        }
        ,
        {
            id: 2,
            subject: 'MATH',
            code: 'MATH182',
            credit: 4,
            title: 'Calculus II',
            attribute: ['math_foundation']
        }
        ,
        {
            id: 3,
            subject: 'MATH',
            code: 'MATH280',
            credit: 4,
            title: 'Multivariable Calculus',
            attribute: ['electives', 'math_foundation']
        }
        ,
        {
            id: 4,
            subject: 'MATH',
            code: 'MATH282',
            credit: 3,
            title: 'Differential Equations',
            attribute: ['electives', 'math_foundation']
        }
        ,
        {
            id: 5,
            subject: 'CMSC',
            code: 'CMSC141',
            credit: 3,
            title: 'Intro to Programming',
            attribute: ['electives']
        }
        ,
        {
            id: 6,
            subject: 'CMSC',
            code: 'CMSC203',
            credit: 4,
            title: 'Computer Science I',
            attribute: ['electives']
        }
        ,
        {
            id: 7,
            subject: 'CMSC',
            code: 'CMSC204',
            credit: 4,
            title: 'Computer Science II',
            attribute: ['electives']
        }
        ,
        {
            id: 8,
            subject: 'CMSC',
            code: 'CMSC207',
            credit: 4,
            title: 'Discrete Structures',
            attribute: ['electives']
        }
        ,
        {
            id: 9,
            subject: 'COMM',
            code: 'COMM108',
            credit: 3,
            title: 'Found Human Communication',
            attribute: ['humanities_distribution', 'speech_foundation']
        }
        ,
        {
            id: 10,
            subject: 'ARTT',
            code: 'ARTT100',
            credit: 3,
            title: 'Introduction to Drawing',
            attribute: ['art_distribution']
        }
        ,
        {
            id: 11,
            subject: 'ARTT',
            code: 'ART120',
            credit: 4,
            title: 'Ceramics',
            attribute: ['art_distribution']
        }
        ,
        {
            id: 12,
            subject: 'PHOT',
            code: 'PHOT161',
            credit: 3,
            title: 'Intro to Digital Photography',
            attribute: ['art_distribution']
        }
        ,
        {
            id: 13,
            subject: 'CHIN',
            code: 'CHIN101',
            credit: 5,
            title: 'Chinese',
            attribute: ['humanities_distribution']
        }
        ,
        {
            id: 14,
            subject: 'PHIL',
            code: 'PHIL205',
            credit: 4,
            title: 'Philosophy in Literature',
            attribute: ['humanities_distribution']
        }
        ,
        {
            id: 15,
            subject: 'HIST',
            code: 'HIST250',
            credit: 4,
            title: 'Modern Asia',
            attribute: ['humanities_distribution']
        }
        ,
        {
            id: 16,
            subject: 'ENGL',
            code: 'ENGL230',
            credit: 4,
            title: 'Intro to Modern Drama',
            attribute: ['humanities_distribution']
        }
        ,
        {
            id: 17,
            subject: 'BIOL',
            code: 'BIOL101',
            credit: 4,
            title: 'General Biology',
            attribute: ['natural_science_lab_distribution']
        }
        ,
        {
            id: 18,
            subject: 'BIOL',
            code: 'BIOL130',
            credit: 4,
            title: 'The Human Body',
            attribute: ['natural_science_lab_distribution']
        }
        ,
        {
            id: 19,
            subject: 'BIOL',
            code: 'BIOL101',
            credit: 4,
            title: 'General Biology',
            attribute: ['natural_science_lab_distribution']
        }
        ,
        {
            id: 20,
            subject: 'CHEM',
            code: 'CHEM109',
            credit: 4,
            title: 'Chemistry and Society',
            attribute: ['natural_science_lab_distribution']
        }
        ,
        {
            id: 21,
            subject: 'BIOL',
            code: 'BIOL101',
            credit: 4,
            title: 'General Biology',
            attribute: ['natural_science_lab_distribution']
        }
        ,
        {
            id: 22,
            subject: 'ARTT',
            code: 'ARTT105',
            credit: 3,
            title: 'Color Theory & Application',
            attribute: ['art_distribution']
        }
        ,
        {
            id: 23,
            subject: 'ARTT',
            code: 'ARTT112',
            credit: 4,
            title: 'Digital Photography/Fine Art I',
            attribute: ['art_distribution']
        }
        ,
        {
            id: 24,
            subject: 'ARTT',
            code: 'ARTT225',
            credit: 4,
            title: 'World Woodcut Traditions',
            attribute: ['art_distribution']
        }
        ,
        {
            id: 25,
            subject: 'ARTT',
            code: 'ART247',
            credit: 3,
            title: 'Weaving & Textiles',
            attribute: ['art_distribution']
        }
        ,
        {
            id: 25,
            subject: 'ARTT',
            code: 'ART247',
            credit: 3,
            title: 'Weaving & Textiles',
            attribute: ['art_distribution']
        }
        ,
        {
            id: 25,
            subject: 'ARTT',
            code: 'ART247',
            credit: 3,
            title: 'Weaving & Textiles',
            attribute: ['art_distribution']
        }
        ,
        {
            id: 25,
            subject: 'ARTT',
            code: 'ART247',
            credit: 3,
            title: 'Weaving & Textiles',
            attribute: ['art_distribution']
        },
        {
            id: 26,
            subject: 'ENGL',
            code: 'ENGL102',
            credit: 3,
            title: 'Critical Reading, Writing, and Research',
            attribute: ['english_foundation']
        },
        {
            id: 27,
            subject: 'CMSC',
            code: 'CMSC140',
            credit: 3,
            title: 'Introduction to Programming',
            attribute: ['electives']
        },
        {
            id: 28,
            subject: 'ENGL',
            code: 'ENGL101',
            credit: 3,
            title: 'Introduction to College Writing',
            attribute: []
        },
        {
            id: 29,
            subject: 'PHYS',
            code: 'PHYS262',
            credit: 4,
            title: 'General Physics II: Electricity and Magnetism',
            attribute: ['natural_science_lab_distribution']
        },
        {
            id: 30,
            subject: 'PHYS',
            code: 'PHYS161',
            credit: 3,
            title: 'General Physics I',
            attribute: ['natural_science_distribution']
        },
        {
            id: 31,
            subject: 'CHEM',
            code: 'CHEM135',
            credit: 4,
            title: 'General Chemistry for Engineers',
            attribute: ['major']
        },
        {
            id: 32,
            subject: 'ENEE',
            code: 'ENEE140',
            credit: 2,
            title: 'Introduction to Programming Concepts for Engineers',
            attribute: ['major']
        },
        {
            id: 33,
            subject: 'ENEE',
            code: 'ENEE150',
            credit: 3,
            title: 'Intermediate Programming Concepts for Engineers',
            attribute: ['major']
        },
        {
            id: 34,
            subject: 'ENEE',
            code: 'ENEE207',
            credit: 3,
            title: 'Electric Circuits',
            attribute: ['major']
        },
        {
            id: 35,
            subject: 'ENEE',
            code: 'ENEE222',
            credit: 3,
            title: 'Elements of Discrete Signal Analysis',
            attribute: ['major']
        },
        {
            id: 36,
            subject: 'ENEE',
            code: 'ENEE244',
            credit: 3,
            title: 'Digital Logic Design',
            attribute: ['major']
        },
        {
            id: 37,
            subject: 'ENEE',
            code: 'ENEE245',
            credit: 3,
            title: 'Digital Circuits and Systems Laboratory',
            attribute: ['major']
        },
        {
            id: 38,
            subject: 'PHYS',
            code: 'PHYS263',
            credit: 4,
            title: 'General Physics III: Waves, Optics, and Modern Physics',
            attribute: ['major']
        },
        {
            id: 39,
            subject: 'MATH',
            code: 'MATH284',
            credit: 4,
            title: 'Linear Algebra',
            attribute: ['electives', 'math_foundation']
        },
        {
            id: 40,
            subject: 'PSYC',
            code: 'PSYC102',
            credit: 3,
            title: 'General Psychology',
            attribute: ['behavioral_distribution']
        },
        {
            id: 41,
            subject: 'SOCY',
            code: 'SOCY100',
            credit: 3,
            title: 'Introduction to Sociology',
            attribute: ['behavioral_distribution']
        }
    ];
    constructor(private http: Http) { }

    getMajorsList() {
        return this.http.get('https://afternoon-sands-88421.herokuapp.com/majors')
            .map(response => {
                return response.json();
            });
    }

    getAll() {
        return this.classList;
    }

    getByClassCode(code) {
        let response;
        this.classList.forEach(e => {
            if (e.code === code) {
                response = e;
            }
        });
        return response;
    }
}
