import React from "react";
import {SwapiServiceConsumer} from "../sw-service-context/sw-service-context";

const withSwService = (Wrapped, mapMethodsToProps) => {

    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        const serviceProps = mapMethodsToProps(swapiService);

                        return (
                            <Wrapped {...props} {...serviceProps} />
                        )
                    }
                }
            </SwapiServiceConsumer>
        );
    }
};

export default withSwService;
