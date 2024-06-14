import * as React from "react";
import styled from "styled-components";
import Colleague_1 from '../Assets/Ellipse 16.png';
import Colleague_2 from '../Assets/Ellipse 17.png';
import Colleague_3 from '../Assets/Ellipse 18.png';
import Colleague_4 from '../Assets/Ellipse 19.png';
import Colleague_5 from '../Assets/Ellipse 20.png';
import teacher_logo from '../Assets/teacher_logo.png';

const teachersData = [
  {
    id: 1,
    name: "John Doe",
    image: "https://s3-alpha-sig.figma.com/img/6561/79e8/2e74dadca53618db8c5d0e213918ee29?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fLPuNV-DR3d0f1~JTaAiXajkGUeszRHZXHzsE5IlyENzEIzYyDXfBnUcZ26t09tpcupURK7Qsf9NuJa43kIfHrcgV55R5070DoHoiq7qBh0mLm1WFVJlidMkACShVeJ~F9jZPdFy0quKtNuMOvAURzf5tvTQ-NbBYiwoWrI7AMPJsmrhiToUxLeyinX~YhizQJcTzzAYXOIftBBZ9e21WKsJAackq8FfFJ4uHTc3AaJHotQd2iDzFDDcQn8NtZgfntt0Q0gr6vRpqLovx8BcKP~usoY2aE2efeMUQGjcz2Hp0Me8MdPt1eiZkViU2zzq~7KWA17V7WPedGyFhwZt8A__",
    colleagueCount: 12
  },
  // {
  //   id: 2,
  //   name: "Jane Smith",
  //   image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2d2569e323213bd69c9455f06a48c3748b9f95aa7d173211ff7b2f354eb6f3be?apiKey=00c981949ae441738146aeab96db3c11&",
  // },
  // Add more teacher data as needed
];

// function TeacherCard({ teacher }) {
//   return (
//     <TeacherImage src={teacher.image} alt={teacher.name} />
//   );
// }

function TeachersSection() {
  return (
    <TeachersList>
      <ColleagueWrapper>
        <ColleagueImages src={Colleague_1} alt="Colleague_1" />
        <ColleagueImage src={Colleague_2} alt="Colleague_2" />
        <ColleagueImage src={Colleague_3} alt="Colleague_3" />
        <ColleagueImage src={Colleague_4} alt="Colleague_4" />
        <ColleagueImage src={Colleague_5} alt="Colleague_5" />
        <ColleagueCount>+{teachersData[0].colleagueCount} more</ColleagueCount>
      </ColleagueWrapper>
    </TeachersList>
  );
}

function Subject_card(props) {
  return (
    <Card>
      <Images>
        <CardImage src="https://s3-alpha-sig.figma.com/img/6561/79e8/2e74dadca53618db8c5d0e213918ee29?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fLPuNV-DR3d0f1~JTaAiXajkGUeszRHZXHzsE5IlyENzEIzYyDXfBnUcZ26t09tpcupURK7Qsf9NuJa43kIfHrcgV55R5070DoHoiq7qBh0mLm1WFVJlidMkACShVeJ~F9jZPdFy0quKtNuMOvAURzf5tvTQ-NbBYiwoWrI7AMPJsmrhiToUxLeyinX~YhizQJcTzzAYXOIftBBZ9e21WKsJAackq8FfFJ4uHTc3AaJHotQd2iDzFDDcQn8NtZgfntt0Q0gr6vRpqLovx8BcKP~usoY2aE2efeMUQGjcz2Hp0Me8MdPt1eiZkViU2zzq~7KWA17V7WPedGyFhwZt8A__" alt="Card Image" />
        <CardLogo src={teacher_logo} alt='teacher logo' />
      </Images>
      <Title>{props.name}</Title>
      <CardContent>
        <SectionTitle>Teachers</SectionTitle>
        <TeachersSection />
      </CardContent>
    </Card>
  );
}
const Title = styled.h4`
  padding-left:20px ;
`
const Images = styled.div`
  position: relative;
`

const CardLogo = styled.img`
  width: 66px;
  height: 71px;
  border-radius: 100px;
  top: 135px;
  right: 10px;

  position: absolute;
`
const ColleagueWrapper = styled.div`
  display: flex;
  align-items: center;
  // gap: 15px;
  /* margin-top: 30px; */
  font-size: 10px;
  color: var(--project-secondary-200, #73b0e2);
  font-weight: 500;
  width: 100%;
`;

const ColleagueImage = styled.img`
  // width: 186px;
  // max-width: 100%;
  // aspect-ratio: 3.7;
  // object-fit: cover;
  // border-radius: 50%;
  margin-left: -10px;
  width: 30px;
  height: 30px;
`;
const ColleagueImages = styled.img`
// width: 186px;
// max-width: 100%;
// aspect-ratio: 3.7;
// object-fit: cover;
// border-radius: 50%;
width: 30px;
  height: 30px;
`;

const ColleagueCount = styled.span`
  font-family: "Kumbh Sans", sans-serif;
  margin-left: 20px;
  font-size: 10px;
  font-weight: 500;
  line-height: 12.4px;

`;

const Card = styled.div`
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  background-color: #fffafa;
  max-width: 327px;
  padding-bottom: 23px;
  font-size: 14px;
  font-weight: 400;
  margin: 20px;
`;

const CardImage = styled.img`
  width: 327px;
  height: 166px;
  aspect-ratio: 1.59;
  object-fit: cover;
  border-radius: 20px;
  /* position: relative; */
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 32px;
  padding: 0 20px;
  gap: 60px;
`;

const SectionTitle = styled.h2`
  color: #5b5a5a;
  font-family: Istok Web, sans-serif;
  margin-bottom: 20px;
  font-size: 15px;
`;

const TeachersList = styled.div`
  display: flex;
  gap: 10px;
  color: #5e5959;
  width: 160px;
`;

const TeacherImage = styled.img`
  width: 40px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
  height: 40px;
`;

const TeachersCount = styled.span`
  font-family: Istok Web, sans-serif;
  align-self: flex-end;
  margin-top: 24px;
`;

export default Subject_card;