import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 2, -1, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const sampleString = new CharacterCollection('Xcba');
sampleString.sort();
console.log(sampleString.data);

const linkedlist = new LinkedList();
linkedlist.add(500);
linkedlist.add(-10);
linkedlist.add(-30);
linkedlist.add(0);
linkedlist.add(5);

linkedlist.sort();
console.log(linkedlist.print);
