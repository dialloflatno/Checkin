User.destroy_all
Student.destroy_all
School.destroy_all
Teacher.destroy_all
Location.destroy_all
Subject.destroy_all
Schedule.destroy_all
Event.destroy_all
Grade.destroy_all

dan_user =
  User.create(
    full_name: 'Dan Mithcell',
    email: '12jkd3@gmail.com',
    phone_number: 1_903_093_390,
    DOB: '6/01/21',
    username: 'dan_usermchill',
    password: 'm0ney123',
  )

jack_user =
  User.create(
    full_name: 'Jack Mithcell',
    email: '123jkd3@gmail.com',
    phone_number: 190_329_390,
    DOB: '10/01/21',
    username: 'jackmchill',
    password: 'mskey123',
  )
fin_user =
  User.create(
    full_name: 'Fin Mithcell',
    email: '1203ak3@gmail.com',
    DOB: '11/01/21',
    phone_number: 1_900_293_390,
    username: 'finnmchill',
    password: 'mnyE123',
  )
chris_user =
  User.create(
    full_name: 'Chris Mithcell',
    email: '193jkd03@gmail.com',
    phone_number: 1_900_293_390,
    DOB: '12/01/21',
    username: 'chrismchill',
    password: 'Nesy123',
  )
mick_user =
  User.create(
    full_name: 'Mick Mithcell',
    email: '1ihkd93@gmail.com',
    phone_number: 1_930_993_390,
    DOB: '04/01/01',
    username: 'ann123',
    password: 'moyne123',
  )
ann_user =
  User.create(
    full_name: 'Ann Bilderbilt',
    email: '14edih3@gmail.com',
    DOB: '6/01/21',
    phone_number: 1_903_093_490,
    username: 'jackiee123',
    password: 'nkdnf34',
  )
jackiee_user =
  User.create(
    full_name: 'Jackiee Vant',
    email: '14edih3@gmail.com',
    phone_number: 193_093_390,
    DOB: '6/10/19',
    username: 'vinny1223',
    password: 'sdfnkjfd39',
  )
vinny_user =
  User.create(
    full_name: 'Vinny Bolskdi',
    email: '1452edih3@gmail.com',
    phone_number: 1_993_729_339,
    DOB: '11/01/21',
    username: 'vinny1233',
    password: 'jek33',
  )
paskini_user =
  User.create(
    full_name: 'Paskini Koeirwash',
    email: '14edih3@gmail.com',
    phone_number: 1_903_293_390,
    DOB: '3/21/21',
    username: 'pask909',
    password: 'nkf9348',
  )

puts 'New Users.....👥👥👥' # SCHOOL

milliardHighSchool =
  School.create(
    name: 'Milliard HighSchool',
    address: '9383 ParkSide Central W',
    school_authorization_code: 928_030,
  )
frankDillardHighSchool =
  School.create(
    name: 'FrankDillard HighSchool',
    address: '3483 ParkSide Central S',
    school_authorization_code: 203_030,
  )
pickmanJonesHighSchool =
  School.create(
    name: 'Pickman Jones HighSchool',
    address: '90390 ParkSide Central N',
    school_authorization_code: 303_900,
  )
postaicVanderbiltHighSchool =
  School.create(
    name: 'Postaic Vanderbilt HighSchool',
    address: '2023 ParkSide Central E',
    school_authorization_code: 428_030,
  )

becaon =
  School.create(
    name: 'Becaon HighSchool',
    address: '2023 ParkSide Central E',
    school_authorization_code: 428_030,
  )
puts 'New Staff.....🧑‍🏫 🧑‍🏫 🧑‍🏫 '

bilderbilt =
  Teacher.create(
    user_id: User.find_by(username: 'jacke223').id,
    school_id: School.find_by(name: 'Becaon HighSchool').id,
    teacher_school_id: 393_039_303,
    school_authorization_code: 203_030,
  )
vant =
  Teacher.create(
    user_id: User.find_by(username: 'jackiee123').id,
    school_id: School.find_by(name: 'Becaon HighSchool').id,
    teacher_school_id: 707_980_899,
    school_authorization_code: 428_030,
  )
