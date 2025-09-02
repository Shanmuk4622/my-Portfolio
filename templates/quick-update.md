# 🚀 Quick Portfolio Update Templates

## 📝 Common Update Scenarios

### 1. **New Project Completed**
```json
{
  "title": "Project Name",
  "description": "Brief description of what the project does",
  "image": "/ProjectX.gif",
  "tags": ["Python", "AI/ML", "Computer Vision"],
  "githubLink": "https://github.com/Shanmuk4622/ProjectName",
  "demoLink": "https://youtu.be/demo-link",
  "start": "2025-01",
  "end": "2025-03"
}
```

### 2. **New Experience/Internship**
```json
{
  "role": "Position Title",
  "company": "Company Name",
  "period": "Month Year - Month Year",
  "description": [
    "Key achievement or responsibility point 1",
    "Key achievement or responsibility point 2",
    "Key achievement or responsibility point 3"
  ]
}
```

### 3. **New Certification**
```json
{
  "name": "Certification Name",
  "issuer": "Issuing Organization",
  "date": "YYYY-MM",
  "url": "Certificate URL or file path"
}
```

### 4. **New Skill Added**
```json
{
  "category": "Existing or New Category",
  "skills": ["New Skill 1", "New Skill 2"]
}
```

## ⚡ Quick Commands

### Run Portfolio Update Helper
```bash
npm run update-portfolio
```

### Manual JSON Updates
```bash
# Add new project
echo '{"title":"New Project","description":"..."}' >> src/data/projects.json

# Add new experience
echo '{"role":"New Role","company":"Company","period":"..."}' >> src/data/experience.json
```

## 📅 Monthly Portfolio Review Checklist

- [ ] Update ongoing project status
- [ ] Add new skills learned
- [ ] Update experience periods
- [ ] Add new certifications
- [ ] Review and update project descriptions
- [ ] Check all GitHub links are working
- [ ] Update demo links if needed
- [ ] Review skill categorization

## 🎯 Portfolio Maintenance Tips

1. **Set Reminders**: Schedule monthly portfolio reviews
2. **Batch Updates**: Update multiple items at once using the helper script
3. **Keep Templates**: Save common update patterns for reuse
4. **Version Control**: Commit portfolio updates with meaningful messages
5. **Backup**: Keep backup of your data files
6. **Test Links**: Regularly check all external links work
7. **Update Dates**: Keep project and experience dates current

## 🔄 Automation Ideas

- **GitHub Actions**: Auto-update portfolio when you push to repos
- **LinkedIn Integration**: Sync experience updates
- **Calendar Integration**: Remind you to update portfolio
- **API Integration**: Pull project stats from GitHub automatically
