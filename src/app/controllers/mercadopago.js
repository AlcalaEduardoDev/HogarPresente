
const mercadopago = require ('mercadopago');

mercadopago.configure({
    acces_tokken:'TEST-7810597092115079-111103-151a4c107d3a4b24740f26b92f2edeec-244729951'
  });

export class Mercadopago {

    async mercadopago({request}){
        let preference ={
        items:[
            {
                title:'cursoTest',
                unit_price: 1500,
                quantity: 1,
            }
        ]        
    };

    const res = await mercadopago.preference.create(preference);
    return res
}
}
module.exports = mercadopago;
