import React, {useRef, useState} from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import DraggableItem from '../Draggable'
import Area from '../AreaDrop'
import ButtonUi from '../ButtonControlUI'
import Modal from '../Generales/Modal'
import ButtonCheck from '../ButtonCheck'
import {ICol, IRow} from '../Grid'
import AreaButtons from '../AreaButtons'

// Styles
import styled from 'styled-components'
import styles, { DraggablesContainer, AreasContainer, UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'
// import interaction from './Actividad_interactions'
import dataItems from './Actividad_data'
import Tooltip from '../Tooltip'

const Actividad_base = ({staticContext, ...props}) => {
    const [visible0, setVisible0] = useState('show')
    const [visible1, setVisible1] = useState('show')
    const [visible2, setVisible2] = useState('show')
    const [visible3, setVisible3] = useState('show')
    const [visible4, setVisible4] = useState('show')
    const [visible5, setVisible5] = useState('show')
    const [visible6, setVisible6] = useState('show')
    const [visible7, setVisible7] = useState('show')
    const [visible8, setVisible8] = useState('show')
    const [visible9, setVisible9] = useState('show')

    const [tooltip1, settooltip1] = useState(false)
    const [tooltip2, settooltip2] = useState(false)
    const [tooltip3, settooltip3] = useState(false)
    const [tooltip4, settooltip4] = useState(false)
    const [tooltip5, settooltip5] = useState(false)


    const [modalFlag, setModal] = useState(false)
    const [ok, setOk] = useState(false)
    const [err, setErr] = useState(false)
    console.log(this)
    const remove_item = (id, area) => {
        eval('setVisible' + id)('hide')
        var data = dataItems[id]

        if(data.right_area === area){
            data.right = 1
        }
    }
// Comprobar y aprobar el examen
    const comprobarPrueba = () => {
        var count = 0
        console.log(dataItems)
        dataItems.map((data, i) => {
            if(data.right === 1){
                count ++
            }else{
                setErr(true)
                setModal(true)
            }
            if(count === dataItems.length){
                setOk(true)
                setModal(true)
            }
        })
    }
// Refs de las areas

    const area_1 = useRef()
    const area_2 = useRef()
    const area_3 = useRef()
    const area_4 = useRef()
    const area_5 = useRef()

    const closeOthers = (id) => {
        eval('settooltip' + id)(true)
        for(var i = 1; i < 6; i++){
            if(i !== id)
                eval('settooltip' + i)(false)
        }
    }
 
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} id="area" h={35}>
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='click on the buttons to listen and read the activities, associate them with the texts below.' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => {window.location.href = '/actividad1'} } />
            </UiButtonsContainer>
            <ICol mt={3}>
                <MainTitle color={Ilex.violeta2}>
                    LISTEN AND PRACTICE FAMILY MEMBERS. THEN, CLASSIFY EACH FAMILY MEMBER BY ITS GENDER.
                </MainTitle>
            </ICol>

            <AreasContainer className="zoom-mini">
                <IRow>
                    <ICol w={20}>
                        <Area className="persona1" title='Yeison Mosquera '  data-target="area_1" id="area_1" ref={area_1} />
                        <AreaButtons audio="media/audio.mp3" tooltip={ () => closeOthers(1) } />
                        <Tooltip pos="4em, 0" className="Tooltip" visible={tooltip1}  onClick={() => settooltip1(!tooltip1)} > 
                            <h3>Yeison Mosquera</h3>
                            <p> During the sixth week of the semester, I feel worried and stressed because all my professors program exams. 
                                This means that I must study a lot and prepare to demonstrate my learning progress. When I feel exhausted or full of work, 
                                I like going to the botanical garden. It is a very relaxing place. I like watching the birds and listening to nature sounds. 
                                It’s very comforting. </p>
                        </Tooltip>
                    </ICol>
                    <ICol w={20}>
                        <Area className="persona2" title='Stella Burbano' data-target="area_2" id="area_2" ref={area_2} />
                        <AreaButtons audio="media/audio.mp3" tooltip={ () => closeOthers(2) } />
                        <Tooltip pos="4em, 0" className="Tooltip" visible={tooltip2}  onClick={() => settooltip2(!tooltip2)} >
                            <h3>Stella Burbano</h3>
                            <p> As an engineering student, I do a lot of laboratory work. I complete forms and reports all the time. 
                                These activities make me feel stressed and tired so I normally need something to stop feeling like this. 
                                The Newspapers and Periodicals Library is an amazing place to go to when you feel tired. I like reading books and magazines there. 
                                There are different editions and topics to explore. I also like feeling the wind that comes through the windows. This place is very refreshing. </p>
                        </Tooltip>
                    </ICol>

                    <ICol w={20}>
                        <Area className="persona3" title='Norberto Hincapié' data-target="area_3" id="area_3" ref={area_3} />
                        <AreaButtons audio="media/audio.mp3" tooltip={ () => closeOthers(3) } />
                        <Tooltip pos="4em, 0" className="Tooltip" visible={tooltip3}  onClick={() => settooltip3(!tooltip3)} > 
                            <h3>Norberto Hincapié</h3>
                            <p> Learning a foreign language and how to teach is a very difficult process. Every week I compose long texts in English for my courses in Bachelor’s degree in Bilingualism. 
                                This is really stressful. The only way I can increase my energy levels and prevent health problems is when I go the gym. 
                                I like training there because the instructors are nice and helpful. Also, I like exercising while listening to some good music. 
                                It is a fantastic place to relax. </p>
                        </Tooltip>
                    </ICol>

                    <ICol w={20}>
                        <Area className="persona4" title='Eliana Salazar' data-target="area_4" id="area_4" ref={area_4} />
                        <AreaButtons audio="media/audio.mp3" tooltip={ () => closeOthers(4) } />
                        <Tooltip pos="4em, 0" className="Tooltip" visible={tooltip4}  onClick={() => settooltip4(!tooltip4)} > 
                            <h3>Eliana Salazar</h3>
                            <p> I spend a lot of time practicing for my music courses. Professors are rigorous and very demanding. 
                                I usually practice cello four to five hours a day. At the end of the day, I usually feel tired and need something to get my energy back. 
                                Fortunately, there is a place to relax where there are lots of palms. I like going there to chat with my friends and get distracted from all my responsibilities. 
                                I like hanging out in places like this. </p>
                        </Tooltip>
                    </ICol>
                    <ICol w={20}>
                        <Area className="persona5" title='Diana Zuluaga' data-target="area_5" id="area_5" ref={area_5} />
                        <AreaButtons audio="media/audio.mp3" tooltip={ () => closeOthers(5) } />
                        <Tooltip pos="4em, 0" className="Tooltip" visible={tooltip5}  onClick={() => settooltip5(!tooltip5)} >
                            <h3>Diana Zuluaga</h3>
                            <p> Right now, I’m doing my teaching practicum at a public school and, to be honest, it is a very hard job because this means I study and I work during the week. 
                                The kids at the school are not easy to control and this causes me to have headaches and sometimes frustration. I like playing sports to compensate for all of that. 
                                I like playing rugby, especially with the university’s team. I love the training sessions and the matches. They’re pretty exciting and relaxing. </p>
                        </Tooltip>
                    </ICol>
                </IRow>




            

            </AreasContainer>
            
            <DraggablesContainer>
                
                { dataItems.map((dato, i) => {
                    return(
                        <DraggableItem text={dato.text}  key={i} elementId={i} checkFunction={remove_item} className={'dragItem ' + eval('visible' + i) } areaDrag="#area" target={dato.areaTarget} ref={[area_1, area_2, area_3, area_4, area_5]}/>
                    )
                }) }

            </DraggablesContainer>

            <IRow className='pestanaBottom' >
                <ICol ><ButtonCheck onClick={comprobarPrueba} /></ICol>
            </IRow>
            <Modal visible={modalFlag} ok={ok} err={err} w={25} repeatUrl={'/actividad1'} finished={ok} />
        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad