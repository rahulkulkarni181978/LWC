import { LightningElement, track } from 'lwc';
import ASSETS from '@salesforce/resourceUrl/LWCResources';

export default class WmCommunityMeetingType extends LightningElement {
    @track isphone;
    logobyphone = ASSETS + '/images/icon-mobile-phone.png';
    logobybranch = ASSETS + '/images/icon-building.png';
    logobyvideo = ASSETS + '/images/icon-meeting-video.png';

    handleclick(event)
    {
        console.log('clicked');
        this.template.querySelector(`[data-id="phone"]`).classList.remove('my-round-button');
        this.template.querySelector(`[data-id="phone"]`).classList.add('my-round-button-selected');
        this.isphone = true;
    }

    handleNext(event)
    {
        console.log('Next clicked');
        this.dispatchEvent(new CustomEvent('section2', { bubbles: true, composed: true }));
    }
}
