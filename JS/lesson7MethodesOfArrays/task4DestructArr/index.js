const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
  allStudentsList
    .slice()
    .filter(name => !studentsForRetake.includes(name))
    .map(name => 'Good job, ' + name);

const allStud = ['a', 'b', 'c', 'd'];
const retakeStud = ['b', 'd'];

getMessagesForBestStudents(allStud, retakeStud);
