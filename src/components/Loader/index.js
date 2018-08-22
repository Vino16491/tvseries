import React from 'react';
import loaderSec from '../../assets/loading.gif';

const loader = props =>(
    <div>
        <img alt='loader icon' src={loaderSec} />{/* style={{width:75}} */}
    </div>
)

export default loader;