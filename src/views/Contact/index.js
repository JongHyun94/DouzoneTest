import { useState } from "react";

const data = [
    {
        id: 0,
        name:"박시현",
        department: "헬스케어",
        phone: "010-1111-1111",
        mail: "박시현@wehago.com"
    },
    {
        id: 1,
        name:"임도희",
        department: "헬스케어",
        phone: "010-2222-2222",
        mail: "임도희@wehago.com"
    },
    {
        id: 2,
        name:"이종현",
        department: "헬스케어",
        phone: "010-3333-3333",
        mail: "이종현@wehago.com"
    },
    {
        id: 3,
        name:"조민상",
        department: "헬스케어",
        phone: "010-4444-4444",
        mail: "조민상@wehago.com"
    },
    {
        id: 4,
        name:"윤서영",
        department: "헬스케어",
        phone: "010-5555-5555",
        mail: "윤서영@wehago.com"
    },
];

function Contact(props) {
    //const [memberList, setMemberList] = useState(data);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [selectedMember, setSelectedMember] = useState();
    const [dirtyContent, setDirtyContent] = useState(true);

    const buttonHandler = (member) => {
        setSelectedMember(member);
    };

    const searchHandler = (event) => {
        setSearchKeyword(event.target.value);
        if(event.target.value === undefined){
            setDirtyContent(false);
        } else {
            setDirtyContent(true);
        }
        setSelectedMember();
    };
    
    return (
        <div className="container">
            <h1 className="subject">이종현의 연락처</h1>
            <div className="contact-wrap">
                <div className="col left">
                <div className="search-box">
                    <input type="text" className="inp-sch" placeholder="검색어를 입력하세요." value={searchKeyword} onChange={searchHandler}/>
                </div>
                <div className="contact-list">
                    <ul>
                        {data.filter((member) => {
                            if(searchKeyword === ""){
                                return member;
                            }
                            else if(member.name.toLowerCase().includes(searchKeyword.toLowerCase())){
                                return member;
                            }
                        }).map((member) => {
                            return (
                                <li key={member.id}>
                                    <button type="button" onClick={() => buttonHandler(member)}>{member.name}</button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                </div>
                <div className="col right">
                <div className="details">
                    {(data.length > 0)&&(selectedMember)&&(dirtyContent)?
                    <ul className="info">
                        <li>이름: {selectedMember.name}</li>
                        <li>부서: {selectedMember.department}</li>
                        <li>휴대폰: {selectedMember.phone}</li>
                        <li>메일: {selectedMember.mail}</li>
                    </ul> 
                :
                    <p className="emptyset">정보가 없습니다.</p>
                }
                </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;