import React from 'react'
import Destacados from './Destacados';

const DestacadosList = ({ destacados }) => {
    return (
        <>

            <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-evenly',
                flexWrap: 'wrap', rowGap: '48px'
            }}>
               
                {
                    destacados.map(destacado => (
                        <Destacados key={destacado.id} destacado={destacado} />
                    ))
                }
            </div>
        </>
    );
};

export default DestacadosList;

