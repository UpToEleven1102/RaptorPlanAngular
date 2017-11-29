import {OpaqueToken} from '@angular/core';

export const universitiesListToken = new OpaqueToken('universitiesListToken');
export const majorListToken = new OpaqueToken('majorListToken');


export const universitiesList = [{ name: 'University Of Maryland at Baltimore', value: 'UMBC'},
    { name: 'University of Maryland College Park', value: 'UMD'},
    { name: 'Towson University', value: 'towson'},
    { name: 'Pennsylvania State University', value: 'PSU'}];
export const majorsList = ['Accounting',
'American Sign Language AA',
'Applied Geography AAS',
'Architectural Technology Track, Architectural/Construction Technology AAS',
'Automotive Technology AAS',
'Bioinformatics AS: 612',
'Biotechnology AAS',
'Broadcast Media Production AAS',
'Building Trades Technology AAS',
'Business AA',
'Communication Studies AA',
'Computer Applications AAS',
'Computer Gaming and Simulation AAS',
'Computer Science and Technologies AA',
'Criminal Justice AAS',
'Cybersecurity AAS',
'Data Science Certificate: 256',
'Digital Media and Web Technology AAS',
'Aerospace Engineering Track, Engineering Science AS',
'Bioengineering Track, Engineering Science AS',
'Civil Engineering Track, Engineering Science AS',
'Computer Engineering Track, Engineering Science AS',
'Electrical Engineering Track, Engineering Science AS',
'Engineering Science AS',
'Mechanical Engineering Track, Engineering Science AS',
'Hospitality Management',
'International Studies Track, Arts and Sciences AA'];
