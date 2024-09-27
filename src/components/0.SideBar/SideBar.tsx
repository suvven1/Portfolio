import React, { useState } from 'react'
import image from '../../assets/pig.jpeg'
import styled from 'styled-components'

const SideBar = () => {

    const contentList: string[] = ['About Me', 'Training', 'Awards', 'Project'];
    const [clickedList, setClickedList] = useState<boolean[]>([false, false, false, false]);

    const handleClick = (index: number) => {
        const newClickedList: boolean[] = [false, false, false, false];
        newClickedList[index] = true;
        setClickedList(newClickedList);
    }

    return (
        <SideBarContainer>
            <UserContainer>
                <UserImage />
                <UserName>CHOI JINSU</UserName>
            </UserContainer>
            <Contents>
                {contentList.map((name, index) => (
                    <ContentName isClicked={clickedList[index]} onClick={() => handleClick(index)}>
                        {name}
                    </ContentName>
                ))}
            </Contents>
        </SideBarContainer>
    )
}

export default SideBar

const SideBarContainer = styled.div`
    width: 20%;
    height: 100vh;
    padding: 50px 0px 0px 0px;
    background-color: #5477AD;
`

const UserContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`

const UserImage = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-image: url(${image});
    background-size: cover;
    background-position: center;
`

const UserName = styled.div`
    font-size: 35px;
    font-weight: bold;
    color: white;
    margin-bottom: 35px;
    cursor: default;
`

const Contents = styled.div`
    
`

const ContentName = styled.div<{ isClicked: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    background-color: ${props => props.isClicked ? 'white' : '#5477AD'};
    color: ${props => props.isClicked ? '#5477AD' : 'white'};
    border-top: 1px solid #758db0;
    border-bottom: 1px solid #758db0;
    height: 70px;
    cursor: pointer;
`