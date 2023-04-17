import React from 'react';
import './Curriculum.css';

import data from './Curriculum.json';

function Curriculum() {
    
    return (
        <>
        <section className="curriculum-area">
            <h2>Acadêmico</h2>
                 <ul>
                    {data.academicExperience.map((item, index) => <li key = {index}>
                    <b>({item.initialYear} - {item.endYear})</b> - {item.title} 
                    </li>
                    )}  
                 </ul>

            <h2>Profissional</h2>
                 <ul>
                 {data.professionalExperience.map((item, index) => <li key = {index}>
                    <b>({item.initialYear} - {item.endYear})</b> - {item.title} 
                    </li>
                    )}
                 </ul>
        </section>
        </>
    )
}

export default Curriculum;