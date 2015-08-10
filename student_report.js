var message = '';
var student;
var search;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentReport(student) {
  var report = '<h2>Student: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>'
  return report;
}

while (true) {
  search = prompt('Search student record: type a name [Jordy] (or type "quit" to end)');
  if (search === null || search.toLowerCase() === 'quit') {
    break;
  }
  for (var i = 0; i < students.length; i += 1) {
    student = students[i];
    // For Good practice use ".match" in if condition for search term code looks like "student.name.toLowerCase().match(search.toLowerCase())" 
    if (student.name.toLowerCase() == search.toLowerCase()) {
      message = getStudentReport( student );
      print(message);
    }
  }
}
