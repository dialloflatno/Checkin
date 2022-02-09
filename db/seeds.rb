User.destroy_all
Student.destroy_all
School.destroy_all
Teacher.destroy_all
Location.destroy_all
Subject.destroy_all
Period.destroy_all
Schedule.destroy_all
Event.destroy_all
Grade.destroy_all
Err.destroy_all

puts 'New Users.....👥👥👥'

ibrahima_user =
  User.create(
    full_name: 'Ibrahima Diallo',
    email: 'brack@gmail.com',
    phone_number: 8_987_654_321,
    DOB: '6/01/21',
    state: 'NY',
    school: 'Beacon',
    IDNUMBER: '1',
    teacher: false,
    student: false,
    username: 'brack123',
    password: 'brack6',
  )

dan_user =
  User.create(
    full_name: 'Dan Mithcell',
    email: '12jkd3@gmail.com',
    phone_number: 1_903_093_390,
    DOB: '6/01/21',
    state: 'NY',
    school: 'Beacon',
    IDNUMBER: '2',
    teacher: false,
    student: false,
    username: 'danm',
    password: 'dan123',
  )

nick_user =
  User.create(
    full_name: 'Nick Bechtel',
    email: 'nick@gmail.com',
    phone_number: 1_234_567_898,
    DOB: '12/6/1992',
    state: 'NY',
    school: 'Beacon',
    IDNUMBER: '3',
    teacher: false,
    student: false,
    username: 'nickb',
    password: '123456',
  )

fin_user =
  User.create(
    full_name: 'Fin Mithcell',
    email: '1203ak3@gmail.com',
    DOB: '11/01/21',
    state: 'NY',
    school: 'Beacon',
    IDNUMBER: '4',
    phone_number: 1_900_293_390,
    teacher: false,
    student: false,
    username: 'finnm',
    password: 'finn12',
  )

harris_user =
  User.create(
    full_name: 'Harris Kim',
    email: 'Harris@gmail.com',
    DOB: '1/1/01',
    state: 'NY',
    school: 'Beacon',
    IDNUMBER: '5',
    student: false,
    teacher: true,
    phone_number: 6_666_666_666,
    username: 'harrisk',
    password: 'harris',
  )

puts 'New School......🏫🏫🏫🏫🏫'

beacon =
  School.create(
    name: 'Beacon',
    address: '2023 ParkSide Central E',
    school_authorization_code: 123_456,
  )


puts 'New Staff.....🧑‍🏫 🧑‍🏫 🧑‍🏫 '

harris =
  Teacher.create(
    user_id: User.find_by(username: 'harrisk').id,
    school_id: School.find_by(name: 'Beacon').id,
    teacher_school_id: User.find_by(IDNUMBER: '5').IDNUMBER,
    school_authorization_code:
      School.find_by(school_authorization_code: 123_456).id,
  )
# bilderbilt =
#   Teacher.create(
#     user_id: User.find_by(username: 'jacke223').id,
#     school_id: School.find_by(name: 'Beacon').id,
#     teacher_school_id: 393_039_303,
#     school_authorization_code: 203_030, #   )

puts 'New Students.....'

ibrahima_student =
  Student.create(
    user_id: User.find_by(username: 'brack123').id,
    school_id: School.find_by(name: 'Beacon').id,
    student_school_id: User.find_by(IDNUMBER: '1').IDNUMBER,
  )

dan_student =
  Student.create(
    user_id: User.find_by(username: 'danm').id,
    school_id: School.find_by(name: 'Beacon').id,
    student_school_id: User.find_by(IDNUMBER: '2').IDNUMBER,
  )

nick_student =
  Student.create(
    user_id: User.find_by(username: 'nickb').id,
    school_id: School.find_by(name: 'Beacon').id,
    student_school_id: User.find_by(IDNUMBER: '3').IDNUMBER,
  )

fin =
  Student.create(
    user_id: User.find_by(username: 'finnm').id,
    school_id: School.find_by(name: 'Beacon').id,
    student_school_id: User.find_by(IDNUMBER: '4').IDNUMBER,
  )

puts 'New Locations......🗺🗺🗺'

