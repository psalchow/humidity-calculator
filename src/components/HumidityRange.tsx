import * as React from "react";
import {IonIcon, IonRange} from '@ionic/react';
import './HumidityRange.css';
import {water} from "ionicons/icons";

interface HumidityRangeProps {
    relativeHumidity: number;
    onChange: (relativeHumidity: number) => void;
}

export const HumidityRange: React.FC<HumidityRangeProps> = (props) =>
    (
        <IonRange min={0} max={100} step={1} value={props.relativeHumidity}
                  onIonChange={(evt) => typeof evt.detail.value === 'number' && props.onChange(evt.detail.value)}>
            <IonIcon slot="start" icon={water} size="small" color="primary"/>
            <IonIcon slot="end" icon={water} color="primary"/>
        </IonRange>
    );
