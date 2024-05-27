import fs from "fs";
import path from "path";

export default function main() {
  console.log("Running Init Script...");
  deleteLicenseFile();
}

function deleteLicenseFile() {
  console.log("📄 Deleting LICENSE file...");
  const rootPath = path.resolve(import.meta.dirname, "../");
  const licenseFilePath = path.join(rootPath, "LICENSE");
  fs.unlink(licenseFilePath, (err) => {
    if (err) {
      console.error("Error deleting LICENSE file:", err);
    } else {
      console.log("LICENSE file deleted.");
    }
  });
}