bolskdi =
  Teacher.create(
    user_id: User.find_by(username: 'chrismchill').id,
    school_id: School.find_by(name: 'Becaon HighSchool').id,
    teacher_school_id: 4_675_767_867,
    school_authorization_code: 428_030,
  )
koeirwash =
  Teacher.create(
    user_id: User.find_by(username: 'pask909').id,
    school_id: School.find_by(name: 'Becaon HighSchool').id,
    teacher_school_id: 5_647_656_889,
    school_authorization_code: 428_030,
  )

puts 'New School......🏫🏫🏫🏫🏫'

dan_student =
  Student.create(
    user_id: dan_user.id,
    school_id: milliardHighSchool.id,
    student_school_id: 9_833_892_039,
  )
jack =
  Student.create(
    user_id: jack_user.id,
    school_id: frankDillardHighSchool.id,
    student_school_id: 9_387_839_080,
  )
fin =
  Student.create(
    user_id: fin_user.id,
    school_id: pickmanJonesHighSchool.id,
    student_school_id: 38_932_893_903,
  )
chris =
  Student.create(
    user_id: chris_user.id,
    school_id: postaicVanderbiltHighSchool.id,
    student_school_id: 837_878,
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
    teacher_id: Teacher.find_by(teacher_school_id: 8349879393).id,
    location_id: Location.find_by(name: 'Room 12').id,
  )
science =
  Subject.create(
    name: 'Science',
    teacher_id: Teacher.find_by(teacher_school_id: 8_349_879_393).id,
    location_id: Location.find_by(name: 'Room 12').id,
  )
english =
  Subject.create(
    name: 'English',
    teacher_id: Teacher.find_by(teacher_school_id: 8_349_879_393).id,
    location_id: Location.find_by(name: 'Room 212').id,
  )
spanish =
  Subject.create(
    name: 'Spanish',
    teacher_id: Teacher.find_by(teacher_school_id: 8_349_879_393).id,
    location_id: Location.find_by(name: 'Room 212'),
  )

gym =
  Subject.create(
    name: 'Gym',
    teacher_id: Teacher.find_by(teacher_school_id: 8_349_879_393).id,
    location_id: Location.find_by(name: 'Gym').id,
  )

puts 'New Schedule.....'

Schedule.create(
  student_id: ,
  period_id: Period.find_by(id:1) ,
  period_second: 2,
  # period_thrid: 3,
  # period_fourth: 4,
  # period_fifth: 5,
)

puts 'New Periods.....'

Period.create(subject_id:Subject.find_by(name:"Math") , schedule_id: Schedule.find_by(id:1) , start_time: 9, end_time: 11)
Period.create(subject_id:Subject.find_by(name:"Math") , schedule_id: Schedule.find_by(id:1) , start_time: 9, end_time: 11)
Period.create(subject_id:Subject.find_by(name:"Math") , schedule_id: Schedule.find_by(id:1) , start_time: 9, end_time: 11)
Period.create(subject_id: 1, schedule_id: 1, start_time: 9, end_time: 11)
Period.create(subject_id: 1, schedule_id: 1, start_time: 9, end_time: 11)
Period.create(subject_id: 1, schedule_id: 1, start_time: 9, end_time: 11)
Period.create(subject_id: 1, schedule_id: 1, start_time: 9, end_time: 11)

puts 'Ruining Students Day ....🙍🙍🙍'

Grade.create(grade: 90, comment: 'Great Work', teacher_id: 7, student_id: 8)
Grade.create(grade: 80, comment: 'Amazing', teacher_id: 7, student_id: 8)
Grade.create(grade: 75, comment: 'Very Focused', teacher_id: 7, student_id: 8)
Grade.create(
  grade: 85,
  comment: 'Oustanding Work',
  teacher_id: 7,
  student_id: 8,
)
Grade.create(grade: 200, comment: 'The Future', teacher_id: 3, student_id: 1)

puts 'Funtime......🥳'

puts 'Funtime......🥳'

Event.create(
  title: 'MEET AND TREAT',
  planner: 'BobCat Club',
  time: Time.new(2022, 1, 1, 0, 9, 0, 0),
  date: DateTime.new(2022, 1, 1, 0, 0, 0),
  location_id: 10,
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
