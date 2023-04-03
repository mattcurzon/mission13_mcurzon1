import React from 'react'
import styles from './Layout.module.css'

function TopBanner() {
    return (
        <>
        <div className='row'>
            <div className='col-2'>
                <img src='./logo192.png' alt="companylogo" />
            </div>
            <div className='col align-self-center text-start'>
                <h1 className={styles.h1}>My React Site</h1>
            </div>
        </div>
        </>
    )
}

export default TopBanner;