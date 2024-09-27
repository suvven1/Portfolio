import React from 'react'
import styled from 'styled-components'

const Awards = () => {
    return (
        <AwardsContainer>
            <Title>🏆 AWARDS</Title>

        </AwardsContainer>
    )
}

export default Awards

const AwardsContainer = styled.div`
    width: 100%;
`

const Title = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: #5477AD;
`