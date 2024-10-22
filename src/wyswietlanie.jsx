import React from 'react';
import './wyswietlanie.css';
function Wyswietlanie(props){
    return(
        <div id="Pole" >
            <div id="Photo">
            <img src={props.zdjecie} id="photo1"/>
            </div>
            <div id="tytulGatunek">
            <p>Tytuł: {props.tytul}</p>
                <p>Gatunek : {props.gatunek}</p>
            </div>
            <div id="TeTakiePola">
                { props.premiera == true && <a id="premiera">PREMIERA</a> }

                { props.dlaDzieci == true &&
                <a id="dlaDzieci">DLA DZIECI</a>
                }

                {props.salaStudyjna == true &&
                <a id="salaStudyjna">SALA STUDYJNA</a>
                }
                {props.Studyjny == true &&
                <a id="Studyjny">STUDYJNY</a>
                }
            </div>

         <div id="Czas">
            {props.czas != null &&
            <a id="czas1">{props.czas} </a>
         }
            {props.czas2 != null &&
            <a id="czas1">{props.czas2} </a>
         }
            {props.czas3 != null &&
            <a id="czas1">{props.czas} </a>
         }
        </div>

        </div>

    );

}
export default Wyswietlanie;