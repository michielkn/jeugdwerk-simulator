import React, {Component} from 'react';
import './timeline.css'
import TimeLineItem from "./item/TimeLineItem";

export default class Timeline extends Component {

    render(){
        return(
            <div class="timeline">
                <TimeLineItem
                    title="URL: https://jeugdwerk-simulator-e6667.firebaseapp.com"
                    icon="info"
                    index={-1}
                    time={-1}
                    until={24}
                />
                <TimeLineItem
                    title="Aankomst hoofdanimatoren"
                    icon="write"
                    index={0}
                    time={0}
                    until={20}
                >
                    <p>Beste hoofdmonitoren,</p>
                    <p>Van harte welkom! Over exact 20 minuten komen jullie animatoren aan.
                    Ze zullen benieuwd zijn voor welke groep ze deze week zullen staan en wie van jullie hun hoofdanimatoren zijn.  </p>
                    <p>Hier zijn de gemiddelde dagaanwezigheden voor deze zomer om jullie wat te helpen</p>
                    <ul>
                        <li>Kleuters</li>
                        <ul>
                            <li>3 jaar: 20 kinderen</li>
                            <li>4 jaar: 15 kinderen</li>
                            <li>5 jaar: 32 kinderen</li>
                        </ul>
                        <li>Lagere School</li>
                        <ul>
                            <li>6 jaar: 10 kinderen</li>
                            <li>7 jaar: 25 kinderen</li>
                            <li>8 jaar: 17 kinderen</li>
                            <li>9 jaar: 35 kinderen</li>
                            <li>10 jaar: 19 kinderen</li>
                            <li>11 jaar: 13 kinderen</li>
                        </ul>
                        <li>Tieners</li>
                        <ul>
                            <li>12 jaar: 24 kinderen</li>
                            <li>13 jaar: 30 kinderen</li>
                            <li>14 jaar: 9 kinderen</li>
                            <li>15 jaar: 17 kinderen</li>
                        </ul>
                    </ul>
                </TimeLineItem>
                <TimeLineItem
                    title="Weekactiviteiten"
                    icon="write"
                    index={1}
                    time={5}
                >
                    <p>Beste hoofdmonitoren,</p>
                    <p>Volgende week gaan alle leeftijdsgroepen op uitstap. Het is aan jullie om nu al een deel van de voorbereiding
                        te doen. Verzamel al zoveel mogenlijk gegevens en bereid al <strong>zoveel mogelijk</strong> voor. Maar maak je hier niet al te druk
                        in. Jullie hebben nog een hele week om hieraan te werken. Er is geen budget afgesproken maar probeer het zo budget vriendelijk
                        te doen. Jullie mogen ook een kleine bijdrage vragen aan de ouders</p>
                    <ul>
                        <li><strong>Kleuters: </strong>naar de markt</li>
                        <li><strong>Lagere School: </strong>zwemmen</li>
                        <li><strong>Tieners: </strong>stadsspel</li>
                    </ul>
                </TimeLineItem>
                <TimeLineItem
                    title="Jullie zijn goed bezig!"
                    icon="info"
                    index={2}
                    time={14}
                />
                <TimeLineItem
                    title="Telefoon van Britt"
                    icon="write"
                    index={3}
                    time={15}
                    until={20}
                >
                    <p>We hebben zojuist telefoon gehad van <strong>Britt</strong> met de melding dat ze deze week niet aanwezig gaat
                        kunnen zijn op jullie werking wegens een sterftegeval in de familie. Jammer maar helaas. Deze dingen gebeuren</p>
                </TimeLineItem>
                <TimeLineItem
                    title="De monitoren komen aan op het speelplein"
                    icon="info"
                    index={4}
                    time={20}
                />
                <TimeLineItem
                    title="De monitoren zijn begonnen aan hun voorbereiding"
                    icon="info"
                    index={5}
                    time={21}
                />
                <TimeLineItem
                    title="De monitoren gaan naar de bar"
                    icon="info"
                    index={6}
                    time={22}
                />
                <TimeLineItem
                    title="Avondwoordje"
                    icon="video"
                    index={7}
                    time={23}
                >
                    <p>Als de monitoren gaan slapen moet het verplicht stil zijn tot deze terug wakker worden</p>
                </TimeLineItem>
                <TimeLineItem
                    title="De monitoren gaan slapen"
                    icon="info"
                    index={8}
                    time={24}
                />
                <TimeLineItem
                    title="De monitoren staan op"
                    icon="info"
                    index={9}
                    time={25}
                />
                <TimeLineItem
                    title="Kinderen op komst"
                    icon="photo"
                    index={10}
                    time={26}
                    until={29}
                >
                    <p>
                        Over 3 minuten komen de eerste kinderen aan en jullie zijn nog niet verkleed. Snel verkleedkleren zoeken!
                    </p>
                </TimeLineItem>
                <TimeLineItem
                    title="De kinderen komen aan"
                    icon="info"
                    index={11}
                    time={29}
                />
                <TimeLineItem
                    title="Happy birthday Marco"
                    icon="photo"
                    index={12}
                    time={35}
                    until={45}
                >
                    <p>
                        Marco wordt vandaag 9 jaar! Over 10 minuten begint het ochtendtoneeltje. Het zou leuk zijn
                        als jullie nog snel een verassing voor hem voorzien! Een kroon zou een leuk begin zijn!
                    </p>
                </TimeLineItem>
                <TimeLineItem
                    title="Rolverdeling vergeten"
                    icon="write"
                    index={13}
                    time={40}
                    until={45}
                >
                    <p>
                        Over 5 minuten begint het toneeltje maar jullie zijn vergeten om een animator te zoeken om de prins
                        (belangrijke rol) te spelen. Welke animator vraag je last minute?
                    </p>
                </TimeLineItem>
                <TimeLineItem
                    title="Ochtendtoneeltje begint"
                    icon="info"
                    index={14}
                    time={45}
                />
                <TimeLineItem
                    title="Voormiddagspelen beginnen"
                    icon="info"
                    index={15}
                    time={46}
                />
                <TimeLineItem
                    title="Materiaal!"
                    icon="message"
                    index={16}
                    time={60}
                    until={61}
                >
                    <p>
                        De kleutermonitoren hebben deze namiddag voor elk kind een ijsje nodig als beloning.
                        Stuur een bericht naar de econoom <stong>0472/93.67.34</stong> zodat hij deze nog kan voorzien.
                        Hij is nu wel in de winkel dus heb je maar 1 minuut de tijd!
                    </p>
                </TimeLineItem>
                <TimeLineItem
                    title="Schoenen"
                    icon="photo"
                    index={17}
                    time={75}
                >
                    <p>
                        De ouders van Gregory Verbeken (14 jaar) komen hem ophalen. Maar hij is een van zijn schoenen kwijt
                        geraakt in het bos. De ouders willen pas vertrekken als de schoen gevonden is. Help jij hen even zoeken?
                    </p>
                </TimeLineItem>
                <TimeLineItem
                    title="Luizen"
                    icon="write"
                    index={18}
                    time={98}
                >
                    <p>
                        Je ontvangt volgende mail:
                    </p>
                    <br/>
                    <p>
                        Beste,
                    </p>
                    <p>
                        Vandaag ik heb bij mijn jongste zoon Junior (7 jaar)
                        vastgesteld dat hij last heeft van Luizen.
                        Ik heb hem hiervoor behandeld en hij zou normaal luizenvrij moeten zijn.
                        Ik heb van andere ouders vernomen dat hun kinderen deze week ook thuis zijn gekomen met luizen.
                        Ik dacht ik meld het even zodat jullie hiervan op de hoogte zijn.
                    </p>
                    <p>
                        Mvg, Mbark Boussouffa
                    </p>
                </TimeLineItem>
                <TimeLineItem
                    title="Middagpauze"
                    icon="info"
                    index={19}
                    time={110}
                />
                <TimeLineItem
                    title="Moni trapt het af"
                    icon="write"
                    index={20}
                    time={111}
                >
                    <p>
                        Eline vind jullie werking toch maar niets voor haar
                        en heeft besloten dat ze vroegtijdig naar huis gaat.
                    </p>
                </TimeLineItem>
                <TimeLineItem
                    title="Namiddagspel 1 start"
                    icon="info"
                    index={21}
                    time={112}
                />
                <TimeLineItem
                    title="Baractiviteit"
                    icon="write"
                    index={22}
                    time={132}
                >
                    <p>
                        Om het moraal wat te boosten zouden we een baractiviteit willen voorzien.
                        Kunnen jullie er een maken? Het zou ongeveer 20 minuten in beslag mogen nemen.
                    </p>
                </TimeLineItem>
                <TimeLineItem
                    title="Luizen (2)"
                    icon="write"
                    index={23}
                    time={153}
                >
                    <p>
                        Je ontvangt volgende mail:
                    </p>
                    <br/>
                    <p>
                        Beste,
                    </p>
                    <p>
                        Vandaag heb ik van mijn zoon moeten vernemen dat een kind uit
                        zijn groep luizen zou hebben. Het zou gaan over een zekere Mbark (Junior).
                        Ik zou graag hebben dat jullie er in het vervolg voor willen zorgen dat mijn kind niet in contact
                        komt met dit type van kinderen. Als ik toch zou vaststellen dat mijn kind
                        luizen zou hebben zal ik de rekening van de kapper doorspelen naar jullie.

                    </p>
                    <p>
                        Mvg, Filip DW
                    </p>
                </TimeLineItem>
                <TimeLineItem
                    title="We like to party!"
                    icon="write"
                    index={24}
                    time={176}
                    until={190}
                >
                    <p>
                        De animatoren hebben een kinderfuif georganiseerd (6-10 jaar) voor het tweede namiddagspel. Nu zijn ze er achter gekomen dat
                        ze geen kinderliedjes kennen. Kunnen jullie hen een lijst bezorgen? De activiteit begint over 14 minuten.
                        Ze hebben een 20tal liedjes nodig
                    </p>
                </TimeLineItem>
                <TimeLineItem
                    title="4 uurtje!"
                    icon="info"
                    index={25}
                    time={190}
                />
                <TimeLineItem
                    title="Lactose"
                    icon="photo"
                    index={26}
                    time={191}
                    until={200}
                >
                    <p>
                        Kimberly is lactoseintollerant, maar er is niets speciaal voor haar voorzien voor het 4-uurtje.
                        Zoek iets voor Kimberly om te eten.
                    </p>
                </TimeLineItem>
                <TimeLineItem
                    title="Namiddagspel 2 start"
                    icon="info"
                    index={27}
                    time={200}
                />
                <TimeLineItem
                    title="Pipibroek!"
                    icon="write"
                    index={26}
                    time={201}
                    until={220}
                >
                    <p>
                        Johnneke van de 4 jaar heeft in zijn broek geplast. De monitoren hebben hem ververst maar de ouders zouden nog op de hoogte gebracht moeten worden!
                    </p>
                </TimeLineItem>
                <TimeLineItem
                    title="Einde"
                    icon="info"
                    index={28}
                    time={220}
                />
            </div>
    )
    }
}
