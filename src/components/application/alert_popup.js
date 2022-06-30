import React from 'react'
import alertImg from '../../assets/images/alert.png'
import { withTranslation } from 'react-i18next';

function AlertPopUp(props) {
    return (
        <div className={'alert-card-popup-background' + (props.isOpen ? ' open' : '')}>
            <div className="alert-card-popup" 
                onClick={el => {
                    el.preventDefault();
                    props.setAlertOpen(false)
                }}>
                <div style={{ width: '100%', marginTop: '40px' }}>
                    <img src={alertImg} alt="" style={{ width: '150px' }} />
                </div>
                <div className="desc">
                    { props.message.map(item => <div key={item}>{item}</div>) }
                </div>
                <div className="close">{t('click anywhere to close')}</div>
            </div>
        </div>
    )
}

export default withTranslation()(AlertPopUp)