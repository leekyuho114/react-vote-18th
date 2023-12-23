import styled from 'styled-components';
import FE from 'assets/images/FE.png';
import BE from 'assets/images/BE.png';
import { useState } from 'react';
import { VotePageStatus } from 'utils/type';
import { PartVoteFront, PartVoteBack } from 'components/PartVote';
import { ReactComponent as BackBlack } from 'assets/images/back-black.svg';
import { ReactComponent as BackWhite } from 'assets/images/back-white.svg';
import { FEMember, BEMember } from 'utils/constant';
//나중에 뒤로가기 버튼으로 교체
export const PartVotePage = () => {
  //FE, 아니면 partVote 컴포넌트
  const [leftStatus, setLeftStatus] = useState<VotePageStatus>('default');
  const [rightStatus, setRightStatus] = useState<VotePageStatus>('default');
  const [selectedFEItem, setSelectedFEItem] = useState<number>(-1);
  const [selectedBEItem, setSelectedBEItem] = useState<number>(-1);
  return (
    <PartPageWrapper>
      {leftStatus == 'default' ? (
        <VoteSelect isLeft={true}>
          {rightStatus !== 'default' ? (
            <BackBlackButton
              onClick={() => {
                setRightStatus('default');
              }}
            />
          ) : null}
          <Img src={FE} />
          <PartText>FRONTEND</PartText>
          {selectedFEItem > -1 ? (
            <>
              <SelectText hover={false}>
                {FEMember[selectedFEItem].name} 님을 선택하셨습니다.
              </SelectText>
              <SelectText
                onClick={() => {
                  //여기서 post
                  setRightStatus('result');
                  setSelectedFEItem(-1);
                }}
                hover={true}
              >
                ✅투표 확정 후 결과 확인
              </SelectText>
            </>
          ) : (
            <>
              <SelectText
                onClick={() => {
                  setRightStatus('vote');
                }}
                hover={true}
              >
                투표하기
              </SelectText>
              <SelectText
                onClick={() => {
                  setRightStatus('result');
                }}
                hover={true}
              >
                결과 확인하기
              </SelectText>
            </>
          )}
        </VoteSelect>
      ) : (
        <PartVoteBack
          status={leftStatus}
          selectedItem={selectedBEItem}
          setSelectedItem={setSelectedBEItem}
        />
      )}
      {rightStatus == 'default' ? (
        <VoteSelect isLeft={false}>
          {leftStatus !== 'default' ? (
            <BackWhiteButton
              onClick={() => {
                setLeftStatus('default');
              }}
            />
          ) : null}
          <Img src={BE} />
          <PartText>BACKEND</PartText>
          {selectedBEItem > -1 ? (
            <>
              <SelectText hover={false}>
                {BEMember[selectedBEItem].name} 님을 선택하셨습니다.
              </SelectText>
              <SelectText
                onClick={() => {
                  //여기서 post
                  setLeftStatus('result');
                  setSelectedBEItem(-1);
                }}
                hover={true}
              >
                ✅투표 확정 후 결과 확인
              </SelectText>
            </>
          ) : (
            <>
              <SelectText
                onClick={() => {
                  setLeftStatus('vote');
                }}
                hover={true}
              >
                투표하기
              </SelectText>
              <SelectText
                onClick={() => {
                  setLeftStatus('result');
                }}
                hover={true}
              >
                결과 확인하기
              </SelectText>
            </>
          )}
        </VoteSelect>
      ) : (
        <PartVoteFront
          status={rightStatus}
          selectedItem={selectedFEItem}
          setSelectedItem={setSelectedFEItem}
        />
      )}
    </PartPageWrapper>
  );
};

const PartPageWrapper = styled.div`
  display: flex;
  height: 100%;
`;
const VoteSelect = styled.div<{ isLeft: boolean }>`
  width: 50%;
  height: 100%;
  background-color: ${(props) => (props.isLeft ? '#ffffff' : '#3E4CF7')};
  color: ${(props) => (props.isLeft ? '#3E4CF7' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
`;
const BackBlackButton = styled(BackBlack)`
  position: absolute;
  height: 2rem;
  width: 2rem;
  top: 2rem;
  left: 2rem;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;
const BackWhiteButton = styled(BackWhite)`
  position: absolute;
  height: 2rem;
  width: 2rem;
  top: 2rem;
  left: 2rem;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;
const PartText = styled.div`
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -1.2px;
`;
const SelectText = styled.div<{ hover: boolean }>`
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.05rem;
  margin-top: 1.5rem;
  cursor: ${(props) => (props.hover ? 'pointer' : null)};
  opacity: 1;
  transition: opacity 0.3s;
  &:hover {
    ${(props) => (props.hover ? 'opacity: 0.7' : null)};
  }
`;
const Img = styled.img`
  height: 21.25rem;
  margin-bottom: 2rem;
`;
