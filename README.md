# MongoDB Snippets for SciCat Data Management 🛠️  

A repository of MongoDB snippets to update, modify, and fix SciCat metadata in the database. These scripts are designed to help manage data issues, such as correcting run numbers, updating owners, modifying proposals, and handling published data.

---

## Features ✨  

- Update **run numbers** for existing datasets.  
- Correct **owner information** and proposals.  
- Modify **published data flags**.  
- Perform targeted updates for improved data consistency.  

---

## Prerequisites 🛠️  

- MongoDB installed and accessible.  
- A MongoDB client (e.g., `mongosh` or `MongoDB Compass`).  
- Basic familiarity with MongoDB queries.  

---

## Usage 🔧  

1. Clone the repository:  
git clone https://github.com/your-username/scicat-mongo-snippets.git  
cd scicat-mongo-snippets  

2. Connect to your MongoDB instance:  
mongosh mongodb://your-mongodb-uri  

3. Run the desired snippet by copying and pasting it into the MongoDB shell.

---

## Example Snippets  

### Update Run Number  
db.datasets.updateMany({ runNumber: { $exists: true } }, { $set: { runNumber: 1001 } });  

### Change Owner  
db.datasets.updateMany({ owner: "oldOwner" }, { $set: { owner: "newOwner" } });  

### Fix Proposal ID  
db.datasets.updateMany({ proposalId: "oldProposal" }, { $set: { proposalId: "newProposal" } });  

### Mark Data as Published  
db.datasets.updateMany({ isPublished: false }, { $set: { isPublished: true } });  

---

## File Structure 📂  

- `snippets/`: Directory containing categorized MongoDB snippet files.  
  - `runNumbers.js`: Scripts for updating run numbers.  
  - `owners.js`: Scripts for updating owner information.  
  - `proposals.js`: Scripts for managing proposal data.  
  - `publishedData.js`: Scripts for managing publication status.  
- `README.md`: Documentation for the repository.  

---

## Contributing 🤝  

1. Fork the repository.  
2. Create a new branch:  
git checkout -b feature/your-feature  

3. Commit your changes:  
git commit -m "Add your feature"  

4. Push the branch:  
git push origin feature/your-feature  

5. Open a pull request.  

---

## License 📝  

This project is licensed under the MIT License. See the LICENSE file for details.

---

**Easily manage and fix SciCat data with these MongoDB snippets!** 🛠️✨  
