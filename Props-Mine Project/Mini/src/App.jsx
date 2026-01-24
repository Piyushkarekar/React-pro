import React from 'react'
import { Card } from './components/Card'

const jobs = [
  {
    id: 1,
    companyName: "Google",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    posted: "5 days ago",
    domain: "Frontend Development",
    tag1: "Full-time",
    tag2: "Junior Level",
    payPerHour: "$25/hr",
    location: "Mumbai, India"
  },
  {
    id: 2,
    companyName: "Microsoft",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    posted: "1 week ago",
    domain: "Backend Development",
    tag1: "Part-time",
    tag2: "Senior Level",
    payPerHour: "$40/hr",
    location: "Bangalore, India"
  },
  {
    id: 3,
    companyName: "Amazon",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    posted: "2 days ago",
    domain: "UI/UX Designer",
    tag1: "Full-time",
    tag2: "Junior Level",
    payPerHour: "$22/hr",
    location: "Mumbai, India"
  },
  {
    id: 4,
    companyName: "Meta (Facebook)",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
    posted: "3 days ago",
    domain: "Data Analyst",
    tag1: "Part-time",
    tag2: "Junior Level",
    payPerHour: "$30/hr",
    location: "Delhi, India"
  },
  {
    id: 5,
    companyName: "Netflix",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    posted: "1 week ago",
    domain: "Frontend Development",
    tag1: "Full-time",
    tag2: "Senior Level",
    payPerHour: "$45/hr",
    location: "Mumbai, India"
  },
  {
    id: 6,
    companyName: "Apple",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    posted: "6 days ago",
    domain: "Mobile App Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    payPerHour: "$35/hr",
    location: "Bangalore, India"
  },
  {
    id: 7,
    companyName: "Adobe",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Adobe_logo.svg",
    posted: "4 days ago",
    domain: "Graphic Designer",
    tag1: "Part-time",
    tag2: "Senior Level",
    payPerHour: "$28/hr",
    location: "Pune, India"
  },
  {
    id: 8,
    companyName: "Intel",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg",
    posted: "2 weeks ago",
    domain: "Hardware Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    payPerHour: "$50/hr",
    location: "Mumbai, India"
  },
  {
    id: 9,
    companyName: "Tesla",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    posted: "1 day ago",
    domain: "AI Researcher",
    tag1: "Full-time",
    tag2: "Junior Level",
    payPerHour: "$55/hr",
    location: "Bangalore, India"
  },
  {
    id: 10,
    companyName: "Spotify",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    posted: "3 days ago",
    domain: "Backend Development",
    tag1: "Part-time",
    tag2: "Junior Level",
    payPerHour: "$32/hr",
    location: "Mumbai, India"
  }
];

export const App = () => {
  return (
    <div> 
      <Card  />
    </div>
  )
}
