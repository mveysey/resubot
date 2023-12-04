const {
  generateID,
  generateTextUser,
  generateTextAssistant,
} = require("../util/ai-util"); // Import utility functions

const resumeController = {
  // Create a resume entry logic
  createResumeEntry: async (req, res) => {
    try {
      (fullName = req.body.fullName),
        (phoneNumber = req.body.phoneNumber),
        (email = req.body.email),
        (linkedIn = req.body.linkedIn),
        (personalLink = req.body.personalLink),
        (optionalJobDecsription = req.body.newPosition),
        (optionalIndustry = req.body.industry),
        (role1 = req.body.role1),
        (company1 = req.body.company1),
        (date1 = req.body.date1),
        (location1 = req.body.location1),
        (description1 = req.body.description1),
        (role2 = req.body.role2),
        (company2 = req.body.company2),
        (date2 = req.body.date2),
        (location2 = req.body.location2),
        (description2 = req.body.descriotion2),
        (degree = req.body.degree),
        (location = req.body.location),
        (schoolName = req.body.schoolName),
        (graduation = req.body.graduation),
        (skills = req.body.skilss),
        (projectTitle = req.body.projectTitle),
        (projectDescription = req.body.projectDescription);

      const newEntry = {
        id: generateID(),
        fullName,
        phonenumer,
        email,
        linkedIn,
        personalLink,
        optionalJobDecsription,
        optionalIndustry,
        role1,
        company1,
        date1,
        location1,
        description1,
        role2,
        company2,
        date2,
        location2,
        description2,
        degree,
        location,
        schoolName,
        graduation,
        skills,
        projectTitle,
        projectDescription,
      };

      // assign values to optional params
      var jobDescription;
      switch (optionalJobDecsription) {
        case undefined:
          jobDescription = null;
          break;

        default:
          jobDescription = optionalJobDecsription;
      }

      var industry;
      switch (optionalIndustry) {
        case undefined:
          industry = null;
          break;

        default:
          industry = optionalIndustry;
      }

      //   const testPrompt = `My full name is Madeline. Can you write a 20-word description about my name?`;

      let systemPrompt;
      if (industry != null && jobDescription != null) {
        systemPrompt = `You are a resume writer for someone who works in the ${industry} industry and is applying for a job with this description ${jobDescription}. Never forget that industry and job description when you are writing the resume.`;
      } else if (industry != null) {
        systemPrompt = `You are a resume writer for someone who works in the ${industry} industry. Never forget that industry when you are writing the resume.`;
      } else if (jobDescription != null) {
        systemPrompt = `You are a resume writer for someone who is applying for a job with this description ${jobDescription}. Never forget that job description when you are writing the resume.`;
      } else {
        systemPrompt = `You are a resume writer for someone. Never forget that role.`;
      }

      const role1Prompt = `Write me a 50 word description about my role at ${company1} in ${location1} where I worked as a ${role1} doing ${description1}`;
      const role2Prompt = `Write me a 50 word description about my role at ${company2} in ${location2} where I worked as a ${role2} doing ${description2}`;
      const educationPrompt = `Write 5 courses that I might have taken at ${schoolName} in ${location}, getting my degree in ${degree}. My graduation date is ${graduation}`;
      const skillsPrompt = `Write 10 points for my resume on what I am good at given my skills, ${skills}`;
      const projectPrompt = `Write me a 50 word description about my project called ${projectTitle} that consisted of ${projectDescription}`;

      // const objective = await generateText(prompt1);
      // const keypoints = await generateText(prompt2);
      // const jobResponsibilities = await generateText(prompt3);

      // send context prompt before generating resume info
      await generateTextAssistant(systemPrompt);

      const role1Generated = await generateText(role1Prompt);
      const role2Generated = await generateText(role2Prompt);
      const educationGenerated = await generateText(educationPrompt);
      const skillsGenerated = await generateText(skillsPrompt);
      const projectGenerated = await generateText(projectPrompt);

      //   const test = await generateText(testPrompt);

      const chatgptData = {
        role1Generated,
        role2Generated,
        educationGenerated,
        skillsGenerated,
        projectGenerated,
      };
      const responseData = { ...newEntry, ...chatgptData };

      console.log(responseData);
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
