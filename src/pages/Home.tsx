import * as React from 'react';
import {
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
    useIonViewWillEnter
} from '@ionic/react';
import './Home.css';
import {ClimateCard} from "../components/ClimateCard";

const Home: React.FC = () => {

    useIonViewWillEnter(() => {
    });

    return (
        <IonPage id="home-page">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Luftfeuchtigkeit</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid>
                    <IonRow>
                        <IonCol sizeXs="12" sizeMd="12" sizeLg="6">
                            <ClimateCard title="Außenwerte" initialTemperature={10} initialRelativeHumidity={50}/>
                        </IonCol>
                        <IonCol sizeXs="12" sizeMd="12" sizeLg="6">
                            <ClimateCard title="Innenwerte" initialTemperature={20} initialRelativeHumidity={60}
                                         minTemperature={10} maxTemperature={32}/>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Home;
