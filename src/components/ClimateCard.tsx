import * as React from 'react';
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/react';
import './ClimateCard.css';
import {Scatter} from "./Scatter";
import {TemperatureRange} from "./TemperatureRange";
import {HumidityRange} from "./HumidityRange";

const calcAbsHumidity = (temp: number, rh: number) => (6.112 * Math.exp((17.67 * temp) / (temp + 243.5)) * rh * 2.1674) / (273.15 + temp);
const calcTaupunkt = (temp: number, rh: number) => (Math.pow(rh / 100, 1 / 8.02) * (109.8 + temp)) - 109.8;

export interface ClimateCardProps {
    title: string;
    initialTemperature: number;
    initialRelativeHumidity: number;
    minTemperature?: number;
    maxTemperature?: number;
}

export const ClimateCard: React.FC<ClimateCardProps> = (props) => {
    const [temperature, setTemperature] = React.useState(props.initialTemperature);
    const [rh, setRh] = React.useState(props.initialRelativeHumidity);

    const absHumidity = React.useMemo(() => Math.round((calcAbsHumidity(temperature, rh) + Number.EPSILON) * 10) / 10, [temperature, rh]);
    const taupunkt = React.useMemo(() => Math.round((calcTaupunkt(temperature, rh) + Number.EPSILON) * 10) / 10, [temperature, rh]);

    return (
        <IonCard>
            <IonCardHeader>
                <IonCardSubtitle>{props.title}</IonCardSubtitle>
                <Scatter>
                    <IonCardTitle>{temperature.toFixed(1)} °C</IonCardTitle>
                    <IonCardTitle>{rh} %</IonCardTitle>
                </Scatter>
            </IonCardHeader>

            <IonCardContent>
                <TemperatureRange min={props.minTemperature} max={props.maxTemperature} temperature={temperature}
                                  onChange={setTemperature}/>
                <HumidityRange relativeHumidity={rh} onChange={setRh}/>
            </IonCardContent>

            <IonCardContent>
                <Scatter>
                    <IonCardTitle>Absolut: {absHumidity} g/㎥</IonCardTitle>
                    <IonCardTitle>Taupunkt: {taupunkt} °C</IonCardTitle>
                </Scatter>
            </IonCardContent>
        </IonCard>

    );
};
