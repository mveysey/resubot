// const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const { generateID, generateText } = require("../util/ai-util"); // Import utility functions

const { poolPromise } = require("../database/Database");
require("dotenv").config();
const sql = require("mssql");
const multer = require("multer");
const upload = multer();
const fs = require("fs");


const resumeController = {
  // Create a resume entry logic
  createResumeEntry: async (req, res) => {
    try {
      (optionalJobDecsription = req.body.jobDetails),
        (optionalIndustry = req.body.industry),
        (fullName = req.body.fullName),
        (phoneNumber = req.body.phoneNumber),
        (email = req.body.email),
        (linkedIn = req.body.linkedIn),
        (personalLink = req.body.personalLink),
        (companyInfo = req.body.companyInfo),
        (degree = req.body.degree),
        (schoolLocation = req.body.schoolLocation),
        (schoolName = req.body.schoolName),
        (graduation = req.body.graduation),
        (grades = req.body.grades),
        (skills = req.body.skills),
        (projectTitle = req.body.projectTitle),
        (projectDescription = req.body.projectDescription);

      const newEntry = {
        id: generateID(),
        optionalJobDecsription,
        optionalIndustry,
        fullName,
        phoneNumber,
        email,
        linkedIn,
        personalLink,
        companyInfo,
        degree,
        schoolLocation,
        schoolName,
        graduation,
        grades,
        skills,
        projectTitle,
        projectDescription,
      };

      // assign values to optional params
      var jobDetails;
      switch (optionalJobDecsription) {
        case undefined || null:
          jobDetails = null;
          break;

        default:
          jobDetails = optionalJobDecsription;
      }

      var industry;
      switch (optionalIndustry) {
        case undefined || null:
          industry = null;
          break;

        default:
          industry = optionalIndustry;
      }

      // create a prompt to send to openAI API as system
      let systemPrompt;
      if (industry != null && jobDetails != null) {
        systemPrompt = `You are a resume writer for someone who works in the ${industry} industry and is applying for a job with this description ${jobDetails}. Never forget that industry and job description when you are writing the resume.`;
      } else if (industry != null) {
        systemPrompt = `You are a resume writer for someone who works in the ${industry} industry. Never forget that industry when you are writing the resume.`;
      } else if (jobDetails != null) {
        systemPrompt = `You are a resume writer for someone who is applying for a job with this description ${jobDetails}. Never forget that job description when you are writing the resume.`;
      } else {
        systemPrompt = `You are a resume writer for someone. Never forget that role.`;
      }

      // create prompts to send to openAI API as user
      // const experiencePrompt1 = `Write me a 50 word description about my role at ${company} in ${location} where I worked as a ${role}. I was responsible for ${description}. I worked here during ${date}`;
      const educationPrompt = `Write 5 courses WITH NO DESCRIPTION OF THEM, just list the course names, that I might have taken at ${schoolName} in ${schoolLocation}, getting my degree in ${degree}. My graduation date is ${graduation}. Please look at my ${skills} and ${grades} when choosing these and compare them with the job description I've provided you, making sure I'm demonstarting all of my important courses related to the job.`;
      const skillsPrompt = `Write my top 5 skills for my resume given the job description and industry you were provided with and that these are all of my ${skills}. Also include information from the courses I have taken IF THEY ARE APPLICABLE: here are the courses ${grades}. Don't write a description for any skill, just THE NAME of the skill for example "Java" or "Team Player"`;
      const projectPrompt = `Write me a 50 word description about my project called ${projectTitle} that consisted of ${projectDescription}`;

      //  send context prompt before generating resume info
      const systemMessage = { role: "system", content: systemPrompt };

      const experiencePrompt1 = `Write me a 50 word description about my role at ${companyInfo[0].company} in ${companyInfo[0].location} where I worked as a ${companyInfo[0].role}. I was responsible for ${companyInfo[0].description}`;

      let experiencePrompt2;

      if (companyInfo[1] != null) {
        experiencePrompt2 = `Write me a 50 word description about my role at ${companyInfo[1].company} in ${companyInfo[1].location} where I worked as a ${companyInfo[1].role}. I was responsible for ${companyInfo[1].description}`;
      }

      const experienceGenerated1 = await generateText([
        { role: "user", content: experiencePrompt1 },
      ]);

      const experienceGenerated2 = await generateText([
        { role: "user", content: experiencePrompt2 },
      ]);

      const educationGenerated = await generateText([
        systemMessage,
        {
          role: "system",
          content: `Include information about ${grades} in the list of courses the user will ask for.`,
        },
        { role: "user", content: educationPrompt },
      ]);

      const skillsGenerated = await generateText([
        systemMessage,
        { role: "user", content: skillsPrompt },
      ]);

      const projectGenerated = await generateText([
        systemMessage,
        { role: "user", content: projectPrompt },
      ]);

      const chatgptData = {
        experienceGenerated1,
        experienceGenerated2,
        educationGenerated,
        skillsGenerated,
        projectGenerated,
      };

      const responseData = { ...newEntry, ...chatgptData };

      res.json({
        message: "Resume entry created successfully",
        data: responseData,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },

  createRegeneratedResumeEntry: async (req, res) => {
    try {
      (regenerateRequest = req.body.regenerateRequest),
        (fullName = req.body.fullName),
        (phoneNumber = req.body.phoneNumber),
        (email = req.body.email),
        (linkedIn = req.body.linkedIn),
        (personalLink = req.body.personalLink),
        (companyInfo = req.body.companyInfo),
        (experienceGen1 = req.body.experienceGenerated1),
        (experienceGen2 = req.body.experienceGenerated2),
        (degree = req.body.degree),
        (courses = req.body.courses),
        (schoolLocation = req.body.schoolLocation),
        (schoolName = req.body.schoolName),
        (graduation = req.body.graduation),
        (grades = req.body.grades),
        (skills = req.body.skills),
        (projectTitle = req.body.projectTitle),
        (projectDescription = req.body.projectDescription);

      const newEntry = {
        id: generateID(),
        regenerateRequest,
        fullName,
        phoneNumber,
        email,
        linkedIn,
        personalLink,
        companyInfo,
        degree,
        courses,
        schoolLocation,
        schoolName,
        graduation,
        grades,
        skills,
        projectTitle,
        projectDescription,
      };

      // create a prompt to send to openAI API as system
      let systemPrompt = `You are a updating a resume for someone who wants this change ${regenerateRequest}. Never forget that change when you are writing the resume.`;

      // create prompts to send to openAI API as user
      const educationPrompt = `Write 5 courses WITH NO DESCRIPTION OF THEM, just list the course names, that I might have taken at ${schoolName} in ${schoolLocation}, getting my degree in ${degree}. My graduation date is ${graduation}. Please look at my ${skills} and ${grades} when choosing these and compare them with the job description I've provided you, making sure I'm demonstarting all of my important courses related to the job. Recall this ${regenerateRequest} when writing EVERYTHING. Write 5 courses WITH NO DESCRIPTION OF THEM, just list the course names`;
      const skillsPrompt = `Write my top 5 skills for my resume given the job description and industry you were provided with and that these are all of my ${skills}. Don't write a description for any skill, just THE NAME of the skill for example "Java" or "Team Player". Recall this ${regenerateRequest} when writing EVERYTHING. Write 5 skills WITH NO DESCRIPTION OF THEM, just list the skill`;
      const projectPrompt = `Write me a 50 word description about my project called ${projectTitle} that consisted of ${projectDescription}.  Recall this ${regenerateRequest} when writing EVERYTHING.`;

      //  send context prompt before generating resume info
      const systemMessage = { role: "system", content: systemPrompt };

      const experiencePrompt1 = `Write me a 50 word description about my role at ${companyInfo[0].company} in ${companyInfo[0].location} where I worked as a ${companyInfo[0].role}. I was responsible for ${experienceGen1}. Capitalize the first letter of the first sentence. Recall this ${regenerateRequest} when writing EVERYTHING.`;

      let experiencePrompt2;

      if (companyInfo[1] != null) {
        experiencePrompt2 = `Write me a 50 word description about my role at ${companyInfo[1].company} in ${companyInfo[1].location} where I worked as a ${companyInfo[1].role}. I was responsible for ${experienceGen2}. Capitalize the first letter of the first sentence. Recall this ${regenerateRequest} when writing EVERYTHING.`;
      }

      const experienceGenerated1 = await generateText([
        { role: "user", content: experiencePrompt1 },
      ]);

      const experienceGenerated2 = await generateText([
        { role: "user", content: experiencePrompt2 },
      ]);

      const educationGenerated = await generateText([
        systemMessage,
        {
          role: "system",
          content: `Include information about ${grades} in the list of courses the user will ask for.`,
        },
        { role: "user", content: educationPrompt },
      ]);

      const skillsGenerated = await generateText([
        systemMessage,
        { role: "user", content: skillsPrompt },
      ]);

      const projectGenerated = await generateText([
        systemMessage,
        { role: "user", content: projectPrompt },
      ]);

      const chatgptData = {
        experienceGenerated1,
        experienceGenerated2,
        educationGenerated,
        skillsGenerated,
        projectGenerated,
      };

      console.log(experienceGenerated1);

      const responseData = { ...newEntry, ...chatgptData };

      res.json({
        message: "Resume entry created successfully",
        data: responseData,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },
  saveResumeData: async (req, res) => {
    try {
      const resumeData = req.body;
      const savedData = await saveResume(resumeData);
      res.json({ message: "Resume data saved successfully", data: savedData });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  saveInputResumeData: async (req, res) => {
    try {
      const resumeData = req.body;
      const savedData = await saveInputResume(resumeData);
      res.json({
        message: "Resume Input data saved successfully",
        data: savedData,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
 
  saveResumePDF: async (req, res) => {
    try {
      // Ensure that a file is received
      if (!req.file) {
        res.status(400).send("No file uploaded.");
        return;
      }

      const pool = await poolPromise;
      const request = pool.request();

      // Stream the file buffer from uploaded file
      fs.readFile(req.file.path, async (err, fileBuffer) => {
        if (err) {
          throw err;
        }

        const fileName = req.file.originalname;

        // Save file to database
        await request
          .input("FileName", sql.NVarChar, fileName)
          .input("PDFData", sql.VarBinary(sql.MAX), fileBuffer)
          .query(
            "INSERT INTO ResumeRecordsPDF (FileName, resumePDF) VALUES (@FileName, @PDFData)"
          );

        res.status(200).send("PDF saved successfully.");
        console.log("PDF saved successfully");
      });
    } catch (error) {
      res.status(500).send("Error saving PDF: " + error.message);
    } finally {
      // Delete the file from server after saving to database
      if (req.file && req.file.path) {
        fs.unlink(req.file.path, (err) => {
          if (err) {
            console.error("Error deleting file:", err);
          }
        });
      }
    }
  },

  getAllSavedResumes: async (req, res) => {
    try {
      const pool = await poolPromise;
      const request = pool.request();

      const result = await request.query(
        "SELECT Id, FileName FROM ResumeRecordsPDF"
      );

      res.json({
        message: "Retrieved all saved resume metadata successfully",
        data: result.recordset,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getSavedResumePDF: async (req, res) => {
    try {
        const { id } = req.params; // Assuming you're using an ID to fetch the specific resume

        const pool = await poolPromise;
        const request = pool.request();

        const result = await request
            .input('ID', sql.Int, id)
            .query('SELECT resumePDF FROM ResumeRecordsPDF WHERE Id = @ID');

        if (result.recordset.length > 0) {
            const pdfBuffer = result.recordset[0].resumePDF;
            res.setHeader('Content-Type', 'application/pdf');
            res.send(pdfBuffer);
        } else {
            res.status(404).send('Resume not found');
        }
    } catch (error) {
        res.status(500).send('Error retrieving the PDF: ' + error.message);
    }
}


//   getSavedResumePDF: async (req, res) => {
//     try {
//         const { id } = req.params; // Assuming you're using an ID to fetch the specific resume

//         const pool = await poolPromise;
//         const request = pool.request();

//         const result = await request
//             .input('ID', sql.Int, id)
//             .query('SELECT resumePDF FROM ResumeRecordsPDF WHERE Id = @ID');

//         if (result.recordset.length > 0) {
//             const pdfBuffer = result.recordset[0].resumePDF;
//             res.setHeader('Content-Type', 'application/pdf');
//             res.send(pdfBuffer);
//         } else {
//             res.status(404).send('Resume not found');
//         }
//     } catch (error) {
//         res.status(500).send('Error retrieving the PDF: ' + error.message);
//     }
// }
};

module.exports = resumeController;

async function saveResume(data) {
  let pool;
  try {
    pool = await poolPromise;
    const request = pool.request();
    request.input("experienceData", sql.VarChar, data.experienceData);
    request.input("educationGenerated", sql.VarChar, data.educationGenerated);
    request.input("skillsGenerated", sql.VarChar, data.skillsGenerated);
    request.input("projectGenerated", sql.VarChar, data.projectGenerated);

    const result = await request.query(
      "insert into resumeData (experienceData, educationGenerated, skillsGenerated, projectGenerated) values (@experienceData, @educationGenerated, @skillsGenerated, @projectGenerated)"
    );

    console.log("Data added successfully", result);
    return result.recordset;
  } catch (error) {
    console.error("Error saving data to the database", error);
    throw error;
  }
}

async function saveInputResume(data) {
  let pool;
  try {
    pool = await poolPromise;
    const request = pool.request();

    // Add input parameters for each field
    request.input("fullName", sql.VarChar, data.fullName);
    request.input("phoneNumber", sql.VarChar, data.phoneNumber);
    request.input("email", sql.VarChar, data.email);
    request.input("linkedIn", sql.VarChar, data.linkedIn);
    request.input("personalLink", sql.VarChar, data.personalLink);
    request.input("role", sql.VarChar, data.role);
    request.input("company", sql.VarChar, data.company);
    request.input("date", sql.VarChar, data.date); // You might want to use sql.Date depending on the format
    request.input("location", sql.VarChar, data.location);
    request.input("degree", sql.VarChar, data.degree);
    request.input("schoolLocation", sql.VarChar, data.schoolLocation);
    request.input("schoolName", sql.VarChar, data.schoolName);
    request.input("graduation", sql.VarChar, data.graduation); // Use sql.Date if this is a date field
    request.input("projectTitle", sql.VarChar, data.projectTitle);
    request.input("grades", sql.VarChar, data.grades);

    // Update the SQL query to insert new fields
    const result = await request.query(`
          INSERT INTO resumeInputData 
          ([Full Name], [Phone Number], [Email Address], [LinkedIn URL], [Personal Website OR Relevant Links], [Description of Your Position], Company, [Date or Date Range], Location, Degree, [[University Location], [University Name], [Graduation Date], [Give Your Project a Title], Grades) 
          VALUES 
          (@fullName, @phoneNumber, @email, @linkedIn, @personalLink, @role, @company, @date, @location, @degree, @schoolLocation, @schoolName, @graduation, @projectTitle, @grades)
      `);

    // console.log("Data added successfully", result);
    return result.recordset;
  } catch (error) {
    // console.error("Error saving data to the database", error);
    throw error;
  }
}
