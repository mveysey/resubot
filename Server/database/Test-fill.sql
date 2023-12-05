USE resubot;
-- Populate the Users Table
INSERT INTO users (email, password, username, type)
VALUES
    ('user1@example.com', 'password123', 'user1', 1),
    ('user2@example.com', 'password456', 'user2', 0),
    ('user3@example.com', 'password789', 'user3', 1),
    ('user4@example.com', 'password101', 'user4', 0),
    ('user5@example.com', 'password202', 'user5', 1),
    ('user6@example.com', 'password303', 'user6', 0),
    ('user7@example.com', 'password404', 'user7', 1),
    ('user8@example.com', 'password505', 'user8', 0),
    ('user9@example.com', 'password606', 'user9', 1),
    ('user10@example.com', 'password707', 'user10', 0),
    ('user11@example.com', 'password808', 'user11', 1),
    ('user12@example.com', 'password909', 'user12', 0),
    ('user13@example.com', 'password101', 'user13', 1),
    ('user14@example.com', 'password202', 'user14', 0),
    ('user15@example.com', 'password303', 'user15', 1),
    ('user16@example.com', 'password404', 'user16', 0),
    ('user17@example.com', 'password505', 'user17', 1),
    ('user18@example.com', 'password606', 'user18', 0),
    ('user19@example.com', 'password707', 'user19', 1),
    ('user20@example.com', 'password808', 'user20', 0);

-- Populate the Profile Table
INSERT INTO profile (profile_name, creation_date, update_date, cv_count, resume_count)
VALUES
    ('Intern 1', NOW(), NOW(), 2, 3),
    ('Student 1', NOW(), NOW(), 0, 1),
    ('Professional 1', NOW(), NOW(), 5, 7),
    ('Job Seeker 1', NOW(), NOW(), 1, 2),
    ('Intern 2', NOW(), NOW(), 3, 4),
    ('Student 2', NOW(), NOW(), 2, 2),
    ('Professional 2', NOW(), NOW(), 6, 8),
    ('Job Seeker 2', NOW(), NOW(), 4, 5),
    ('Fresher 1', NOW(), NOW(), 0, 1),
    ('Experienced 1', NOW(), NOW(), 7, 9);

-- Populate the Template Table
INSERT INTO template (template_name, template_category, template_content, template_preview)
VALUES
    ('Template 1', 'Category A', '<jsx_content_1>', NULL),
    ('Template 2', 'Category B', '<jsx_content_2>', NULL),
    ('Template 3', 'Category C', '<jsx_content_3>', NULL),
    ('Template 4', 'Category A', '<jsx_content_4>', NULL),
    ('Template 5', 'Category B', '<jsx_content_5>', NULL),
    ('Template 6', 'Category C', '<jsx_content_6>', NULL),
    ('Template 7', 'Category A', '<jsx_content_7>', NULL),
    ('Template 8', 'Category B', '<jsx_content_8>', NULL),
    ('Template 9', 'Category C', '<jsx_content_9>', NULL),
    ('Template 10', 'Category A', '<jsx_content_10>', NULL);

-- Populate the Resume Table
INSERT INTO resume (
    full_name, new_position, industry,
    role1, company1, date1, location1, description1,
    role2, company2, date2, location2, description2,
    degree, location, school_name, graduation,
    skills, project_title, project_description
)
VALUES
    ('John Doe', 'Software Engineer', 'Technology',
     'Software Developer', 'ABC Tech', '2022-01-10', 'New York, NY', 'Worked as a software developer...',
     'Frontend Developer', 'XYZ Inc', '2021-05-15', 'San Francisco, CA', 'Frontend development experience...',
     'Bachelor of Science', 'Los Angeles, CA', 'University of XYZ', '2019-05-20',
     'React, JavaScript, Node.js, HTML, CSS', 'Portfolio Website', 'Created a personal portfolio website...'),
    ('Jane Smith', 'Data Analyst', 'Analytics',
     'Data Analyst', 'Data Corp', '2021-08-22', 'Chicago, IL', 'Analyzed data and generated insights...',
     NULL, NULL, NULL, NULL, NULL,
     'Master of Science', 'Seattle, WA', 'Data University', '2020-12-18',
     'Python, SQL, Data Visualization', 'Data Analytics Project', 'Completed a data analysis project...'),
    ('Alice Johnson', 'Software Developer', 'Technology',
     'Frontend Developer', 'Tech Solutions', '2021-11-05', 'Seattle, WA', 'Worked on front-end development projects...',
     'Backend Developer', 'CodeCraft', '2020-07-15', 'San Jose, CA', 'Developed backend systems and APIs...',
     'Bachelor of Computer Science', 'San Jose, CA', 'Computer Science University', '2019-04-25',
     'JavaScript, Java, Python, RESTful APIs', 'E-commerce Platform', 'Built an e-commerce website...'),
    ('Bob Wilson', 'Data Scientist', 'Analytics',
     'Data Scientist', 'Data Insights', '2022-03-18', 'New York, NY', 'Analyzed and visualized data for clients...',
     'Data Engineer', 'DataFlow', '2021-01-10', 'San Francisco, CA', 'Developed data pipelines and workflows...',
     'Master of Data Science', 'San Francisco, CA', 'Data Science Institute', '2020-06-30',
     'Python, R, SQL, Machine Learning', 'Predictive Analytics Project', 'Developed a predictive model...'),
    ('Eva Martinez', 'Web Developer', 'Technology',
     'Frontend Developer', 'WebDesigns Inc', '2021-09-14', 'Los Angeles, CA', 'Created responsive web designs...',
     NULL, NULL, NULL, NULL, NULL,
     'Bachelor of Arts in Web Development', 'Los Angeles, CA', 'Web Development University', '2019-05-15',
     'HTML, CSS, JavaScript, React', 'Portfolio Redesign', 'Redesigned personal portfolio website...');
