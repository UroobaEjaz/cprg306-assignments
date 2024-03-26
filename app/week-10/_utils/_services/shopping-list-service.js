import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Function to retrieve items for a specific user
async function getItems(userId) {
    const itemsRef = collection(db, 'users', userId, 'items');
    const querySnapshot = await getDocs(itemsRef);

    const items = [];
    querySnapshot.forEach(doc => {
        items.push({
            id: doc.id,
            data: doc.data()
        });
    });

    return items;
}

// Function to add a new item to a specific user's list of items
async function addItem(userId, item) {
    const itemsRef = collection(db, 'users', userId, 'items');
    const docRef = await addDoc(itemsRef, item);
    return docRef.id;
}

// Example usage:
async function exampleUsage() {
    const userId = 'exampleUserId';
    
    // Adding an item
    const newItemId = await addItem(userId, { name: 'New Item', quantity: 1 });
    console.log('New item added with ID:', newItemId);

    // Retrieving items
    const items = await getItems(userId);
    console.log('Retrieved items:', items);
}

exampleUsage();


