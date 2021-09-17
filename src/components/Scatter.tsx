import * as React from "react";
import './Scatter.css';

export const Scatter: React.FC = (props) =>
    (
        <div className="scatter">
            {props.children}
        </div>
    );