room8 = Location.create(name: 'Room 8')
gym = Location.create(name: 'Gym')
cafetriea = Location.create(name: 'Cafetriea')
room12 = Location.create(name: 'Room 12')
room212 = Location.create(name: 'Room 212')

puts 'New Subjects.....🖇️'

math =
  Subject.create(
    name: 'Math',
    teacher_id: Teacher.find_by(teacher_school_id: '5').id,
    location_id: Location.find_by(name: 'Room 12').id,
  )
science =
  Subject.create(
    name: 'Science',
    teacher_id: Teacher.find_by(teacher_school_id: '5').id,
    location_id: Location.find_by(name: 'Room 12').id,
  )
english =
  Subject.create(
    name: 'English',
    teacher_id: Teacher.find_by(teacher_school_id: '5').id,
    location_id: Location.find_by(name: 'Room 212').id,
  )
spanish =
  Subject.create(
    name: 'Spanish',
    teacher_id: Teacher.find_by(teacher_school_id: '5').id,
    location_id: Location.find_by(name: 'Room 212').id,
  )

gym =
  Subject.create(
    name: 'Gym',
    teacher_id: Teacher.find_by(teacher_school_id: '5').id,
    location_id: Location.find_by(name: 'Gym').id,
  )

puts 'New Schedule.....'

Schedule.create(
  student_id: Student.find_by(student_school_id: '1').id,
  period_id: 1,
  # period_second: 2, # period_thrid: 3, # period_fourth: 4, # period_fifth: 5,
)

puts 'New Periods.....'

Period.create(
  subject_id: Subject.find_by(name: 'Math'),
  schedule_id: Schedule.find_by(id: 2),
  start_time: 9,
  end_time: 11,
)

Period.create(
  subject_id: Subject.find_by(name: 'Science'),
  schedule_id: Schedule.find_by(id: 2),
  start_time: 9,
  end_time: 11,
)

Period.create(
  subject_id: Subject.find_by(name: 'English'),
  schedule_id: Schedule.find_by(id: 2),
  start_time: 9,
  end_time: 11,
)

Period.create(
  subject_id: Subject.find_by(name: 'Spanish'),
  schedule_id: Schedule.find_by(id: 2),
  start_time: 9,
  end_time: 11,
)

Period.create(
  subject_id: Subject.find_by(name: 'Gym'),
  schedule_id: Schedule.find_by(id: 2),
  start_time: 9,
  end_time: 11,
)

puts 'Ruining Students Day ....🙍🙍🙍'

Grade.create(
  grade: 90,
  comment: 'Great Work',
  teacher_id: Teacher.find_by(teacher_school_id: '5').id,
  student_id: Student.find_by(student_school_id: '1').id,
)
Grade.create(
  grade: 80,
  comment: 'Amazing',
  teacher_id: Teacher.find_by(teacher_school_id: '5').id,
  student_id: Student.find_by(student_school_id: '1').id,
)
Grade.create(
  grade: 75,
  comment: 'Very Focused',
  teacher_id: Teacher.find_by(teacher_school_id: '5').id,
  student_id: Student.find_by(student_school_id: '1').id,
)
Grade.create(
  grade: 85,
  comment: 'Oustanding Work',
  teacher_id: Teacher.find_by(teacher_school_id: '5').id,
  student_id: Student.find_by(student_school_id: '1').id,
)

puts 'Funtime......🥳'

Event.create(
  title: 'MEET AND TREAT',
  planner: 'BobCat Club',
  time: Time.new(2022, 1, 1, 0, 9, 0, 0),
  date: DateTime.new(2022, 1, 1, 0, 0, 0),
  location_id: Location.find_by(name: 'Room 8').id,
)
Event.create(
  title: 'RACK CATS VS NEW CHARTER BASKET BALL',
  planner: 'BobCat Club',
  time: Time.new(2022, 1, 1, 0, 9, 0, 0),
  date: DateTime.new(2022, 1, 1, 0, 0, 0),
  location_id: Location.find_by(name: 'Gym').id,
)

puts 'EMERGENCIES!!!'
Err.create(
  emergency: 'STUDENT WITH WEAPON',
  student_id: Student.find_by(student_school_id: '1').id,
  location_id: Location.find_by(name: 'Room 12').id,
)
