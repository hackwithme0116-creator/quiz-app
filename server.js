// server.js
app.post('/api/payment-webhook', (req,res)=>{
   // Validate the provider's signature & payload
   const {userId, amount, status} = req.body;
   if(status === 'SUCCESS' && amount === 1){
       db.setPaid(userId,true);
   }
   res.sendStatus(200);
});

app.get('/api/check-paid/:userId', async (req,res)=>{
   const isPaid = await db.isPaid(req.params.userId);
   res.json({paid: !!isPaid});
});
