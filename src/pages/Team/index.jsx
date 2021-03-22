import React from "react";
import Content from "./components/Content";
import Founder from "./components/Founder";
import Members from "./components/Members";

export default function Team() {
  return (
      <main className="team" id="main">
        <section>
          <div className="container">
            <Content/>
            <div className="list row">            
              <Founder
                thumbnail = "/img/thumb-member.jpg"
                name = "Trần Nghĩa"
                title ="Founder &amp; Creative Front-End Developer"
              />
              <Founder
                thumbnail = "/img/thumb-member.jpg"
                name = "Đặng Thuyền Vương"
                title ="Co-Founder &amp; Fullstack Developer"
              />
              <Founder
                thumbnail = "/img/thumb-member.jpg"
                name = "Đặng Thuyền Quân"
                title ="Co-Founder &amp; Backend Developer"  
              /> 
              <Founder
                thumbnail = "/img/thumb-member.jpg"
                name = "Nguyễn Đức Huy"
                title ="Co-Founder &amp; Front-End Developer" 
              />               
              
              <Members
                 thumbnail = "/img/thumb-member.jpg"
                 name = "Diệp Anh Thy"
                 title ="CFD1-Offline" 
              />
              <Members
                 thumbnail = "/img/thumb-member.jpg"
                 name = "Huỳnh Tiến Tài"
                 title ="CFD1-Offline" 
              />
              <Members
                 thumbnail = "/img/thumb-member.jpg"
                 name = "Ngô Thành Long"
                 title ="CFD1-Offline" 
              />
              <Members
                 thumbnail = "/img/thumb-member.jpg"
                 name = "Trần Anh Tuấn"
                 title ="CFD1-Offline" 
              />
              <Members
                 thumbnail = "/img/thumb-member.jpg"
                 name = "Phạm Thành Trung"
                 title ="CFD1-Offline" 
              />
              <Members
                 thumbnail = "/img/thumb-member.jpg"
                 name = "Nguyễn Thanh Tùng"
                 title ="CFD1-Offline" 
              />
              <Members
                 thumbnail = "/img/thumb-member.jpg"
                 name = "Huỳnh Anh Kiệt"
                 title ="CFD1-Offline" 
              />
              
            </div>
          </div>
        </section>
      </main>
  );
}
