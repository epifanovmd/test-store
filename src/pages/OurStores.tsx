import styled from "styled-components";
import { IStores } from "../types";
import { storesData } from "../data";

const stores: IStores[] = storesData;

export const OurStores = () => {
  return (
    <>
      {stores.map((stores) => (
        <Wrap>
          <Title>
            <Address>{stores.address}</Address>
            <AddressDescription>{stores.addressDesc}</AddressDescription>
          </Title>
          <TimeTable>{stores.timetable}</TimeTable>
          <Telephone>{stores.telephone}</Telephone>
        </Wrap>
      ))}
    </>
  );
};

const Wrap = styled.div`
  border-bottom: 1px solid;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px;
  width: 80%;
  :first-of-type {
    margin-top: 100px;
  }
`;
const Title = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
`;
const Address = styled.span`
  font-size: 22px;
  font-weight: bold;
`;
const AddressDescription = styled.span`
  font-size: 18px;
`;
const TimeTable = styled.span`
  font-size: 18px;
  color: #5d5d64;
`;
const Telephone = styled.span`
  font-size: 18px;
  color: #5d5d64;
  width: 20%;
  text-align: right;
`;
