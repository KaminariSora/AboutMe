document.querySelector('.togBtn').addEventListener('input', updateInformation);
document.querySelector('.togBtn2').addEventListener('input', updateInformation);

const data = {
    "english": {
        "firstName": "First name : Nonthacha",
        "lastName": "Last name : Huanchitt",
        "nickname": "Nickname : Thunder",
        "age": "Age : 19",
        "national": "Nationality : Thai",
        "education": "Education : Undergraduate at Srinakharinwirot U.",
        "talent": "Talent : Working as team, socializing and conversing with people, swimming, drawing etc.",
        "description": "KaminariSora is the name I actually use on social media. My real name is Thunder. Coding is fun for me because it presents numerous problems to solve. Despite encountering various challenges, it is an enjoyable experience. I am a determined and persistent person. I enjoy learning, exploring for new information and constantly trying something new.",
    },
    "thai": {
        "firstName": "ชื่อ : นนทชา",
        "lastName": "นามสกุล : หวลจิตต์",
        "nickname": "ชื่อเล่น : ธันเดอร์",
        "age": "อายุ : 19",
        "national": "สัญชาติ : ไทย",
        "education": "การศึกษา : กำลังศึกษาที่มหาวิทยาลัยศรีนครินทรวิโรฒ",
        "talent": "พรสวรรค์ : ทำงานเป็นทีม การเข้าสังคมและการสื่อสาร ผมชอบการเรียนรู้แลการค้นคว้าสิ่งใหม่ๆ ว่ายน้ำ วาดรูป ฯลฯ",
        "description": "KaminariSora เป็นชื่อที่ผมใช้ในโซเชียลมีเดียส่วนชื่อจริงๆนั้นชื่อ 'ธันเดอร์' ผมรักในการศึกษาและค้นคว้าข้อมูลใหม่เพื่อให้ทันต่อโลกและการเขียนโค้ดนั้นเป็นเรื่องที่สนุกสำหรับผมเพราะว่ามันมักจะมีปัญหามาให้แก้ไม่หยุดซึ่งเป็นสิ่งที่น่าท้าทายและน่าสนุกมากๆ"
    }
}

function updateInformation(event) {
    const language = event.currentTarget.checked ? 'thai' : 'english';
    const info = data[language];

    document.querySelector('.first-name').textContent = info.firstName;
    document.querySelector('.last-name').textContent = info.lastName;
    document.querySelector('.nickname').textContent = info.nickname;
    document.querySelector('.age').textContent = info.age;
    document.querySelector('.national').textContent = info.national;
    document.querySelector('.education').textContent = info.education;
    document.querySelector('.talent').textContent = info.talent;
    document.querySelector('.description').textContent = info.description;
}
