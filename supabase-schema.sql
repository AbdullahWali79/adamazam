-- Create blogs table
CREATE TABLE blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  image_url TEXT NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  seo_title VARCHAR(255),
  seo_description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create admin_passwords table
CREATE TABLE admin_passwords (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default admin password (change this to your desired password)
INSERT INTO admin_passwords (password) VALUES ('admin123');

-- Enable Row Level Security (RLS)
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_passwords ENABLE ROW LEVEL SECURITY;

-- Create policies for blogs table (public read access)
CREATE POLICY "Blogs are viewable by everyone" ON blogs
  FOR SELECT USING (true);

-- Create policies for admin_passwords table (no public access)
CREATE POLICY "Admin passwords are not accessible" ON admin_passwords
  FOR ALL USING (false);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_blogs_updated_at 
  BEFORE UPDATE ON blogs 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();
