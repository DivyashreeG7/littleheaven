export interface Program {
  id: string;
  title: string;
  ageGroup: string;
  timing: string;
  description: string;
  longDescription: string;
  iconName: string;
  image: string;
  ratio: string;
  keySkills: string[];
  features: string[];
  badgeColor: string;
}

export interface DailyActivity {
  id: string;
  title: string;
  time: string;
  icon: string;
  description: string;
  category: string;
  details: string;
  highlights: string[];
  image?: string;
}

export interface WhyFeature {
  id: string;
  title: string;
  badge: string;
  icon: string;
  description: string;
  highlight: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Classroom' | 'Outdoor' | 'Creative' | 'Celebration' | 'Sports';
  image: string;
  caption: string;
  ageTag: string;
  highlight: string;
  pageNumber: number;
}

export interface ParentReview {
  id: string;
  name: string;
  childName: string;
  childClass: string;
  rating: number;
  reviewText: string;
  avatar: string;
  location: string;
  date: string;
}

export interface StatItem {
  id: string;
  number: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: string;
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  qualification: string;
  experience: string;
  avatar: string;
  specialty: string;
}

export interface EnquiryFormData {
  parentName: string;
  childName: string;
  childAge: string;
  phone: string;
  email: string;
  program: string;
  message: string;
  preferredTourTime?: string;
}

export interface InstagramReel {
  id: string;
  image: string;
  caption: string;
  tag: string;
  handle: string;
  url: string;
  likes?: string;
  comments?: string;
  audioTitle?: string;
  views?: string;
}
