import { generateText } from "./index.js";

// Potential prompts
const prompt1 = `I am writing a resume, my details are \n name: ${fullName} \n role: ${currentPosition} (${currentLength} years). \n I write in the technolegies: ${currentTechnologies}. Can you write a 100 words description for the top of the resume(first person writing)?`;

const prompt2 = `I am writing a resume, my details are \n name: ${fullName} \n role: ${currentPosition} (${currentLength} years). \n I write in the technolegies: ${currentTechnologies}. Can you write 10 points for a resume on what I am good at?`;

const prompt3 = `I am writing a resume, my details are \n name: ${fullName} \n role: ${currentPosition} (${currentLength} years). \n During my years I worked at ${
  workArray.length
} companies. ${remainderText()} \n Can you write me 50 words for each company seperated in numbers of my succession in the company (in first person)?`;

// Generate resume sections
const objective = await generateText(prompt1);
const keypoints = await generateText(prompt2);
const jobResponsibilities = await GPTFunction(prompt3);

// Put data into one object
const chatgptData = { objective, keypoints, jobResponsibilities };

console.log(chatgptData);
