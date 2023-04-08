import React from "react";
import { Row } from "react-bootstrap";
import { iconUrlFromCode } from "../../../components/services/weatherService";
import { Card } from "../../../styles/HomeStyles";

function Forecast({ title, items }) {
    console.log(items);
    return (
        <div>
            <div className="flex items-center justify-start mt-6">
                <p className="text-white font-medium uppercase">{title}</p>
            </div>
            <hr className="my-2" />

            <Row>

                {items.map((item, index) => (

                    <Card key={index} className="m-4">
                        <img
                            src={iconUrlFromCode(item.icon)}
                            className="card-img-top"
                            alt=""
                        />
                        <div class="card-body">
                            <p className="card-text text-sm">{item.title}</p>
                            <p className="card-text font-medium">{`${item.temp.toFixed()}°`}</p>

                        </div>
                    </Card>
                ))}
            </Row>
        </div>
    );
}

export default Forecast;
