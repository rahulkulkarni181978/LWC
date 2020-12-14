import { LightningElement, api } from 'lwc';

export default class ChildPopLwc extends LightningElement {

    closeModal(event)
    {
        console.log('Close button clicked');
        const selectedEvent = new CustomEvent("buttonclosed", {
       detail: false
     });
 
     // Dispatches the event.
     this.dispatchEvent(selectedEvent);
    }

}