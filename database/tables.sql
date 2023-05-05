Create Database 'nursing-home-db';

-- users
CREATE TABLE users (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "phone_number" VARCHAR(100),
    "email_confirmed" BOOLEAN DEFAULT false NOT NULL,
    "phone_number_confirmed" BOOLEAN DEFAULT false NOT NULL,
    "two_factor_enabled" BOOLEAN DEFAULT false NOT NULL,
    "lockout_enabled" BOOLEAN DEFAULT false NOT NULL,
    "lockout_end_date" VARCHAR(50),
    "staff_id" INTEGER NOT NULL,
    "is_active" BOOLEAN DEFAULT true
);

-- staff titles, job titles
CREATE TABLE staff_titles (
    ID SERIAL NOT NULL PRIMARY KEY,
    Name VARCHAR(50) NULL
);

-- staff
CREATE TABLE "staff" (
    "id" SERIAL NOT NULL,
    "staff_title_id" bigint NULL,
    -- this should be manager, carer, senior carer, owner, admin
    -- "staff_shift_preference" varchar(50) NULL,
    -- "week_day_preference" varchar(50) NULL,
    "first_name" varchar(50) NULL,
    "last_name" varchar(50) NULL,
    "date_of_birth" date NULL,
    "joining_date" date NULL,
    "national_insurance_number" varchar(50) NULL,
    "home_number" varchar(50) NULL,
    "mobile_number" varchar(50) NULL,
    "personal_email" varchar(50) NULL,
    "work_email" varchar(50) NULL,
    -- TODO: what is a key worker?
    "gender" varchar(50) NULL,
    "marital_status" varchar(50) NULL,
    "nationality" varchar(50) NULL,
    "dbs_number" varchar(50) NULL,
    "dbs_expiry_date" date NULL,
    -- "crb_cleared" boolean NULL,
    -- "crb_risk_assessed" boolean NULL,
    "key_worker" boolean NULL,
    -- "supervisor_id" bigint NULL,
    "address" varchar(100) NULL,
    "note" varchar(500) NULL,
    "picture" bytea NULL,
    "is_active" boolean NULL,
    PRIMARY KEY ("id")
);

-- TODO:: NOTES:
-- we can create a separate module for certificates
-- work schedule entries should also be separate like shift preference , work days.