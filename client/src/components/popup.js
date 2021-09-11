import React from 'react'
import styled from 'styled-components'
import water from '../components/water bottle.png'
import greenBin from '../components/green_bin.png'
import yellowBin from '../components/yellow bin.png'
import redBin from '../components/Red bin.png'
import "@fontsource/montserrat"
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

const Header = styled.div`
    
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 75px;
    line-height: 91px;
    text-align: center;
    padding-top: 20px;
    
    color: rgba(55, 75, 133, 0.8);
`;

const bin = styled.img`
    height: 220px;
    width: 150px;
`

const Instruction = styled.div`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 49px;
    text-align: center;
    
    color: #54174E;
`

function PopUp(props) {

    function handleStop(e) {
        if (e.clientY < 610 && e.clientY > 350) {
            if (e.clientX > 40 && e.clientX < 190) {
                console.log("ITS COMPOST");
            } else if (e.clientX >= 190 && e.clientX <= 330) {
                console.log("ITS RECYCLING");
            } else if (e.clientX > 330 && e.clientX < 490) {
                console.log("ITS RUBBISH");
            }
        }
        console.log(e.clientY);
    }
    
    let image = ""
    let correctBin = "green"
    if (props.name === "Plastic Bottle") {
        image = water
        correctBin = "green"
    } 
    
    return (
        <div style = {{ display:'flex', alignItems:'center', justifyContent:'space-around', flexDirection:'column', height:'644px', width:'523px', borderRadius:'42px', background: 'linear-gradient(180.04deg, rgba(208, 167, 157, 0.6) 11.3%, rgba(180, 115, 97, 0.6) 96.03%)'}}>
            <div>
                <Header>{props.name}</Header>
                <Instruction>Drag into the right bin!</Instruction>
            </div>
            <Draggable onStop={handleStop}>
                <img src={image} style = {{height: '150px', width: '50px' }}/>
            </Draggable>
            <div>
                <img style = {{height: '220px', width: '150px' }} src={greenBin}/>
                <img style = {{height: '220px', width: '150px' }} src={yellowBin}/>
                <img style = {{height: '220px', width: '150px' }} src={redBin}/>
            </div>
        </div>
    )
}

export default PopUp