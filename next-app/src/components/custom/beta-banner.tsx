'use client'
import React, { useState, useContext } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faPlay } from '@fortawesome/free-solid-svg-icons'

import '@/app/styles.css';

export default function BetaBanner() {
  return (
    <div className="flex items-center px-6 py-4 bg-gradient-yellow rounded-lg">
      <FontAwesomeIcon icon={faCircleInfo} className="mr-3" />
      <h4 className="mr-4 text-mdlg">Clearvote [beta1.1]</h4>
      <p className="text-mdlg">You're previewing an early version of Clearvote.</p>
    </div>
  );
}