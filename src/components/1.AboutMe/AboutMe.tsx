import React from 'react'
import styled from 'styled-components'

const AboutMe = () => {
    return (
        <AboutMeContainer>
            <Title>🧑🏻‍💻 ABOUT ME</Title>
            <Contents>
                <Introduce>
                    안녕하세요. 백엔드 개발자 최진수입니다.{"\n"}
                    콘솔창에 "Hello World"를 출력하며 개발자로서의 첫 발자국을 내딛었습니다.{"\n"}
                    오로지 소비의 수단이었던 노트북을 생산의 수단으로서 활용하는 재미에 빠진지 어느덧 2년이 지났습니다.{"\n"}
                    아직 배울 것이 많지만, 그만큼 더 성장할 수 있음에 감사합니다.{"\n"}
                    개발과 동료를 사랑합니다.
                </Introduce>
                <Contact>
                    {/* TODO: 컴포넌트 분리 또는 맵함수로 처리 스타일 공통으로 만들어 사용하기 */}
                    <ContentTitle>CONTACT</ContentTitle>
                    <ContactContent>
                        <ContactTitle>Email</ContactTitle>
                        <ContactText>jschoi9160@naver.com</ContactText>
                    </ContactContent>
                    <ContactContent>
                        <ContactTitle>Github</ContactTitle><ContactText>https://github.com/suvven1</ContactText>
                    </ContactContent>
                    <ContactContent>
                        <ContactTitle>Velog</ContactTitle><ContactText>https://velog.io/@suvven1</ContactText>
                    </ContactContent>
                </Contact>
            </Contents>
        </AboutMeContainer>
    )
}

export default AboutMe

const AboutMeContainer = styled.div`
    width: 100%;
`

const Title = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: #5477AD;
`

const Contents = styled.div`
    display: flex;
    gap: 50px;
`

const Introduce = styled.div`
    white-space: pre-wrap;
    margin-top: 50px;
`

const ContactContent = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
`

const Contact = styled.div`
    
`

const ContentTitle = styled.div`
    margin-bottom: 20px;
    font-size: 25px;
    font-weight: bold;
    color: #5477AD;
`

const ContactTitle = styled.div`
    font-weight: bold;
    color: #5477AD;
`

const ContactText = styled.div`
    
`