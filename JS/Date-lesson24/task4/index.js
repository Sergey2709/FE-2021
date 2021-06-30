const students = [
  { name: 'Tom', birthDate: '01/15/2010' },
  { name: 'Ben', birthDate: '01/17/2008' },
  { name: 'Sam', birthDate: '03/15/2010' },
  { name: 'Rob', birthDate: '03/13/2010' },
  { name: 'John', birthDate: '03/19/2010' },
  { name: 's1', birthDate: '02/02/2000' },
  { name: 's2', birthDate: '01/01/2000' },
];

const formatter = new Intl.DateTimeFormat('en', { month: 'short' });
const getMonth = date => formatter.format(date);

const studentsBirthDays = (arr) => {
  const sortStudentsOfMonth = arr.reduce((acc, obj) => {
    const nameOfMonth = getMonth(new Date(obj.birthDate));

    const getValueOfProperty = () => {
      const valuesArr = arr.filter(el => {
        const monthOfIterableElem = getMonth(new Date(el.birthDate));
        if (monthOfIterableElem === nameOfMonth) {
          return el;
        }
      })
      return valuesArr;
    };

    acc[nameOfMonth] = getValueOfProperty(obj);
    return acc;
  }, {});

  const resultObj = {};
  const finalSortStudents = Object.entries(sortStudentsOfMonth).reduce((acc, element) => {
    element[1].sort((a, b) => {
      const dateA = new Date(a.birthDate).getDate();
      const dateB = new Date(b.birthDate).getDate();
      return dateA - dateB;
    });
    acc[element[0]] = [...element[1].map(el => el.name)];
    return acc;
  }, resultObj);
  return finalSortStudents;
};

// console.log(students);
console.log(studentsBirthDays(students));


