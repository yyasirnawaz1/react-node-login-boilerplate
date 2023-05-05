-- staff titles
INSERT INTO
    staff_titles (ID, Name)
VALUES
    (1, 'Manager');

INSERT INTO
    staff_titles (ID, Name)
VALUES
    (2, 'Carer');

INSERT INTO
    staff_titles (ID, Name)
VALUES
    (3, 'Senior Carer');

INSERT INTO
    staff_titles (ID, Name)
VALUES
    (4, 'Owner');

INSERT INTO
    staff_titles (ID, Name)
VALUES
    (5, 'Admin');

-- STAFF table
INSERT INTO
    staff (
        staff_title_id,
        first_name,
        last_name,
        date_of_birth,
        joining_date,
        national_insurance_number,
        home_number,
        mobile_number,
        personal_email,
        work_email,
        gender,
        marital_status,
        nationality,
        dbs_number,
        dbs_expiry_date,
        key_worker,
        address,
        note,
        picture,
        is_active
    )
VALUES
    (
        1,
        'John',
        'Doe',
        '1980-01-01',
        '2020-01-01',
        'AB123456C',
        '0123456789',
        '07712345678',
        'john.doe@gmail.com',
        'johndoe@company.com',
        'Male',
        'Married',
        'British',
        '1234567890',
        '2025-01-01',
        true,
        '123 Main St, London',
        'Senior carer',
        NULL,
        true
    );

INSERT INTO
    staff (
        staff_title_id,
        first_name,
        last_name,
        date_of_birth,
        joining_date,
        national_insurance_number,
        home_number,
        mobile_number,
        personal_email,
        work_email,
        gender,
        marital_status,
        nationality,
        dbs_number,
        dbs_expiry_date,
        key_worker,
        address,
        note,
        picture,
        is_active
    )
VALUES
    (
        2,
        'Jane',
        'Doe',
        '1985-01-01',
        '2021-01-01',
        'AB987654C',
        '0123456789',
        '07787654321',
        'jane.doe@gmail.com',
        'janedoe@company.com',
        'Female',
        'Single',
        'American',
        '0987654321',
        '2024-01-01',
        false,
        '456 High St, Manchester',
        NULL,
        NULL,
        true
    );

INSERT INTO
    staff (
        staff_title_id,
        first_name,
        last_name,
        date_of_birth,
        joining_date,
        national_insurance_number,
        home_number,
        mobile_number,
        personal_email,
        work_email,
        gender,
        marital_status,
        nationality,
        dbs_number,
        dbs_expiry_date,
        key_worker,
        address,
        note,
        picture,
        is_active
    )
VALUES
    (
        3,
        'Bob',
        'Smith',
        '1975-01-01',
        '2019-01-01',
        'DE123456F',
        '0123456789',
        '07755555555',
        'bob.smith@gmail.com',
        'bobsmith@company.com',
        'Male',
        'Married',
        'Irish',
        '0987654321',
        '2023-01-01',
        false,
        '789 Market St, Birmingham',
        NULL,
        NULL,
        true
    );

INSERT INTO
    staff (
        staff_title_id,
        first_name,
        last_name,
        date_of_birth,
        joining_date,
        national_insurance_number,
        home_number,
        mobile_number,
        personal_email,
        work_email,
        gender,
        marital_status,
        nationality,
        dbs_number,
        dbs_expiry_date,
        key_worker,
        address,
        note,
        picture,
        is_active
    )
VALUES
    (
        4,
        'Sarah',
        'Lee',
        '1988-01-01',
        '2021-06-01',
        'CD123456G',
        '0123456789',
        '07712345678',
        'sarah.lee@gmail.com',
        'sarahlee@company.com',
        'Female',
        'Married',
        'Chinese',
        '1234567890',
        '2024-06-01',
        true,
        '234 Broad St, Glasgow',
        NULL,
        NULL,
        true
    );

INSERT INTO
    staff(
        staff_title_id,
        first_name,
        last_name,
        date_of_birth,
        joining_date,
        national_insurance_number,
        home_number,
        mobile_number,
        personal_email,
        work_email,
        gender,
        marital_status,
        nationality,
        dbs_number,
        dbs_expiry_date,
        key_worker,
        address,
        note,
        picture,
        is_active
    )
VALUES
    (
        5,
        'yasir',
        'nawaz',
        '1990-07-15',
        '2022-01-01',
        'AB123456C',
        '020 123 4567',
        '07777 123456',
        'yasir.nawaz@gmail.com',
        'yasir.nawaz@work.com',
        'male',
        'Single',
        'British',
        'A1234567',
        '2025-01-01',
        false,
        '123 Main St, London',
        'Some notes about Jane',
        NULL,
        true
    );

INSERT INTO
    "users" (
        "username",
        "password",
        "email",
        "email_confirmed",
        "phone_number_confirmed",
        "two_factor_enabled",
        "lockout_enabled",
        "staff_id"
    )
VALUES
    (
        'john_doe',
        'password123',
        'john_doe@example.com',
        true,
        false,
        false,
        false,
        1
    );

INSERT INTO
    "users" (
        "username",
        "password",
        "email",
        "email_confirmed",
        "phone_number",
        "phone_number_confirmed",
        "two_factor_enabled",
        "lockout_enabled",
        "staff_id"
    )
VALUES
    (
        'jane_doe',
        'password456',
        'jane_doe@example.com',
        true,
        '+1-555-123-4567',
        true,
        true,
        false,
        2
    );

INSERT INTO
    "users" (
        "username",
        "password",
        "email",
        "email_confirmed",
        "phone_number_confirmed",
        "two_factor_enabled",
        "lockout_enabled",
        "staff_id"
    )
VALUES
    (
        'bob_smith',
        'password789',
        'bob_smith@example.com',
        false,
        false,
        false,
        false,
        3
    );

INSERT INTO
    "users" (
        "username",
        "password",
        "email",
        "email_confirmed",
        "phone_number",
        "phone_number_confirmed",
        "two_factor_enabled",
        "lockout_enabled",
        "staff_id"
    )
VALUES
    (
        'samantha_green',
        'password123456',
        'samantha_green@example.com',
        true,
        '+44-7911-123456',
        true,
        false,
        false,
        4
    );

INSERT INTO
    "users" (
        "username",
        "password",
        "email",
        "email_confirmed",
        "two_factor_enabled",
        "lockout_enabled",
        "staff_id"
    )
VALUES
    (
        'mark_brown',
        'password123abc',
        'mark_brown@example.com',
        false,
        true,
        true,
        5
    );