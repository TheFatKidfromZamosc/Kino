import logo from './logo.svg';
import './App.css';
import Ogr from './ogr.jpg';
import SzlifierkaSzerokokontowa from './szlifierka.jpg';
import Wermacht from './wermacht.jpg';
import Drugs from './Jet.jpg';
import ITS_A_DRAGON_FUS_RO_DAH from './Alduin_Concept_Art_(Skyrim)-1605104922.jpg';
import Wyswietlanie from "./wyswietlanie.jsx";
const repertuar = [
    {zdjecie: Ogr, tytul: "Shrek", gatunek: "Sigma skibidi", premiera : false, dlaDzieci: true, salaStudyjna : true, Studyjny : true, czas: "12:00", czas2: "14:00"},
  {zdjecie : SzlifierkaSzerokokontowa, tytul: "Szliferka szerokokontowa", gatunek: "Vector z The Dispicable Me", premiera : true, dlaDzieci: false, salaStudyjna : false, Studyjny : false, czas: "14:00", czas2: "16:00"},
  {zdjecie : Wermacht, tytul: "Wermacht", gatunek: "Dzieci", premiera : false, dlaDzieci: true, salaStudyjna : false, Studyjny : true, czas: "16:00"},
  {zdjecie : Drugs, tytul: "Ja i moja przygoda z narkotykami powszechnego użytku", gatunek: "Xanax", premiera : true, dlaDzieci:false , salaStudyjna : false, Studyjny : false, czas: "18:00", czas2: "20:00", czas3: "22:00"},
  {zdjecie : ITS_A_DRAGON_FUS_RO_DAH, tytul: "Przylecial smok i wyruchał ci matke", gatunek: "Norbert Gierczak", premiera : false, dlaDzieci:true , salaStudyjna : false, Studyjny : true, czas: "12:00"}

];
function App() {
  return (
    <div className="App">
<Wyswietlanie zdjecie={repertuar[0].zdjecie} gatunek={repertuar[0].gatunek} tytul={repertuar[0].tytul} premiera={repertuar[0].premiera} dlaDzieci={repertuar[0].dlaDzieci} salaStudyjna={repertuar[0].salaStudyjna} Studyjny={repertuar[0].Studyjny} czas={repertuar[0].czas} czas2={repertuar[0].czas2}/>
   <Wyswietlanie zdjecie={repertuar[1].zdjecie} gatunek={repertuar[1].gatunek} tytul={repertuar[1].tytul} premiera={repertuar[1].premiera} dlaDzieci={repertuar[1].dlaDzieci} salaStudyjna={repertuar[1].salaStudyjna} Studyjny={repertuar[1].Studyjny} czas={repertuar[1].czas} czas2={repertuar[1].czas2}/>
        <Wyswietlanie zdjecie={repertuar[2].zdjecie} gatunek={repertuar[2].gatunek} tytul={repertuar[2].tytul} premiera={repertuar[2].premiera} dlaDzieci={repertuar[2].dlaDzieci} salaStudyjna={repertuar[2].salaStudyjna} Studyjny={repertuar[2].Studyjny} czas={repertuar[2].czas}/>
        <Wyswietlanie zdjecie={repertuar[3].zdjecie} gatunek={repertuar[3].gatunek} tytul={repertuar[3].tytul} premiera={repertuar[3].premiera} dlaDzieci={repertuar[3].dlaDzieci} salaStudyjna={repertuar[3].salaStudyjna} Studyjny={repertuar[3].Studyjny} czas={repertuar[3].czas} czas2={repertuar[3].czas2} czas3={repertuar[3].czas3}/>
        <Wyswietlanie zdjecie={repertuar[4].zdjecie} gatunek={repertuar[4].gatunek} tytul={repertuar[4].tytul} premiera={repertuar[4].premiera} dlaDzieci={repertuar[4].dlaDzieci} salaStudyjna={repertuar[4].salaStudyjna} Studyjny={repertuar[4].Studyjny} czas={repertuar[4].czas}/>

    </div>
  );
}

export default App;
