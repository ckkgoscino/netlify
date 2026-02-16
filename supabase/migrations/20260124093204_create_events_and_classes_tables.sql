/*
  # Create Cultural Center Database Schema

  1. New Tables
    - `events`
      - `id` (uuid, primary key)
      - `title` (text) - Event title
      - `description` (text) - Event description
      - `event_date` (timestamptz) - Date and time of the event
      - `image_url` (text) - URL to event image
      - `category` (text) - Type of event (concert, meeting, etc.)
      - `created_at` (timestamptz)
      
    - `recurring_classes`
      - `id` (uuid, primary key)
      - `title` (text) - Class title
      - `description` (text) - Class description
      - `day_of_week` (integer) - 0-6 (Sunday-Saturday)
      - `time` (text) - Time of the class
      - `image_url` (text) - URL to class image
      - `instructor` (text) - Instructor name
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access (cultural center website is public)
*/

CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text DEFAULT '',
  event_date timestamptz NOT NULL,
  image_url text DEFAULT '',
  category text DEFAULT 'event',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS recurring_classes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text DEFAULT '',
  day_of_week integer NOT NULL CHECK (day_of_week >= 0 AND day_of_week <= 6),
  time text NOT NULL,
  image_url text DEFAULT '',
  instructor text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE recurring_classes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Events are publicly readable"
  ON events
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Recurring classes are publicly readable"
  ON recurring_classes
  FOR SELECT
  TO anon
  USING (true);