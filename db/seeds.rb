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
    first_name: 'Dan',
    last_name: 'Mithcell',
    email: '12jkd3@gmail.com',
    phone_number: 19_030_293_390,
    user_name: 'dan_usermchill',
    password: 'm0ney123',
  )
jack_user =
  User.create(
    first_name: 'Jack',
    last_name: 'Mithcell',
    email: '123jkd3@gmail.com',
    phone_number: 19_030_293_390,
    user_name: 'jackmchill',
    password: 'mskey123',
  )
fin_user =
  User.create(
    first_name: 'Fin',
    last_name: 'Mithcell',
    email: '1203ak3@gmail.com',
    phone_number: 19_030_293_390,
    user_name: 'finnmchill',
    password: 'mnyE123',
  )
chris_user =
  User.create(
    first_name: 'Chris',
    last_name: 'Mithcell',
    email: '193jkd03@gmail.com',
    phone_number: 19_030_293_390,
    user_name: 'chrismchill',
    password: 'Nesy123',
  )
mick_user =
  User.create(
    first_name: 'Mick',
    last_name: 'Mithcell',
    email: '1ihkd93@gmail.com',
    phone_number: 19_030_293_390,
    user_name: 'ann123',
    password: 'moyne123',
  )
ann_user =
  User.create(
    first_name: 'Ann',
    last_name: 'Bilderbilt',
    email: '14edih3@gmail.com',
    phone_number: 19_030_293_390,
    user_name: 'jackiee123',
    password: 'nkdnf34',
  )
jackiee_user =
  User.create(
    first_name: 'Jackiee',
    last_name: 'Vant',
    email: '14edih3@gmail.com',
    phone_number: 19_030_293_390,
    user_name: 'vinny1223',
    password: 'sdfnkjfd39',
  )
vinny_user =
  User.create(
    first_name: 'Vinny',
    last_name: 'Bolskdi',
    email: '14edih3@gmail.com',
    phone_number: 19_030_293_390,
    user_name: 'vinny1233',
    password: 'jek33',
  )
paskini_user =
  User.create(
    first_name: 'Paskini',
    last_name: 'Koeirwash',
    email: '14edih3@gmail.com',
    phone_number: 19_030_293_390,
    user_name: 'pask909',
    password: 'nkf9348',
  )

puts 'New Users.....👥👥👥'

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
    student_school_id: 8_378_789_383,
  )

puts 'New Locations......🗺🗺🗺'

room8 = Location.create(name: 'room 8')
gym = Location.create(name: 'Gym')
cafetriea = Location.create(name: 'Cafetriea')
room12 = Location.create(name: 'room 12')
room212 = Location.create(name: 'room 212')

puts 'New Staff.....🧑‍🏫 🧑‍🏫 🧑‍🏫 '

mithcell =
  Teacher.create(
    user_id: mick_user.id,
    school_id: postaicVanderbiltHighSchool.id,
    teacher_school_id: 8_349_879_393,
    school_authorization_code: 428_030,
  )
bilderbilt =
  Teacher.create(
    user_id: ann_user.id,
    school_id: frankDillardHighSchool.id,
    teacher_school_id: 393_039_303,
    school_authorization_code: 203_030,
  )
vant =
  Teacher.create(
    user_id: jackiee_user.id,
    school_id: postaicVanderbiltHighSchool.id,
    teacher_school_id: 707_980_899,
    school_authorization_code: 428_030,
  )
bolskdi =
  Teacher.create(
    user_id: vinny_user.id,
    school_id: postaicVanderbiltHighSchool.id,
    teacher_school_id: 4_675_767_867,
    school_authorization_code: 428_030,
  )
koeirwash =
  Teacher.create(
    user_id: paskini_user.id,
    school_id: postaicVanderbiltHighSchool.id,
    teacher_school_id: 5_647_656_889,
    school_authorization_code: 428_030,
  )

puts 'New Subjects.....🖇️'

math =
  Subject.create(name: 'Math', teacher_id: mithcell.id, location_id: room8.id)
science =
  Subject.create(name: 'Science', teacher_id: vant.id, location_id: room12.id)
english =
  Subject.create(
    name: 'English',
    teacher_id: bolskdi.id,
    location_id: room212.id,
  )
spanish =
  Subject.create(
    name: 'Spanish',
    teacher_id: koeirwash.id,
    location_id: room12.id,
  )
gym = Subject.create(name: 'Gym', teacher_id: bolskdi.id, location_id: gym.id)

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

Event.create(
  title: 'MEET AND TREAT',
  planner: 'BobCat Club',
  time: Time.new(2022, 1, 1, 0, 9, 0, 0),
  date: DateTime.new(2022, 1, 1, 0, 0, 0),
  location_id: 6,
)
Event.create(
  title: 'RACK CATS VS NEW CHARTER BASKET BALL',
  planner: 'BobCat Club',
  time: Time.new(2022, 1, 1, 0, 9, 0, 0),
  date: DateTime.new(2022, 1, 1, 0, 0, 0),
  location_id: 4,
)
Event.create(
  title: 'MEET AND TREAT',
  planner: 'BobCat Club',
  time: Time.new(2022, 1, 1, 0, 9, 0, 0).strftime('%H:%M'),
  date: DateTime.new(2022, 1, 1, 0, 0, 0),
  location_id: 4,
)
Event.create(
  title: 'RACK CATS VS NEW CHARTER BASKET BALL',
  planner: 'BobCat Club',
  time: Time.new(2022, 1, 1, 0, 9, 0, 0).strftime('%H:%M'),
  date: DateTime.new(2022, 1, 1, 0, 0, 0),
  location_id: 4,
)
Event.create(
  title: 'MEET AND TREAT',
  planner: 'BobCat Club',
  time: Time.new(2022, 1, 1, 0, 9, 0, 0).strftime('%H:%M'),
  date: DateTime.new(2022, 1, 1, 0, 0, 0),
  location_id: 4,
)

#  Time.new.localtime.ctime.to_time.hour

Err.create(emergency: 'STUDENT WITH WEAPON', student_id: 7, location_id: 8)
