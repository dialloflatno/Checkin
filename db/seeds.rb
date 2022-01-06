User.destroy_all
Student.destroy_all
School.destroy_all
Teacher.destroy_all
Location.destroy_all
Subject.destroy_all
Event.destroy_all
Grade.destroy_all

dan_user =
  User.create(
    full_name: 'Dan Mithcell',
    email: '12jkd3@gmail.com',
    phone_number: 1903093_390,
    DOB:'6/01/21',
    username: 'dan_usermchill',
    password: 'm0ney123'
  )

jack_user =
  User.create(
     full_name: 'Jack Mithcell',
    email: '123jkd3@gmail.com',
    phone_number: 190329390,
    DOB:'10/01/21',
    username: 'jackmchill',
    password: 'mskey123',
  )
fin_user =
  User.create(
    full_name: 'Fin Mithcell',
    email: '1203ak3@gmail.com',
    DOB:'11/01/21',
    phone_number: 1900293390,
    username: 'finnmchill',
    password: 'mnyE123',
  )
chris_user =
  User.create(
    full_name: 'Chris Mithcell',
    email: '193jkd03@gmail.com',
    phone_number: 1900293390,
    DOB:'12/01/21',
    username: 'chrismchill',
    password: 'Nesy123',
  )
mick_user =
  User.create(
    full_name: 'Mick Mithcell',
    email: '1ihkd93@gmail.com',
    phone_number: 1930993390,
    DOB:'04/01/01',
    username: 'ann123',
    password: 'moyne123',
  )
ann_user =
  User.create(
    full_name: 'Ann Bilderbilt',
    email: '14edih3@gmail.com',
    DOB:'6/01/21',
    phone_number: 1903093490,
    userame: 'jackiee123',
    password: 'nkdnf34',
  )
jackiee_user =
  User.create(
    full_name: 'Jackiee Vant',
    email: '14edih3@gmail.com',
    phone_number: 193093390,
    username: 'jacke223',
    password: 'sdfnkjfd39',
  )
  vinny_user =
  User.create(
    full_name: 'Vinny Bolskdi',
    email: '14edih3@gmail.com',
    phone_number: 19937293390,
    DOB:'11/01/21',
    username: 'vinny1233',
    password: 'jek33',
  )
  paskini_user =
  User.create(
    full_name: 'Paskini Koeirwash',
    email: '14edih3@gmail.com',
    phone_number: 1903293390,
    DOB:'3/21/21',
    username: 'pask909',
    password: 'nkf9348',
  )

  puts 'New Users.....👥👥👥'
  # SCHOOL

  milliardHighSchool =
    School.create(
      name: 'Milliard HighSchool',
      address: '9383 ParkSide Central W',
      school_authorization_code: 928030,
    )
  frankDillardHighSchool =
    School.create(
      name: 'FrankDillard HighSchool',
      address: '3483 ParkSide Central S',
      school_authorization_code: 203030,
    )
  pickmanJonesHighSchool =
    School.create(
      name: 'Pickman Jones HighSchool',
      address: '90390 ParkSide Central N',
      school_authorization_code: 303900,
    )
  postaicVanderbiltHighSchool =
    School.create(
      name: 'Postaic Vanderbilt HighSchool',
      address: '2023 ParkSide Central E',
      school_authorization_code: 428030,
    )
  
  
    becaon =
    School.create(
      name: 'Becaon HighSchool',
      address: '2023 ParkSide Central E',
      school_authorization_code:428030,
    )
  puts 'New Staff.....🧑‍🏫 🧑‍🏫 🧑‍🏫 '
  
  mithcell =
    Teacher.create(
      user_id: User.find_by(username: "vinny1233").id,
      school_id: School.find_by(name:'Becaon HighSchool').id,
      teacher_school_id: 8349879393,
      school_authorization_code: 428030,
    )
  bilderbilt =
    Teacher.create(
      user_id: User.find_by(username: "jacke223").id,
      school_id: School.find_by(name:'Becaon HighSchool').id,
      teacher_school_id: 393039303,
      school_authorization_code: 203030,
    )
  vant =
    Teacher.create(
      user_id: User.find_by(username: "jackiee123").id,
      school_id: School.find_by(name:'Becaon HighSchool').id,
      teacher_school_id: 707980899,
      school_authorization_code: 428030,
    )
  bolskdi =
    Teacher.create(
      user_id: User.find_by(username: "chrismchill").id,
      school_id: School.find_by(name:'Becaon HighSchool').id,
      teacher_school_id: 4675767867,
      school_authorization_code: 428030,
    )
  koeirwash =
    Teacher.create(
      user_id: User.find_by(username: "pask909").id,
      school_id: School.find_by(name:'Becaon HighSchool').id,
      teacher_school_id: 5647656889,
      school_authorization_code: 428030,
    )



puts 'New School......🏫🏫🏫🏫🏫'

dan_student =
  Student.create(
    user_id: User.find_by(userame: 'dan_usermchill').id
    school_id: School.find_by(name:'Becaon HighSchool').id,
    student_school_id: 9833892039,
  )
jack =
  Student.create(
    user_id: User.find_by(username:'jackmchill'),
    school_id: School.find_by(name:'Becaon HighSchool').id,
    student_school_id: 9387839080,
  )
fin =
  Student.create(
    user_id: fin_user.id,
    school_id: School.find_by(name:'Becaon HighSchool').id,
    student_school_id: 38932893903,
  )
