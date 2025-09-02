# 🚀 Portfolio Update Scripts

This directory contains scripts to help you efficiently maintain and update your portfolio website.

## 📁 Files Overview

- **`update-portfolio.js`** - Interactive script for adding/updating individual items
- **`batch-update.js`** - Script for updating multiple items at once from JSON files
- **`README.md`** - This documentation file

## 🎯 Quick Start

### 1. Interactive Portfolio Updates
```bash
npm run update-portfolio
```

This opens an interactive menu where you can:
- Add new experiences, projects, skills, and certifications
- Update existing entries
- View current portfolio statistics
- Perform quick updates

### 2. Batch Updates
```bash
# Update from a JSON file
node scripts/batch-update.js updates/my-update.json

# See usage instructions
node scripts/batch-update.js
```

## 🛠️ Usage Examples

### Adding a New Project
```bash
npm run update-portfolio
# Choose option 2 (Add new project)
# Follow the prompts to enter project details
```

### Adding Multiple Items at Once
1. Create a JSON file with your updates (see `examples/monthly-update-example.json`)
2. Run the batch update script:
```bash
node scripts/batch-update.js my-updates.json
```

### Quick Updates
```bash
npm run update-portfolio
# Choose option 5 (Quick updates)
# Select the type of update you need
```

## 📊 Data Structure

### Projects
```json
{
  "title": "Project Name",
  "description": "Project description",
  "image": "/ProjectX.gif",
  "tags": ["Python", "AI/ML"],
  "githubLink": "https://github.com/...",
  "demoLink": "https://youtu.be/...",
  "start": "2025-01",
  "end": "2025-03"
}
```

### Experiences
```json
{
  "role": "Position Title",
  "company": "Company Name",
  "period": "Month Year - Month Year",
  "description": [
    "Achievement point 1",
    "Achievement point 2"
  ]
}
```

### Skills
```json
{
  "category": "Category Name",
  "skills": ["Skill 1", "Skill 2"]
}
```

### Certifications
```json
{
  "name": "Certification Name",
  "issuer": "Issuing Organization",
  "date": "YYYY-MM",
  "url": "Certificate URL"
}
```

## 🔄 Workflow Recommendations

### Daily Updates
- Use `npm run update-portfolio` for quick additions
- Keep a running list of achievements in a notes app

### Weekly Updates
- Review and update ongoing project status
- Add new skills learned
- Update experience periods if needed

### Monthly Reviews
- Use batch updates for comprehensive portfolio maintenance
- Review all links and update outdated information
- Archive completed projects
- Update skill proficiency levels

## 🎯 Tips for Efficient Portfolio Management

1. **Batch Your Updates**: Instead of updating one item at a time, collect several updates and do them all at once

2. **Use Templates**: Keep common update patterns in the `templates/` directory

3. **Regular Reviews**: Set calendar reminders for monthly portfolio reviews

4. **Version Control**: Commit portfolio updates with meaningful messages like "Add new AI project" or "Update experience dates"

5. **Backup Your Data**: Keep backups of your JSON files before major updates

6. **Test Everything**: After updates, test your portfolio website to ensure everything displays correctly

## 🚨 Troubleshooting

### Common Issues

**Script not found**: Make sure you're in the project root directory
```bash
cd my-portfolio
npm run update-portfolio
```

**Permission denied**: Make scripts executable (Linux/Mac)
```bash
chmod +x scripts/*.js
```

**JSON parse error**: Check your JSON file syntax using a JSON validator

**File not found**: Ensure your data files exist in `src/data/`

### Getting Help

If you encounter issues:
1. Check the console output for error messages
2. Verify your JSON file structure matches the examples
3. Ensure all required fields are provided
4. Check file permissions and paths

## 🔮 Future Enhancements

- **GitHub Integration**: Auto-pull project stats from your repositories
- **LinkedIn Sync**: Import experience updates from LinkedIn
- **Calendar Integration**: Automatic reminders for portfolio updates
- **Web Interface**: GUI for portfolio management
- **Auto-deployment**: Deploy portfolio updates automatically

## 📞 Support

For questions or issues with these scripts, check:
1. This README file
2. The example files in `examples/`
3. The main project README
4. Your terminal output for error messages

---

**Remember**: These scripts are designed to make portfolio maintenance effortless so you can focus on building amazing projects! 🚀
