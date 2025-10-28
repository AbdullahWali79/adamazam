const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Adam Azam Portfolio Website...\n');

// Check if .env exists
const envPath = path.join(__dirname, '.env');
const envExamplePath = path.join(__dirname, 'env.example');

if (!fs.existsSync(envPath)) {
  if (fs.existsSync(envExamplePath)) {
    fs.copyFileSync(envExamplePath, envPath);
    console.log('✅ Created .env file from env.example');
    console.log('📝 Please update .env with your Supabase credentials\n');
  } else {
    console.log('❌ env.example not found');
  }
} else {
  console.log('✅ .env file already exists\n');
}

console.log('📋 Next steps:');
console.log('1. Run: npm install');
console.log('2. Set up your Supabase project');
console.log('3. Run the SQL schema from supabase-schema.sql');
console.log('4. Update .env with your Supabase credentials');
console.log('5. Run: npm start');
console.log('\n🎉 Happy coding!');
