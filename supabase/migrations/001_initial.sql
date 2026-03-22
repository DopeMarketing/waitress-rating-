-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create restaurants table
CREATE TABLE restaurants (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address TEXT,
  city VARCHAR(100),
  state VARCHAR(50),
  zip_code VARCHAR(20),
  phone VARCHAR(20),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create servers table
CREATE TABLE servers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create ratings table
CREATE TABLE ratings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  server_id UUID REFERENCES servers(id) ON DELETE CASCADE,
  restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL,
  anonymous BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_ratings_server_id ON ratings(server_id);
CREATE INDEX idx_ratings_restaurant_id ON ratings(restaurant_id);
CREATE INDEX idx_ratings_user_id ON ratings(user_id);
CREATE INDEX idx_ratings_created_at ON ratings(created_at);
CREATE INDEX idx_servers_restaurant_id ON servers(restaurant_id);

-- Create a view for server statistics
CREATE VIEW server_stats AS
SELECT 
  s.id,
  s.first_name,
  s.last_name,
  s.restaurant_id,
  r.name as restaurant_name,
  COUNT(rt.rating) as total_ratings,
  ROUND(AVG(rt.rating::DECIMAL), 2) as average_rating
FROM servers s
LEFT JOIN restaurants r ON s.restaurant_id = r.id
LEFT JOIN ratings rt ON s.id = rt.server_id
GROUP BY s.id, s.first_name, s.last_name, s.restaurant_id, r.name;

-- Row Level Security (RLS) policies
ALTER TABLE restaurants ENABLE ROW LEVEL SECURITY;
ALTER TABLE servers ENABLE ROW LEVEL SECURITY;
ALTER TABLE ratings ENABLE ROW LEVEL SECURITY;

-- Allow public read access to restaurants and servers
CREATE POLICY "Public can view restaurants" ON restaurants FOR SELECT USING (true);
CREATE POLICY "Public can view servers" ON servers FOR SELECT USING (true);

-- Users can view all ratings but only insert their own
CREATE POLICY "Users can view all ratings" ON ratings FOR SELECT USING (true);
CREATE POLICY "Users can insert own ratings" ON ratings FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own ratings" ON ratings FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own ratings" ON ratings FOR DELETE USING (auth.uid() = user_id);