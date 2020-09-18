import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('7gW2Oknnb0wKsWYJrJWT').collection('cartItems').doc('1ydxpzbdYOoSTY1YMgL1');
firestore.doc('/users/7gW2Oknnb0wKsWYJrJWT/cartItems/1ydxpzbdYOoSTY1YMgL1');
firestore.collection('/users/7gW2Oknnb0wKsWYJrJWT/cartItems');
