// Даны 2 массива: список всех студентов; и тех кто
// не допущен к экзаменам. Создать сообщение для тех
// кто допущен.

const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
  allStudentsList
    .slice()
    .filter(name => !studentsForRetake.includes(name))
    .map(name => 'Good job, ' + name);

//example 1:

//input:
const allStud = ['a', 'b', 'c', 'd'];
const retakeStud = ['b', 'd'];

getMessagesForBestStudents(allStud, retakeStud);

//output:
//['Good job, a', 'Good job, c']
