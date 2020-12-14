import { LightningElement, track, api } from 'lwc';

export default class WmCommunityMain extends LightningElement {
    
    

    handleClick(event) {
        
        const block = event.target.dataset.block;
        console.log(block);
        this.template.querySelector(`[data-id = "${block}"]`).scrollIntoView({ behavior: 'smooth'});
      }

      navigatesection2(event)
      {
        
        this.template.querySelector(`[data-id = "2"]`).scrollIntoView({ behavior: 'smooth'});
      }

}