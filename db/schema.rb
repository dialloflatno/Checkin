# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_06_020048) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "errs", force: :cascade do |t|
    t.bigint "student_id"
    t.bigint "location_id"
    t.text "emergency"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["location_id"], name: "index_errs_on_location_id"
    t.index ["student_id"], name: "index_errs_on_student_id"
  end

  create_table "events", force: :cascade do |t|
    t.string "title"
    t.string "planner"
    t.datetime "time"
    t.datetime "date"
    t.bigint "location_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["location_id"], name: "index_events_on_location_id"
  end

  create_table "grades", force: :cascade do |t|
    t.integer "grade"
    t.string "comment"
    t.bigint "teacher_id"
    t.bigint "student_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["student_id"], name: "index_grades_on_student_id"
    t.index ["teacher_id"], name: "index_grades_on_teacher_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "periods", force: :cascade do |t|
    t.bigint "subject_id"
    t.bigint "schedule_id"
    t.integer "start_time"
    t.integer "end_time"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["schedule_id"], name: "index_periods_on_schedule_id"
    t.index ["subject_id"], name: "index_periods_on_subject_id"
  end

  create_table "schedules", force: :cascade do |t|
    t.bigint "student_id"
    t.bigint "period_id"
    t.integer "period_second"
    t.integer "period_thrid"
    t.integer "period_fourth"
    t.integer "period_fifth"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["period_id"], name: "index_schedules_on_period_id"
    t.index ["student_id"], name: "index_schedules_on_student_id"
  end

  create_table "schools", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.integer "school_authorization_code"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "semsters", force: :cascade do |t|
    t.string "semster"
    t.integer "year"
    t.bigint "schedule_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["schedule_id"], name: "index_semsters_on_schedule_id"
  end

  create_table "students", force: :cascade do |t|
    t.bigint "school_id"
    t.bigint "user_id"
    t.bigint "student_school_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["school_id"], name: "index_students_on_school_id"
    t.index ["user_id"], name: "index_students_on_user_id"
  end

  create_table "subjects", force: :cascade do |t|
    t.string "name"
    t.bigint "teacher_id"
    t.bigint "location_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["location_id"], name: "index_subjects_on_location_id"
    t.index ["teacher_id"], name: "index_subjects_on_teacher_id"
  end

  create_table "teachers", force: :cascade do |t|
    t.integer "school_authorization_code"
    t.bigint "teacher_school_id"
    t.bigint "user_id"
    t.bigint "school_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["school_id"], name: "index_teachers_on_school_id"
    t.index ["user_id"], name: "index_teachers_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "full_name"
    t.string "email"
    t.bigint "phone_number"
    t.string "DOB"
    t.string "username"
    t.string "state"
    t.string "school"
    t.integer "IDNUMBER"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
