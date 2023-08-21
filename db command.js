// 1.Find all the topics and tasks which are thought in the month of October
db.topic.find({month:{$regex:"October"}})
db.task.find({date:{$in:["2020-10-30","2020-10-25","2020-10-20","2020-10-15","2020-10-10","2020-10-05"]}}) // Each task will be conducted at the start date of 5th and end with date of 30th in the month and each task will have 4 day gap. 
 
// 2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.drive.find({drive_date:{$in:["2020-10-30","2020-10-25","2020-10-20","2020-10-15"]}}) //As same as task, company drive also held on once in a 5 day

// 3.Find the number of problems solved by the user in codekata

db.codekata.find({},{user_id:1,problems:1})

// 4.Find all the mentors with who has the mentee's count more than 15

db.mentor.find({mentee_count:{$gt:15}})

// 5.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.task.find({date:{$in:["2020-10-30","2020-10-25","2020-10-20","2020-10-15"]}},{date:1,absentStudents:{$size:"$absent_students"},notSubmitted:{$size:"$not_submitted_students"}})