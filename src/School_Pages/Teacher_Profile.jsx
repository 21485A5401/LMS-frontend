import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TeacherSearchFilter from "../components/TeacherSearchFilter";
import Colleague_1 from '../Assets/Ellipse 16.png';
import Colleague_2 from '../Assets/Ellipse 17.png';
import Colleague_3 from '../Assets/Ellipse 18.png';
import Colleague_4 from '../Assets/Ellipse 19.png';
import Colleague_5 from '../Assets/Ellipse 20.png';
import { useParams } from "react-router-dom";
import instance from "../Utils/api";
import Cookies from "js-cookie";

const teacherData = [
  {
    name: "Chanakya",
    role: "Geology teacher",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
    age: 34,
    gender: "Male",
    avatarUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/2f3e12fe06f861f0681629430317286b5946adb4baa1d07da9eec0663996fdb2?apiKey=00c981949ae441738146aeab96db3c11&",
    socialImages: ["https://cdn.builder.io/api/v1/image/assets/TEMP/824d8b0b74bb30b9985949d74db8bb3478d783ee26ae7c212370c6d9e570ae31?apiKey=00c981949ae441738146aeab96db3c11&", "https://cdn.builder.io/api/v1/image/assets/TEMP/36f4394e8c641148b352bd6ab97ca053dd6ac281b92dee2a31942cfb2acaaa45?apiKey=00c981949ae441738146aeab96db3c11&", "https://cdn.builder.io/api/v1/image/assets/TEMP/b0a606090b81f8426fd2518c45879da685034f46866164b4a63e277a63e55205?apiKey=00c981949ae441738146aeab96db3c11&"],
    colleagueImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/3cdddecc347e1840868c4eb18945d73fdd7d270ff1522b97ba49a4817e80558d?apiKey=00c981949ae441738146aeab96db3c11&",
    colleagueCount: 12,
  },
];

function Teacher_Profile() {
  const [data, setData] = useState([]);
  const Id = useParams();
  // const subject = data.subject;
  // console.log(subject);
  const teacherId = Id.Id;
  console.log(teacherId);

  const formData = async () => {
    try {
      const response = await instance.get(`api/v1/teachers/admin/${teacherId}`);
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      if (error.response && error.response.data) {
        alert(JSON.stringify(error.response.data)); // Display error message
      } else {
        alert('An error occurred'); // Display generic error message
      }
    }
  }
  useEffect(() => {
    formData();
  }, [])
  console.log(data);

  return (
    <>
      {/* <TeacherSearchFilter /> */}
      <Main>
          <ProfileWrapper>
            <ProfileContainer>
              <ProfileGrid>
                <ProfileImageColumn>
                  <ProfileImageWrapper>
                    <ProfileImage src={teacherData[0].avatarUrl} alt="Teacher Avatar" />
                    <TeacherName>{data.name}</TeacherName>
                    <TeacherRole>{data.email}</TeacherRole>
                    {/* <TeacherRole>{data.subject.name}</TeacherRole> */}
                    <SocialImages>
                      {teacherData[0].socialImages.map((image, index) => (
                        <SocialImage key={index} src={image} alt={`Social ${index + 1}`} />
                      ))}
                    </SocialImages>
                  </ProfileImageWrapper>
                </ProfileImageColumn>
                <ProfileDetailsColumn>
                  <ProfileDetailsWrapper>
                    <SectionTitle>About</SectionTitle>
                    <AboutText>{teacherData[0].about}</AboutText>
                    <TeacherDetails>
                      <DetailGrid>
                        <DetailItem>
                          <DetailLabel>Teacher ID</DetailLabel>
                          <DetailValue>{data.teacherId}</DetailValue>
                        </DetailItem>
                        <DetailItem>
                          <DetailLabel>Mobile Number</DetailLabel>
                          <DetailValue>{data.phone_no}</DetailValue>
                        </DetailItem>
                        <DetailItem>
                          <DetailLabel>Gender</DetailLabel>
                          <DetailValue>{data.gender}</DetailValue>
                        </DetailItem>
                      </DetailGrid>
                      <ColleagueTitle>Teachers from the same class</ColleagueTitle>
                      <ColleagueWrapper>
                        <ColleagueImages src={Colleague_1} alt="Colleague_1" />
                        <ColleagueImage src={Colleague_2} alt="Colleague_2" />
                        <ColleagueImage src={Colleague_3} alt="Colleague_3" />
                        <ColleagueImage src={Colleague_4} alt="Colleague_4" />
                        <ColleagueImage src={Colleague_5} alt="Colleague_5" />
                        <ColleagueCount>+{teacherData[0].colleagueCount} more</ColleagueCount>
                      </ColleagueWrapper>
                    </TeacherDetails>
                  </ProfileDetailsWrapper>
                </ProfileDetailsColumn>
              </ProfileGrid>
            </ProfileContainer>
          </ProfileWrapper>
      </Main>
    </>
  );
}

