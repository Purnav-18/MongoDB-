# Clone the repository
git clone https://github.com/your-username/ecommerce-api.git
cd ecommerce-api

# Initialize Node.js project (skip if package.json exists)
npm init -y

# Install dependencies
npm install express mongoose dotenv cors body-parser

# (Optional) Install development tools
npm install --save-dev nodemon

# Create project structure
mkdir config controllers models routes
touch server.js .env .gitignore

# Add to .gitignore
echo "node_modules/" >> .gitignore
echo ".env" >> .gitignore

# Create sample .env file
cat <<EOL > .env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
EOL

# Start the server with nodemon (if installed)
npx nodemon server.js

# OR with plain Node.js
node server.js
