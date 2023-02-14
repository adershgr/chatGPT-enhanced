// 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
const { Configuration, OpenAIApi } = require("openai");
const express = require('express')

const configuration = new Configuration({
    organization: "org-DVtlZsBMRFesGuTlDmP6SV4F",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);


// const response = await openai.listEngines();


//creat ea express api which will call this function

const app = express();
const port = 3080;

app.post('/', async (req,res)=>{
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
      });
      console.log(response.data.choices[0].text)

 res.json({
    data : response.data
 })
})

app.listen( port, ()=>{
console.log(`example app is listening at http://localhost:${port}`)
});

