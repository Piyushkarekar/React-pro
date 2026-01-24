import "./Card.css"
import { Bookmark } from "lucide-react";

export const Card = () => {
  return (
    <div className="Parent">
        <div className="card">
            <div className="top">
                <div className="logo">
                    <img src="https://th.bing.com/th/id/R.45b0e69add05f7cdbee40cc9997bd7b4?rik=tXf%2fiMSa7boX3g&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2016%2f06%2famazon-logo-1.png&ehk=ideqrZcqNA%2f4jGcxPjOuRtmkvXlfeBZu%2fgCoZDUbApg%3d&risl=&pid=ImgRaw&r=0ttps://pngimg.com/uploads/amazon/amazon_PNG5.png" alt="IMG"  />
                </div>
                <button>Save <Bookmark size={15} /></button>
            </div>
            <div className="center">
                <div className="center-txt">
                    <h4>Amazon<span> 5 days ago</span></h4>
                    <h3>Senior UI/UX Designer</h3>
                </div>
                <div className="subbt">
                    <div className="sub1">Part Time</div>
                    <div className="sub2">Senior Level</div>
                </div>
            </div>
            <div className="bottom">
                <div className="text">
                    <h3>$120/hr</h3>
                    <p>Mumbai,india</p>
                </div>
                    <button>Apply Now</button>
            </div>
        </div>
    </div>
  )
}
