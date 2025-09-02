#!/usr/bin/env node

/**
 * Portfolio Update Helper Script
 * This script helps you quickly add new experiences, projects, skills, and certifications
 * to your portfolio without manually editing JSON files.
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const DATA_DIR = path.join(__dirname, '../src/data');

// Helper function to read JSON files
function readJsonFile(filename) {
  const filepath = path.join(DATA_DIR, filename);
  try {
    const data = fs.readFileSync(filepath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${filename}:`, error.message);
    return [];
  }
}

// Helper function to write JSON files
function writeJsonFile(filename, data) {
  const filepath = path.join(DATA_DIR, filename);
  try {
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
    console.log(`✅ Successfully updated ${filename}`);
  } catch (error) {
    console.error(`Error writing ${filename}:`, error.message);
  }
}

// Add new experience
async function addExperience() {
  console.log('\n📝 Adding New Experience Entry\n');
  
  const experience = {};
  
  experience.role = await question('Role/Position: ');
  experience.company = await question('Company/Organization: ');
  experience.period = await question('Period (e.g., "May 2024 - Aug 2024"): ');
  
  console.log('\nEnter description points (press Enter twice when done):');
  const description = [];
  let i = 1;
  
  while (true) {
    const point = await question(`Point ${i}: `);
    if (point.trim() === '') break;
    description.push(point);
    i++;
  }
  
  experience.description = description;
  
  // Auto-generate ID
  const experiences = readJsonFile('experience.json');
  experience.id = experiences.length + 1;
  
  experiences.unshift(experience); // Add to beginning
  writeJsonFile('experience.json', experiences);
  
  console.log('\n🎉 Experience added successfully!');
}

// Add new project
async function addProject() {
  console.log('\n🚀 Adding New Project\n');
  
  const project = {};
  
  project.title = await question('Project Title: ');
  project.description = await question('Project Description: ');
  project.image = await question('Image path (e.g., "/Project6.gif"): ');
  
  console.log('\nEnter tags (comma-separated):');
  const tagsInput = await question('Tags: ');
  project.tags = tagsInput.split(',').map(tag => tag.trim());
  
  project.githubLink = await question('GitHub Repository URL: ');
  project.demoLink = await question('Demo/Demo Video URL: ');
  project.start = await question('Start Date (YYYY-MM): ');
  project.end = await question('End Date (YYYY-MM): ');
  
  // Auto-generate ID
  const projects = readJsonFile('projects.json');
  project.id = projects.length + 1;
  
  projects.unshift(project); // Add to beginning
  writeJsonFile('projects.json', projects);
  
  console.log('\n🎉 Project added successfully!');
}

// Add new skill
async function addSkill() {
  console.log('\n🛠️ Adding New Skill\n');
  
  const skills = readJsonFile('skills.json');
  
  console.log('\nExisting categories:');
  skills.forEach((cat, index) => {
    console.log(`${index + 1}. ${cat.category}`);
  });
  
  const choice = await question('\nChoose category number or enter new category name: ');
  let categoryIndex = parseInt(choice) - 1;
  let categoryName;
  
  if (isNaN(categoryIndex) || categoryIndex < 0 || categoryIndex >= skills.length) {
    categoryName = choice;
    skills.push({ category: categoryName, skills: [] });
    categoryIndex = skills.length - 1;
  } else {
    categoryName = skills[categoryIndex].category;
  }
  
  const newSkill = await question('New skill to add: ');
  skills[categoryIndex].skills.push(newSkill);
  
  writeJsonFile('skills.json', skills);
  console.log(`\n🎉 Skill "${newSkill}" added to "${categoryName}" category!`);
}

// Add new certification
async function addCertification() {
  console.log('\n🏆 Adding New Certification\n');
  
  const certification = {};
  
  certification.name = await question('Certification Name: ');
  certification.issuer = await question('Issuing Organization: ');
  certification.date = await question('Date (YYYY-MM): ');
  certification.url = await question('Certificate URL: ');
  
  // Auto-generate ID
  const certifications = readJsonFile('certifications.json');
  certification.id = certifications.length + 1;
  
  certifications.unshift(certification); // Add to beginning
  writeJsonFile('certifications.json', certifications);
  
  console.log('\n🎉 Certification added successfully!');
}

// Quick update functions
async function quickUpdate() {
  console.log('\n⚡ Quick Update Options:\n');
  console.log('1. Update project dates');
  console.log('2. Add new skill to existing category');
  console.log('3. Update experience period');
  console.log('4. Mark project as completed');
  
  const choice = await question('\nChoose option (1-4): ');
  
  switch (choice) {
    case '1':
      await updateProjectDates();
      break;
    case '2':
      await addSkill();
      break;
    case '3':
      await updateExperiencePeriod();
      break;
    case '4':
      await markProjectCompleted();
      break;
    default:
      console.log('Invalid option');
  }
}

// Update project dates
async function updateProjectDates() {
  const projects = readJsonFile('projects.json');
  
  console.log('\n📅 Current Projects:\n');
  projects.forEach((project, index) => {
    console.log(`${index + 1}. ${project.title} (${project.start} - ${project.end})`);
  });
  
  const projectIndex = parseInt(await question('\nChoose project number: ')) - 1;
  if (projectIndex >= 0 && projectIndex < projects.length) {
    const project = projects[projectIndex];
    project.start = await question(`New start date for "${project.title}" (${project.start}): `) || project.start;
    project.end = await question(`New end date for "${project.title}" (${project.end}): `) || project.end;
    
    writeJsonFile('projects.json', projects);
    console.log('\n✅ Project dates updated!');
  }
}

// Update experience period
async function updateExperiencePeriod() {
  const experiences = readJsonFile('experience.json');
  
  console.log('\n📅 Current Experiences:\n');
  experiences.forEach((exp, index) => {
    console.log(`${index + 1}. ${exp.role} at ${exp.company} (${exp.period})`);
  });
  
  const expIndex = parseInt(await question('\nChoose experience number: ')) - 1;
  if (expIndex >= 0 && expIndex < experiences.length) {
    const exp = experiences[expIndex];
    exp.period = await question(`New period for "${exp.role}" (${exp.period}): `) || exp.period;
    
    writeJsonFile('experience.json', experiences);
    console.log('\n✅ Experience period updated!');
  }
}

// Mark project as completed
async function markProjectCompleted() {
  const projects = readJsonFile('projects.json');
  
  console.log('\n📋 Ongoing Projects:\n');
  const ongoingProjects = projects.filter(p => p.end === 'Present' || p.end === 'Ongoing');
  ongoingProjects.forEach((project, index) => {
    console.log(`${index + 1}. ${project.title}`);
  });
  
  if (ongoingProjects.length === 0) {
    console.log('No ongoing projects found.');
    return;
  }
  
  const projectIndex = parseInt(await question('\nChoose project to mark as completed: ')) - 1;
  if (projectIndex >= 0 && projectIndex < ongoingProjects.length) {
    const project = ongoingProjects[projectIndex];
    const endDate = await question(`Completion date for "${project.title}" (YYYY-MM): `);
    
    if (endDate) {
      project.end = endDate;
      writeJsonFile('projects.json', projects);
      console.log('\n✅ Project marked as completed!');
    }
  }
}

// Helper function for questions
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

// Main menu
async function showMenu() {
  console.log('\n🎯 Portfolio Update Helper\n');
  console.log('1. Add new experience');
  console.log('2. Add new project');
  console.log('3. Add new skill');
  console.log('4. Add new certification');
  console.log('5. Quick updates');
  console.log('6. View current data');
  console.log('7. Exit');
  
  const choice = await question('\nChoose an option (1-7): ');
  
  switch (choice) {
    case '1':
      await addExperience();
      break;
    case '2':
      await addProject();
      break;
    case '3':
      await addSkill();
      break;
    case '4':
      await addCertification();
      break;
    case '5':
      await quickUpdate();
      break;
    case '6':
      await viewCurrentData();
      break;
    case '7':
      console.log('\n👋 Goodbye! Keep building amazing things!');
      rl.close();
      return;
    default:
      console.log('Invalid option. Please try again.');
  }
  
  // Show menu again
  await showMenu();
}

// View current data
async function viewCurrentData() {
  console.log('\n📊 Current Portfolio Data:\n');
  
  const experiences = readJsonFile('experience.json');
  const projects = readJsonFile('projects.json');
  const skills = readJsonFile('skills.json');
  const certifications = readJsonFile('certifications.json');
  
  console.log(`👔 Experiences: ${experiences.length}`);
  console.log(`🚀 Projects: ${projects.length}`);
  console.log(`🛠️ Skill Categories: ${skills.length}`);
  console.log(`🏆 Certifications: ${certifications.length}`);
  
  console.log('\n📋 Recent Additions:');
  
  if (experiences.length > 0) {
    console.log(`\nLatest Experience: ${experiences[0].role} at ${experiences[0].company}`);
  }
  
  if (projects.length > 0) {
    console.log(`Latest Project: ${projects[0].title}`);
  }
  
  if (certifications.length > 0) {
    console.log(`Latest Certification: ${certifications[0].name}`);
  }
}

// Start the application
console.log('🚀 Welcome to Portfolio Update Helper!');
showMenu().catch(console.error);
