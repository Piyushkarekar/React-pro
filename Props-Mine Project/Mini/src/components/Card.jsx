import "./Card.css"
import { Bookmark } from "lucide-react";

export const Card = ({  name, logo, post, domain, tag1, tag2, pay, location }) => {
  return (
    <div className="parent">
        <div className="card">
            <div className="top">
                <div className="logo">
                    <img src={logo} alt="IMG"  />
                </div>
                <button>Save <Bookmark size={15} /></button>
            </div>
            <div className="center">
                <div className="center-txt">
                    <h4>{name}<span> {post}</span></h4>
                    <h3>{domain}</h3>
                </div>
                <div className="subbt">
                    <div className="sub1">{tag1}</div>
                    <div className="sub2">{tag2}</div>
                </div>
            </div>
            <div className="bottom">
                <div className="text">
                    <h3>{pay}</h3>
                    <p>{location}</p>
                </div>
                    <button>Apply Now</button>
            </div>
        </div>
    </div>
  )
}
