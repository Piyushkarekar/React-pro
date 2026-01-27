import React from 'react'
import { Card } from './components/Card'

const jobs = [
  {
    id: 1,
    companyName: "Google",
    companyLogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg",
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
    companyLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
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
    companyLogo: "https://png.pngtree.com/png-clipart/20180515/ourmid/pngtree-facebook-logo-facebook-icon-png-image_3566127.png",
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
    companyLogo: "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
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
    companyLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
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
    companyLogo: "https://i.pinimg.com/736x/56/3a/a2/563aa2189ef92dc242a7db5b91078804.jpg",
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
    companyLogo: "https://blog.logomaster.ai/hs-fs/hubfs/intel-logo-3.jpg?width=672&height=448&name=intel-logo-3.jpg",
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
    <div className='parent'>
      {jobs.map((job) => (
        <Card 
          key={job.id}
          name={job.companyName}
          logo={job.companyLogo}
          post={job.posted}
          tag1={job.tag1}
          tag2={job.tag2}
          pay={job.payPerHour}
          domain={job.domain}
          location={job.location}
          
        />
      ))}
    </div>
  )
}
