const { generateID, generateText } = require("../util/ai-util"); // Import utility functions

const resumeController = {
  // Create a resume entry logic
  createResumeEntry: async (req, res) => {
    try {
      const {
        fullName,
        phoneNumber,
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
      } = req.body;

      const newEntry = {
        id: generateID(),
        fullName,
        phoneNumber,
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
      console.log(jobDescription);

      var industry;
      switch (optionalIndustry) {
        case undefined:
          industry = null;
          break;

        default:
          industry = optionalIndustry;
      }
      console.log(industry);

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
      if (industry != null && jobDescription != null) {
        systemPrompt = `You are a resume writer for someone who works in the ${industry} industry and is applying for a job with this description ${jobDescription}. Never forget that industry and job description when you are writing the resume.`;
      } else if (industry != null) {
        systemPrompt = `You are a resume writer for someone who works in the ${industry} industry. Never forget that industry when you are writing the resume.`;
      } else if (jobDescription != null) {
        systemPrompt = `You are a resume writer for someone who is applying for a job with this description ${jobDescription}. Never forget that job description when you are writing the resume.`;
      } else {
        systemPrompt = `You are a resume writer for someone. Never forget that role.`;
      }

      // create prompts to send to openAI API as user
      const role1Prompt = `Write me a 50 word description about my role at ${company1} in ${location1} where I worked as a ${role1}. I was responsible for ${description1}`;
      const role2Prompt = `Write me a 50 word description about my role at ${company2} in ${location2} where I worked as a ${role2}. I was responsible for ${description2}`;
      const educationPrompt = `Write 5 courses that I might have taken at ${schoolName} in ${location}, getting my degree in ${degree}. My graduation date is ${graduation}`;
      const skillsPrompt = `Write 10 points for my resume on what I am good at given my skills, ${skills}`;
      const projectPrompt = `Write me a 50 word description about my project called ${projectTitle} that consisted of ${projectDescription}`;

      //  send context prompt before generating resume info
      const systemMessage = { role: "system", content: systemPrompt };

      // generate all resume info
      const role1Generated = await generateText([
        systemMessage,
        { role: "user", content: role1Prompt },
      ]);

      const role2Generated = await generateText([
        systemMessage,
        { role: "user", content: role2Prompt },
      ]);

      const educationGenerated = await generateText([
        systemMessage,
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
        role1Generated,
        role2Generated,
        educationGenerated,
        skillsGenerated,
        projectGenerated,
      };

      console.log(chatgptData);

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
