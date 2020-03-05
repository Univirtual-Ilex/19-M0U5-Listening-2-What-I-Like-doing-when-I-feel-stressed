//Import
import React from 'react'
import styled from 'styled-components'
import styles from './Actividad2_styles'
import Ilex from '../../App/variables'
import ProgressBar from '../ProgressBar'
// styles from styled
//import { UiButtonsContainer } from '../Actividad1/Actividad_styles'
// Data
// import data from './Actividad2_data'
// Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import { IRow, ICol } from '../Grid'
// import ButtonUi from '../ButtonControlUI'
import ButtonCheck from '../ButtonCheck'
// import PreguntaRadio from '../PreguntaRadio/PreguntaRadio'
// Componente base
const Actividad2_base = ({staticContext, ...props}) => {
    return (
        <Container bgImage='./src/bg_actividad1.png' h={46} w={80} {...props}>

        {/*}    <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='After reading, answer which of the following answers to the questions is correct' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' />
            </UiButtonsContainer> */}
            <IRow w={80} align="center">
                <ICol mt={2}>
                    <ProgressBar progress={0}/>
                </ICol>
            </IRow>
            <IRow w={85} align="center">
                <ICol pt={ 1 } pb={0.5}>
                    <MainTitle color={Ilex.violeta2} size={1.5}>
                    READ THE DESCRIPTION OF A TEACHER’S FAMILY AND COMPLETE THE FAMILY TREE.
                    </MainTitle>  
                </ICol>
                <ICol>
                    <div className="contenedor-txt">
                        <IRow valign="center" justify="center">
                            <ICol w={40} className="sub-contenedor-img"> 
                                <img src="src/imagen-actividad2.png" alt="Foto relacionada con actividad 2"/>
                            </ICol>
                            <ICol w={55} p={2}> 
                                <p>
                                Hello, everyone! This is my family. As you can see in the photo, we’re eating together. We’re celebrating a Christmas dinner at home. I’m going to describe my family to you.  Well, let me start with my sister. Her name is Sofia. She’s the oldest in the family. She’s a nurse and she’s 45.  She is married too. Her husband’s name is Juan Pablo and he’s 48. He’s a doctor. They have a child and her name is Mariana. She’s only 5 years old. She’s a student in kindergarten. My mother’s name is Rosario and she is 72. She doesn’t work. She’s retired. I love her so much! My father isn’t in the picture because unfortunately, he died last year. His name was Mario. He was 76 years old and he was a Police officer.  I have two young brothers. Their names are Cristian and Paulo. Cristian is 23 and Paulo is 27.  Cristian studies Mechanical Engineering at UTP and Paulo works as a chef in a local restaurant. As for me, my name is Andrés. I’m 36 years old and I’m an English teacher at a public school. I love my job. What can you tell me about your family? 
                                </p>
                            </ICol>
                        </IRow>
                    </div>
                </ICol>

            </IRow>
            <ICol mt={5.5}>
            <ButtonCheck link={'/actividad2a'} >NEXT</ButtonCheck>
            </ICol>



        </Container>

    )
}
const Actividad2 = styled(Actividad2_base)`${ styles }`
export default Actividad2
