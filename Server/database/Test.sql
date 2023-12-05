USE resubot;
DROP TABLE IF EXISTS resume;

CREATE TABLE resume (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        full_name VARCHAR(255) NOT NULL,
                        new_position VARCHAR(255),
                        industry VARCHAR(255),
                        role1 VARCHAR(255),
                        company1 VARCHAR(255),
                        date1 DATE,
                        location1 VARCHAR(255),
                        description1 TEXT,
                        role2 VARCHAR(255),
                        company2 VARCHAR(255),
                        date2 DATE,
                        location2 VARCHAR(255),
                        description2 TEXT,
                        degree VARCHAR(255),
                        location VARCHAR(255),
                        school_name VARCHAR(255),
                        graduation DATE,
                        skills TEXT,
                        project_title VARCHAR(255),
                        project_description TEXT,
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       email VARCHAR(255) NOT NULL,
                       password VARCHAR(255) NOT NULL,
                       username VARCHAR(255) NOT NULL,
                       type INT NOT NULL
);

DROP TABLE IF EXISTS profile;

CREATE TABLE profile (
                         profile_id INT AUTO_INCREMENT PRIMARY KEY,
                         profile_name VARCHAR(255) NOT NULL,
                         creation_date DATETIME NOT NULL,
                         update_date DATETIME NOT NULL,
                         cv_count INT NOT NULL DEFAULT 0,
                         resume_count INT NOT NULL DEFAULT 0
);

DROP TABLE IF EXISTS template;

CREATE TABLE template (
                          template_id INT AUTO_INCREMENT PRIMARY KEY,
                          template_name VARCHAR(255) NOT NULL,
                          template_category VARCHAR(255),
                          template_content TEXT,
                          template_preview BLOB
);




