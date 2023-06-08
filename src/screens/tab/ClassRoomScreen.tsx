import React, { useState } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

import { useCalendar } from "../../hooks/useCalendar";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Margin from "../../components/Margin";
import Calendar from "../../components/calendar/Calendar";
import SelectButton from "../../components/classroom/SelectButton";
import ClassInfo from "../../components/classroom/ClassInfo";
import CategoryButton from "../../components/classroom/CategoryButton";

const ClassRoomScreen: React.FC = () => {
  const [isSelected, setIsSelected] = useState<number>(1);
  const [modifiedDate, setModifiedDate] = useState(["월요일 13:00 ~ 16:00", "목요일 14:00 ~ 16:30"]);

  // 달력 관련 hooks
  const { selectedDate, handleNextMonth, handlePrevMonth, handleSelectDate } = useCalendar();

  return (
    <>
      <Layout>
        <Header text="강의실"/>
        <ScrollView>
          <ComponentWrapper>
            <Margin props={20}/>
            <ClassInfo 
              studentName="김뽀삐"
              subject="과학"
              classDate={modifiedDate}
            />
            <Margin props={15}/>
            <CategoryButton
              isSelected={isSelected}
              setIsSelected={setIsSelected}
            />
            <Margin props={15}/>
            {isSelected === 1 && (
              <Calendar
                selectedDate={selectedDate}
                onSelectDate={handleSelectDate}
                onPrevMonth={handlePrevMonth}
                onNextMonth={handleNextMonth}
              />
            )}
          </ComponentWrapper>
        </ScrollView>
      </Layout>
    </>
  );
};

export default ClassRoomScreen;

// styled
const ComponentWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
`;