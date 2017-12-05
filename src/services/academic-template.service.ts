
export class AcademicTemplateService {
    templates = [
        {
            template: 'CMSC', value: {
                foundation: {
                    english_foundation: { credit: 3, course: ['ENGL102'] },
                    math_foundation: { credit: 4, course: ['MATH181'] },
                    speech_foundation: { credit: 3, course: [null] }
                },
                distribution: {
                    art_distribution: { credit: 3, course: [null] },
                    behavioral_social_distribution: { credit: 6, course: [null, null] },
                    humanities_distribution: { credit: 3, course: [null] },
                    natural_science_lab_distribution: { credit: 4, course: [null] },
                    natural_science_distribution: { credit: 3, course: [null] }
                },
                institutional: {
                    credit: 3, types: ['art_distribution', 'humanities_distribution']
                },
                program: {
                    major: {credit: 22, course: ['CMSC140', 'CMSC203', 'CMSC204', 'CMSC207', 'ENGL101', 'MATH182']},
                    electives: { credit: 6, course: [null, null] }
                },
            }
        },
        {
            template: 'ENEE', value: {
                foundation: {
                    english_foundation: { credit: 3, course: ['ENGL102'] },
                    math_foundation: { credit: 4, course: ['MATH181'] }
                },
                distribution: {
                    art_distribution: { credit: 3, course: [null] },
                    behavioral_social_distribution: { credit: 3, course: [null] },
                    humanities_distribution: { credit: 3, course: [null] },
                    natural_science_lab_distribution: { credit: 4, course: ['PHYS262'] },
                    natural_science_distribution: { credit: 3, course: ['PHYS161'] }
                },
                program: {
                    major: {credit: 37, course: ['CHEM135', 'ENEE140', 'ENEE150', 'ENEE207', 'ENEE222', 'ENEE244',
                    'ENEE245', 'MATH182', 'MATH280', 'MATH282', 'PHYS263']}
                },
            }
        }
    ];

    getAll() {
        return this.templates;
    }

    get(template) {
        let response;
        this.templates.forEach(e => {
            if (e.template === template) {
                response =  e;
            }
        });
        return response;
    }

}
