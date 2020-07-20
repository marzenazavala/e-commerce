import React from "react";
import MenuItem from "../menuItem/MenuItem";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directorySelectors';
import './directory.scss';


const Directory = ({sections}) => (
            <div className="directory-menu">
                {
                sections.map(({id, ...otherSectionProps}) => 
                    <MenuItem key={id} {...otherSectionProps} />
                )
                }
              
            </div>
        )

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})



export default connect(mapStateToProps)(Directory)