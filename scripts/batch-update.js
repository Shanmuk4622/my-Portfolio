#!/usr/bin/env node

/**
 * Batch Portfolio Update Script
 * Update multiple portfolio items at once from a JSON file
 * Useful for bulk updates after major achievements or monthly reviews
 */

const fs = require('fs');
const path = require('path');

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

// Batch update projects
function batchUpdateProjects(newProjects) {
  const projects = readJsonFile('projects.json');
  
  newProjects.forEach(newProject => {
    // Check if project already exists
    const existingIndex = projects.findIndex(p => p.title === newProject.title);
    
    if (existingIndex !== -1) {
      // Update existing project
      console.log(`🔄 Updating existing project: ${newProject.title}`);
      projects[existingIndex] = { ...projects[existingIndex], ...newProject };
    } else {
      // Add new project
      console.log(`➕ Adding new project: ${newProject.title}`);
      newProject.id = projects.length + 1;
      projects.unshift(newProject);
    }
  });
  
  writeJsonFile('projects.json', projects);
  console.log(`📊 Total projects: ${projects.length}`);
}

// Batch update experiences
function batchUpdateExperiences(newExperiences) {
  const experiences = readJsonFile('experience.json');
  
  newExperiences.forEach(newExp => {
    // Check if experience already exists
    const existingIndex = experiences.findIndex(e => 
      e.role === newExp.role && e.company === newExp.company
    );
    
    if (existingIndex !== -1) {
      // Update existing experience
      console.log(`🔄 Updating existing experience: ${newExp.role} at ${newExp.company}`);
      experiences[existingIndex] = { ...experiences[existingIndex], ...newExp };
    } else {
      // Add new experience
      console.log(`➕ Adding new experience: ${newExp.role} at ${newExp.company}`);
      newExp.id = experiences.length + 1;
      experiences.unshift(newExp);
    }
  });
  
  writeJsonFile('experience.json', experiences);
  console.log(`📊 Total experiences: ${experiences.length}`);
}

// Batch update skills
function batchUpdateSkills(newSkills) {
  const skills = readJsonFile('skills.json');
  
  newSkills.forEach(newSkill => {
    const existingCategoryIndex = skills.findIndex(s => s.category === newSkill.category);
    
    if (existingCategoryIndex !== -1) {
      // Add to existing category
      console.log(`🔄 Adding skills to existing category: ${newSkill.category}`);
      newSkill.skills.forEach(skill => {
        if (!skills[existingCategoryIndex].skills.includes(skill)) {
          skills[existingCategoryIndex].skills.push(skill);
          console.log(`  ➕ Added: ${skill}`);
        }
      });
    } else {
      // Create new category
      console.log(`➕ Creating new skill category: ${newSkill.category}`);
      skills.push(newSkill);
    }
  });
  
  writeJsonFile('skills.json', skills);
  console.log(`📊 Total skill categories: ${skills.length}`);
}

// Batch update certifications
function batchUpdateCertifications(newCerts) {
  const certifications = readJsonFile('certifications.json');
  
  newCerts.forEach(newCert => {
    // Check if certification already exists
    const existingIndex = certifications.findIndex(c => 
      c.name === newCert.name && c.issuer === newCert.issuer
    );
    
    if (existingIndex !== -1) {
      // Update existing certification
      console.log(`🔄 Updating existing certification: ${newCert.name}`);
      certifications[existingIndex] = { ...certifications[existingIndex], ...newCert };
    } else {
      // Add new certification
      console.log(`➕ Adding new certification: ${newCert.name}`);
      newCert.id = certifications.length + 1;
      certifications.unshift(newCert);
    }
  });
  
  writeJsonFile('certifications.json', certifications);
  console.log(`📊 Total certifications: ${certifications.length}`);
}

// Main batch update function
function batchUpdate(updateData) {
  console.log('🚀 Starting batch portfolio update...\n');
  
  if (updateData.projects && updateData.projects.length > 0) {
    console.log('📁 Updating projects...');
    batchUpdateProjects(updateData.projects);
    console.log('');
  }
  
  if (updateData.experiences && updateData.experiences.length > 0) {
    console.log('💼 Updating experiences...');
    batchUpdateExperiences(updateData.experiences);
    console.log('');
  }
  
  if (updateData.skills && updateData.skills.length > 0) {
    console.log('🛠️ Updating skills...');
    batchUpdateSkills(updateData.skills);
    console.log('');
  }
  
  if (updateData.certifications && updateData.certifications.length > 0) {
    console.log('🏆 Updating certifications...');
    batchUpdateCertifications(updateData.certifications);
    console.log('');
  }
  
  console.log('✅ Batch update completed successfully!');
}

// Example usage and CLI
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('🚀 Batch Portfolio Update Script\n');
    console.log('Usage: node scripts/batch-update.js <update-file.json>');
    console.log('Example: node scripts/batch-update.js updates/monthly-update.json');
    console.log('\nCreate a JSON file with the following structure:');
    console.log(`
{
  "projects": [
    {
      "title": "New Project",
      "description": "Project description",
      "tags": ["Python", "AI"],
      "githubLink": "https://github.com/...",
      "demoLink": "https://youtu.be/...",
      "start": "2025-01",
      "end": "2025-03"
    }
  ],
  "experiences": [
    {
      "role": "New Role",
      "company": "Company Name",
      "period": "Jan 2025 - Mar 2025",
      "description": ["Achievement 1", "Achievement 2"]
    }
  ],
  "skills": [
    {
      "category": "New Category",
      "skills": ["Skill 1", "Skill 2"]
    }
  ],
  "certifications": [
    {
      "name": "Cert Name",
      "issuer": "Organization",
      "date": "2025-01",
      "url": "https://..."
    }
  ]
}
    `);
    process.exit(0);
  }
  
  const updateFile = args[0];
  
  try {
    const updateData = JSON.parse(fs.readFileSync(updateFile, 'utf8'));
    batchUpdate(updateData);
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('Make sure the JSON file exists and is valid.');
    process.exit(1);
  }
}

module.exports = { batchUpdate };
