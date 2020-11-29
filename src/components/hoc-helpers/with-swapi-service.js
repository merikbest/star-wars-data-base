import React from 'react';
import {SwapiServiceConsumer} from '../sw-service-context/sw-service-context';

const withSwapiService = (mapMethodsToProps) => (Wrapped) => {

    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        const serviceProps = mapMethodsToProps(swapiService);

                        return (
                            <Wrapped {...props} {...serviceProps} />
                        );
                    }
                }
            </SwapiServiceConsumer>
        );
    }
};

export default withSwapiService;
