import styled from "styled-components"
import Image from '../component/Images'
import { getClass } from '../utils'
import { Context } from '../useContext'
import {useContext} from 'react'

function Photos() {

    const {allPhotos} = useContext(Context)
    const ImageElement = allPhotos.map(({url, id, isFavorite}) => {
        return (
            <Image 
                key = {id}
                id = {id}
                className = {getClass(id-1)}   
                img = {url} 
                isFavorite={isFavorite}>
            </Image>
        )
    })

    return (
        <Container>
            {ImageElement}
        </Container>
    )
}

const Container = styled.main`
    padding: 10px;
    display: grid;
    grid-gap: 2px;
    grid-auto-rows: 20vh;
    grid-template-columns: repeat(auto-fit, minmax(20vh, 1fr));
    grid-auto-flow: dense;
`

export default Photos