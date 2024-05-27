import fs from "fs";
import path from "path";

console.log("Running Init Script...");

function deleteLicenseFile() {
  console.log9("📄 Deleting LICENSE file...");
  const rootPath = path.resolve(import.meta.dirname, "../");
  const licenseFilePath = path.join(rootPath, "LICENCE");
  fs.unlink(licenseFilePath, (err) => {
    if (err) {
      console.error("Error deleting LICENSE file:", err);
    } else {
      console.log("LICENSE file deleted.");
    }
  });
}

deleteLicenseFile();