chris =
  Student.create(
    user_id: chris_user.id,
    school_id: School.find_by(name:'Becaon HighSchool'),
    student_school_id: 8378789383,
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
   name: 'Math', teacher_id: Teacher.find_by(teacher_school_id: 8349879393).id,
   location_id: Location.find_by(name: 'Room 8').id
)
science =
  Subject.create(
  name: 'Science', teacher_id:Teacher.find_by(teacher_school_id: 393039303).id, 
  location_id: Location.find_by(name: 'Room 12').id)
english =
  Subject.create(
    name: 'English',
    teacher_id: Teacher.find_by(teacher_school_id: 707980899).id,
    location_id: Location.find_by(name: 'Room 212').id
  )
spanish =
  Subject.create(
    name: 'Spanish',
    teacher_id: Teacher.find_by(teacher_school_id: 4675767867).id,
    location_id:Location.find_by(name: 'Room 12')
  )

gym = Subject.create(name: 'Gym', teacher_id: Teacher.find_by(teacher_school_id: 5647656889).id, location_id: Location.find_by(name: 'Gym').id)

puts 'New Schedule.....'

Schedule.create(
  student_id: 5,
  period_id: 1,
  period_second: 2,
  period_thrid: 3,
  period_fourth: 4,
  period_fifth: 5,
)

puts 'New Periods.....'

Period.create(subject_id: 6, schedule_id: 1, start_time: 9, end_time: 11)
Period.create(subject_id: 32, schedule_id: 2, start_time: 9, end_time: 11)
Period.create(subject_id: 33, schedule_id: 2, start_time: 9, end_time: 11)
Period.create(subject_id: 34, schedule_id: 2, start_time: 9, end_time: 11)
Period.create(subject_id: 35, schedule_id: 2, start_time: 9, end_time: 11)

puts 'Ruining Students Day ....🙍🙍🙍'

Grade.create(grade: 90, comment: 'Great Work', teacher_id: 10, student_id: 8)
Grade.create(grade: 80, comment: 'Amazing', teacher_id: 21, student_id: 20)
Grade.create(grade: 75, comment: 'Very Focused', teacher_id: 24, student_id: 20)
Grade.create(
  grade: 85,
  comment: 'Oustanding Work',
  teacher_id: 22,
  student_id: 20,
)
Grade.create(grade: 200, comment: 'The Future', teacher_id: 23, student_id: 20)

puts 'Funtime......🥳'

puts 'Funtime......🥳'

Event.create(
  title: 'MEET AND TREAT',
  planner: 'BobCat Club',
  time: Time.new(2022, 1, 1, 0, 9, 0, 0),
  date: DateTime.new(2022, 1, 1, 0, 0, 0),
  location_id: 11,
)
Event.create(
  title: 'RACK CATS VS NEW CHARTER BASKET BALL',
  planner: 'BobCat Club',
  time: Time.new(2022, 1, 1, 0, 9, 0, 0),
  date: DateTime.new(2022, 1, 1, 0, 0, 0),
  location_id: 12,
)
Event.create(
  title: 'MEET AND TREAT',
  planner: 'BobCat Club',
  time: Time.new(2022, 1, 1, 0, 9, 0, 0).strftime('%H:%M'),
  date: DateTime.new(2022, 1, 1, 0, 0, 0),
  location_id: 13,
)
Event.create(
  title: 'RACK CATS VS NEW CHARTER BASKET BALL',
  planner: 'BobCat Club',
  time: Time.new(2022, 1, 1, 0, 9, 0, 0).strftime('%H:%M'),
  date: DateTime.new(2022, 1, 1, 0, 0, 0),
  location_id: 14,
)
Event.create(
  title: 'MEET AND TREAT',
  planner: 'BobCat Club',
  time: Time.new(2022, 1, 1, 0, 9, 0, 0).strftime('%H:%M'),
  date: DateTime.new(2022, 1, 1, 0, 0, 0),
  location_id: 15,
)
Event.create(
  title: 'RACK CATS VS NEW CHARTER BASKET BALL',
  planner: 'BobCat Club',
  time: Time.new(2022, 1, 1, 0, 9, 0, 0),
  date: DateTime.new(2022, 1, 1, 0, 0, 0),
  location_id: 12,
)
Event.create(
  title: 'MEET AND TREAT',
  planner: 'BobCat Club',
  time: Time.new(2022, 1, 1, 0, 9, 0, 0).strftime('%H:%M'),
  date: DateTime.new(2022, 1, 1, 0, 0, 0),
  location_id: 13,
)
Event.create(
  title: 'RACK CATS VS NEW CHARTER BASKET BALL',
  planner: 'BobCat Club',
  time: Time.new(2022, 1, 1, 0, 9, 0, 0).strftime('%H:%M'),
  date: DateTime.new(2022, 1, 1, 0, 0, 0),
  location_id: 14,
)
Event.create(
  title: 'MEET AND TREAT',
  planner: 'BobCat Club',
  time: Time.new(2022, 1, 1, 0, 9, 0, 0).strftime('%H:%M'),
  date: DateTime.new(2022, 1, 1, 0, 0, 0),
  location_id: 15,
)

#  Time.new.localtime.ctime.to_time.hour

Err.create(emergency: 'STUDENT WITH WEAPON', student_id: 7, location_id: 8)
