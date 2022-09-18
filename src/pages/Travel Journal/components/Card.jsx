import PinIcon from '../../../assets/PinIcon.png'
import styled from 'styled-components'

export default function Card ({title,location,googleMapsUrl,startDate,endDate,description,imageUrl}) {
    return (
        <CardContainer>
            <CardImg src = {imageUrl}/>
            <CardInfo>
                <CardHeader>
                    <CardIcon src = {PinIcon}/>
                    <CardLocation>{location}</CardLocation>
                    <CardMap href = {googleMapsUrl}>View on Google Maps</CardMap>
                </CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDate>{startDate} - {endDate}</CardDate>
                <CardDescription>{description}</CardDescription>
            </CardInfo>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    display: flex;
    margin: 1.5em;

    @media (min-width: 768px) {
        width: 75%;
        margin: 2em auto;
        max-width: 60em;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
    }
`

const CardImg = styled.img.attrs(props => ({ src: props.src }))`

    object-fit: cover;
    width: 10em;
    height: 16em;
    border-radius: 1em;

    @media (min-width: 768px) {
        width: 15em;
        height: 20em;
    }

    @media (max-width: 480px) {
        width: 100%
    }
`

const CardInfo = styled.div`
    @media(min-width: 481px) {
        margin-left: 1.5em;
    }
`

const CardHeader = styled.div`

    display: flex;
    align-items: center;
    margin-top:1em;

    
`

const CardIcon = styled.img.attrs(props => ({src : props.src}))`
    
    width: 0.6em;
    height: .9em;
    margin-right: 0.5em;

    @media (min-width: 768px) {
        width: 0.8rem;
        height: 1rem;
    }
`

const CardLocation = styled.h2`
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 1px;

`

const CardMap = styled.a.attrs(props => ({ href : props.href }))`

    margin-left: 1rem;
    font-size: 1rem;
    color: #918E9B;

`

const CardTitle = styled.h1`

    
    font-size: 1.5rem;
    font-weight: 700;

    @media (min-width: 768px) {
        font-size: 2rem;
    }
`

const CardDate = styled.h2`


    font-size: 1rem;
    font-weight: 700;

    @media (min-width: 768px) {
        font-size: 1.25rem;
    }
`

const CardDescription = styled.p`
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 1px;
`


