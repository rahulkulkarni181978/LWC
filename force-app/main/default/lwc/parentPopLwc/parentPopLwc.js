import { LightningElement, track, api } from 'lwc';

export default class ParentPopLwc extends LightningElement {

    @track isShow;

    handleClick(event)
    {
        this.isShow = true;
    }

    @api
    buttonClosed(event)
    {
        this.asyncCall().then((result) => this.isShow = event.detail);
        //this.isShow = event.detail;

       
    }

   async asyncCall()
   {
  console.log('calling');
  const result = await this.resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
   }

  resolveAfter2Seconds() {
  console.log('In resolveAfter2Seconds');
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

}