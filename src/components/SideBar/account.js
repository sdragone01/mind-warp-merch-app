import Fire from '../../config/Fire';
import { useState, useEffect } from 'react';

const account = Fire.auth().currentUser;

const photoURL = '../../assets/avatar_default.jpg'

export default account;