const Main = styled.div`
  display  : flex;
  justify-content: center;
`;
const ProfileWrapper = styled.section`
  border-radius: 16px;
  background-color: #fff;
  display: flex;
  // align-items: center;
  // justify-content: center;
  padding: 40px 60px 60px 60px;
  width: 1041px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const ProfileContainer = styled.div`
  width: 100%;
  // max-width: 710px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ProfileGrid = styled.div`
  display: grid;
  // grid-template-columns: repeat(2, 1fr);
  grid-template-columns: 40% 60%;
  gap: 20px; 

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const ProfileImageColumn = styled.div`

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
    align-items: center;

  // align-items: center;
  /* margin-right: 106px; */
`;

const ProfileImage = styled.img`
  width: 250px;
  // aspect-ratio: 1;
  // object-fit: cover;
  // border-radius: 50%;
`;

const TeacherName = styled.h2`
  color: var(--grey-800, #1a1a1a);
  text-align: center;
  margin: 30px 0px 0px 0px;
  font: 700 16px "Kumbh Sans", sans-serif;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const TeacherRole = styled.p`
  color: var(--grey-100, #a7a7a7);
  text-align: center;
  margin: 20px 0px 0px 0px;
  font: 700 14px "Kumbh Sans", sans-serif;
`;

const SocialImages = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 40px;
 

  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const SocialImage = styled.img`
  width: 61px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 8px;
`;

const ProfileDetailsColumn = styled.div`
// width: 335px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ProfileDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  color: var(--grey-800, #1a1a1a);
  font: 600 16px "Kumbh Sans", sans-serif;
  margin:0px 0px 10px 0px;
`;

const AboutText = styled.p`
  color: var(--grey-100, #a7a7a7);
  font: 500 16px/21px "Kumbh Sans", sans-serif;
  margin:0px 0px 0px 0px;
`;

const TeacherDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  // padding: 0 68px 0 14px;

  @media (max-width: 991px) {
    padding-right: 20px;
    margin-top: 40px;
  }
`;

const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 991px) {
    gap: 10px;
  }
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailLabel = styled.span`
  color: var(--grey-800, #1a1a1a);
  font: 600 12px "Kumbh Sans", sans-serif;
`;

const DetailValue = styled.span`
  color: var(--grey-100, #a7a7a7);
  margin-top: 16px;
  font: 500 14px "Kumbh Sans", sans-serif;
`;

const ColleagueTitle = styled.h4`
  color: var(--grey-800, #1a1a1a);
  margin-top: 47px;
  font: 600 12px "Kumbh Sans", sans-serif;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ColleagueWrapper = styled.div`
  display: flex;
  align-items: center;
  // gap: 15px;
  margin-top: 30px;
  font-size: 10px;
  color: var(--project-secondary-200, #73b0e2);
  font-weight: 500;
`;

const ColleagueImage = styled.img`
  // width: 186px;
  // max-width: 100%;
  // aspect-ratio: 3.7;
  // object-fit: cover;
  // border-radius: 50%;
  margin-left: -20px;
`;
const ColleagueImages = styled.img`
// width: 186px;
// max-width: 100%;
// aspect-ratio: 3.7;
// object-fit: cover;
// border-radius: 50%;
`;

const ColleagueCount = styled.span`
  font-family: "Kumbh Sans", sans-serif;
  margin-left: 20px;
  font-size: 10px;
  font-weight: 500;
  line-height: 12.4px;

`;

export default Teacher_Profile;