import algoliasearch from "algoliasearch";
import { readFileSync, readdirSync, statSync } from "fs";
import { join, resolve } from "path";

// Initialize Algolia client
const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_API_KEY);
const index = client.initIndex("project-builder-index");

// Function to strip HTML and truncate content
function processContent(htmlContent, maxLength = 8000) {
  // Remove all HTML tags for simplicity
  let text = htmlContent.replace(/<[^>]*>/g, "");
  // Truncate to the maximum length to fit Algolia's size limit
  return text.slice(0, maxLength);
}

// Function to extract title from HTML (simple example)
function extractTitle(htmlContent) {
  const matches = htmlContent.match(/<title>(.*?)<\/title>/);
  return matches ? matches[1] : "No Title";
}

// Recursive function to read and process files
function readFilesSync(dir, files = []) {
  readdirSync(dir).forEach((filename) => {
    const filePath = join(dir, filename);
    const stat = statSync(filePath);

    if (stat.isFile() && filePath.endsWith(".html")) {
      const content = readFileSync(filePath, "utf-8");
      const title = extractTitle(content); // Extract the title
      const processedContent = processContent(content); // Process the content
      files.push({ objectID: filePath, title, content: processedContent });
    } else if (stat.isDirectory()) {
      readFilesSync(filePath, files);
    }
  });

  return files;
}

// Function to synchronize files to Algolia
async function syncToAlgolia(data) {
  try {
    const response = await index.saveObjects(data);
    console.log("Algolia synchronization response:", response);
  } catch (error) {
    console.error("Failed to sync with Algolia:", error);
  }
}

// Main function
async function main() {
  const contentDir = "./dist"; // Adjust to where Astro outputs HTML files
  const files = readFilesSync(contentDir);
  await syncToAlgolia(files);
}

main();
