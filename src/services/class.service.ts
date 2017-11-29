import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClassService {
    classList = [
        {id: 1,
        subject: 'MATH',
        code: 'MATH181',
        credit: 4,
        title: 'Calculus I',
        attribute: ['General Elective', 'Math Foundation']}
        ,
        {id: 2,
        subject: 'MATH',
        code: 'MATH182',
        credit: 4,
        title: 'Calculus II',
        attribute: ['General Elective', 'Math Foundation']}
        ,
        {id: 3,
        subject: 'MATH',
        code: 'MATH280',
        credit: 4,
        title: 'Multivariable Calculus',
        attribute: ['General Elective', 'Math Foundation', 'Upper Level']}
        ,
        {id: 4,
        subject: 'MATH',
        code: 'MATH282',
        credit: 3,
        title: 'Differential Equations',
        attribute: ['General Elective', 'Math Foundation', 'Upper Level']}
        ,
        {id: 5,
        subject: 'CMSC',
        code: 'CMSC141',
        credit: 3,
        title: 'Intro to Programming',
        attribute: ['General Elective']}
        ,
        {id: 6,
        subject: 'CMSC',
        code: 'CMSC203',
        credit: 4,
        title: 'Computer Science I',
        attribute: ['General Elective', 'Upper Level']}
        ,
        {id: 7,
        subject: 'CMSC',
        code: 'CMSC204',
        credit: 4,
        title: 'Computer Science II',
        attribute: ['General Elective', 'Upper Level']}
        ,
        {id: 8,
        subject: 'CMSC',
        code: 'CMSC207',
        credit: 4,
        title: 'Discrete Structures',
        attribute: ['General Elective', 'Upper Level']}
        ,
        {id: 9,
        subject: 'COMM',
        code: 'COMM108',
        credit: 3,
        title: 'Found Human Communication',
        attribute: ['General Education', 'Humanities Distribution', 'Speech Foundation']}
        ,
        {id: 10,
        subject: 'ARTT',
        code: 'ARTT100',
        credit: 3,
        title: 'Introduction to Drawing',
        attribute: ['Art Distribution']}
        ,
        {id: 11,
        subject: 'ARTT',
        code: 'ART120',
        credit: 4,
        title: 'Ceramics',
        attribute: ['Art Distribution']}
        ,
        {id: 12,
        subject: 'PHOT',
        code: 'PHOT161',
        credit: 3,
        title: 'Intro to Digital Photography',
        attribute: ['Art Distribution', 'General Education']}
        ,
        {id: 13,
        subject: 'CHIN',
        code: 'CHIN101',
        credit: 5,
        title: 'Chinese',
        attribute: ['General Education', 'Humanities Distribution']}
        ,
        {id: 14,
        subject: 'PHIL',
        code: 'PHIL205',
        credit: 4,
        title: 'Philosophy in Literature',
        attribute: ['Humanities Distribution']}
        ,
        {id: 15,
        subject: 'HIST',
        code: 'HIST250',
        credit: 4,
        title: 'Modern Asia',
        attribute: ['Humanities Distribution']}
        ,
        {id: 16,
        subject: 'ENGL',
        code: 'ENGL230',
        credit: 4,
        title: 'Intro to Modern Drama',
        attribute: ['Humanities Distribution']}
        ,
        {id: 17,
        subject: 'BIOL',
        code: 'BIOL101',
        credit: 4,
        title: 'General Biology',
        attribute: ['Natural Sciences Distribution with Lab']}
        ,
        {id: 18,
        subject: 'BIOL',
        code: 'BIOL130',
        credit: 4,
        title: 'The Human Body',
        attribute: ['Natural Sciences Distribution with Lab']}
        ,
        {id: 19,
        subject: 'BIOL',
        code: 'BIOL101',
        credit: 4,
        title: 'General Biology',
        attribute: ['Natural Sciences Distribution with Lab']}
        ,
        {id: 20,
        subject: 'CHEM',
        code: 'CHEM109',
        credit: 4,
        title: 'Chemistry and Society',
        attribute: ['Natural Sciences Distribution with Lab']}
        ,
        {id: 21,
        subject: 'BIOL',
        code: 'BIOL101',
        credit: 4,
        title: 'General Biology',
        attribute: ['Natural Sciences Distribution without Lab']}
        ,
        {id: 22,
        subject: 'ARTT',
        code: 'ARTT105',
        credit: 3,
        title: 'Color Theory & Application',
        attribute: ['Art Distribution']}
        ,
        {id: 23,
        subject: 'ARTT',
        code: 'ARTT112',
        credit: 4,
        title: 'Digital Photography/Fine Art I',
        attribute: ['Art Distribution']}
        ,
        {id: 24,
        subject: 'ARTT',
        code: 'ARTT225',
        credit: 4,
        title: 'World Woodcut Traditions',
        attribute: ['Art Distribution']}
        ,
        {id: 25,
        subject: 'ARTT',
        code: 'ART247',
        credit: 3,
        title: 'Weaving & Textiles',
        attribute: ['Art Distribution']}
        ,
        {id: 25,
        subject: 'ARTT',
        code: 'ART247',
        credit: 3,
        title: 'Weaving & Textiles',
        attribute: ['Art Distribution']}
        ,
        {id: 25,
        subject: 'ARTT',
        code: 'ART247',
        credit: 3,
        title: 'Weaving & Textiles',
        attribute: ['Art Distribution']}
        ,
        {id: 25,
        subject: 'ARTT',
        code: 'ART247',
        credit: 3,
        title: 'Weaving & Textiles',
        attribute: ['Art Distribution']}
    ];
    constructor(private http: Http) {}

    getMajorsList() {
        return this.http.get('https://afternoon-sands-88421.herokuapp.com/majors')
        .map(response => {
            return response.json();
        });
    }

    get() {
        return this.classList;
    }
}
