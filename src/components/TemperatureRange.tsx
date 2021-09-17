import {IonIcon, IonRange} from '@ionic/react';
import './TemperatureRange.css';
import {thermometer} from "ionicons/icons";
import * as React from "react";

interface TemperatureRangeProps {
    min?: number;
    max?: number;
    temperature: number;
    onChange: (temperature: number) => void;
}

const MIN_TEMP = -30;
const MAX_TEMP = 35;
const PRECISION = 0.1;
const ROUND_VAL = 1 / PRECISION;

export const TemperatureRange: React.FC<TemperatureRangeProps> = (props) => {
    const min = React.useMemo(() => typeof props.min === 'undefined' || props.min < MIN_TEMP ? MIN_TEMP : props.min, [props.min]);
    const max = React.useMemo(() => typeof props.max === 'undefined' || props.max > MAX_TEMP ? MAX_TEMP : props.max, [props.max]);
    return (
        <IonRange min={min} max={max} step={PRECISION} value={props.temperature}
                  onIonChange={(evt) => typeof evt.detail.value === 'number' && props.onChange(Math.round((evt.detail.value + Number.EPSILON) * ROUND_VAL) / ROUND_VAL)}
        >
            <IonIcon slot="start" icon={thermometer} size="small" color="primary"/>
            <IonIcon slot="end" icon={thermometer} color="primary"/>
        </IonRange>
    );
};
