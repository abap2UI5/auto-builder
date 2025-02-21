const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Load configuration from the JSON file
const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'build-config.jsonc'), 'utf8'));
const repos = config.repos;

const inputDir = path.join(__dirname, config.inputDir);
const outputDir = path.join(__dirname, config.outputDir);

// Ensure the input directory exists
if (!fs.existsSync(inputDir)) {
  fs.mkdirSync(inputDir);
}

// Ensure the src directory is deleted if it exists
if (fs.existsSync(outputDir)) {
  fs.rmSync(outputDir, { recursive: true, force: true });
}

// Create the src directory
fs.mkdirSync(outputDir);

repos.forEach(repo => {
  if (!repo.active) {
    console.log(`Skipping repository: ${repo.url}`);
    return;
  }

  const repoName = repo.url.split('/').pop();
  const cloneDir = path.join(inputDir, repoName);

  // Check if the directory exists and is not empty, and delete it if necessary
  if (fs.existsSync(cloneDir)) {
    fs.rmSync(cloneDir, { recursive: true, force: true });
  }

  exec(`git clone --branch ${repo.branch} ${repo.url} ${cloneDir}`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error cloning ${repo.url}:`, stderr);
      return;
    }

    console.log(`Successfully cloned: ${repo.url}`);
    
    const sourcePath = path.join(cloneDir, repo.sourceDir);
    const targetPath = path.join(outputDir, repo.targetDir);

    // Check if the target directory exists and delete it if necessary
    if (fs.existsSync(targetPath)) {
      fs.rmSync(targetPath, { recursive: true, force: true });
    }

    if (fs.existsSync(sourcePath)) {
      fs.cpSync(sourcePath, targetPath, { recursive: true });
      console.log(`Directory ${repo.sourceDir} from ${repoName} successfully copied to ${repo.targetDir}.`);
    } else {
      console.error(`Directory ${repo.sourceDir} not found in ${repoName}`);
    }
  });
});