const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const { generateID, generateText } = require("../util/ai-util"); // Import utility functions

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
        (role = req.body.role),
        (company = req.body.company),
        (date = req.body.date),
        (location = req.body.location),
        (description = req.body.description),
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
        role,
        company,
        date,
        location,
        description,
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
      // console.log(jobDetails);

      var industry;
      switch (optionalIndustry) {
        case undefined || null:
          industry = null;
          break;

        default:
          industry = optionalIndustry;
      }
      // console.log(industry);

      /*
      const systemMessage = {
        role: "system",
        content: "Use words daring, dashing, and weird to describe Emily",
      };
      const testP = `Write down 5 words about me, my name is Emily`;

      //   console.log([{ role: "user", content: testP }]);

      const test = await generateText([
        systemMessage,
        { role: "user", content: testP },
      ]);

      console.log(test);

      const testData = {
        test,
      };

      const data = { ...newEntry, ...testData }; */

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
      const experiencePrompt = `Write me a 50 word description about my role at ${company} in ${location} where I worked as a ${role}. I was responsible for ${description}. I worked here during ${date}`;
      const educationPrompt = `Write 5 courses WITH NO DESCRIPTION OF THEM, just list the course names, that I might have taken at ${schoolName} in ${schoolLocation}, getting my degree in ${degree}. My graduation date is ${graduation}. Please look at my ${skills} and ${grades} when choosing these and compare them with the job description I've provided you, making sure I'm demonstarting all of my important courses related to the job.`;
      const skillsPrompt = `Write 10 points for my resume on what I am good at given my skills, ${skills} and the job description you were provided with. Also include information from the courses I have taken IF THEY ARE APPLICABLE: here are the courses ${grades}. Don't write a description for any skill, just write the skill`;
      const projectPrompt = `Write me a 50 word description about my project called ${projectTitle} that consisted of ${projectDescription}`;

      //  send context prompt before generating resume info
      const systemMessage = { role: "system", content: systemPrompt };

      // generate all resume info
      const experienceGenerated = await generateText([
        systemMessage,
        { role: "user", content: experiencePrompt },
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
        experienceGenerated,
        educationGenerated,
        skillsGenerated,
        projectGenerated,
      };

      // console.log(chatgptData);

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
        (role = req.body.role),
        (company = req.body.company),
        (date = req.body.date),
        (location = req.body.location),
        (description = req.body.experienceData),
        (degree = req.body.degree),
        (courses = req.body.courses),
        (schoolLocation = req.body.schoolLocation),
        (schoolName = req.body.schoolName),
        (graduation = req.body.graduation),
        (grades = req.body.grades),
        (skills = req.body.skills),
        (projectTitle = req.body.projectTitle),
        (projectDescription = req.body.projectGenerated);

      const newEntry = {
        id: generateID(),
        regenerateRequest,
        fullName,
        phoneNumber,
        email,
        linkedIn,
        personalLink,
        role,
        company,
        date,
        location,
        description,
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

      console.log(
        regenerateRequest,
        fullName,
        phoneNumber,
        email,
        linkedIn,
        personalLink,
        role,
        company,
        date,
        location,
        description,
        degree,
        courses,
        schoolLocation,
        schoolName,
        graduation,
        grades,
        skills,
        projectTitle,
        projectDescription
      );
      // create a prompt to send to openAI API as system
      let systemPrompt = `You are a updating a resume for someone who wants this change ${regenerateRequest}. Never forget that change when you are writing the resume.`;

      // create prompts to send to openAI API as user
      const experiencePrompt = `Write me a 50 word description about my role at ${company} in ${location} where I worked as a ${role}. I was responsible for ${description}. I worked here during ${date}.  Recall this ${regenerateRequest} when writing EVERYTHING.`;
      const educationPrompt = `Write 5 courses WITH NO DESCRIPTION OF THEM, just list the course names, that I might have taken at ${schoolName} in ${schoolLocation}, getting my degree in ${degree}. My graduation date is ${graduation}. Please look at my ${skills} and ${grades} when choosing these and compare them with the job description I've provided you, making sure I'm demonstarting all of my important courses related to the job. Recall this ${regenerateRequest} when writing EVERYTHING.`;
      const skillsPrompt = `Write 10 points for my resume on what I am good at given my skills, ${skills}. Also include information from the courses I have taken IF THEY ARE APPLICABLE: here are the courses ${courses}. Don't write a description for any skill, just write the skill.  Recall this ${regenerateRequest} when writing EVERYTHING.`;
      const projectPrompt = `Write me a 50 word description about my project called ${projectTitle} that consisted of ${projectDescription}.  Recall this ${regenerateRequest} when writing EVERYTHING.`;

      // console.log("projectDescription", projectDescription);
      // console.log("skills", projectDescription);

      //  send context prompt before generating resume info
      const systemMessage = { role: "system", content: systemPrompt };

      // generate all resume info
      const experienceGenerated = await generateText([
        systemMessage,
        { role: "user", content: experiencePrompt },
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
        experienceGenerated,
        educationGenerated,
        skillsGenerated,
        projectGenerated,
      };

      // console.log(chatgptData);

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
};

module.exports = resumeController;
