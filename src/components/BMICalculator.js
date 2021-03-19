import { useState } from 'react';
import React from 'react'
import "./BMICalculator.css"

const BMICalculator = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmiValue, setBmiValue] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const heightInMeters = height / 100;
    const BMI = weight / (heightInMeters * heightInMeters);
    const roundedOfBMI = BMI.toFixed(2);

    function displayBMIValue() {
        if (bmiValue) {
            return (
                <div>
                    <h1>BMI: {roundedOfBMI}</h1>
                </div>
            )
        } else {
            return <div></div>
        }
    }
    function suggestWeight(){
        if(roundedOfBMI <= 18){
            return showWeight(10, 18);
        }
        else if(roundedOfBMI > 18 && roundedOfBMI <= 25){
            return showWeight(18, 25);
        }
      
        else if(roundedOfBMI > 25 && roundedOfBMI <= 30){
            return showWeight(25, 30);
        }
      
        else if(roundedOfBMI > 30){
            return showWeight(30, 40);
        }
    }

    function showWeight(lowBMI, highBMI){
        const lowestWeight = lowBMI * (heightInMeters * heightInMeters)
        const highestWeight = highBMI * (heightInMeters * heightInMeters)
        return (<p>The suggested weight for your {height}cm height is in the range of <strong>{Math.round(lowestWeight)} - {Math.round(highestWeight)} kgs.</strong></p>)
    }
    console.log(suggestWeight);

        return (
        <div className="wrapper">
            <p><strong>Units:</strong> Metric</p>
            <div>
                <label>Weight:</label>
                <input type="text"
                    value={weight}
                    onChange={e => [setWeight(e.target.value), setIsExpanded(false)]}
                    placeholder="Kilograms" required></input>
            </div>
            <div>
                <label>Height:</label>
                <input
                    type="text"
                    value={height}
                    onChange={e => [setHeight(e.target.value), setIsExpanded(false)]}
                    placeholder="Centimeters" required></input>
            </div>

            <button onClick={() => [setBmiValue(roundedOfBMI), setIsExpanded(true)]}>Calculate</button>

            {(isExpanded && weight !=="" && height !== "") && (
                <div className="popup">
                    {displayBMIValue()}
                    {suggestWeight()}
                    <div
                        id={roundedOfBMI <= 18 ? "highlight" : "1"}
                        className="weight-boxes"
                    >
                    
                        <div>&#60; 18 BMI</div>
                        <div>Underweight</div>
                    </div>
                    <div
                        id={roundedOfBMI > 18 && roundedOfBMI <= 25 ? "highlight" : "2"}
                        className="weight-boxes"
                    >
                        <div>18 - 25 BMI</div>
                        <div>Normal</div>
                    </div>
                    <div
                        id={roundedOfBMI > 25 && roundedOfBMI <= 30 ? "highlight" : "3"}
                        className="weight-boxes"
                    >
                        <div>25 - 30 BMI</div>
                        <div>Overweight</div>
                    </div>
                    <div
                        id={roundedOfBMI > 30 ? "highlight" : "4"}
                        className="weight-boxes"
                    >
                        <div>30+ BMI</div>
                        <div>Obese</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BMICalculator;
