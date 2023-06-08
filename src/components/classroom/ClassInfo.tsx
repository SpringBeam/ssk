import React from "react";
import styled from "styled-components/native";

interface ClassInfoProps {
  studentName: string;
  subject: string;
  classDate: string[];
};

const ClassInfo = ({ studentName, subject, classDate } : ClassInfoProps) => {
  return (
    <InfoContainer>
      <StudentText>
        튜티명: {studentName}
      </StudentText>
      <ContentContainer>
        <ContentText>
          {subject}
        </ContentText>
        {classDate.map((date, index) => (
          <ContentText key={index}>
            {date}
          </ContentText>
        ))}
      </ContentContainer>
    </InfoContainer>
  );
};

export default ClassInfo;

// styled
const InfoContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 15px 25px;
  border-radius: 12px;
  background-color: #fff;
`;

const StudentText = styled.Text`
  font-size: 16px;
  font-family: "Bold";
  color: #020715;
`;

const ContentContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
`;

const ContentText = styled.Text`
  font-size: 14px;
  font-family: "Light";
`;