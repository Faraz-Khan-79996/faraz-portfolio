const fs = require('fs');
const path = require('path');

// Define the folder containing your SVGs
const folderPath = path.join(__dirname, 'technologies');

// Define the output file
const outputPath = path.join(__dirname, 'technologiesArray.js');

// Read all files in the folder
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading the folder:', err);
    return;
  }

  // Filter for SVG files (or other image types if needed)
  const svgFiles = files.filter(file => path.extname(file) === '.svg');

  // Create an array of objects
  const technologiesArray = svgFiles.map(file => ({
    name: path.basename(file, path.extname(file)), // File name without extension
    src: `/technologies/${file}`, // Relative path
  }));

  // Generate the output content
  const outputContent = `export const technologies = ${JSON.stringify(
    technologiesArray,
    null,
    2
  )};\n`;

  // Write the array to the output file
  fs.writeFile(outputPath, outputContent, err => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log(`Array written to ${outputPath}`);
    }
  });
});
